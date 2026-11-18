const fs = require("fs");

const source = fs.readFileSync("products.js", "utf8");

const products = [...source.matchAll(
  /\{[\s\S]*?\bid\s*:\s*"([^"]+)"[\s\S]*?\bcat\s*:\s*"hoodies"[\s\S]*?\bname\s*:\s*"([^"]+)"[\s\S]*?\bimgs\s*:\s*\[([\s\S]*?)\]/g
)];

console.log("Hoodie products found:", products.length);
console.log("Displaying all hoodie products:");

products.forEach((p) => {
  const images = [...p[3].matchAll(/"([^"]+)"/g)].map(x => x[1]);

  console.log("\n" + p[1] + " | " + p[2]);

  images.forEach(img => console.log("  " + img));
});
