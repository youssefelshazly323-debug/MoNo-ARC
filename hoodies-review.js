
const fs = require("fs");
const path = require("path");

const root = process.cwd();
const folder = path.join(root, "images/products/hoodies");

const files = fs.readdirSync(folder)
  .filter(f => /\.(webp|jpe?g|png)$/i.test(f))
  .sort();

const source = fs.readFileSync(
  path.join(root, "products.js"),
  "utf8"
);

const products = [...source.matchAll(
  /\{[\s\S]*?\bid\s*:\s*"([^"]+)"[\s\S]*?\bcat\s*:\s*"hoodies"[\s\S]*?\bname\s*:\s*"([^"]+)"[\s\S]*?\bimgs\s*:\s*\[([\s\S]*?)\]/g
)].map(p => ({
  id: p[1],
  name: p[2],
  images: [...p[3].matchAll(/"([^"]+)"/g)]
    .map(x => x[1])
}));

const images = files.map((file, index) => ({
  number: index + 1,
  file,
  path: "images/products/hoodies/" + file
}));

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>MoNo ARC - Hoodie Review</title>

<style>
*{box-sizing:border-box}
body{
  margin:0;padding:20px;
  background:#171717;color:white;
  font-family:Arial,sans-serif
}
header{
  position:sticky;top:0;z-index:5;
  background:#222;padding:15px;
  border-radius:10px;margin-bottom:20px
}
h1{margin:0 0 12px}
select,button{
  padding:11px;border:0;border-radius:6px;
  font-size:14px;cursor:pointer
}
select{width:100%;margin:10px 0}
button{background:#c69b54;color:#171717;font-weight:bold}
button:disabled{opacity:.4}
.controls{
  display:flex;gap:8px;flex-wrap:wrap;margin-top:10px
}
#current{
  background:#292929;padding:15px;
  border-radius:10px;margin-bottom:20px
}
#currentImages,.gallery{
  display:grid;
  grid-template-columns:repeat(auto-fill,minmax(150px,1fr));
  gap:12px;margin-top:12px
}
.card{
  background:#292929;padding:9px;
  border-radius:8px;min-width:0;
  border:2px solid transparent;
  cursor:pointer
}
.card.selected{border-color:#55c987}
.card img{
  width:100%;height:180px;
  object-fit:contain;background:#eee;
  border-radius:5px
}
.number{font-weight:bold;margin-top:8px}
.filename{
  color:#bbb;font-size:11px;
  overflow-wrap:anywhere;margin-top:5px
}
.status{color:#55c987;font-size:12px;margin-top:6px}
#message{color:#55c987;margin-top:10px}
.section-title{margin-top:25px}
.small{font-size:12px;color:#aaa}
@media(max-width:600px){
  body{padding:10px}
  #currentImages,.gallery{
    grid-template-columns:repeat(2,minmax(0,1fr))
  }
}
</style>
</head>

<body>

<header>
  <h1>MoNo ARC - Hoodie Review</h1>
  <div class="small">
    Product <span id="position">1</span> of ${products.length}
    | ${images.length} available images
  </div>

  <select id="productSelect"></select>

  <div class="controls">
    <button id="previous">Previous</button>
    <button id="next">Next</button>
    <button id="clear">Clear selection</button>
    <button id="export">Export JSON</button>
  </div>

  <div id="message"></div>
</header>

<section id="current">
  <h2 id="productName"></h2>
  <div class="small">Currently assigned images:</div>
  <div id="currentImages"></div>

  <h3>Selected replacement images</h3>
  <div id="selectedCount">0 selected</div>
</section>

<h2 class="section-title">All Hoodie Images</h2>
<p class="small">
  Click an image to select or unselect it for the current product.
  Green border means selected.
</p>

<div id="gallery" class="gallery"></div>

<script>
const products = ${JSON.stringify(products)};
const images = ${JSON.stringify(images)};

let currentIndex = 0;

const selections = JSON.parse(
  localStorage.getItem("monoHoodieSelections") || "{}"
);

const select = document.getElementById("productSelect");
const gallery = document.getElementById("gallery");
const currentImages = document.getElementById("currentImages");
const message = document.getElementById("message");

function imageUrl(p) {
  return "/" + p.split("/").map(encodeURIComponent).join("/");
}

products.forEach((product, index) => {
  const option = document.createElement("option");
  option.value = index;
  option.textContent = product.name + " (" + product.id + ")";
  select.appendChild(option);
});

function saveLocal() {
  localStorage.setItem(
    "monoHoodieSelections",
    JSON.stringify(selections)
  );
}

function makeCard(image, selected, onClick) {
  const card = document.createElement("div");
  card.className = "card" + (selected ? " selected" : "");

  const img = document.createElement("img");
  img.src = imageUrl(image.path);
  img.loading = "lazy";

  const number = document.createElement("div");
  number.className = "number";
  number.textContent = "#" + image.number;

  const filename = document.createElement("div");
  filename.className = "filename";
  filename.textContent = image.file;

  card.append(img, number, filename);

  if (selected) {
    const status = document.createElement("div");
    status.className = "status";
    status.textContent = "✓ SELECTED";
    card.appendChild(status);
  }

  card.addEventListener("click", onClick);
  return card;
}

function render() {
  const product = products[currentIndex];
  const selected = selections[product.id] || [];

  select.value = currentIndex;
  document.getElementById("position").textContent =
    currentIndex + 1;

  document.getElementById("productName").textContent =
    product.name + " (" + product.id + ")";

  document.getElementById("selectedCount").textContent =
    selected.length + " selected";

  document.getElementById("previous").disabled =
    currentIndex === 0;

  document.getElementById("next").disabled =
    currentIndex === products.length - 1;

  currentImages.innerHTML = "";

  if (product.images.length === 0) {
    currentImages.textContent = "No current images";
  }

  product.images.forEach((p, index) => {
    const card = document.createElement("div");
    card.className = "card";

    const img = document.createElement("img");
    img.src = imageUrl(p);

    const name = document.createElement("div");
    name.className = "filename";
    name.textContent = "Current image " + (index + 1) + ": " + p;

    card.append(img, name);
    currentImages.appendChild(card);
  });

  gallery.innerHTML = "";

  images.forEach(image => {
    const isSelected = selected.includes(image.path);

    const card = makeCard(image, isSelected, () => {
      const current = selections[product.id] || [];
      const exists = current.includes(image.path);

      selections[product.id] = exists
        ? current.filter(p => p !== image.path)
        : [...current, image.path];

      saveLocal();
      render();
    });

    gallery.appendChild(card);
  });

  message.textContent =
    "Selections are saved in this browser.";
}

select.addEventListener("change", () => {
  currentIndex = Number(select.value);
  render();
});

document.getElementById("previous").onclick = () => {
  if (currentIndex > 0) {
    currentIndex--;
    render();
  }
};

document.getElementById("next").onclick = () => {
  if (currentIndex < products.length - 1) {
    currentIndex++;
    render();
  }
};

document.getElementById("clear").onclick = () => {
  const product = products[currentIndex];

  if (confirm("Clear selected images for " + product.name + "?")) {
    delete selections[product.id];
    saveLocal();
    render();
  }
};

document.getElementById("export").onclick = () => {
  const output = {
    project: "MoNo ARC",
    type: "Hoodie image review",
    selections
  };

  const blob = new Blob(
    [JSON.stringify(output, null, 2)],
    {type: "application/json"}
  );

  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.download = "hoodie-image-selections.json";
  link.click();

  URL.revokeObjectURL(url);
  message.textContent = "JSON export requested.";
};

render();
</script>

</body>
</html>`;

fs.writeFileSync(
  path.join(folder, "hoodies-review.html"),
  html
);

console.log("Hoodie review page created!");
console.log("Products:", products.length);
console.log("Images:", images.length);
console.log(
  "Open: http://127.0.0.1:8765/images/products/hoodies/hoodies-review.html"
);
console.log("Your products.js has NOT been modified.");
