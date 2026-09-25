"use client";

/* eslint-disable react-hooks/immutability -- three.js scenes update buffer
   attributes imperatively inside useFrame; this is the standard R3F pattern. */

import { useMemo, useRef, useState } from "react";
import { Canvas, useFrame, type ThreeEvent } from "@react-three/fiber";
import * as THREE from "three";

export interface CoreNode {
  id: string;
  label: string;
  section: string;
  blurb: string;
  color: string;
}

export const CORE_NODES: CoreNode[] = [
  { id: "llm", label: "LLM", section: "#skills", blurb: "OpenAI · Anthropic · Gemini · Hugging Face — production LLM integrations.", color: "#d8ff63" },
  { id: "rag", label: "RAG", section: "#case-docqa", blurb: "LlamaIndex pipelines + Pinecone vector search over complex documents.", color: "#22d3ee" },
  { id: "agents", label: "Agents", section: "#case-nexus", blurb: "CrewAI + LangChain multi-agent systems with model routing & memory.", color: "#a78bfa" },
  { id: "automation", label: "Automation", section: "#automation", blurb: "n8n + Zapier + LLM pipelines running real business workflows.", color: "#34d399" },
  { id: "apis", label: "APIs", section: "#fullstack", blurb: "Node.js · Express · Flask · GraphQL — secure, OWASP-aligned backends.", color: "#f472b6" },
  { id: "fullstack", label: "Full Stack", section: "#fullstack", blurb: "React · Next.js · TypeScript — 10+ shipped apps, 4+ years.", color: "#fbbf24" },
  { id: "cloud", label: "Cloud", section: "#experience", blurb: "AWS Certified · Docker · CI/CD — from code to production.", color: "#d8ff63" },
  { id: "security", label: "Security", section: "#education", blurb: "MSc Cybersecurity — AI/agent security & adversarial robustness.", color: "#f87171" },
];

const RADIUS = 4.3;

// Shared line material (module singleton — no per-render allocation).
const lineMaterial = new THREE.LineBasicMaterial({
  color: "#d8ff63",
  transparent: true,
  opacity: 0.28,
});

// Deterministic PRNG so particle fields are stable across renders.
function mulberry32(seed: number) {
  let a = seed >>> 0;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function Core() {
  const core = useRef<THREE.Mesh>(null);
  const shell = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (core.current) {
      core.current.rotation.y = t * 0.18;
      core.current.rotation.x = Math.sin(t * 0.25) * 0.25;
    }
    if (shell.current) {
      shell.current.rotation.y = -t * 0.08;
      shell.current.rotation.z = t * 0.05;
    }
  });
  return (
    <group>
      <mesh ref={core}>
        <icosahedronGeometry args={[1.35, 1]} />
        <meshStandardMaterial color="#10180e" emissive="#38561a" emissiveIntensity={0.55} roughness={0.3} metalness={0.7} flatShading />
      </mesh>
      <mesh ref={shell} scale={1.9}>
        <icosahedronGeometry args={[1.35, 1]} />
        <meshBasicMaterial color="#d8ff63" wireframe transparent opacity={0.14} />
      </mesh>
      <mesh scale={2.7}>
        <sphereGeometry args={[1.35, 32, 32]} />
        <meshBasicMaterial color="#d8ff63" transparent opacity={0.04} side={THREE.BackSide} />
      </mesh>
      <pointLight intensity={30} distance={20} color="#d8ff63" />
    </group>
  );
}

function NodeField({
  activeId,
  onHover,
  onSelect,
  paused,
}: {
  activeId: string | null;
  onHover: (id: string | null) => void;
  onSelect: (n: CoreNode) => void;
  paused: boolean;
}) {
  const group = useRef<THREE.Group>(null);
  const lineRef = useRef<THREE.LineSegments>(null);
  const geom = useMemo(() => {
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(new Float32Array(CORE_NODES.length * 6), 3));
    return g;
  }, []);

  const angles = useMemo(
    () => CORE_NODES.map((_, i) => ({ a: (i / CORE_NODES.length) * Math.PI * 2, y: i % 2 === 0 ? 1.1 : -1.1, speed: 0.1 + (i % 3) * 0.035 })),
    []
  );

  useFrame((state) => {
    const t = paused ? 0 : state.clock.elapsedTime;
    const pos = geom.attributes.position as THREE.BufferAttribute;
    const arr = pos.array as Float32Array;
    CORE_NODES.forEach((_, i) => {
      const { a, y, speed } = angles[i];
      const ang = a + t * speed;
      const x = Math.cos(ang) * RADIUS;
      const z = Math.sin(ang) * RADIUS;
      const yy = y + Math.sin(t * 0.7 + i) * 0.35;
      arr[i * 6] = 0; arr[i * 6 + 1] = 0; arr[i * 6 + 2] = 0;
      arr[i * 6 + 3] = x; arr[i * 6 + 4] = yy; arr[i * 6 + 5] = z;
      const mesh = group.current?.children[i] as THREE.Mesh | undefined;
      if (mesh) mesh.position.set(x, yy, z);
    });
    pos.needsUpdate = true;
    if (group.current) {
      group.current.rotation.y = state.pointer.x * 0.18;
      group.current.rotation.x = -state.pointer.y * 0.12;
    }
  });

  return (
    <>
      {/* pulsing connections core → nodes */}
      <lineSegments ref={lineRef} geometry={geom} material={lineMaterial} />
      <group ref={group}>
        {CORE_NODES.map((n) => {
          const isActive = activeId === n.id;
          return (
            <mesh
              key={n.id}
              onPointerOver={(e: ThreeEvent<PointerEvent>) => {
                e.stopPropagation();
                onHover(n.id);
                document.body.style.cursor = "pointer";
              }}
              onPointerOut={() => {
                onHover(null);
                document.body.style.cursor = "auto";
              }}
              onClick={(e: ThreeEvent<MouseEvent>) => {
                e.stopPropagation();
                onSelect(n);
              }}
            >
              <sphereGeometry args={[isActive ? 0.34 : 0.24, 24, 24]} />
              <meshStandardMaterial
                color="#0b0e0d"
                emissive={n.color}
                emissiveIntensity={isActive ? 2.4 : 1.1}
                roughness={0.4}
                metalness={0.2}
              />
            </mesh>
          );
        })}
      </group>
    </>
  );
}

function Particles({ count }: { count: number }) {
  const ref = useRef<THREE.Points>(null);
  const { positions, seeds } = useMemo(() => {
    const rand = mulberry32(1337 + count);
    const positions = new Float32Array(count * 3);
    const seeds = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      const r = 3 + rand() * 7;
      const th = rand() * Math.PI * 2;
      const ph = Math.acos(2 * rand() - 1);
      positions[i * 3] = r * Math.sin(ph) * Math.cos(th);
      positions[i * 3 + 1] = r * Math.sin(ph) * Math.sin(th) * 0.6;
      positions[i * 3 + 2] = r * Math.cos(ph);
      seeds[i] = rand() * 100;
    }
    return { positions, seeds };
  }, [count]);
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    ref.current.rotation.y = t * 0.02;
    ref.current.position.y = Math.sin(t * 0.3) * 0.2;
    void seeds;
  });
  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#d8ff63" size={0.045} transparent opacity={0.65} sizeAttenuation depthWrite={false} />
    </points>
  );
}

export function AiCoreCanvas({
  activeId,
  onHover,
  onSelect,
  paused,
  compact,
}: {
  activeId: string | null;
  onHover: (id: string | null) => void;
  onSelect: (n: CoreNode) => void;
  paused: boolean;
  compact: boolean;
}) {
  const [failed, setFailed] = useState(false);
  if (failed) return <CoreFallback />;
  return (
    <Canvas
      dpr={compact ? [1, 1.25] : [1, 1.75]}
      camera={{ position: [0, 0.6, 11], fov: 45 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      onCreated={({ gl }) => {
        if (!gl.getContext()) setFailed(true);
      }}
      onError={() => setFailed(true)}
      aria-label="Interactive 3D visualization of Harmanpreet's AI agent system. Decorative; all information is available in text below."
      role="img"
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1.1} color="#e0f2fe" />
      <Core />
      <NodeField activeId={activeId} onHover={onHover} onSelect={onSelect} paused={paused} />
      <Particles count={compact ? 50 : 150} />
    </Canvas>
  );
}

export function CoreFallback() {
  return (
    <div className="flex h-full w-full items-center justify-center" aria-hidden>
      <div className="relative h-64 w-64">
        <div className="absolute inset-0 rounded-full bg-[#d8ff63]/15 blur-3xl" />
        <div className="absolute inset-8 rounded-full border border-[#d8ff63]/35" />
        <div className="absolute inset-16 rounded-full border border-white/15" />
        <div className="absolute inset-24 rounded-full bg-[#d8ff63]" />
      </div>
    </div>
  );
}
