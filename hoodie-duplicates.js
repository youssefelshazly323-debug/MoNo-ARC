const fs = require("fs");
const source = fs.readFileSync("products.js", "utf8");

const products = [...source.matchAll(
  /\{[\s\S]*?\bid\s*:\s*"([^"]+)"[\s\S]*?\bcat\s*:\s*"hoodies"[\s\S]*?\bname\s*:\s*"([^"]+)"[\s\S]*?\bimgs\s*:\s*\[([\s\S]*?)\]/g
)];

const usage = new Map();

for (const p of products) {
  const images = [...p[3].matchAll(/"([^"]+)"/g)].map(x => x[1]);

  for (const img of images) {
    if (!usage.has(img)) usage.set(img, []);
    usage.get(img).push(`${p[2]} (${p[1]})`);
  }
}

console.log("\n===== IMAGES USED BY MORE THAN ONE PRODUCT =====");

for (const [img, owners] of usage) {
  if (owners.length > 1) {
    console.log("\nIMAGE:", img);
    owners.forEach(owner => console.log("  - " + owner));
  }
}

console.log("\n===== SUMMARY =====");
console.log("Products:", products.length);
console.log("Unique image paths:", usage.size);
console.log("Shared image paths:", [...usage.values()].filter(x => x.length > 1).length);
