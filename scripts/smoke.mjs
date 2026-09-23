// Smoke test: verifies every critical route + verified-content markers.
// Usage: 1) `npm run start -- --port 4318`  2) `npm run smoke -- http://localhost:4318`
const base = process.argv[2] || "http://localhost:4318";

const routes = ["/", "/resume", "/robots.txt", "/sitemap.xml", "/opengraph-image"];
const mustContain = ["Harmanpreet", "Nexus AI", "case-nexus", "contact"];
const mustNotContain = ["lorem", "TODO"];

let failed = 0;
const home = await fetch(base + "/").then((r) => {
  if (!r.ok) {
    console.error(`FAIL / -> ${r.status}`);
    failed++;
  }
  return r.text();
});
for (const m of mustContain) {
  if (!home.toLowerCase().includes(m.toLowerCase())) {
    console.error(`FAIL / missing "${m}"`);
    failed++;
  }
}
for (const m of mustNotContain) {
  if (home.includes(m)) {
    console.error(`FAIL / leaked placeholder "${m}"`);
    failed++;
  }
}
for (const r of routes.slice(1)) {
  const res = await fetch(base + r);
  console.log(`${res.ok ? "PASS" : "FAIL"} ${r} -> ${res.status}`);
  if (!res.ok) failed++;
}
console.log(failed === 0 ? "SMOKE: all green" : `SMOKE: ${failed} failure(s)`);
process.exit(failed === 0 ? 0 : 1);
