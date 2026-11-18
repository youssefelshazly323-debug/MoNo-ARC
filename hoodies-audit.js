const fs = require("fs");
const path = require("path");
const http = require("http");

const root = process.cwd();
const folder = path.join(root, "images/products/hoodies");
const files = fs.readdirSync(folder)
  .filter(f => /\.(webp|jpe?g|png)$/i.test(f))
  .sort();

const source = fs.readFileSync("products.js", "utf8");
const products = [...source.matchAll(
  /\{[\s\S]*?\bid\s*:\s*"([^"]+)"[\s\S]*?\bcat\s*:\s*"hoodies"[\s\S]*?\bname\s*:\s*"([^"]+)"[\s\S]*?\bimgs\s*:\s*\[([\s\S]*?)\]/g
)].map(p => ({
  id: p[1],
  name: p[2],
  images: [...p[3].matchAll(/"([^"]+)"/g)].map(x => x[1])
}));

const data = files.map((file, i) => {
  const full = "images/products/hoodies/" + file;
  return {
    number: i + 1,
    file,
    path: full,
    usedBy: products.filter(p => p.images.includes(full))
      .map(p => p.name)
  };
});

const html = `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>MoNo ARC - Hoodie Image Audit</title>
<style>
body{background:#171717;color:white;font-family:Arial;padding:20px}
h1{text-align:center}
#summary{background:#292929;padding:15px;border-radius:8px;margin-bottom:20px}
#grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:14px}
.item{background:#292929;padding:10px;border-radius:8px;min-width:0}
img{width:100%;height:210px;object-fit:contain;background:#eee}
.number{font-size:20px;font-weight:bold;margin:8px 0}
.filename{font-size:11px;overflow-wrap:anywhere;color:#bbb}
.used{font-size:12px;color:#9ed6a5;margin-top:8px}
.unused{color:#ffbb77}
.similar{font-size:12px;color:#ffd479;margin-top:8px}
@media(max-width:900px){#grid{grid-template-columns:repeat(2,1fr)}}
</style>
</head>
<body>
<h1>MoNo ARC - Hoodie Image Audit</h1>
<div id="summary">Loading image analysis...</div>
<div id="grid"></div>
<script>
const data = ${JSON.stringify(data)};
const grid = document.getElementById("grid");
const hashes = [];

function hashImage(img) {
  const canvas = document.createElement("canvas");
  canvas.width = 8;
  canvas.height = 8;
  const ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0, 8, 8);
  const pixels = ctx.getImageData(0, 0, 8, 8).data;
  const gray = [];
  for(let i=0;i<64;i++){
    const j=i*4;
    gray.push((pixels[j]+pixels[j+1]+pixels[j+2])/3);
  }
  const avg = gray.reduce((a,b)=>a+b,0)/64;
  return gray.map(v=>v>=avg?1:0).join("");
}

function distance(a,b){
  let n=0;
  for(let i=0;i<64;i++) if(a[i]!==b[i]) n++;
  return n;
}

async function analyze(item){
  return new Promise(resolve=>{
    const img = new Image();
    img.onload=()=>{
      try {
        const hash=hashImage(img);
        hashes.push({number:item.number,hash});
        resolve({ok:true});
      } catch(e) { resolve({ok:false}); }
    };
    img.onerror=()=>resolve({ok:false});
    img.src="/" + item.path;
  });
}

async function run(){
  let loaded=0;
  for(const item of data){
    const result=await analyze(item);
    if(result.ok) loaded++;
  }

  const duplicates = [];
  for(let i=0;i<hashes.length;i++){
    for(let j=i+1;j<hashes.length;j++){
      const d=distance(hashes[i].hash,hashes[j].hash);
      if(d<=7) duplicates.push({
        a:hashes[i].number,b:hashes[j].number,d
      });
    }
  }

  for(const item of data){
    const related=duplicates.filter(x=>x.a===item.number||x.b===item.number);
    const card=document.createElement("div");
    card.className="item";
    const img=document.createElement("img");
    img.src="/"+item.path;
    img.loading="lazy";
    const number=document.createElement("div");
    number.className="number";
    number.textContent="#"+item.number;
    const filename=document.createElement("div");
    filename.className="filename";
    filename.textContent=item.file;
    const used=document.createElement("div");
    used.className=item.usedBy.length?"used":"used unused";
    used.textContent=item.usedBy.length?
      "Used by: "+item.usedBy.join(", "):"NOT USED BY ANY HOODIE";
    card.append(img,number,filename,used);

    if(related.length){
      const sim=document.createElement("div");
      sim.className="similar";
      sim.textContent="Visually similar to: "+related.map(x=>
        "#"+(x.a===item.number?x.b:x.a)+" (difference "+x.d+"/64)"
      ).join(", ");
      card.append(sim);
    }
    grid.append(card);
  }

  document.getElementById("summary").textContent=
    "Images: "+data.length+
    " | Products: ${products.length}"+
    " | Successfully analyzed: "+loaded+
    " | Similar image pairs: "+duplicates.length+
    " | Images not used by hoodie products: "+
    data.filter(x=>!x.usedBy.length).length;
}
run();
</script>
</body>
</html>`;

fs.writeFileSync(path.join(folder,"hoodies-audit.html"),html);

const types = {
  ".html":"text/html",
  ".js":"text/javascript",
  ".css":"text/css",
  ".webp":"image/webp",
  ".jpg":"image/jpeg",
  ".jpeg":"image/jpeg",
  ".png":"image/png"
};

http.createServer((req,res)=>{
  let url;
  try { url=decodeURIComponent(req.url.split("?")[0]); }
  catch { res.writeHead(400); return res.end(); }

  const target=path.resolve(root,"."+url);
  if(target!==root && !target.startsWith(root+path.sep)){
    res.writeHead(403); return res.end("Forbidden");
  }
  fs.readFile(target,(err,content)=>{
    if(err){res.writeHead(404);return res.end("Not found");}
    res.writeHead(200,{"Content-Type":types[path.extname(target).toLowerCase()]||"application/octet-stream"});
    res.end(content);
  });
}).listen(8765,"127.0.0.1",()=>{
  console.log("Hoodie audit ready!");
  console.log("Open: http://127.0.0.1:8765/images/products/hoodies/hoodies-audit.html");
  console.log("Keep this PowerShell window open while using the report.");
});
