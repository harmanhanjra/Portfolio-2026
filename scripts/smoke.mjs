const base = process.argv[2] || "http://localhost:4318";

const routes = ["/", "/resume", "/robots.txt", "/sitemap.xml", "/opengraph-image"];
const mustContain = ["Harmanpreet", "Nexus AI", "Selected work", "Experience", "Contact", "95%"];
const mustNotContain = ["AI CORE ONLINE", "Recruiter View", "lorem", "TODO"];

let failed = 0;
const home = await fetch(base + "/").then((response) => {
  if (!response.ok) {
    console.error(`FAIL / -> ${response.status}`);
    failed++;
  }
  return response.text();
});

for (const marker of mustContain) {
  if (!home.toLowerCase().includes(marker.toLowerCase())) {
    console.error(`FAIL / missing "${marker}"`);
    failed++;
  }
}

for (const marker of mustNotContain) {
  if (home.includes(marker)) {
    console.error(`FAIL / contains removed pattern "${marker}"`);
    failed++;
  }
}

for (const route of routes.slice(1)) {
  const response = await fetch(base + route);
  console.log(`${response.ok ? "PASS" : "FAIL"} ${route} -> ${response.status}`);
  if (!response.ok) failed++;
}

console.log(failed === 0 ? "SMOKE: all green" : `SMOKE: ${failed} failure(s)`);
process.exit(failed === 0 ? 0 : 1);
