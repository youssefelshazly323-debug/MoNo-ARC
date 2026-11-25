// apply-selections.js
// Usage: node apply-selections.js hoodie-image-selections.json
const fs = require("fs");

const file = process.argv[2];
if (!file) { console.error("Usage: node apply-selections.js <selections.json>"); process.exit(1); }

const sel = JSON.parse(fs.readFileSync(file, "utf8")).selections;
let code = fs.readFileSync("products.js", "utf8");
let changed = 0, skipped = [];

for (const [id, paths] of Object.entries(sel)) {
  if (!paths.length) continue;

  // Find the product block that starts with this id
  const start = code.indexOf(`id:"${id}"`);
  if (start === -1) { skipped.push(id); continue; }

  // Find its imgs:[ ... ] array
  const imgsStart = code.indexOf("imgs:[", start);
  const imgsEnd = code.indexOf("]", imgsStart);
  if (imgsStart === -1 || imgsEnd === -1) { skipped.push(id); continue; }

  const list = paths.map(p => `  "${p}"`).join(",\n");
  code = code.slice(0, imgsStart) + `imgs:[\n${list}\n ` + code.slice(imgsEnd);
  changed++;
}

fs.writeFileSync("products.updated.js", code, "utf8");
console.log(`products.updated.js created (${changed} products updated).`);
if (skipped.length) console.log("Not found in products.js:", skipped.join(", "));
