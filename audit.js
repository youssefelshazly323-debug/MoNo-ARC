// audit.js - run from the project root
const fs = require("fs"), path = require("path"), vm = require("vm");

// Load products.js in a sandbox so we can read window.MONO_PRODUCTS
const code = fs.readFileSync("products.js", "utf8");
const sb = { window: {} };
vm.runInNewContext(code, sb);
const P = sb.window.MONO_PRODUCTS;
const ROOT = "images/products";

// Index every file that really exists on disk: basename -> [paths]
const disk = {}, allFiles = [];
(function walk(d) {
  for (const f of fs.readdirSync(d)) {
    const p = path.join(d, f);
    if (fs.statSync(p).isDirectory()) walk(p);
    else if (!f.endsWith(".html")) {
      const rel = p.split(path.sep).join("/");
      allFiles.push(rel);
      (disk[f] = disk[f] || []).push(rel);
    }
  }
})(ROOT);

// Categories whose images live in a different folder
const folderOf = { sweatpants: "pants", sets: "accessories" };
const usage = {}, report = [], fixes = {};

// Check every image path of every product
for (const p of P) {
  for (const img of p.imgs) {
    (usage[img] = usage[img] || []).push(p.id);
    if (!fs.existsSync(img)) {
      // File not found at this path: try to find it elsewhere on disk
      const base = path.basename(img);
      if (disk[base]?.length === 1) {
        fixes[img] = disk[base][0];
        report.push(`[FIXABLE] ${p.id}: ${img} -> ${disk[base][0]}`);
      } else report.push(`[MISSING] ${p.id}: ${img}`);
    } else {
      // File exists, but is it in the product's own category folder?
      const folder = img.split("/")[2], want = folderOf[p.cat] || p.cat;
      if (folder !== want) report.push(`[OTHER-CATEGORY] ${p.id} (${p.cat}) uses ${img}`);
    }
  }
}

// Images shared by 3+ products are probably placeholders
report.push("\n--- Placeholders: images used by more than 2 products ---");
Object.entries(usage).filter(([, v]) => v.length > 2)
  .sort((a, b) => b[1].length - a[1].length)
  .forEach(([k, v]) => report.push(`${v.length}x ${k}`));

// Products that share the same name
report.push("\n--- Duplicate product names ---");
const names = {};
P.forEach(p => (names[p.name.toLowerCase()] = names[p.name.toLowerCase()] || []).push(p.id));
Object.entries(names).filter(([, v]) => v.length > 1).forEach(([k, v]) => report.push(`${k}: ${v.join(", ")}`));

// Files on disk that no product uses
report.push("\n--- Orphan images (on disk but not used by any product) ---");
const used = new Set(Object.keys(usage));
allFiles.filter(f => !used.has(f)).forEach(f => report.push(f));

fs.writeFileSync("audit-report.txt", report.join("\n"), "utf8");
console.log(`Done. Issues written to audit-report.txt (${report.length} lines)`);

// Optional: write a corrected copy of products.js (original is never touched)
if (process.argv.includes("--fix-paths")) {
  let out = code;
  for (const [bad, good] of Object.entries(fixes)) out = out.split(`"${bad}"`).join(`"${good}"`);
  fs.writeFileSync("products.fixed.js", out, "utf8");
  console.log(`products.fixed.js created (${Object.keys(fixes).length} paths fixed). Review it, then replace products.js.`);
}
