const fs = require("fs");

const source = fs.readFileSync("products.js", "utf8");

const products = [...source.matchAll(
  /\{[\s\S]*?\bid\s*:\s*"([^"]+)"[\s\S]*?\bcat\s*:\s*"hoodies"[\s\S]*?\bname\s*:\s*"([^"]+)"[\s\S]*?\bimgs\s*:\s*\[([\s\S]*?)\]/g
)];

const escapeHtml = (s) => s.replace(/[&<>"']/g, c => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
}[c]));

const cards = products.map(p => {
  const images = [...p[3].matchAll(/"([^"]+)"/g)].map(x => x[1]);

  return `
    <section class="card">
      <h2>${escapeHtml(p[2])}</h2>
      <small>${escapeHtml(p[1])}</small>
      <div class="images">
        ${images.map(img => `
          <figure>
            <img src="${escapeHtml(img)}" loading="lazy">
            <figcaption>${escapeHtml(img)}</figcaption>
          </figure>
        `).join("")}
      </div>
    </section>`;
}).join("");

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>MoNo ARC - Hoodie Product Review</title>
<style>
body{font-family:Arial;background:#f2f2f2;margin:20px;color:#222}
h1{margin-bottom:5px}
.card{background:white;padding:18px;margin:18px 0;border-radius:10px}
small{color:#777}
.images{display:flex;flex-wrap:wrap;gap:15px;margin-top:15px}
figure{width:180px;margin:0}
img{width:180px;height:220px;object-fit:contain;background:#eee}
figcaption{font-size:11px;overflow-wrap:anywhere;margin-top:6px}
</style>
</head>
<body>
<h1>MoNo ARC - Hoodie Product Review</h1>
<p>Products: ${products.length}</p>
${cards}
</body>
</html>`;

fs.writeFileSync("hoodies-products-review.html", html);
console.log("Review gallery created for", products.length, "products.");
