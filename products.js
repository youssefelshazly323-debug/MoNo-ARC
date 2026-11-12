/* Shared Mono Arc catalogue for the standalone shop pages. */
(()=>{
const PRODUCTS = [
{id:"shadow-hoodie",cat:"hoodies",name:"Shadow Hoodie",price:1850,colour:"Onyx",imgs:["images/products/hoodies/freedom-black-hoodie-side.webp","images/products/hoodies/freedom-black-hoodie-front.webp"],
 lead:"A heavyweight hoodie with a deep hood and a drop shoulder, finished with the Mono Arc emblem at the chest.",
 details:["Boxy oversized fit","Double-layer hood","Tonal embroidered emblem","Ribbed cuffs and hem","Made in small batches"],
 fabric:"480 gsm brushed cotton fleece. Machine wash cold, inside out. Hang dry."},
{id:"arc-zip-hoodie",cat:"hoodies",name:"Arc Zip Hoodie",price:2100,colour:"Graphite",imgs:["images/products/hoodies/freedom-black-hoodie-side.webp","images/products/hoodies/freedom-black-hoodie-front.webp"],
 lead:"A full-zip silhouette with a structured collar and a matte metal pull. Built to layer.",
 details:["Relaxed fit","Matte gunmetal zip","Hidden side pockets","Back arc print","Brushed interior"],
 fabric:"460 gsm cotton blend fleece. Machine wash cold. Do not tumble dry."},
{id:"mono-tee",cat:"tees",name:"Mono Tee",price:750,colour:"Black",imgs:["images/products/tees/Basic Red Tee.webp"],
 lead:"A short sleeve tee in dense jersey. Clean neckline, long body, nothing you donâ€™t need.",
 details:["Boxy fit","Heavy jersey","Small emblem on the chest","Pre-washed for softness"],
 fabric:"240 gsm combed cotton. Machine wash cold. Low heat dry."},
{id:"eclipse-tee",cat:"tees",name:"Eclipse Tee",price:850,colour:"Steel",imgs:["images/products/tees/Basic Red Tee.webp"],
 lead:"A washed grey tee with an oversized back print of the emblem, faded at the edges.",
 details:["Oversized fit","Garment dyed","Large back graphic","Dropped shoulder"],
 fabric:"260 gsm garment dyed cotton. Machine wash cold, inside out."},
{id:"relaxed-pants",cat:"pants",name:"Relaxed Pants",price:1450,colour:"Onyx",imgs:["images/products/pants/sweatpants-black-side.webp","images/products/jeans/fandom-black-balloon-0.webp","images/products/pants/zoro-joggers-zams-2.webp"],
 lead:"A wide leg trouser in soft twill with a high waist and a clean drape.",
 details:["Relaxed wide leg","Elastic back waist","Side and back pockets","Pressed front crease"],
 fabric:"Heavy cotton twill. Machine wash cold. Iron on low if needed."},
{id:"tapered-pants",cat:"pants",name:"Tapered Pants",price:1550,colour:"Graphite",imgs:["images/products/pants/sweatpants-black-side.webp","images/products/jeans/fandom-black-balloon-0.webp","images/products/pants/zoro-joggers-zams-2.webp"],
 lead:"A tapered shape with articulated knees and a drawcord waist. Sharp enough to dress up.",
 details:["Tapered fit","Articulated knees","Drawcord waist","Zip pocket at the thigh"],
 fabric:"Stretch cotton twill. Machine wash cold. Hang dry."},
{id:"exclusive-naruto",cat:"hoodies",name:"Exclusive Naruto",price:1095,colour:"Black",sizes:["S","M","L","XL","XXL"],imgs:[
"images/products/hoodies/product-001.jpg",
"images/products/hoodies/product-002.jpg",
"images/products/hoodies/product-003.jpg",
"images/products/hoodies/product-004.jpg"],
 lead:"Anime-inspired hoodie featuring Naruto artwork.",
 details:["Available sizes: S, M, L, XL and XXL","Anime graphic design","Hoodie silhouette"],
 fabric:"Exact fabric composition and care details have not yet been verified."},
{id:"godspeed-knit",cat:"knitwear",name:"Godspeed Knit",price:1049,colour:"Navy Blue",sizes:["M","L","XL","XXL"],imgs:[
"images/products/knitwear/product-005.jpg",
"images/products/knitwear/product-006.jpg",
"images/products/knitwear/product-007.jpg"],
 lead:"A navy knit inspired by Killua's Godspeed technique from Hunter x Hunter.",
 details:["Relaxed unisex fit","Soft, warm knit","Sizes M, L, XL and XXL","Navy blue colour"],
 fabric:"Hand wash cold and lay flat to dry."},
{id:"ultimate-berserk-tee",cat:"tees",name:"Ultimate Berserk Tee",price:750,colour:"Black",sizes:["M","L","XL","XXL"],imgs:[
"images/products/tees/product-008.png",
"images/products/tees/product-009.png"],
 lead:"A Berserk-inspired graphic tee from the Fandom collection.",
 details:["Available sizes: M, L, XL and XXL","Graphic T-shirt","Black colour"],
 fabric:"Exact fabric composition and care details have not yet been verified."}
,{id:"ultimate-berserk-hoodie",cat:"hoodies",name:"Ultimate Berserk Hoodie",price:1049,colour:"Charcoal",sizes:["M","L","XL","XXL"],imgs:["images/products/accessories/NARUTO68.webp","images/products/accessories/Naruto vs Sasuke.webp"],
lead:"A limited Berserk hoodie with a heavyweight cotton build, bold artwork and detailed print inspired by Guts.",
details:["Heavyweight cotton","Embroidered and puff-print details","Relaxed oversized fit","Available sizes: M, L, XL and XXL"],
fabric:"Premium heavyweight cotton. Follow the garment care label."},
{id:"berserk-armor-tee",cat:"tees",name:"Berserk ARMOR Tee",price:750,colour:"Black",sizes:["M","L","XL","XXL"],imgs:[
"images/products/tees/product-013.png",
"images/products/tees/product-014.png",
"images/products/tees/product-015.png",
"images/products/tees/product-016.png"],
lead:"A dark Berserk graphic tee featuring Guts in the Berserker Armor.",
details:["Premium 100% cotton","Regular unisex fit","Available sizes: M, L, XL and XXL"],
fabric:"Machine wash cold inside out. Hang to dry and avoid ironing directly over the print."}
,{id:"eren-freedom",cat:"hoodies",name:"Eren Freedom",price:949,colour:"Black",sizes:["M","L","XL","XXL"],imgs:[
"images/products/hoodies/product-017.jpg",
"images/products/hoodies/product-018.jpg",
"images/products/hoodies/product-019.jpg",
"images/products/hoodies/product-020.jpg"],
lead:"An Attack on Titan hoodie inspired by Eren Yeager, made for a relaxed everyday fit.",
details:["Premium heavyweight fleece","Relaxed unisex fit","Oversized cut","Available sizes: M, L, XL and XXL"],
fabric:"Heavyweight cotton with high-density print. Wash cold inside out, hang to dry, and do not iron directly over the print."},
{id:"vinland-saga",cat:"sweatshirts",name:"Vinland Saga",price:949,colour:"Black",sizes:["M","L","XL","XXL"],imgs:[
"images/products/sweatshirts/product-021.jpg",
"images/products/sweatshirts/product-022.jpg"],
lead:"A Vinland Saga graphic layer inspired by the series.",
details:["Cotton construction","Available sizes: M, L, XL and XXL"],
fabric:"Care details should follow the garment label."},
{id:"geto-embroidery",cat:"hoodies",name:"Geto Embroidery",price:1049,colour:"Black",sizes:["M","L","XL","XXL"],imgs:[
"images/products/hoodies/product-023.jpg",
"images/products/hoodies/product-024.jpg",
"images/products/hoodies/product-025.jpg",
"images/products/hoodies/product-026.jpg"],
lead:"A Jujutsu Kaisen hoodie inspired by Suguru Geto, with red embroidery and detailed print.",
details:["100% heavyweight cotton","Oversized unisex fit","Red embroidery and print details","Available sizes: M, L, XL and XXL"],
fabric:"Wash cold inside out. Avoid ironing directly over the design."},
{id:"zoro-ashura-mode",cat:"tees",name:"Zoro Ashura Mode",price:750,colour:"Black",sizes:["M","L","XL","XXL"],imgs:["images/products/tees/Basic Red Tee.webp"],lead:"Zoro Ashura Mode from the current Fandom catalogue.",details:["Listed in the tees category","Sizes: M, L, XL, XXL","Product images and full specifications are not yet available for this listing"],fabric:"Check the garment label for fabric and care details."},
{id:"hisoka-tee",cat:"tees",name:"Hisoka Tee",price:750,colour:"Black",sizes:["S","M","L","XL","XXL"],imgs:["images/products/tees/Basic Red Tee.webp"],lead:"Hisoka Tee from the current Fandom catalogue.",details:["Listed in the tees category","Sizes: S, M, L, XL, XXL","Product images and full specifications are not yet available for this listing"],fabric:"Check the garment label for fabric and care details."},
{id:"igris-legendary",cat:"tees",name:"IGRIS Legendary",price:750,colour:"Black",sizes:["M","L","XL","XXL"],imgs:["images/products/tees/Basic Red Tee.webp"],lead:"IGRIS Legendary from the current Fandom catalogue.",details:["Listed in the tees category","Sizes: M, L, XL, XXL","Product images and full specifications are not yet available for this listing"],fabric:"Check the garment label for fabric and care details."},
{id:"kaiju-no-8",cat:"tees",name:"Kaiju No. 8",price:750,colour:"Black",sizes:["M","L","XL","XXL"],imgs:["images/products/tees/Basic Red Tee.webp"],lead:"Kaiju No. 8 from the current Fandom catalogue.",details:["Listed in the tees category","Sizes: M, L, XL, XXL","Product images and full specifications are not yet available for this listing"],fabric:"Check the garment label for fabric and care details."},
{id:"legendary-broly-tee",cat:"tees",name:"Legendary Broly Tee",price:750,colour:"Black",sizes:["M","L","XL","XXL"],imgs:["images/products/tees/Basic Red Tee.webp"],lead:"Legendary Broly Tee from the current Fandom catalogue.",details:["Listed in the tees category","Sizes: M, L, XL, XXL","Product images and full specifications are not yet available for this listing"],fabric:"Check the garment label for fabric and care details."},
{id:"kenpachi-zaraki",cat:"tees",name:"Kenpachi Zaraki",price:750,colour:"Black",sizes:["M","L","XL","XXL"],imgs:["images/products/tees/Basic Red Tee.webp"],lead:"Kenpachi Zaraki from the current Fandom catalogue.",details:["Listed in the tees category","Sizes: M, L, XL, XXL","Product images and full specifications are not yet available for this listing"],fabric:"Check the garment label for fabric and care details."},
{id:"green-gon",cat:"tees",name:"Green Gon",price:750,colour:"Black",sizes:["M","L","XL","XXL"],imgs:["images/products/hoodies/green-1.webp","images/products/hoodies/green-2.webp","images/products/hoodies/green-4.webp"],lead:"Green Gon from the current Fandom catalogue.",details:["Listed in the tees category","Sizes: M, L, XL, XXL","Product images and full specifications are not yet available for this listing"],fabric:"Check the garment label for fabric and care details."},
{id:"chainsaw-man-premium",cat:"tees",name:"Chainsaw Man Premium Edition",price:750,colour:"Black",sizes:["M","L","XL","XXL"],imgs:["images/products/tees/Basic Red Tee.webp"],lead:"Chainsaw Man Premium Edition from the current Fandom catalogue.",details:["Listed in the tees category","Sizes: M, L, XL, XXL","Product images and full specifications are not yet available for this listing"],fabric:"Check the garment label for fabric and care details."},
{id:"musashi-miyamoto-tee",cat:"tees",name:"Musashi Miyamoto",price:750,colour:"Black",sizes:["M","L","XL","XXL"],imgs:["images/products/accessories/Musashi Miyamoto.webp"],lead:"Musashi Miyamoto from the current Fandom catalogue.",details:["Listed in the tees category","Sizes: M, L, XL, XXL","Product images and full specifications are not yet available for this listing"],fabric:"Check the garment label for fabric and care details."},
{id:"yhwach-quincy-king",cat:"tees",name:"Yhwach Quincy King",price:750,colour:"Black",sizes:["M","L","XL","XXL"],imgs:["images/products/tees/Basic Red Tee.webp"],lead:"Yhwach Quincy King from the current Fandom catalogue.",details:["Listed in the tees category","Sizes: M, L, XL, XXL","Product images and full specifications are not yet available for this listing"],fabric:"Check the garment label for fabric and care details."},
{id:"black-tokyo-ghoul",cat:"tees",name:"Black Tokyo Ghoul",price:750,colour:"Black",sizes:["M","L","XL","XXL"],imgs:["images/products/tees/Basic Red Tee.webp"],lead:"Black Tokyo Ghoul from the current Fandom catalogue.",details:["Listed in the tees category","Sizes: M, L, XL, XXL","Product images and full specifications are not yet available for this listing"],fabric:"Check the garment label for fabric and care details."},
{id:"tanjiro-premium-tee",cat:"tees",name:"Tanjiro Premium Tee",price:750,colour:"Black",sizes:["M","L","XL"],imgs:["images/products/tees/Basic Red Tee.webp"],lead:"Tanjiro Premium Tee from the current Fandom catalogue.",details:["Listed in the tees category","Sizes: M, L, XL","Product images and full specifications are not yet available for this listing"],fabric:"Check the garment label for fabric and care details."},
{id:"sukuna-lava",cat:"tees",name:"Sukuna Lava",price:750,colour:"Black",sizes:["M","L","XL","XXL"],imgs:["images/products/tees/Basic Red Tee.webp"],lead:"Sukuna Lava from the current Fandom catalogue.",details:["Listed in the tees category","Sizes: M, L, XL, XXL","Product images and full specifications are not yet available for this listing"],fabric:"Check the garment label for fabric and care details."},
{id:"bleach-v1",cat:"tees",name:"Bleach V1",price:750,colour:"Black",sizes:["OVER M","OVER 1","OVER 2"],imgs:["images/products/accessories/BLEACH37.webp","images/products/accessories/BLEACH43.webp","images/products/accessories/BLEACH44_f4a01e33-5ffe-490b-a5b4-7f9a618cbb0c.webp"],lead:"Bleach V1 from the current Fandom catalogue.",details:["Listed in the tees category","Sizes: OVER M, OVER 1, OVER 2","Product images and full specifications are not yet available for this listing"],fabric:"Check the garment label for fabric and care details."},
{id:"berserk-v4",cat:"tees",name:"Berserk V4",price:750,colour:"Black",sizes:["M","L","XL","XXL"],imgs:["images/products/tees/Basic Red Tee.webp"],lead:"Berserk V4 from the current Fandom catalogue.",details:["Listed in the tees category","Sizes: M, L, XL, XXL","Product images and full specifications are not yet available for this listing"],fabric:"Check the garment label for fabric and care details."},
{id:"naruto-acid",cat:"tees",name:"Naruto Acid",price:750,colour:"Black",sizes:["M","L","XL","XXL"],imgs:["images/products/accessories/NARUTO68.webp","images/products/accessories/Naruto vs Sasuke.webp"],lead:"Naruto Acid from the current Fandom catalogue.",details:["Listed in the tees category","Sizes: M, L, XL, XXL","Product images and full specifications are not yet available for this listing"],fabric:"Check the garment label for fabric and care details."},
{id:"eren-yeager-v1",cat:"tees",name:"Eren Yeager V1",price:750,colour:"Black",sizes:["M","L","XL","2XL"],imgs:["images/products/tees/Basic Red Tee.webp"],lead:"Eren Yeager V1 from the current Fandom catalogue.",details:["Listed in the tees category","Sizes: M, L, XL, 2XL","Product images and full specifications are not yet available for this listing"],fabric:"Check the garment label for fabric and care details."},
{id:"shadow-monarch",cat:"tees",name:"Shadow Monarch",price:750,colour:"Black",sizes:["M","L","XL","XXL"],imgs:["images/products/tees/Basic Red Tee.webp"],lead:"Shadow Monarch from the current Fandom catalogue.",details:["Listed in the tees category","Sizes: M, L, XL, XXL","Product images and full specifications are not yet available for this listing"],fabric:"Check the garment label for fabric and care details."},
{id:"aki-hayakawa",cat:"tees",name:"Aki Hayakawa",price:750,colour:"Black",sizes:["M","L","XL","XXL"],imgs:["images/products/tees/Baki_08209954-5fa1-43f4-b508-26100920e4b9.webp","images/products/tees/Baki_4_4e83a602-d975-451e-b444-1fb012011f35.webp"],lead:"Aki Hayakawa from the current Fandom catalogue.",details:["Listed in the tees category","Sizes: M, L, XL, XXL","Product images and full specifications are not yet available for this listing"],fabric:"Check the garment label for fabric and care details."},
{id:"asta-red",cat:"tees",name:"Asta Red",price:750,colour:"Black",sizes:["OVER M","OVER 1","OVER 2"],imgs:["images/products/tees/Basic Red Tee.webp"],lead:"Asta Red from the current Fandom catalogue.",details:["Listed in the tees category","Sizes: OVER M, OVER 1, OVER 2","Product images and full specifications are not yet available for this listing"],fabric:"Check the garment label for fabric and care details."},
{id:"light-straight-pants-black",cat:"pants",name:"Light Straight Pants - Black",price:750,colour:"Black",sizes:["M","L","XL","XXL"],imgs:["images/products/jeans/fandom-light-blue-balloon-1.webp","images/products/jeans/fandom-light-blue-balloon-detail.webp"],lead:"Light Straight Pants - Black from the current Fandom catalogue.",details:["Listed in the pants category","Sizes: M, L, XL, XXL","Product images and full specifications are not yet available for this listing"],fabric:"Check the garment label for fabric and care details."},
{id:"light-straight-pants-gray",cat:"pants",name:"Light Straight Pants - Gray",price:680,colour:"Black",sizes:["M","L","XL","XXL"],imgs:["images/products/jeans/fandom-light-blue-balloon-1.webp","images/products/jeans/fandom-light-blue-balloon-detail.webp"],lead:"Light Straight Pants - Gray from the current Fandom catalogue.",details:["Listed in the pants category","Sizes: M, L, XL, XXL","Product images and full specifications are not yet available for this listing"],fabric:"Check the garment label for fabric and care details."},
{id:"light-straight-pants-brown",cat:"pants",name:"Light Straight Pants - Brown",price:680,colour:"Black",sizes:["M","L","XL","XXL"],imgs:["images/products/jeans/fandom-light-blue-balloon-1.webp","images/products/jeans/fandom-light-blue-balloon-detail.webp"],lead:"Light Straight Pants - Brown from the current Fandom catalogue.",details:["Listed in the pants category","Sizes: M, L, XL, XXL","Product images and full specifications are not yet available for this listing"],fabric:"Check the garment label for fabric and care details."},
{id:"utility-jogger-black",cat:"pants",name:"The Utility Jogger Gray",price:870,colour:"Gray",sizes:["M","L","XL","XXL"],imgs:["images/products/pants/demon-slayer-joggers-zams-1.webp","images/products/pants/demon-slayer-joggers-zams-2.webp","images/products/pants/zoro-joggers-zams-2.webp"],lead:"The Utility Jogger Gray from the current Fandom catalogue.",details:["Listed in the pants category","Sizes: M, L, XL, XXL","Product images and full specifications are not yet available for this listing"],fabric:"Check the garment label for fabric and care details."},
{id:"utility-jogger-silver",cat:"pants",name:"The Utility Jogger Silver",price:870,colour:"Silver",sizes:["M","L","XL","XXL"],imgs:["images/products/pants/demon-slayer-joggers-zams-1.webp","images/products/pants/demon-slayer-joggers-zams-2.webp","images/products/pants/zoro-joggers-zams-2.webp"],lead:"The Utility Jogger Silver from the current Fandom catalogue.",details:["Listed in the pants category","Sizes: M, L, XL, XXL","Product images and full specifications are not yet available for this listing"],fabric:"Check the garment label for fabric and care details."},
{id:"sweatpants-black",cat:"pants",name:"Sweatpants - Black",price:799,colour:"Black",sizes:["M","L","XL","XXL"],imgs:[
"images/products/pants/sweatpants-black-front.webp",
"images/products/pants/sweatpants-black-back.webp",
"images/products/pants/sweatpants-black-side.webp"],lead:"Sweatpants - Black from the current Fandom catalogue.",details:["Listed in the pants category","Sizes: M, L, XL, XXL"],fabric:"Check the garment label for fabric and care details."},
{id:"sweatpants-brown",cat:"pants",name:"Sweatpants - Brown",price:799,colour:"Black",sizes:["M","L","XL","XXL"],imgs:["images/products/pants/sweatpants-black-back.webp","images/products/pants/sweatpants-black-front.webp","images/products/pants/sweatpants-black-side.webp"],lead:"Sweatpants - Brown from the current Fandom catalogue.",details:["Listed in the pants category","Sizes: M, L, XL, XXL","Product images and full specifications are not yet available for this listing"],fabric:"Check the garment label for fabric and care details."},
{id:"naruto-straight-pants",cat:"pants",name:"Naruto Straight Pants",price:680,colour:"Black",sizes:["M","L","XL","XXL"],imgs:["images/products/accessories/NARUTO68.webp","images/products/accessories/Naruto vs Sasuke.webp"],lead:"Naruto Straight Pants from the current Fandom catalogue.",details:["Listed in the pants category","Sizes: M, L, XL, XXL","Product images and full specifications are not yet available for this listing"],fabric:"Check the garment label for fabric and care details."},
{id:"sasuke-straight-pants",cat:"pants",name:"Sasuke Straight Pants",price:680,colour:"Black",sizes:["M","L","XL","XXL"],imgs:["images/products/accessories/Naruto vs Sasuke.webp"],lead:"Sasuke Straight Pants from the current Fandom catalogue.",details:["Listed in the pants category","Sizes: M, L, XL, XXL","Product images and full specifications are not yet available for this listing"],fabric:"Check the garment label for fabric and care details."},
{id:"demon-slayer-pants",cat:"pants",name:"Demon Slayer Pants",price:750,colour:"Black",sizes:["M","L","XL","XXL"],imgs:["images/products/pants/demon-slayer-joggers-zams-1.webp","images/products/pants/demon-slayer-joggers-zams-2.webp"],lead:"Demon Slayer Pants from the current Fandom catalogue.",details:["Listed in the pants category","Sizes: M, L, XL, XXL","Product images and full specifications are not yet available for this listing"],fabric:"Check the garment label for fabric and care details."},
{id:"zoro-pants",cat:"pants",name:"Zoro Pants",price:750,colour:"Black",sizes:["M","L","XL","XXL"],imgs:["images/products/pants/zoro-joggers-zams-2.webp","images/products/pants/zoro-joggers-zams-4-157115_76ef4447-807d-4317-bba7-69c34f3d49e9.webp"],lead:"Zoro Pants from the current Fandom catalogue.",details:["Listed in the pants category","Sizes: M, L, XL, XXL","Product images and full specifications are not yet available for this listing"],fabric:"Check the garment label for fabric and care details."},
{id:"sweat-pants-sasuke",cat:"pants",name:"Sweat Pants Sasuke",price:450,colour:"Black",sizes:["M","L","XL","XXL"],imgs:["images/products/accessories/Naruto vs Sasuke.webp","images/products/pants/sweatpants-black-back.webp","images/products/pants/sweatpants-black-front.webp"],lead:"Sweat Pants Sasuke from the current Fandom catalogue.",details:["Listed in the pants category","Sizes: M, L, XL, XXL","Product images and full specifications are not yet available for this listing"],fabric:"Check the garment label for fabric and care details."},
{id:"chains-pants",cat:"pants",name:"Chains Pants",price:849,colour:"Black",sizes:["M","L","XL","XXL"],imgs:["images/products/jeans/fandom-balloon-jeans-2.webp","images/products/pants/sweatpants-black-side.webp","images/products/jeans/fandom-black-balloon-0.webp"],lead:"Chains Pants from the current Fandom catalogue.",details:["Listed in the pants category","Sizes: M, L, XL, XXL","Product images and full specifications are not yet available for this listing"],fabric:"Check the garment label for fabric and care details."},
{id:"basic-pants",cat:"pants",name:"Basic Pants",price:600,colour:"Black",sizes:["M","L","XL","XXL"],imgs:["images/products/tees/Basic Red Tee.webp"],lead:"Basic Pants from the current Fandom catalogue.",details:["Listed in the pants category","Sizes: M, L, XL, XXL","Product images and full specifications are not yet available for this listing"],fabric:"Check the garment label for fabric and care details."},
{id:"heavy-straight-pants-gray",cat:"pants",name:"Heavy Straight Pants - Gray",price:790,colour:"Black",sizes:["S","M","L","XL","XXL"],imgs:["images/products/pants/sweatpants-black-front.webp","images/products/jeans/fandom-balloon-jeans-2.webp","images/products/pants/sweatpants-black-side.webp"],lead:"Heavy Straight Pants - Gray from the current Fandom catalogue.",details:["Listed in the pants category","Sizes: S, M, L, XL, XXL","Product images and full specifications are not yet available for this listing"],fabric:"Check the garment label for fabric and care details."},
{id:"heavy-straight-pants-black",cat:"pants",name:"Heavy Straight Pants - Black",price:790,colour:"Black",sizes:["S","M","L","XL","XXL"],imgs:["images/products/jeans/fandom-black-balloon-2.webp","images/products/pants/zoro-joggers-zams-4-157115_76ef4447-807d-4317-bba7-69c34f3d49e9.webp","images/products/jeans/fandom-light-blue-balloon-1.webp"],lead:"Heavy Straight Pants - Black from the current Fandom catalogue.",details:["Listed in the pants category","Sizes: S, M, L, XL, XXL","Product images and full specifications are not yet available for this listing"],fabric:"Check the garment label for fabric and care details."},
{id:"balloon-jeans-black",cat:"jeans",name:"Balloon Jeans - Black",price:999,colour:"Black",sizes:["32","34","36","38"],imgs:["images/products/jeans/fandom-balloon-jeans-1.webp","images/products/jeans/fandom-balloon-jeans-2.webp","images/products/jeans/fandom-black-balloon-0.webp"],lead:"Balloon Jeans - Black from the current Fandom catalogue.",details:["Listed in the jeans category","Sizes: 32, 34, 36, 38","Product images and full specifications are not yet available for this listing"],fabric:"Check the garment label for fabric and care details."},
{id:"balloon-jeans-light-blue",cat:"jeans",name:"Vintage Wash Balloon Jeans - Light Blue",price:999,colour:"Black",sizes:["32","34","36","38"],imgs:["images/products/jeans/fandom-balloon-jeans-1.webp","images/products/jeans/fandom-balloon-jeans-2.webp","images/products/jeans/fandom-light-blue-balloon-1.webp"],lead:"Vintage Wash Balloon Jeans - Light Blue from the current Fandom catalogue.",details:["Listed in the jeans category","Sizes: 32, 34, 36, 38","Product images and full specifications are not yet available for this listing"],fabric:"Check the garment label for fabric and care details."},
{id:"balloon-jeans-indigo",cat:"jeans",name:"Vintage Wash Balloon Jeans - Faded Indigo",price:999,colour:"Black",sizes:["32","34","36","38"],imgs:["images/products/jeans/fandom-balloon-jeans-1.webp","images/products/jeans/fandom-balloon-jeans-2.webp","images/products/jeans/fandom-black-balloon-0.webp"],lead:"Vintage Wash Balloon Jeans - Faded Indigo from the current Fandom catalogue.",details:["Listed in the jeans category","Sizes: 32, 34, 36, 38","Product images and full specifications are not yet available for this listing"],fabric:"Check the garment label for fabric and care details."},
{id:"balloon-jeans-pale-blue",cat:"jeans",name:"Ice Wash Balloon Jeans - Pale Blue",price:999,colour:"Black",sizes:["32","34","36","38"],imgs:["images/products/jeans/fandom-balloon-jeans-1.webp","images/products/jeans/fandom-balloon-jeans-2.webp","images/products/jeans/fandom-black-balloon-0.webp"],lead:"Ice Wash Balloon Jeans - Pale Blue from the current Fandom catalogue.",details:["Listed in the jeans category","Sizes: 32, 34, 36, 38","Product images and full specifications are not yet available for this listing"],fabric:"Check the garment label for fabric and care details."},
{id:"balloon-jeans-olive",cat:"jeans",name:"Vintage Wash Balloon Jeans - Washed Olive",price:999,colour:"Black",sizes:["32","34","36","38"],imgs:["images/products/jeans/fandom-balloon-jeans-1.webp","images/products/jeans/fandom-balloon-jeans-2.webp","images/products/jeans/fandom-black-balloon-0.webp"],lead:"Vintage Wash Balloon Jeans - Washed Olive from the current Fandom catalogue.",details:["Listed in the jeans category","Sizes: 32, 34, 36, 38","Product images and full specifications are not yet available for this listing"],fabric:"Check the garment label for fabric and care details."},
{id:"paradis-quarter-zip",cat:"sweatshirts",name:"Paradis Quarter Zip-Up",price:999,colour:"Black",sizes:["M","L","XL","XXL"],imgs:["images/products/hoodies/freedom-black-hoodie-side.webp","images/products/hoodies/freedom-black-hoodie-front.webp"],lead:"Paradis Quarter Zip-Up from the current Fandom catalogue.",details:["Listed in the sweatshirts category","Sizes: M, L, XL, XXL","Product images and full specifications are not yet available for this listing"],fabric:"Check the garment label for fabric and care details."},
{id:"aot-zip-up-black",cat:"sweatshirts",name:"AOT Zip Up Black",price:999,colour:"Black",sizes:["M","L","XL","XXL"],imgs:["images/products/accessories/Levi from AOT.webp"],lead:"AOT Zip Up Black from the current Fandom catalogue.",details:["Listed in the sweatshirts category","Sizes: M, L, XL, XXL","Product images and full specifications are not yet available for this listing"],fabric:"Check the garment label for fabric and care details."},
{id:"blue-lock-sweater",cat:"sweatshirts",name:"Blue Lock Sweater",price:899,colour:"Black",sizes:["M","L","XL","XXL"],imgs:["images/products/hoodies/freedom-black-hoodie-front.webp","images/products/hoodies/freedom-black-hoodie-side.webp"],lead:"Blue Lock Sweater from the current Fandom catalogue.",details:["Listed in the sweatshirts category","Sizes: M, L, XL, XXL","Product images and full specifications are not yet available for this listing"],fabric:"Check the garment label for fabric and care details."},
{id:"aot-green-zip-up",cat:"sweatshirts",name:"AOT Green Zip-Up",price:999,colour:"Black",sizes:["M","L","XL","XXL"],imgs:["images/products/accessories/Levi from AOT.webp","images/products/hoodies/green-1.webp","images/products/hoodies/green-2.webp"],lead:"AOT Green Zip-Up from the current Fandom catalogue.",details:["Listed in the sweatshirts category","Sizes: M, L, XL, XXL","Product images and full specifications are not yet available for this listing"],fabric:"Check the garment label for fabric and care details."},
{id:"yuta-sweatshirt",cat:"sweatshirts",name:"Yuta",price:849,colour:"Black",sizes:["M","L","XL","XXL"],imgs:["images/products/hoodies/freedom-black-hoodie-front.webp","images/products/hoodies/freedom-black-hoodie-side.webp"],lead:"Yuta from the current Fandom catalogue.",details:["Listed in the sweatshirts category","Sizes: M, L, XL, XXL","Product images and full specifications are not yet available for this listing"],fabric:"Check the garment label for fabric and care details."},
{id:"ryuk-embroidered",cat:"sweatshirts",name:"Ryuk Embroidered",price:849,colour:"Black",sizes:["M","L","XL","XXL"],imgs:["images/products/hoodies/freedom-black-hoodie-front.webp","images/products/hoodies/freedom-black-hoodie-side.webp"],lead:"Ryuk Embroidered from the current Fandom catalogue.",details:["Listed in the sweatshirts category","Sizes: M, L, XL, XXL","Product images and full specifications are not yet available for this listing"],fabric:"Check the garment label for fabric and care details."},
{id:"aot-sweater",cat:"sweatshirts",name:"AOT Sweater",price:700,colour:"Black",sizes:["M","L","XL","XXL"],imgs:["images/products/accessories/Levi from AOT.webp"],lead:"AOT Sweater from the current Fandom catalogue.",details:["Listed in the sweatshirts category","Sizes: M, L, XL, XXL","Product images and full specifications are not yet available for this listing"],fabric:"Check the garment label for fabric and care details."},
{id:"the-gate-keeper",cat:"knitwear",name:"The Gate Keeper",price:1049,colour:"Black",sizes:["M","L","XL","XXL"],imgs:["images/products/hoodies/freedom-black-hoodie-front.webp","images/products/hoodies/freedom-black-hoodie-side.webp"],lead:"The Gate Keeper from the current Fandom catalogue.",details:["Listed in the knitwear category","Sizes: M, L, XL, XXL","Product images and full specifications are not yet available for this listing"],fabric:"Check the garment label for fabric and care details."},
{id:"d-will-knit",cat:"knitwear",name:"D. Will Knit",price:949,colour:"Black",sizes:["M","L","XL","XXL"],imgs:["images/products/hoodies/freedom-black-hoodie-front.webp","images/products/hoodies/freedom-black-hoodie-side.webp"],lead:"D. Will Knit from the current Fandom catalogue.",details:["Listed in the knitwear category","Sizes: M, L, XL, XXL","Product images and full specifications are not yet available for this listing"],fabric:"Check the garment label for fabric and care details."},
{id:"guts-puffer-jacket",cat:"jackets",name:"Guts Puffer Jacket - Berserk",price:1499,colour:"Black",sizes:["M","L","XL","XXL"],imgs:["images/products/hoodies/freedom-black-hoodie-side.webp","images/products/hoodies/freedom-black-hoodie-front.webp"],lead:"Guts Puffer Jacket - Berserk from the current Fandom catalogue.",details:["Listed in the jackets category","Sizes: M, L, XL, XXL","Product images and full specifications are not yet available for this listing"],fabric:"Check the garment label for fabric and care details."},
{id:"freedom-black-jacket",cat:"jackets",name:"Freedom Black Jacket",price:1049,colour:"Black",sizes:["M","L","XL","XXL"],imgs:["images/products/hoodies/freedom-black-hoodie-front.webp","images/products/hoodies/freedom-black-hoodie-side.webp"],lead:"Freedom Black Jacket from the current Fandom catalogue.",details:["Listed in the jackets category","Sizes: M, L, XL, XXL","Product images and full specifications are not yet available for this listing"],fabric:"Check the garment label for fabric and care details."},
{id:"berserk-cap",cat:"accessories",name:"Berserk Cap",price:220,colour:"Black",sizes:["One Size"],imgs:["images/products/hoodies/product-012.jpg","images/products/hoodies/product-019.jpg","images/products/hoodies/product-026.jpg"],lead:"Berserk-themed cap listed in the accessories catalogue.",details:["Accessory item","One size","Product image and full specifications are not yet available"],fabric:"Check the product label for care details."},
{id:"musashi-miyamoto-hoodie",cat:"hoodies",name:"Musashi Miyamoto Hoodie",price:1049,colour:"Black",sizes:["M","L","XL","XXL"],imgs:["images/products/accessories/Musashi Miyamoto.webp"],lead:"Musashi Miyamoto Hoodie from the current Fandom catalogue.",details:["Listed in hoodies","Available option(s): M, L, XL, XXL","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"gojo-summer",cat:"hoodies",name:"Gojo Summer",price:799,colour:"Black",sizes:["M","L","XL","XXL"],imgs:["images/products/hoodies/freedom-black-hoodie-side.webp","images/products/hoodies/freedom-black-hoodie-front.webp"],lead:"Gojo Summer from the current Fandom catalogue.",details:["Listed in hoodies","Available option(s): M, L, XL, XXL","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"strawhat-solidarity-hoodie",cat:"hoodies",name:"Strawhat Solidarity Hoodie",price:999,colour:"Black",sizes:["M","L","XL","XXL"],imgs:["images/products/hoodies/freedom-black-hoodie-front.webp","images/products/hoodies/freedom-black-hoodie-side.webp"],lead:"Strawhat Solidarity Hoodie from the current Fandom catalogue.",details:["Listed in hoodies","Available option(s): M, L, XL, XXL","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"spiders-hoodie",cat:"hoodies",name:"Spiders Hoodie",price:1099,colour:"Black",sizes:["M","L","XL","XXL"],imgs:["images/products/hoodies/freedom-black-hoodie-side.webp","images/products/hoodies/freedom-black-hoodie-front.webp"],lead:"Spiders Hoodie from the current Fandom catalogue.",details:["Listed in hoodies","Available option(s): M, L, XL, XXL","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"mahito-hoodie",cat:"hoodies",name:"Mahito",price:1049,colour:"Black",sizes:["M","L","XL","XXL"],imgs:["images/products/hoodies/freedom-black-hoodie-side.webp","images/products/hoodies/freedom-black-hoodie-front.webp"],lead:"Mahito from the current Fandom catalogue.",details:["Listed in hoodies","Available option(s): M, L, XL, XXL","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"rambling-aot",cat:"hoodies",name:"Rambling AOT",price:1049,colour:"Black",sizes:["M","L","XL","XXL"],imgs:["images/products/accessories/Levi from AOT.webp"],lead:"Rambling AOT from the current Fandom catalogue.",details:["Listed in hoodies","Available option(s): M, L, XL, XXL","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"gyro-zeppeli",cat:"hoodies",name:"Gyro Zeppeli",price:1049,colour:"Black",sizes:["M","L","XL","XXL"],imgs:["images/products/hoodies/freedom-black-hoodie-side.webp","images/products/hoodies/freedom-black-hoodie-front.webp"],lead:"Gyro Zeppeli from the current Fandom catalogue.",details:["Listed in hoodies","Available option(s): M, L, XL, XXL","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"grimmjow-embroidered",cat:"hoodies",name:"Grimmjow Embroidered",price:899,colour:"Black",sizes:["M","L","XL","XXL"],imgs:["images/products/hoodies/freedom-black-hoodie-side.webp","images/products/hoodies/freedom-black-hoodie-front.webp"],lead:"Grimmjow Embroidered from the current Fandom catalogue.",details:["Listed in hoodies","Available option(s): M, L, XL, XXL","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"ulquiorra-cifer",cat:"hoodies",name:"Ulquiorra Cifer",price:999,colour:"Black",sizes:["M","L","XL","XXL"],imgs:["images/products/hoodies/freedom-black-hoodie-front.webp","images/products/hoodies/freedom-black-hoodie-side.webp"],lead:"Ulquiorra Cifer from the current Fandom catalogue.",details:["Listed in hoodies","Available option(s): M, L, XL, XXL","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"patched-one-piece-hoodie",cat:"hoodies",name:"Patched One Piece Hoodie",price:999,colour:"Black",sizes:["M","L","XL","XXL"],imgs:["images/products/accessories/ONEPIECE63.webp","images/products/accessories/ONEPIECE75.webp"],lead:"Patched One Piece Hoodie from the current Fandom catalogue.",details:["Listed in hoodies","Available option(s): M, L, XL, XXL","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"exclusive-sasuke",cat:"hoodies",name:"Exclusive Sasuke",price:1049,colour:"Black",sizes:["S","M","L","XL","XXL"],imgs:["images/products/accessories/Naruto vs Sasuke.webp"],lead:"Exclusive Sasuke from the current Fandom catalogue.",details:["Listed in hoodies","Available option(s): S, M, L, XL, XXL","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"hxh-mission-chimera",cat:"hoodies",name:"HxH Mission Chimera",price:999,colour:"Black",sizes:["M","L","XL","XXL"],imgs:["images/products/accessories/HxH Last Mission.webp"],lead:"HxH Mission Chimera from the current Fandom catalogue.",details:["Listed in hoodies","Available option(s): M, L, XL, XXL","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"levi-embroidery",cat:"hoodies",name:"Levi's Embroidery",price:1049,colour:"Black",sizes:["S","M","L","XL","XXL"],imgs:["images/products/accessories/Levi from AOT.webp"],lead:"Levi's Embroidery from the current Fandom catalogue.",details:["Listed in hoodies","Available option(s): S, M, L, XL, XXL","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"blue-grimmjow-zipper",cat:"hoodies",name:"Blue Grimmjow Zipper",price:999,colour:"Black",sizes:["M","L","XL","XXL"],imgs:["images/products/hoodies/freedom-black-hoodie-front.webp","images/products/hoodies/freedom-black-hoodie-side.webp"],lead:"Blue Grimmjow Zipper from the current Fandom catalogue.",details:["Listed in hoodies","Available option(s): M, L, XL, XXL","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"bankai-zipper",cat:"hoodies",name:"BANKAI Zipper",price:999,colour:"Black",sizes:["M","L","XL","XXL"],imgs:["images/products/hoodies/freedom-black-hoodie-side.webp","images/products/hoodies/freedom-black-hoodie-front.webp"],lead:"BANKAI Zipper from the current Fandom catalogue.",details:["Listed in hoodies","Available option(s): M, L, XL, XXL","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"ichigo-full-embroidery",cat:"hoodies",name:"Ichigo Full Embroidery",price:999,colour:"Black",sizes:["M","L","XL","XXL"],imgs:["images/products/hoodies/freedom-black-hoodie-front.webp","images/products/hoodies/freedom-black-hoodie-side.webp"],lead:"Ichigo Full Embroidery from the current Fandom catalogue.",details:["Listed in hoodies","Available option(s): M, L, XL, XXL","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"titan-hoodie",cat:"hoodies",name:"Titan Hoodie",price:999,colour:"Black",sizes:["M","L","XL","XXL"],imgs:["images/products/accessories/ATTACK-ON-TITAN46.webp"],lead:"Titan Hoodie from the current Fandom catalogue.",details:["Listed in hoodies","Available option(s): M, L, XL, XXL","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"white-toji",cat:"hoodies",name:"White Toji",price:999,colour:"Black",sizes:["M","L","XL","XXL"],imgs:["images/products/hoodies/freedom-black-hoodie-front.webp","images/products/hoodies/freedom-black-hoodie-side.webp"],lead:"White Toji from the current Fandom catalogue.",details:["Listed in hoodies","Available option(s): M, L, XL, XXL","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"black-toji",cat:"hoodies",name:"Black Toji",price:999,colour:"Black",sizes:["M","L","XL","XXL"],imgs:["images/products/hoodies/freedom-black-hoodie-front.webp","images/products/hoodies/freedom-black-hoodie-side.webp"],lead:"Black Toji from the current Fandom catalogue.",details:["Listed in hoodies","Available option(s): M, L, XL, XXL","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"white-basic-hoodie",cat:"hoodies",name:"White Basic Hoodie",price:699,colour:"Black",sizes:["M","L","XL","XXL"],imgs:["images/products/tees/Basic Red Tee.webp"],lead:"White Basic Hoodie from the current Fandom catalogue.",details:["Listed in hoodies","Available option(s): M, L, XL, XXL","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"black-basic-hoodie",cat:"hoodies",name:"Black Basic Hoodie",price:699,colour:"Black",sizes:["M","L","XL","XXL"],imgs:["images/products/tees/Basic Red Tee.webp"],lead:"Black Basic Hoodie from the current Fandom catalogue.",details:["Listed in hoodies","Available option(s): M, L, XL, XXL","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"pink-basic-hoodie",cat:"hoodies",name:"Pink Basic Hoodie",price:699,colour:"Black",sizes:["M","L","XL","XXL"],imgs:["images/products/tees/Basic Red Tee.webp"],lead:"Pink Basic Hoodie from the current Fandom catalogue.",details:["Listed in hoodies","Available option(s): M, L, XL, XXL","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"pink-zipper",cat:"hoodies",name:"Pink Zipper",price:749,colour:"Black",sizes:["M","L","XL"],imgs:["images/products/hoodies/freedom-black-hoodie-side.webp","images/products/hoodies/freedom-black-hoodie-front.webp"],lead:"Pink Zipper from the current Fandom catalogue.",details:["Listed in hoodies","Available option(s): M, L, XL","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"purple-basic-sweatshirt",cat:"sweatshirts",name:"Purple Basic Sweatshirt",price:799,colour:"Black",sizes:["M","L","XL","XXL"],imgs:["images/products/tees/Basic Red Tee.webp"],lead:"Purple Basic Sweatshirt from the current Fandom catalogue.",details:["Listed in sweatshirts","Available option(s): M, L, XL, XXL","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"hisoka-tee-alt",cat:"tees",name:"Hisoka Tee",price:750,colour:"Black",sizes:["S","M","L","XL","XXL"],imgs:["images/products/tees/Basic Red Tee.webp"],lead:"Hisoka Tee from the current Fandom catalogue.",details:["Listed in tees","Available option(s): S, M, L, XL, XXL","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"phantom-troupe-spiders-tee",cat:"tees",name:"Phantom Troupe Spiders",price:750,colour:"Black",sizes:["M","L","XL","XXL"],imgs:["images/products/tees/Basic Red Tee.webp"],lead:"Phantom Troupe Spiders from the current Fandom catalogue.",details:["Listed in tees","Available option(s): M, L, XL, XXL","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"luffy-gear5",cat:"tees",name:"Luffy Gear5",price:750,colour:"Black",sizes:["M","L","XL","XXL"],imgs:["images/products/accessories/LUFFY STRAW HAT.webp"],lead:"Luffy Gear5 from the current Fandom catalogue.",details:["Listed in tees","Available option(s): M, L, XL, XXL","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"zoro-three-swords",cat:"tees",name:"ZORO - THREE SWORDS",price:750,colour:"Black",sizes:["M","L","XL","XXL"],imgs:["images/products/pants/zoro-joggers-zams-2.webp","images/products/pants/zoro-joggers-zams-4-157115_76ef4447-807d-4317-bba7-69c34f3d49e9.webp"],lead:"ZORO - THREE SWORDS from the current Fandom catalogue.",details:["Listed in tees","Available option(s): M, L, XL, XXL","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"zoro-exclusive",cat:"tees",name:"Zoro Exclusive",price:750,colour:"Black",sizes:["M","L","XL","XXL"],imgs:["images/products/pants/zoro-joggers-zams-2.webp","images/products/pants/zoro-joggers-zams-4-157115_76ef4447-807d-4317-bba7-69c34f3d49e9.webp"],lead:"Zoro Exclusive from the current Fandom catalogue.",details:["Listed in tees","Available option(s): M, L, XL, XXL","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"zoro-fandom-edition",cat:"tees",name:"Zoro Fandom Edition",price:750,colour:"Black",sizes:["M","L","XL","XXL"],imgs:["images/products/jeans/fandom-balloon-jeans-1.webp","images/products/jeans/fandom-balloon-jeans-2.webp","images/products/jeans/fandom-black-balloon-0.webp"],lead:"Zoro Fandom Edition from the current Fandom catalogue.",details:["Listed in tees","Available option(s): M, L, XL, XXL","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"socks-bleach",cat:"accessories",name:"Socks Bleach",price:100,colour:"Black",sizes:["One Size"],imgs:["images/products/accessories/BLEACH37.webp","images/products/accessories/BLEACH43.webp","images/products/accessories/BLEACH44_f4a01e33-5ffe-490b-a5b4-7f9a618cbb0c.webp"],lead:"Socks Bleach from the current Fandom catalogue.",details:["Accessory item","Available option(s): One Size","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"socks-naruto",cat:"accessories",name:"Socks Naruto",price:100,colour:"Black",sizes:["One Size"],imgs:["images/products/accessories/NARUTO68.webp","images/products/accessories/Naruto vs Sasuke.webp"],lead:"Socks Naruto from the current Fandom catalogue.",details:["Accessory item","Available option(s): One Size","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"socks-hunterxhunter",cat:"accessories",name:"Socks HunterXHunter",price:100,colour:"Black",sizes:["One Size"],imgs:["images/products/tees/product-009.png","images/products/tees/product-016.png","images/products/hoodies/product-023.jpg"],lead:"Socks HunterXHunter from the current Fandom catalogue.",details:["Accessory item","Available option(s): One Size","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"socks-berserk",cat:"accessories",name:"Socks Berserk",price:100,colour:"Black",sizes:["One Size"],imgs:["images/products/hoodies/product-017.jpg","images/products/hoodies/product-024.jpg","images/products/knitwear/product-005.jpg"],lead:"Socks Berserk from the current Fandom catalogue.",details:["Accessory item","Available option(s): One Size","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"socks-vinland-saga",cat:"accessories",name:"Socks Vinland Saga",price:100,colour:"Black",sizes:["One Size"],imgs:["images/products/hoodies/product-004.jpg","images/products/hoodies/product-011.jpg","images/products/hoodies/product-018.jpg"],lead:"Socks Vinland Saga from the current Fandom catalogue.",details:["Accessory item","Available option(s): One Size","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"sukuna-cap",cat:"accessories",name:"Sukuna Cap",price:220,colour:"Black",sizes:["One Size"],imgs:["images/products/hoodies/product-003.jpg","images/products/hoodies/product-010.jpg","images/products/hoodies/product-017.jpg"],lead:"Sukuna Cap from the current Fandom catalogue.",details:["Accessory item","Available option(s): One Size","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"bankai-cap",cat:"accessories",name:"BANKAI Cap",price:220,colour:"Black",sizes:["One Size"],imgs:["images/products/knitwear/product-006.jpg","images/products/tees/product-013.png","images/products/hoodies/product-020.jpg"],lead:"BANKAI Cap from the current Fandom catalogue.",details:["Accessory item","Available option(s): One Size","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"akatsuki-cap",cat:"accessories",name:"Akatsuki Cap",price:220,colour:"Black",sizes:["One Size"],imgs:["images/products/hoodies/product-019.jpg","images/products/hoodies/product-026.jpg","images/products/knitwear/product-007.jpg"],lead:"Akatsuki Cap from the current Fandom catalogue.",details:["Accessory item","Available option(s): One Size","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"one-piece-cap",cat:"accessories",name:"One Piece Cap",price:270,colour:"Black",sizes:["One Size"],imgs:["images/products/accessories/ONEPIECE63.webp","images/products/accessories/ONEPIECE75.webp"],lead:"One Piece Cap from the current Fandom catalogue.",details:["Accessory item","Available option(s): One Size","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"hxh-cap",cat:"accessories",name:"HxH Cap",price:270,colour:"Black",sizes:["One Size"],imgs:["images/products/accessories/HxH Last Mission.webp"],lead:"HxH Cap from the current Fandom catalogue.",details:["Accessory item","Available option(s): One Size","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"hidden-leaf-cap",cat:"accessories",name:"Hidden Leaf Cap",price:220,colour:"Black",sizes:["One Size"],imgs:["images/products/hoodies/product-023.jpg","images/products/hoodies/product-004.jpg","images/products/hoodies/product-011.jpg"],lead:"Hidden Leaf Cap from the current Fandom catalogue.",details:["Accessory item","Available option(s): One Size","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"survey-corps-cap",cat:"accessories",name:"Survey Corps Cap",price:270,colour:"Black",sizes:["One Size"],imgs:["images/products/hoodies/product-024.jpg","images/products/knitwear/product-005.jpg","images/products/hoodies/product-012.jpg"],lead:"Survey Corps Cap from the current Fandom catalogue.",details:["Accessory item","Available option(s): One Size","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"uchiha-clan-cap",cat:"accessories",name:"Uchiha Clan Cap",price:220,colour:"Black",sizes:["One Size"],imgs:["images/products/tees/product-009.png","images/products/tees/product-016.png","images/products/hoodies/product-023.jpg"],lead:"Uchiha Clan Cap from the current Fandom catalogue.",details:["Accessory item","Available option(s): One Size","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"soul-eater-cap",cat:"accessories",name:"Soul Eater Cap",price:270,colour:"Black",sizes:["One Size"],imgs:["images/products/hoodies/product-001.jpg","images/products/tees/product-008.png","images/products/tees/product-015.png"],lead:"Soul Eater Cap from the current Fandom catalogue.",details:["Accessory item","Available option(s): One Size","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"death-note-cap",cat:"accessories",name:"Death Note Cap",price:270,colour:"Black",sizes:["One Size"],imgs:["images/products/hoodies/product-003.jpg","images/products/hoodies/product-010.jpg","images/products/hoodies/product-017.jpg"],lead:"Death Note Cap from the current Fandom catalogue.",details:["Accessory item","Available option(s): One Size","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"frieren-cap",cat:"accessories",name:"Frieren Cap",price:270,colour:"Black",sizes:["One Size"],imgs:["images/products/tees/product-009.png","images/products/tees/product-016.png","images/products/hoodies/product-023.jpg"],lead:"Frieren Cap from the current Fandom catalogue.",details:["Accessory item","Available option(s): One Size","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"hunter-license-card",cat:"accessories",name:"Hunter License Card",price:15,colour:"Black",sizes:["One Size"],imgs:["images/products/accessories/HUNTERX10_fe532896-7d26-44cd-b7cc-6726532209e8.webp","images/products/accessories/HUNTERX23.webp","images/products/accessories/HUNTERX7_2822d5de-7861-4b7a-aef3-737d6313eaff.webp"],lead:"Hunter License Card from the current Fandom catalogue.",details:["Accessory item","Available option(s): One Size","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"winged-vanguard-sticker",cat:"accessories",name:"Winged Vanguard Sticker",price:15,colour:"Black",sizes:["One Size"],imgs:["images/products/hoodies/product-002.jpg","images/products/tees/product-009.png","images/products/tees/product-016.png"],lead:"Winged Vanguard Sticker from the current Fandom catalogue.",details:["Accessory item","Available option(s): One Size","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"joyful-ascension-sticker",cat:"accessories",name:"Joyful Ascension Sticker",price:15,colour:"Black",sizes:["One Size"],imgs:["images/products/knitwear/product-006.jpg","images/products/tees/product-013.png","images/products/hoodies/product-020.jpg"],lead:"Joyful Ascension Sticker from the current Fandom catalogue.",details:["Accessory item","Available option(s): One Size","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"brutal-crest-mark",cat:"accessories",name:"Brutal Crest Mark Sticker",price:15,colour:"Black",sizes:["One Size"],imgs:["images/products/accessories/Brutal Crest Mark.webp"],lead:"Brutal Crest Mark Sticker from the current Fandom catalogue.",details:["Accessory item","Available option(s): One Size","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"scarlet-core-symbol",cat:"accessories",name:"Scarlet Core Symbol Sticker",price:15,colour:"Black",sizes:["One Size"],imgs:["images/products/hoodies/product-004.jpg","images/products/hoodies/product-011.jpg","images/products/hoodies/product-018.jpg"],lead:"Scarlet Core Symbol Sticker from the current Fandom catalogue.",details:["Accessory item","Available option(s): One Size","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"blade-skull-sticker",cat:"accessories",name:"Blade Skull Sticker",price:15,colour:"Black",sizes:["One Size"],imgs:["images/products/tees/product-009.png","images/products/tees/product-016.png","images/products/hoodies/product-023.jpg"],lead:"Blade Skull Sticker from the current Fandom catalogue.",details:["Accessory item","Available option(s): One Size","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"cursed-arm-manifestation",cat:"accessories",name:"Cursed Arm Manifestation Sticker",price:15,colour:"Black",sizes:["One Size"],imgs:["images/products/knitwear/product-007.jpg","images/products/tees/product-014.png","images/products/sweatshirts/product-021.jpg"],lead:"Cursed Arm Manifestation Sticker from the current Fandom catalogue.",details:["Accessory item","Available option(s): One Size","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"crimson-crescent-blade",cat:"accessories",name:"Crimson Crescent Blade Sticker",price:15,colour:"Black",sizes:["One Size"],imgs:["images/products/hoodies/product-003.jpg","images/products/hoodies/product-010.jpg","images/products/hoodies/product-017.jpg"],lead:"Crimson Crescent Blade Sticker from the current Fandom catalogue.",details:["Accessory item","Available option(s): One Size","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"crimson-cloud-sticker",cat:"accessories",name:"Crimson Cloud Sticker",price:15,colour:"Black",sizes:["One Size"],imgs:["images/products/tees/product-014.png","images/products/sweatshirts/product-021.jpg","images/products/hoodies/product-002.jpg"],lead:"Crimson Cloud Sticker from the current Fandom catalogue.",details:["Accessory item","Available option(s): One Size","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"blindfolded-sorcerer-sprint",cat:"accessories",name:"Blindfolded Sorcerer Sprint Sticker",price:15,colour:"Black",sizes:["One Size"],imgs:["images/products/hoodies/product-019.jpg","images/products/hoodies/product-026.jpg","images/products/knitwear/product-007.jpg"],lead:"Blindfolded Sorcerer Sprint Sticker from the current Fandom catalogue.",details:["Accessory item","Available option(s): One Size","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"luFFy-straw-hat-tee",cat:"tees",name:"LUFFY - STRAW HAT",price:750,colour:"Black",sizes:["M","L","XL","XXL"],imgs:["images/products/accessories/LUFFY STRAW HAT.webp","images/products/hoodies/ChatGPTImageNov10_2026_05_42_26AM.webp","images/products/hoodies/ChatGPTImageNov10_2026_05_42_32AM.webp"],lead:"LUFFY - STRAW HAT from the current Fandom catalogue.",details:["Listed in tees","Available option(s): M, L, XL, XXL","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"basic-black-tee",cat:"tees",name:"Basic Black Tee",price:450,colour:"Black",sizes:["M","L","XL","XXL"],imgs:["images/products/tees/Basic Red Tee.webp"],lead:"Basic Black Tee from the current Fandom catalogue.",details:["Listed in tees","Available option(s): M, L, XL, XXL","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"phantom-troupe-varsity",cat:"jackets",name:"Phantom Troupe Varsity",price:1399,colour:"Black",sizes:["M","L","XL","XXL"],imgs:["images/products/hoodies/freedom-black-hoodie-front.webp","images/products/hoodies/freedom-black-hoodie-side.webp"],lead:"Phantom Troupe Varsity from the current Fandom catalogue.",details:["Listed in jackets","Available option(s): M, L, XL, XXL","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"itachi-varsity",cat:"jackets",name:"Itachi Varsity",price:1399,colour:"Black",sizes:["M","L","XL","XXL"],imgs:["images/products/hoodies/freedom-black-hoodie-side.webp","images/products/hoodies/freedom-black-hoodie-front.webp"],lead:"Itachi Varsity from the current Fandom catalogue.",details:["Listed in jackets","Available option(s): M, L, XL, XXL","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"bizarre-bloodline-zip-hoodie",cat:"jackets",name:"Bizarre Bloodline Zip Hoodie",price:1099,colour:"Black",sizes:["M","L","XL","XXL"],imgs:["images/products/hoodies/freedom-black-hoodie-side.webp","images/products/hoodies/freedom-black-hoodie-front.webp"],lead:"Bizarre Bloodline Zip Hoodie from the current Fandom catalogue.",details:["Listed in jackets","Available option(s): M, L, XL, XXL","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"freedom-mint-green-jacket",cat:"jackets",name:"Freedom Mint-Green Jacket",price:1049,colour:"Black",sizes:["M","L","XL","XXL"],imgs:["images/products/hoodies/freedom-black-hoodie-front.webp","images/products/hoodies/freedom-black-hoodie-side.webp","images/products/hoodies/green-1.webp"],lead:"Freedom Mint-Green Jacket from the current Fandom catalogue.",details:["Listed in jackets","Available option(s): M, L, XL, XXL","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"golden-dominance-zip-hoodie",cat:"jackets",name:"Golden Dominance Zip Hoodie",price:1099,colour:"Black",sizes:["M","L","XL","XXL"],imgs:["images/products/hoodies/freedom-black-hoodie-side.webp","images/products/hoodies/freedom-black-hoodie-front.webp"],lead:"Golden Dominance Zip Hoodie from the current Fandom catalogue.",details:["Listed in jackets","Available option(s): M, L, XL, XXL","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"red-zipper-jacket",cat:"jackets",name:"Red Zipper",price:749,colour:"Black",sizes:["M","L","XL","XXL"],imgs:["images/products/hoodies/freedom-black-hoodie-side.webp","images/products/hoodies/freedom-black-hoodie-front.webp"],lead:"Red Zipper from the current Fandom catalogue.",details:["Listed in jackets","Available option(s): M, L, XL, XXL","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"green-zipper-jacket",cat:"jackets",name:"Green Zipper",price:749,colour:"Black",sizes:["M","L","XL","XXL"],imgs:["images/products/hoodies/green-1.webp","images/products/hoodies/green-2.webp","images/products/hoodies/green-4.webp"],lead:"Green Zipper from the current Fandom catalogue.",details:["Listed in jackets","Available option(s): M, L, XL, XXL","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"beige-basic-hoodie",cat:"hoodies",name:"Beige Basic",price:700,colour:"Black",sizes:["M","L","XL","XXL"],imgs:["images/products/tees/Basic Red Tee.webp","images/products/pants/beige.webp"],lead:"Beige Basic from the current Fandom catalogue.",details:["Listed in hoodies","Available option(s): M, L, XL, XXL","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"black-basic-hoodie-alt",cat:"hoodies",name:"Black Basic",price:700,colour:"Black",sizes:["M","L","XL","XXL"],imgs:["images/products/tees/Basic Red Tee.webp"],lead:"Black Basic from the current Fandom catalogue.",details:["Listed in hoodies","Available option(s): M, L, XL, XXL","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"black-set",cat:"sweatshirts",name:"Black Set",price:999,colour:"Black",sizes:["M","L","XL","XXL"],imgs:["images/products/hoodies/freedom-black-hoodie-front.webp","images/products/hoodies/freedom-black-hoodie-side.webp"],lead:"Black Set from the current Fandom catalogue.",details:["Listed in sweatshirts","Available option(s): M, L, XL, XXL","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"zipper-brown",cat:"hoodies",name:"Zipper - Brown",price:749,colour:"Black",sizes:["M","L","XL","XXL"],imgs:["images/products/hoodies/freedom-black-hoodie-side.webp","images/products/hoodies/freedom-black-hoodie-front.webp"],lead:"Zipper - Brown from the current Fandom catalogue.",details:["Listed in hoodies","Available option(s): M, L, XL, XXL","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"socks-one-piece",cat:"accessories",name:"Socks One Piece",price:100,colour:"Black",sizes:["One Size"],imgs:["images/products/accessories/ONEPIECE63.webp","images/products/accessories/ONEPIECE75.webp"],lead:"Socks One Piece from the current Fandom catalogue.",details:["Listed in accessories","Available option(s): One Size","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"socks-jujutsu-kaisen",cat:"accessories",name:"Socks Jujutsu Kaisen",price:100,colour:"Black",sizes:["One Size"],imgs:["images/products/accessories/JUJUTSU57_8f28b000-3350-4a7a-a9d8-32f7b226906e.webp","images/products/accessories/JUJUTSU76.webp"],lead:"Socks Jujutsu Kaisen from the current Fandom catalogue.",details:["Listed in accessories","Available option(s): One Size","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"basic-white-tee",cat:"tees",name:"Basic White Tee",price:450,colour:"Various",sizes:["M","L","XL","XXL"],imgs:["images/products/tees/Basic Red Tee.webp"],lead:"Basic White Tee listed in the current Fandom catalogue.",details:["Category: tees","Available option(s): M, L, XL, XXL","Original product photos and full product specifications are not attached yet"],fabric:"Check the original product label or packaging for material and care details."},
{id:"basic-yellow-tee",cat:"tees",name:"Basic Yellow Tee",price:450,colour:"Various",sizes:["M","L","XL","XXL"],imgs:["images/products/tees/Basic Red Tee.webp"],lead:"Basic Yellow Tee listed in the current Fandom catalogue.",details:["Category: tees","Available option(s): M, L, XL, XXL","Original product photos and full product specifications are not attached yet"],fabric:"Check the original product label or packaging for material and care details."},
{id:"basic-baby-blue-tee",cat:"tees",name:"Basic Baby Blue Tee",price:450,colour:"Various",sizes:["M","L","XL","XXL"],imgs:["images/products/tees/Basic Red Tee.webp"],lead:"Basic Baby Blue Tee listed in the current Fandom catalogue.",details:["Category: tees","Available option(s): M, L, XL, XXL","Original product photos and full product specifications are not attached yet"],fabric:"Check the original product label or packaging for material and care details."},
{id:"basic-red-tee",cat:"tees",name:"Basic Red Tee",price:450,colour:"Various",sizes:["M","L","XL","XXL"],imgs:["images/products/tees/Basic Red Tee.webp"],lead:"Basic Red Tee listed in the current Fandom catalogue.",details:["Category: tees","Available option(s): M, L, XL, XXL","Original product photos and full product specifications are not attached yet"],fabric:"Check the original product label or packaging for material and care details."},
{id:"basic-brown-tee",cat:"tees",name:"Basic Brown Tee",price:450,colour:"Various",sizes:["M","L","XL","XXL"],imgs:["images/products/tees/Basic Red Tee.webp"],lead:"Basic Brown Tee listed in the current Fandom catalogue.",details:["Category: tees","Available option(s): M, L, XL, XXL","Original product photos and full product specifications are not attached yet"],fabric:"Check the original product label or packaging for material and care details."},
{id:"basic-pink-tee",cat:"tees",name:"Basic Pink Tee",price:450,colour:"Various",sizes:["M","L","XL","XXL"],imgs:["images/products/tees/Basic Red Tee.webp"],lead:"Basic Pink Tee listed in the current Fandom catalogue.",details:["Category: tees","Available option(s): M, L, XL, XXL","Original product photos and full product specifications are not attached yet"],fabric:"Check the original product label or packaging for material and care details."},
{id:"basic-gray-tee",cat:"tees",name:"Basic Gray Tee",price:450,colour:"Various",sizes:["M","L","XL","XXL"],imgs:["images/products/tees/Basic Red Tee.webp"],lead:"Basic Gray Tee listed in the current Fandom catalogue.",details:["Category: tees","Available option(s): M, L, XL, XXL","Original product photos and full product specifications are not attached yet"],fabric:"Check the original product label or packaging for material and care details."},
{id:"basic-green-tee",cat:"tees",name:"Basic Green Tee",price:450,colour:"Various",sizes:["M","L","XL","XXL"],imgs:["images/products/tees/Basic Red Tee.webp","images/products/hoodies/green-1.webp","images/products/hoodies/green-2.webp"],lead:"Basic Green Tee listed in the current Fandom catalogue.",details:["Category: tees","Available option(s): M, L, XL, XXL","Original product photos and full product specifications are not attached yet"],fabric:"Check the original product label or packaging for material and care details."},
{id:"custom-killua-tee",cat:"tees",name:"Custom Killua Tee",price:750,colour:"Various",sizes:["M","L","XL","XXL"],imgs:["images/products/tees/Basic Red Tee.webp"],lead:"Custom Killua Tee listed in the current Fandom catalogue.",details:["Category: tees","Available option(s): M, L, XL, XXL","Original product photos and full product specifications are not attached yet"],fabric:"Check the original product label or packaging for material and care details."},
{id:"winds-of-rage-tee",cat:"tees",name:"Winds of Rage Tee",price:750,colour:"Various",sizes:["M","L","XL","XXL"],imgs:["images/products/tees/Basic Red Tee.webp"],lead:"Winds of Rage Tee listed in the current Fandom catalogue.",details:["Category: tees","Available option(s): M, L, XL, XXL","Original product photos and full product specifications are not attached yet"],fabric:"Check the original product label or packaging for material and care details."},
{id:"hollow-state-tee",cat:"tees",name:"Hollow State",price:750,colour:"Various",sizes:["M","L","XL","XXL"],imgs:["images/products/tees/Basic Red Tee.webp"],lead:"Hollow State listed in the current Fandom catalogue.",details:["Category: tees","Available option(s): M, L, XL, XXL","Original product photos and full product specifications are not attached yet"],fabric:"Check the original product label or packaging for material and care details."},
{id:"custom-gon-tee",cat:"tees",name:"Custom Gon Tee",price:750,colour:"Various",sizes:["M","L","XL","XXL"],imgs:["images/products/tees/Basic Red Tee.webp"],lead:"Custom Gon Tee listed in the current Fandom catalogue.",details:["Category: tees","Available option(s): M, L, XL, XXL","Original product photos and full product specifications are not attached yet"],fabric:"Check the original product label or packaging for material and care details."},
{id:"sukuna-v1-tee",cat:"tees",name:"Sukuna v1",price:750,colour:"Various",sizes:["M","L","XL","XXL"],imgs:["images/products/tees/Basic Red Tee.webp"],lead:"Sukuna v1 listed in the current Fandom catalogue.",details:["Category: tees","Available option(s): M, L, XL, XXL","Original product photos and full product specifications are not attached yet"],fabric:"Check the original product label or packaging for material and care details."},
{id:"attack-on-titan-accessory",cat:"accessories",name:"ATTACK ON TITAN",price:60,colour:"Various",sizes:["One Size"],imgs:["images/products/accessories/ATTACK-ON-TITAN46.webp"],lead:"ATTACK ON TITAN listed in the current Fandom catalogue.",details:["Category: accessories","Available option(s): One Size","Original product photos and full product specifications are not attached yet"],fabric:"Check the original product label or packaging for material and care details."},
{id:"hollow-mask-icon",cat:"accessories",name:"Hollow Mask Icon",price:15,colour:"Various",sizes:["One Size"],imgs:["images/products/hoodies/product-019.jpg","images/products/hoodies/product-026.jpg","images/products/knitwear/product-007.jpg"],lead:"Hollow Mask Icon listed in the current Fandom catalogue.",details:["Category: accessories","Available option(s): One Size","Original product photos and full product specifications are not attached yet"],fabric:"Check the original product label or packaging for material and care details."},
{id:"legendary-proliy-tee",cat:"tees",name:"LEGENDARY PROLIY TEE",price:600,colour:"Black",sizes:["M","L","XL","XXL"],imgs:["images/products/tees/Basic Red Tee.webp"],lead:"LEGENDARY PROLIY TEE from the Fandom T-shirt collection.",details:["T-shirt collection listing","Sizes: M, L, XL, XXL","Original product photos are not attached yet"],fabric:"Check the product label for fabric and care details."},
{id:"valhalla-tee",cat:"tees",name:"VALHALLA TEE",price:680,colour:"Black",sizes:["M","L","XL","XXL"],imgs:["images/products/tees/Basic Red Tee.webp"],lead:"VALHALLA TEE from the Fandom T-shirt collection.",details:["T-shirt collection listing","Sizes: M, L, XL, XXL","Original product photos are not attached yet"],fabric:"Check the product label for fabric and care details."},
{id:"keychain-berserk",cat:"accessories",name:"BERSERK",price:60,colour:"Original",sizes:["One size"],imgs:["images/products/hoodies/product-002.jpg","images/products/tees/product-009.png","images/products/tees/product-016.png"],lead:"BERSERK from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"keychain-luffy-straw-hat",cat:"accessories",name:"LUFFY STRAW HAT",price:60,colour:"Original",sizes:["One size"],imgs:["images/products/accessories/LUFFY STRAW HAT.webp","images/products/hoodies/ChatGPTImageNov10_2026_05_42_26AM.webp","images/products/hoodies/ChatGPTImageNov10_2026_05_42_32AM.webp"],lead:"LUFFY STRAW HAT from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"frame-anime-university",cat:"accessories",name:"Anime University",price:250,colour:"Original",sizes:["One size"],imgs:["images/products/accessories/Anime University.webp"],lead:"Anime University from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"frame-hxh-last-mission",cat:"accessories",name:"HxH Last Mission",price:300,colour:"Original",sizes:["One size"],imgs:["images/products/accessories/HxH Last Mission.webp"],lead:"HxH Last Mission from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"frame-dbz-v1",cat:"accessories",name:"DBZ v1",price:300,colour:"Original",sizes:["One size"],imgs:["images/products/accessories/DBZ v1.webp"],lead:"DBZ v1 from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"frame-naruto-vs-sasuke",cat:"accessories",name:"Naruto vs Sasuke",price:300,colour:"Original",sizes:["One size"],imgs:["images/products/accessories/Naruto vs Sasuke.webp","images/products/accessories/NARUTO68.webp"],lead:"Naruto vs Sasuke from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"frame-levi-from-aot",cat:"accessories",name:"Levi from AOT",price:300,colour:"Original",sizes:["One size"],imgs:["images/products/accessories/Levi from AOT.webp"],lead:"Levi from AOT from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"lamp-goku-super-saiyajin",cat:"accessories",name:"Goku Super Saiyajin shadow lamp",price:1200,colour:"Original",sizes:["One size"],imgs:["images/products/hoodies/product-023.jpg","images/products/hoodies/product-004.jpg","images/products/hoodies/product-011.jpg"],lead:"Goku Super Saiyajin shadow lamp from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"lamp-luffy-gear-5",cat:"accessories",name:"Luffy Gear 5 Shadow Lamp",price:1200,colour:"Original",sizes:["One size"],imgs:["images/products/accessories/LUFFY STRAW HAT.webp"],lead:"Luffy Gear 5 Shadow Lamp from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"lamp-zoro",cat:"accessories",name:"Zoro Shadow Lamp",price:1200,colour:"Original",sizes:["One size"],imgs:["images/products/pants/zoro-joggers-zams-2.webp","images/products/pants/zoro-joggers-zams-4-157115_76ef4447-807d-4317-bba7-69c34f3d49e9.webp"],lead:"Zoro Shadow Lamp from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"lamp-batman",cat:"accessories",name:"Batman shadow Lamp",price:1200,colour:"Original",sizes:["One size"],imgs:["images/products/knitwear/product-007.jpg","images/products/tees/product-014.png","images/products/sweatshirts/product-021.jpg"],lead:"Batman shadow Lamp from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"lamp-pain-naruto",cat:"accessories",name:"Pain (Naruto)- Shadow Lamp",price:1200,colour:"Original",sizes:["One size"],imgs:["images/products/accessories/NARUTO68.webp","images/products/accessories/Naruto vs Sasuke.webp"],lead:"Pain (Naruto)- Shadow Lamp from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"lamp-uchiha-itachi",cat:"accessories",name:"Uchiha Itachi Shadow Lamp",price:1200,colour:"Original",sizes:["One size"],imgs:["images/products/hoodies/product-001.jpg","images/products/tees/product-008.png","images/products/tees/product-015.png"],lead:"Uchiha Itachi Shadow Lamp from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"tee-eren-yeager-typo",cat:"tees",name:"Eren Yeager typo",price:550,colour:"Original",sizes:["One size"],imgs:["images/products/tees/Basic Red Tee.webp"],lead:"Eren Yeager typo from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"tee-gara",cat:"tees",name:"Gara",price:550,colour:"Original",sizes:["One size"],imgs:["images/products/tees/Basic Red Tee.webp"],lead:"Gara from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"tee-gojo-v3",cat:"tees",name:"Gojo v3",price:550,colour:"Original",sizes:["One size"],imgs:["images/products/tees/Basic Red Tee.webp"],lead:"Gojo v3 from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"tee-goku",cat:"tees",name:"GOKU",price:550,colour:"Original",sizes:["One size"],imgs:["images/products/tees/Basic Red Tee.webp"],lead:"GOKU from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"tee-golden-joy-boy",cat:"tees",name:"Golden Joy Boy",price:550,colour:"Original",sizes:["One size"],imgs:["images/products/tees/Basic Red Tee.webp"],lead:"Golden Joy Boy from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"tee-griffith-v1",cat:"tees",name:"Griffith v1",price:550,colour:"Original",sizes:["One size"],imgs:["images/products/tees/Basic Red Tee.webp"],lead:"Griffith v1 from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"tee-gyomei-beige",cat:"tees",name:"Gyomei Tee Beige",price:550,colour:"Original",sizes:["One size"],imgs:["images/products/pants/beige.webp"],lead:"Gyomei Tee Beige from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"tee-gyomei-red",cat:"tees",name:"Gyomei Tee Red",price:550,colour:"Original",sizes:["One size"],imgs:["images/products/tees/Basic Red Tee.webp"],lead:"Gyomei Tee Red from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"tee-kurapika",cat:"tees",name:"Kurapika",price:550,colour:"Original",sizes:["One size"],imgs:["images/products/tees/Basic Red Tee.webp"],lead:"Kurapika from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"tee-99-killua-long-sleeve",cat:"tees",name:"99 Killua Long Sleeve",price:550,colour:"Original",sizes:["One size"],imgs:["images/products/tees/Basic Red Tee.webp"],lead:"99 Killua Long Sleeve from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"tee-baki",cat:"tees",name:"BAKI",price:550,colour:"Original",sizes:["One size"],imgs:["images/products/tees/Baki_08209954-5fa1-43f4-b508-26100920e4b9.webp","images/products/tees/Baki_4_4e83a602-d975-451e-b444-1fb012011f35.webp"],lead:"BAKI from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"tee-berserk-d",cat:"tees",name:"Berserk-D",price:550,colour:"Original",sizes:["One size"],imgs:["images/products/tees/Basic Red Tee.webp"],lead:"Berserk-D from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"tee-byakuya-kuchiki-bankai",cat:"tees",name:"Byakuya Kuchiki Bankai",price:600,colour:"Original",sizes:["One size"],imgs:["images/products/tees/Basic Red Tee.webp"],lead:"Byakuya Kuchiki Bankai from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"tee-luffy-v1",cat:"tees",name:"LUFFY v1",price:550,colour:"Original",sizes:["One size"],imgs:["images/products/accessories/LUFFY STRAW HAT.webp"],lead:"LUFFY v1 from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"hoodie-black-eren",cat:"hoodies",name:"Black Eren",price:550,colour:"Original",sizes:["One size"],imgs:["images/products/hoodies/freedom-black-hoodie-side.webp","images/products/hoodies/freedom-black-hoodie-front.webp"],lead:"Black Eren from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"hoodie-musashi-miyamoto",cat:"hoodies",name:"Musashi Miyamoto Hoodie",price:1049,colour:"Original",sizes:["One size"],imgs:["images/products/accessories/Musashi Miyamoto.webp"],lead:"Musashi Miyamoto Hoodie from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"hoodie-freedom-black",cat:"hoodies",name:"Freedom Black Hoodie",price:1049,colour:"Original",sizes:["One size"],imgs:["images/products/hoodies/freedom-black-hoodie-front.webp","images/products/hoodies/freedom-black-hoodie-side.webp"],lead:"Freedom Black Hoodie from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"tee-eren-founder",cat:"tees",name:"EREN: THE FOUNDER",price:750,colour:"Original",sizes:["One size"],imgs:["images/products/tees/Basic Red Tee.webp"],lead:"EREN: THE FOUNDER from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"tee-path-to-freedom",cat:"tees",name:"Path to Freedom Tee",price:750,colour:"Original",sizes:["One size"],imgs:["images/products/hoodies/freedom-black-hoodie-front.webp","images/products/hoodies/freedom-black-hoodie-side.webp"],lead:"Path to Freedom Tee from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"tee-zoro-ashura-mode",cat:"tees",name:"Zoro Ashura Mode",price:750,colour:"Original",sizes:["One size"],imgs:["images/products/pants/zoro-joggers-zams-2.webp","images/products/pants/zoro-joggers-zams-4-157115_76ef4447-807d-4317-bba7-69c34f3d49e9.webp"],lead:"Zoro Ashura Mode from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"cap-survey-corps",cat:"accessories",name:"Survey Corps Cap",price:270,colour:"Original",sizes:["One size"],imgs:["images/products/hoodies/product-024.jpg","images/products/knitwear/product-005.jpg","images/products/hoodies/product-012.jpg"],lead:"Survey Corps Cap from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"cap-uchiha-clan",cat:"accessories",name:"Uchiha clan cap",price:220,colour:"Original",sizes:["One size"],imgs:["images/products/tees/product-009.png","images/products/tees/product-016.png","images/products/hoodies/product-023.jpg"],lead:"Uchiha clan cap from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"cap-soul-eater",cat:"accessories",name:"Soul Eater Cap",price:270,colour:"Original",sizes:["One size"],imgs:["images/products/hoodies/product-001.jpg","images/products/tees/product-008.png","images/products/tees/product-015.png"],lead:"Soul Eater Cap from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"cap-death-note",cat:"accessories",name:"Death Note Cap",price:270,colour:"Original",sizes:["One size"],imgs:["images/products/hoodies/product-003.jpg","images/products/hoodies/product-010.jpg","images/products/hoodies/product-017.jpg"],lead:"Death Note Cap from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"cap-frieren",cat:"accessories",name:"Frieren cap",price:270,colour:"Original",sizes:["One size"],imgs:["images/products/tees/product-009.png","images/products/tees/product-016.png","images/products/hoodies/product-023.jpg"],lead:"Frieren cap from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"sticker-hunter-logo",cat:"accessories",name:"Hunter Logo",price:15,colour:"Original",sizes:["One size"],imgs:["images/products/accessories/HUNTERX10_fe532896-7d26-44cd-b7cc-6726532209e8.webp","images/products/accessories/HUNTERX23.webp","images/products/accessories/HUNTERX7_2822d5de-7861-4b7a-aef3-737d6313eaff.webp"],lead:"Hunter Logo from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"socks-death-note",cat:"accessories",name:"Socks Death Note",price:100,colour:"Original",sizes:["One size"],imgs:["images/products/tees/product-008.png","images/products/tees/product-015.png","images/products/sweatshirts/product-022.jpg"],lead:"Socks Death Note from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"tee-feitan-exe",cat:"tees",name:"FEITAN.EXE",price:750,colour:"Original",sizes:["M","L","XL","XXL"],imgs:["images/products/accessories/exec-1156c395-81d8-4dce-97b4-530b9fc7ca96.webp","images/products/accessories/exec-243547fb-5f6a-421f-b88b-77ca50687929.webp","images/products/accessories/exec-41a6aae4-f436-44b6-9f3b-3fff7b2bab19.webp"],lead:"FEITAN.EXE from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"tee-blind-faith",cat:"tees",name:"Blind Faith",price:750,colour:"Original",sizes:["M","L","XL","XXL"],imgs:["images/products/tees/Basic Red Tee.webp"],lead:"Blind Faith from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"tee-limitless",cat:"tees",name:"limitless",price:750,colour:"Original",sizes:["M","L","XL","XXL"],imgs:["images/products/tees/Basic Red Tee.webp"],lead:"limitless from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"tee-toji-zenin-reject",cat:"tees",name:"TOJI: ZENIN REJECT",price:750,colour:"Original",sizes:["M","L","XL","XXL"],imgs:["images/products/tees/Basic Red Tee.webp"],lead:"TOJI: ZENIN REJECT from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"tee-sorcerer-killer",cat:"tees",name:"Sorcerer Killer",price:750,colour:"Original",sizes:["M","L","XL","XXL"],imgs:["images/products/tees/Basic Red Tee.webp"],lead:"Sorcerer Killer from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"tee-true-warrior",cat:"tees",name:"True Warrior",price:750,colour:"Original",sizes:["M","L","XL","XXL"],imgs:["images/products/tees/Basic Red Tee.webp"],lead:"True Warrior from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"set-naruto",cat:"sets",name:"Set Naruto",price:790,colour:"Original",sizes:["One size"],imgs:["images/products/accessories/NARUTO68.webp","images/products/accessories/Naruto vs Sasuke.webp"],lead:"Set Naruto from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"set-sasuke",cat:"sets",name:"Set SasuKe",price:790,colour:"Original",sizes:["One size"],imgs:["images/products/accessories/Naruto vs Sasuke.webp"],lead:"Set SasuKe from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"tee-naruto",cat:"tees",name:"Naruto",price:750,colour:"Original",sizes:["M","L","XL","XXL"],imgs:["images/products/accessories/NARUTO68.webp","images/products/accessories/Naruto vs Sasuke.webp"],lead:"Naruto from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"tee-luffy-golden-boy",cat:"tees",name:"LUFFY: THE GOLDEN BOY",price:750,colour:"Original",sizes:["M","L","XL","XXL"],imgs:["images/products/accessories/LUFFY STRAW HAT.webp"],lead:"LUFFY: THE GOLDEN BOY from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"tee-luffy-thunder",cat:"tees",name:"LUFFY THUNDER",price:750,colour:"Original",sizes:["M","L","XL","XXL"],imgs:["images/products/accessories/LUFFY STRAW HAT.webp"],lead:"LUFFY THUNDER from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"tee-un-chained",cat:"tees",name:"Unchained",price:750,colour:"Original",sizes:["M","L","XL","XXL"],imgs:["images/products/tees/Basic Red Tee.webp"],lead:"Unchained from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"tee-forest-division",cat:"tees",name:"Forest Division",price:750,colour:"Original",sizes:["M","L","XL","XXL"],imgs:["images/products/tees/Basic Red Tee.webp"],lead:"Forest Division from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"tee-eclipse-04",cat:"tees",name:"Eclipse.04",price:750,colour:"Original",sizes:["M","L","XL","XXL"],imgs:["images/products/tees/Basic Red Tee.webp"],lead:"Eclipse.04 from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"sticker-crossed-reaper-sigil",cat:"accessories",name:"Crossed Reaper Sigil",price:15,colour:"Original",sizes:["M","L","XL","XXL"],imgs:["images/products/tees/product-015.png","images/products/sweatshirts/product-022.jpg","images/products/hoodies/product-003.jpg"],lead:"Crossed Reaper Sigil from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"sticker-hunter-logo-alt",cat:"accessories",name:"Hunter Logo Sticker",price:15,colour:"Original",sizes:["M","L","XL","XXL"],imgs:["images/products/accessories/HUNTERX10_fe532896-7d26-44cd-b7cc-6726532209e8.webp","images/products/accessories/HUNTERX23.webp","images/products/accessories/HUNTERX7_2822d5de-7861-4b7a-aef3-737d6313eaff.webp"],lead:"Hunter Logo Sticker from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"tee-gaara",cat:"tees",name:"Gaara",price:750,colour:"Original",sizes:["M","L","XL","XXL"],imgs:["images/products/tees/Basic Red Tee.webp"],lead:"Gaara from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"tee-true-warrior-alt",cat:"tees",name:"True Warrior Tee",price:750,colour:"Original",sizes:["M","L","XL","XXL"],imgs:["images/products/tees/Basic Red Tee.webp"],lead:"True Warrior Tee from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"tee-zoro-ashura-mode-alt",cat:"tees",name:"Zoro Ashura Mode Tee",price:750,colour:"Original",sizes:["M","L","XL","XXL"],imgs:["images/products/pants/zoro-joggers-zams-2.webp","images/products/pants/zoro-joggers-zams-4-157115_76ef4447-807d-4317-bba7-69c34f3d49e9.webp"],lead:"Zoro Ashura Mode Tee from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"tee-bleach-v1-alt",cat:"tees",name:"Bleach v1 Tee",price:750,colour:"Original",sizes:["M","L","XL","XXL"],imgs:["images/products/accessories/BLEACH37.webp","images/products/accessories/BLEACH43.webp","images/products/accessories/BLEACH44_f4a01e33-5ffe-490b-a5b4-7f9a618cbb0c.webp"],lead:"Bleach v1 Tee from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"tee-yhwach-quincy-king-alt",cat:"tees",name:"Yhwach Quincy King Tee",price:750,colour:"Original",sizes:["M","L","XL","XXL"],imgs:["images/products/tees/Basic Red Tee.webp"],lead:"Yhwach Quincy King Tee from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"hoodie-paradis-quarter-zip",cat:"hoodies",name:"Paradis Quarter Zip-Up",price:999,colour:"Original",sizes:["M","L","XL","XXL"],imgs:["images/products/hoodies/freedom-black-hoodie-front.webp","images/products/hoodies/freedom-black-hoodie-side.webp"],lead:"Paradis Quarter Zip-Up from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"hoodie-hxh-mission-chimera",cat:"hoodies",name:"HxH mission Chimera",price:999,colour:"Original",sizes:["M","L","XL","XXL"],imgs:["images/products/accessories/HxH Last Mission.webp"],lead:"HxH mission Chimera from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"hoodie-strawhat-solidarity-alt",cat:"hoodies",name:"Strawhat Solidarity Hoodie",price:999,colour:"Original",sizes:["M","L","XL","XXL"],imgs:["images/products/hoodies/freedom-black-hoodie-front.webp","images/products/hoodies/freedom-black-hoodie-side.webp"],lead:"Strawhat Solidarity Hoodie from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"hoodie-gyro-zeppeli-alt",cat:"hoodies",name:"Gyro Zeppeli Hoodie",price:1049,colour:"Original",sizes:["M","L","XL","XXL"],imgs:["images/products/hoodies/freedom-black-hoodie-front.webp","images/products/hoodies/freedom-black-hoodie-side.webp"],lead:"Gyro Zeppeli Hoodie from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"hoodie-ulquiorra-cifer-alt",cat:"hoodies",name:"Ulquiorra Cifer Hoodie",price:999,colour:"Original",sizes:["M","L","XL","XXL"],imgs:["images/products/hoodies/freedom-black-hoodie-side.webp","images/products/hoodies/freedom-black-hoodie-front.webp"],lead:"Ulquiorra Cifer Hoodie from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"jacket-guts-puffer",cat:"jackets",name:"Guts Puffer Jacket - Berserk",price:1499,colour:"Original",sizes:["M","L","XL","XXL"],imgs:["images/products/hoodies/freedom-black-hoodie-side.webp","images/products/hoodies/freedom-black-hoodie-front.webp"],lead:"Guts Puffer Jacket - Berserk from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"jacket-phantom-troupe-varsity-alt",cat:"jackets",name:"Phantom Troupe Varsity",price:1399,colour:"Original",sizes:["M","L","XL","XXL"],imgs:["images/products/hoodies/freedom-black-hoodie-side.webp","images/products/hoodies/freedom-black-hoodie-front.webp"],lead:"Phantom Troupe Varsity from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"jacket-itachi-varsity-alt",cat:"jackets",name:"Itachi Varsity",price:1399,colour:"Original",sizes:["M","L","XL","XXL"],imgs:["images/products/hoodies/freedom-black-hoodie-front.webp","images/products/hoodies/freedom-black-hoodie-side.webp"],lead:"Itachi Varsity from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"jacket-freedom-mint-green-alt",cat:"jackets",name:"Freedom Mint-Green Jacket",price:1049,colour:"Original",sizes:["M","L","XL","XXL"],imgs:["images/products/hoodies/freedom-black-hoodie-front.webp","images/products/hoodies/freedom-black-hoodie-side.webp","images/products/hoodies/green-1.webp"],lead:"Freedom Mint-Green Jacket from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"tee-custom-gon",cat:"tees",name:"Custom Gon Tee",price:750,colour:"Original",sizes:["M","L","XL","XXL"],imgs:["images/products/tees/Basic Red Tee.webp"],lead:"Custom Gon Tee from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"tee-winds-of-rage",cat:"tees",name:"Winds of Rage Tee",price:750,colour:"Original",sizes:["M","L","XL","XXL"],imgs:["images/products/tees/Basic Red Tee.webp"],lead:"Winds of Rage Tee from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"tee-sukuna-v1-alt",cat:"tees",name:"Sukuna v1 Tee",price:750,colour:"Original",sizes:["M","L","XL","XXL"],imgs:["images/products/tees/Basic Red Tee.webp"],lead:"Sukuna v1 Tee from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"tee-zoro-exclusive",cat:"tees",name:"Zoro Exclusive",price:750,colour:"Original",sizes:["M","L","XL","XXL"],imgs:["images/products/pants/zoro-joggers-zams-2.webp","images/products/pants/zoro-joggers-zams-4-157115_76ef4447-807d-4317-bba7-69c34f3d49e9.webp"],lead:"Zoro Exclusive from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"tee-zoro-fandom-edition",cat:"tees",name:"Zoro Fandom Edition",price:750,colour:"Original",sizes:["M","L","XL","XXL"],imgs:["images/products/jeans/fandom-balloon-jeans-1.webp","images/products/jeans/fandom-balloon-jeans-2.webp","images/products/jeans/fandom-black-balloon-0.webp"],lead:"Zoro Fandom Edition from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"tee-legendary-broly",cat:"tees",name:"LEGENDARY BROLY TEE",price:750,colour:"Original",sizes:["M","L","XL","XXL"],imgs:["images/products/tees/Basic Red Tee.webp"],lead:"LEGENDARY BROLY TEE from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."}
];
const extraCatalogue = [
 {id:"arc-jacket",cat:"jackets",name:"Arc Jacket",price:2350,colour:"Black",imgs:["images/products/hoodies/freedom-black-hoodie-side.webp","images/products/hoodies/freedom-black-hoodie-front.webp"],lead:"A clean outer layer with a structured shape.",details:["Relaxed fit","Minimal finish"],fabric:"Care details to be confirmed."},
 {id:"mono-sweatshirt",cat:"sweatshirts",name:"Mono Sweatshirt",price:1650,colour:"Graphite",imgs:["images/products/hoodies/freedom-black-hoodie-front.webp","images/products/hoodies/freedom-black-hoodie-side.webp"],lead:"A simple heavyweight layer for everyday wear.",details:["Relaxed fit","Ribbed cuffs"],fabric:"Care details to be confirmed."},
 {id:"arc-jeans",cat:"jeans",name:"Arc Denim",price:1750,colour:"Washed Black",imgs:["images/products/jeans/fandom-balloon-jeans-1.webp","images/products/jeans/fandom-balloon-jeans-2.webp"],lead:"A relaxed denim silhouette.",details:["Relaxed fit","Classic five-pocket styling"],fabric:"Care details to be confirmed."},
 {id:"mono-knit",cat:"knitwear",name:"Mono Knit",price:1900,colour:"Onyx",imgs:["images/products/hoodies/freedom-black-hoodie-front.webp","images/products/hoodies/freedom-black-hoodie-side.webp"],lead:"A minimal knit layer.",details:["Soft hand feel","Clean silhouette"],fabric:"Care details to be confirmed."}
];
const PRODUCT_IMAGE_ASSIGNMENTS = {
  "heavy-straight-pants-gray": [
    "images/products/pants/IMG_6315_1.webp",
    "images/products/pants/IMG_6317_1.webp",
    "images/products/pants/IMG_6319_1.webp"
  ],
  "heavy-straight-pants-black": [
    "images/products/pants/IMG_9484_c23e7cee-5be0-4c26-84af-0bf259db0c56.webp",
    "images/products/pants/GenerativeFill6.webp",
    "images/products/pants/IMG_9488_980e0605-174c-41f7-b503-f3ab17ff945a.webp",
    "images/products/pants/GenerativeFill8_d7da2447-16e3-459d-b6da-178ed08156ec.webp"
  ],
  "sweatpants-brown": [
    "images/products/pants/2_e18726f8-e251-40ba-9cee-30851b69b2ac.webp",
    "images/products/pants/4_8cb9d022-dde1-430b-ae50-01a115ba6f6b.webp",
    "images/products/pants/1_0ac364fe-e208-49c5-9403-5221ebfc3d19.webp",
    "images/products/pants/3_1d6a7335-c0e6-4cfb-b894-beb804c1701a.webp"
  ],
  "light-straight-pants-gray": [
    "images/products/pants/IMG_9399.webp",
    "images/products/pants/GenerativeFill7_d414b0ba-d80c-40e9-b87c-315deddd7b04.webp",
    "images/products/pants/IMG_9409.webp",
    "images/products/pants/IMG_9420.webp"
  ],
  "light-straight-pants-brown": [
    "images/products/pants/GenerativeFill2_6d2dcee7-787a-4d26-8e35-6c6e0cdfa458.webp",
    "images/products/pants/GenerativeFill_fd14b58f-4b9b-4c72-bce7-e9150e2aaf0d.webp",
    "images/products/pants/IMG_9453.webp"
  ],
  "basic-pants": [
    "images/products/pants/black.webp",
    "images/products/pants/beige.webp",
    "images/products/pants/gray.webp",
    "images/products/pants/navy-blue.webp"
  ],
  "zoro-pants": [
    "images/products/pants/zoro-joggers-zams-2.webp",
    "images/products/pants/zoro-joggers-zams-4-157115_76ef4447-807d-4317-bba7-69c34f3d49e9.webp"
  ],
  "chains-pants": [
    "images/products/pants/GenerativeFill3_faabf748-f6e6-4d00-9cb9-6cdfbc6b878c.webp",
    "images/products/pants/GenerativeFill_9d42c636-9ade-487d-abbc-1eaa60e72605.webp",
    "images/products/pants/IMG_9425.webp",
    "images/products/pants/GenerativeFill2_4d5cc54e-fc58-4213-afb4-1fc703eb02a2.webp"
  ],
  "balloon-jeans-olive": [
    "images/products/jeans/fandom-balloon-jeans-1.webp",
    "images/products/jeans/fandom-balloon-jeans-2.webp"
  ],
  "balloon-jeans-indigo": [
    "images/products/jeans/1000240765.webp",
    "images/products/jeans/1000240764.webp",
    "images/products/jeans/1000240766.webp"
  ],
  "balloon-jeans-light-blue": [
    "images/products/jeans/fandom-light-blue-balloon-1.webp",
    "images/products/jeans/fandom-light-blue-balloon-detail.webp"
  ],
  "balloon-jeans-black": [
    "images/products/jeans/fandom-black-balloon-0.webp",
    "images/products/jeans/fandom-black-balloon-2.webp"
  ],
  "musashi-miyamoto-tee": [
    "images/products/tees/IMG_0156.webp",
    "images/products/tees/IMG_0159.webp",
    "images/products/tees/IMG_0158.webp"
  ],
  "naruto-acid": [
    "images/products/tees/ChatGPT_Image_Aug_25_2026_06_15_02_AM.webp",
    "images/products/tees/ChatGPT_Image_Aug_25_2026_06_17_34_AM.webp"
  ],
  "tee-gojo-v3": [
    "images/products/tees/IMG_0172.webp",
    "images/products/tees/IMG_0160.webp",
    "images/products/tees/IMG_0162.webp"
  ],
  "tee-limitless": [
    "images/products/tees/ChatGPTImageSep5_2026_04_32_46PM_1.webp",
    "images/products/tees/ChatGPTImageSep5_2026_04_32_46PM_2.webp",
    "images/products/tees/ChatGPTImageSep5_2026_04_16_57PM.webp"
  ],
  "kenpachi-zaraki": [
    "images/products/tees/IMG_8050.webp",
    "images/products/tees/IMG_8052.webp",
    "images/products/tees/IMG_8053.webp"
  ],
  "brutal-crest-mark": [
    "images/products/accessories/Brutal Crest Mark.webp"
  ],
  "demon-slayer-pants": [
    "images/products/pants/demon-slayer-joggers-zams-1.webp",
    "images/products/pants/demon-slayer-joggers-zams-2.webp"
  ],
  "frame-anime-university": [
    "images/products/accessories/Anime University.webp"
  ],
  "keychain-luffy-straw-hat": [
    "images/products/accessories/LUFFY STRAW HAT.webp"
  ],
  "frame-hxh-last-mission": [
    "images/products/accessories/HxH Last Mission.webp"
  ],
  "frame-dbz-v1": [
    "images/products/accessories/DBZ v1.webp"
  ],
  "frame-naruto-vs-sasuke": [
    "images/products/accessories/Naruto vs Sasuke.webp"
  ],
  "frame-levi-from-aot": [
    "images/products/accessories/Levi from AOT.webp"
  ],
  "basic-red-tee": [
    "images/products/tees/Basic Red Tee.webp",
    "images/products/tees/4_79d81d03-a413-443b-80c0-7e588f0fdf52.webp",
    "images/products/tees/1_e44161ff-393f-4e8b-a6c6-25ad159b43ae.webp",
    "images/products/tees/IMG_9375.webp",
    "images/products/tees/IMG_9378.webp",
    "images/products/tees/3_b234d50f-1b04-4497-9736-2440d2ccd206.webp",
    "images/products/tees/4_12169467-4d33-4720-870b-27ee45971f96.webp",
    "images/products/tees/1_40eb9d93-d52d-4b2f-8d01-6cbab7f2d9c8.webp",
    "images/products/tees/IMG_5058.webp",
    "images/products/tees/IMG_5061.webp",
    "images/products/tees/IMG_5060.webp"
  ],
  "basic-pink-tee": [
    "images/products/tees/2_f350efca-1c15-4772-be5d-75a216bd73d7.webp",
    "images/products/tees/3_ef334ef5-769d-4689-883f-616130e62659.webp",
    "images/products/tees/4_bd1741a5-401b-4b09-b3f0-54e9440b625c.webp"
  ],
  "basic-brown-tee": [
    "images/products/tees/3_47d517b6-7125-42c9-b3c1-8d73593da7c4.webp",
    "images/products/tees/4_79c9cd7d-b45d-4a3d-815f-df7681ceab1a.webp"
  ],
  "basic-yellow-tee": [
    "images/products/tees/1_b0b93abc-cb50-42f4-8724-da4cf1be0417.webp",
    "images/products/tees/2_afaaf9b2-8a33-4646-b728-8f5f25e1ee34.webp",
    "images/products/tees/3_c6a36657-4e1e-4d35-a021-ff99a09abe1c.webp"
  ],
  "basic-gray-tee": [
    "images/products/tees/gray_deec856b-2024-452f-bdab-94fdc273bccf.webp",
    "images/products/tees/4_8b24d7e5-bd41-4cab-86ef-bfa44478bb2e.webp",
    "images/products/tees/5_d72671d3-598b-47b5-906d-565f93d55631.webp"
  ],
  "cap-survey-corps": [
    "images/products/accessories/exec-84bc7b37-d182-43d7-bdb4-b21e0cbbc7d3.webp",
    "images/products/accessories/exec-d34e5765-f4bf-491c-ba81-e94b4c454bd1.webp",
    "images/products/accessories/exec-ec89a2e5-a24f-480c-9416-5088c0b1b95f.webp"
  ],
  "one-piece-cap": [
    "images/products/accessories/CodexImageAug19_2026_04_10_28PM.webp",
    "images/products/accessories/exec-243547fb-5f6a-421f-b88b-77ca50687929.webp"
  ],
  "hidden-leaf-cap": [
    "images/products/accessories/exec-1156c395-81d8-4dce-97b4-530b9fc7ca96.webp",
    "images/products/accessories/exec-4327dd0d-5ea1-4c16-8bce-d8d32ce4b4f4.webp",
    "images/products/accessories/exec-a8e98b6c-0f58-4485-9a98-434de0befd45.webp"
  ],
  "cap-uchiha-clan": [
    "images/products/accessories/CodexImageAug19_2026_07_38_09PM.webp",
    "images/products/accessories/exec-41a6aae4-f436-44b6-9f3b-3fff7b2bab19.webp"
  ],
  "cap-death-note": [
    "images/products/accessories/CodexImageAug30_2026_06_32_43PM.webp",
    "images/products/accessories/CodexImageAug30_2026_06_33_13PM.webp",
    "images/products/accessories/CodexImageAug30_2026_06_38_54PM.webp"
  ],
  "paradis-quarter-zip": [
    "images/products/sweatshirts/1_0f76af01-5bd8-46f1-90da-595367399b8c.webp"
  ],
  "kaiju-no-8": [
    "images/products/tees/2_6a922374-909c-4ba2-bc0d-d47ea33b11d9.webp"
  ],
  "white-basic-hoodie": [
    "images/products/hoodies/1_093ecdc7-baa3-4271-bf9d-6fec95a3460c.webp"
  ],
  "pink-basic-hoodie": [
    "images/products/hoodies/09C9C0DF-0A3E-457D-B301-761AED39C787.jpg"
  ],
  "basic-baby-blue-tee": [
    "images/products/tees/1_277cda11-3f8f-40fe-9dd1-2587c5e3d4c6.webp"
  ],
  "lamp-batman": [
    "images/products/accessories/Y7WwQge08G7rpNAr.webp"
  ],
  "hoodie-freedom-black": [
    "images/products/hoodies/freedom-black-hoodie-front.webp",
    "images/products/hoodies/1_79059f2c-80e9-40f7-8355-4d1a2380c3ad.webp",
    "images/products/hoodies/freedom-black-hoodie-side.webp"
  ],
  "crimson-cloud-sticker": [
    "images/products/accessories/NARUTO68.webp"
  ],
  "tee-gaara": [
    "images/products/tees/IMG_4983.webp",
    "images/products/tees/IMG_4986.webp",
    "images/products/tees/IMG_4985.webp"
  ],
  "tee-naruto": [
    "images/products/tees/IMG_4960.webp",
    "images/products/tees/IMG_4963.webp",
    "images/products/tees/IMG_4962.webp"
  ],
  "cursed-arm-manifestation": [
    "images/products/accessories/JUJUTSU76.webp"
  ],
  "crimson-crescent-blade": [
    "images/products/accessories/BLEACH37.webp"
  ],
  "sticker-hunter-logo": [
    "images/products/accessories/HUNTERX23.webp"
  ],
  "winged-vanguard-sticker": [
    "images/products/accessories/ATTACK-ON-TITAN46.webp"
  ],
  "sticker-hunter-logo-alt": [
    "images/products/accessories/HUNTERX7_2822d5de-7861-4b7a-aef3-737d6313eaff.webp"
  ],
  "joyful-ascension-sticker": [
    "images/products/accessories/ONEPIECE63.webp",
    "images/products/accessories/ONEPIECE75.webp"
  ],
  "blue-lock-sweater": [
    "images/products/sweatshirts/1_cccd4eb6-2dd4-4e57-b0d8-d5f86ed73a09.webp",
    "images/products/sweatshirts/2_358d1463-fd76-40ef-b8d7-d83c179bcbcb.webp",
    "images/products/sweatshirts/3_91378bbc-6a27-4ada-8735-a8b5a290e197.webp",
    "images/products/sweatshirts/IMG_9488.webp",
    "images/products/sweatshirts/IMG_9487.webp",
    "images/products/sweatshirts/IMG_9485.webp"
  ],
  "tee-99-killua-long-sleeve": [
    "images/products/tees/IMG_6415.webp",
    "images/products/tees/IMG_6418.webp",
    "images/products/tees/IMG_6417.webp"
  ],
  "phantom-troupe-varsity": [
    "images/products/jackets/4_d3a87af7-6c59-4882-803d-68ab03c56c40.webp",
    "images/products/jackets/3_caf5ee8d-25e9-4fc9-9d22-17f74fee73b1.webp",
    "images/products/jackets/2_069d2e02-b7fd-4cee-86b2-5d05ef616d5f.webp"
  ],
  "itachi-varsity": [
    "images/products/jackets/1_b761b95f-16a4-4944-964e-a91c088b2b0b.webp",
    "images/products/jackets/4_6e579b40-48d1-4628-b03f-d1a65511032b.webp"
  ],
  "red-zipper-jacket": [
    "images/products/jackets/3_fda13ac1-8db3-485a-9cb3-24f56ec506b3.webp"
  ],
  "ultimate-berserk-hoodie": [
    "images/products/hoodies/1_a0525e22-2f5d-494c-8a58-a7850cdaf97f.webp",
    "images/products/hoodies/3_07f4cae0-822f-4a2c-945f-f8d30e17b4b2.webp",
    "images/products/hoodies/2_2485d3f4-b8bb-4d52-a221-0ef7a6995e47.webp"
  ],
  "basic-green-tee": [
    "images/products/tees/ChatGPT_Image_Aug_25_2026_06_02_02_AM.webp",
    "images/products/tees/IMG_5057.webp",
    "images/products/tees/IMG_5055.webp"
  ],
  "bizarre-bloodline-zip-hoodie": [
    "images/products/jackets/47D56C3E-1FE0-4E6C-A28E-FF81CE3921F5.webp",
    "images/products/jackets/01B8B633-DC04-4031-912D-41D5A6837481.webp",
    "images/products/jackets/0E796B08-39F4-4FA1-BFB6-F0602D46E2E8.webp"
  ],
  "gyro-zeppeli": [
    "images/products/hoodies/2_f0aafd42-698f-469c-96dc-6534b9503b24.webp",
    "images/products/hoodies/1_3b3d0f65-df63-487e-b90a-5cf40248cce0.webp",
    "images/products/hoodies/3_6bcb824b-99cb-4f73-8c5c-0f8b3e7ac8ab.webp"
  ],
  "utility-jogger-black": [
    "images/products/pants/IMG_6262.webp",
    "images/products/pants/IMG_6261.webp",
    "images/products/pants/IMG_6263.webp"
  ],
  "utility-jogger-silver": [
    "images/products/pants/Hue_Saturation1.webp",
    "images/products/pants/Hue_Saturation1copy2.webp",
    "images/products/pants/Hue_Saturation1copy.webp"
  ],
  "socks-one-piece": [
    "images/products/accessories/5_b8cbf7c7-565e-4c29-8dd1-35ffa16cb2b6.webp"
  ],
  "basic-black-tee": [
    "images/products/tees/IMG_4951.webp",
    "images/products/tees/IMG_4948.webp",
    "images/products/tees/IMG_4950.webp"
  ],
  "tee-gyomei-red": [
    "images/products/tees/3_c6c2aa65-a64b-495a-ab05-3c3d7a484774.webp",
    "images/products/tees/4_ae80ab54-c25a-4f6d-8ccc-f37e19227304.webp",
    "images/products/tees/4_6c82151d-88ab-426e-b8b7-17ba0bbf32d2.webp"
  ],
  "sukuna-v1-tee": [
    "images/products/tees/IMG_6407.webp",
    "images/products/tees/IMG_6410.webp",
    "images/products/tees/IMG_6409.webp"
  ],
  "spiders-hoodie": [
    "images/products/hoodies/1_478ecea0-5daf-466a-9378-d8258826d839.webp",
    "images/products/hoodies/2_add76b38-f35c-462d-82d0-4f783d9f264d.webp",
    "images/products/hoodies/3_ac8a2048-c868-44c6-ac3e-fcc6dda8498f.webp"
  ],
  "ulquiorra-cifer": [
    "images/products/hoodies/IMG_6248.webp",
    "images/products/hoodies/IMG_6251.webp",
    "images/products/hoodies/IMG_6250.webp"
  ],
  "akatsuki-cap": [
    "images/products/accessories/6736ab67-a573-4612-b4ef-64d7a3ac2234.webp",
    "images/products/accessories/b9fb0c63-724f-4715-85f3-e8f4030b47af.webp",
    "images/products/accessories/9ccaadbc-36dd-4382-8287-415f6c4bc45e.webp"
  ],
  "hollow-mask-icon": [
    "images/products/accessories/BLEACH44_f4a01e33-5ffe-490b-a5b4-7f9a618cbb0c.webp"
  ],
  "black-tokyo-ghoul": [
    "images/products/tees/IMG_6228.webp",
    "images/products/tees/IMG_6231.webp",
    "images/products/tees/IMG_6230.webp"
  ],
  "green-gon": [
    "images/products/tees/IMG_5080_1.webp",
    "images/products/tees/IMG_5082_1.webp",
    "images/products/tees/IMG_5081_1.webp"
  ],
  "aot-green-zip-up": [
    "images/products/sweatshirts/6.webp",
    "images/products/sweatshirts/5_07d327e0-83a0-4246-9547-48888bf4e79e.webp"
  ],
  "custom-gon-tee": [
    "images/products/tees/IMG_4968.webp",
    "images/products/tees/IMG_4971.webp",
    "images/products/tees/IMG_4970.webp"
  ],
  "attack-on-titan-accessory": [
    "images/products/accessories/59.webp"
  ],
  "sukuna-cap": [
    "images/products/accessories/3_a5f71c27-778e-4211-9463-50010eb7513b.webp",
    "images/products/accessories/1_dd836ff2-bfe5-43a1-8e23-9fec58dd1c0c.webp",
    "images/products/accessories/2_975fd221-1f91-426b-8735-1765b7c0004e.webp"
  ],
  "tee-baki": [
    "images/products/tees/Baki_4_4e83a602-d975-451e-b444-1fb012011f35.webp",
    "images/products/tees/Baki_08209954-5fa1-43f4-b508-26100920e4b9.webp"
  ],
  "hisoka-tee-alt": [
    "images/products/tees/IMG_4987.webp",
    "images/products/tees/IMG_4990.webp",
    "images/products/tees/IMG_4989.webp"
  ],
  "rambling-aot": [
    "images/products/hoodies/3_c65f451a-034d-4680-8a92-b1e1a8cfd6e0.webp",
    "images/products/hoodies/4_da39e86b-2c7d-4c65-937d-34f82b571924.webp",
    "images/products/hoodies/2_472375c4-ce33-4a5e-b59a-8e657abe9227.webp"
  ],
  "phantom-troupe-spiders-tee": [
    "images/products/tees/IMG_4920_5f728230-fa29-43fc-82c8-386e2a7ced18.webp",
    "images/products/tees/IMG_4923_008cb249-7d97-4942-9579-9d5dc5215cca.webp",
    "images/products/tees/IMG_4922_d0b81d37-4c1e-4f43-8903-eb5ce66f2ddb.webp"
  ],
  "beige-basic-hoodie": [
    "images/products/hoodies/IMG_5039.webp",
    "images/products/hoodies/IMG_5010.webp",
    "images/products/hoodies/IMG_5041.webp"
  ],
  "black-basic-hoodie-alt": [
    "images/products/hoodies/IMG_6264.webp",
    "images/products/hoodies/IMG_6267.webp",
    "images/products/hoodies/IMG_6266.webp"
  ],
  "zipper-brown": [
    "images/products/hoodies/IMG_5042.webp",
    "images/products/hoodies/IMG_5045.webp",
    "images/products/hoodies/IMG_5044.webp"
  ],
  "pink-zipper": [
    "images/products/hoodies/3_1248e912-6088-40e1-ae35-bb9528cebae1.webp",
    "images/products/hoodies/4_a3827325-61ee-4ab6-b914-8072912ee743.webp",
    "images/products/hoodies/1_5b37f884-4496-4916-b482-e40890d7d63c.webp"
  ],
  "green-zipper-jacket": [
    "images/products/jackets/3_ff6be0e1-233e-48fb-9836-a22babcf07e8.webp",
    "images/products/jackets/4_3185c370-adec-4f04-a485-87a3c806d527.webp",
    "images/products/jackets/1_a2ad3d16-0458-4be4-8332-25fc5e7f55e0.webp"
  ],
  "hunter-license-card": [
    "images/products/accessories/HUNTERX10_fe532896-7d26-44cd-b7cc-6726532209e8.webp"
  ],
  "tee-griffith-v1": [
    "images/products/tees/IMG_1531.webp",
    "images/products/tees/IMG_1540.webp",
    "images/products/tees/IMG_1533.webp"
  ],
  "asta-red": [
    "images/products/tees/IMG_4964.webp",
    "images/products/tees/IMG_4967.webp",
    "images/products/tees/IMG_4966.webp"
  ],
  "tee-blind-faith": [
    "images/products/tees/IMG_4991.webp",
    "images/products/tees/IMG_4994.webp",
    "images/products/tees/IMG_4993.webp"
  ],
  "chainsaw-man-premium": [
    "images/products/tees/IMG_6244.webp",
    "images/products/tees/IMG_6247.webp",
    "images/products/tees/IMG_6246.webp"
  ],
  "berserk-v4": [
    "images/products/tees/IMG_6232.webp",
    "images/products/tees/IMG_6235.webp",
    "images/products/tees/IMG_6234.webp"
  ],
  "patched-one-piece-hoodie": [
    "images/products/hoodies/ChatGPTImageNov10_2026_05_42_26AM.webp",
    "images/products/hoodies/ChatGPTImageNov10_2026_05_42_32AM.webp",
    "images/products/hoodies/3_a7147da2-c023-4efb-995b-c1a00b6b8756.webp",
    "images/products/hoodies/4_20925326-a026-4ddd-8d27-58fd1838f181.webp"
  ]
};
const productImageLimit = product => product.id === "heavy-straight-pants-black" ? 4 : 3;
PRODUCTS.forEach(product => {
  const assignedImages = PRODUCT_IMAGE_ASSIGNMENTS[product.id];
  if (assignedImages) {
    product.imgs = [...new Set([...assignedImages, ...(product.imgs || [])])].slice(0, productImageLimit(product));
  } else {
    product.imgs = [...new Set(product.imgs || [])].slice(0, productImageLimit(product));
  }
});

const PRODUCT_TAGS = {
"tee-luffy-golden-boy":{typeTags:["tees"],animeTags:["One Piece"],collectionTags:[]},
"tee-luffy-thunder":{typeTags:["tees"],animeTags:["One Piece"],collectionTags:[]},
"tee-un-chained":{typeTags:["tees"],animeTags:["Bleach"],collectionTags:[]},
"tee-forest-division":{typeTags:["tees"],animeTags:["Bleach"],collectionTags:[]},
"tee-eclipse-04":{typeTags:["tees"],animeTags:["Bleach"],collectionTags:[]},
"sticker-crossed-reaper-sigil":{typeTags:["accessories"],animeTags:["Bleach"],collectionTags:[]},
"sticker-hunter-logo-alt":{typeTags:["accessories"],animeTags:["Hunter X Hunter"],collectionTags:[]},
"tee-gaara":{typeTags:["tees"],animeTags:["Naruto"],collectionTags:[]},
"tee-true-warrior-alt":{typeTags:["tees"],animeTags:["Vinland Saga"],collectionTags:[]},
"tee-zoro-ashura-mode-alt":{typeTags:["tees"],animeTags:["One Piece"],collectionTags:[]},
"tee-bleach-v1-alt":{typeTags:["tees"],animeTags:["Bleach"],collectionTags:[]},
"tee-yhwach-quincy-king-alt":{typeTags:["tees"],animeTags:["Bleach"],collectionTags:[]},
"hoodie-paradis-quarter-zip":{typeTags:["hoodies"],animeTags:["Attack on Titan"],collectionTags:[]},
"hoodie-hxh-mission-chimera":{typeTags:["hoodies"],animeTags:["Hunter X Hunter"],collectionTags:[]},
"hoodie-strawhat-solidarity-alt":{typeTags:["hoodies"],animeTags:["One Piece"],collectionTags:[]},
"hoodie-gyro-zeppeli-alt":{typeTags:["hoodies"],animeTags:["JoJo's Bizarre Adventure"],collectionTags:[]},
"hoodie-ulquiorra-cifer-alt":{typeTags:["hoodies"],animeTags:["Bleach"],collectionTags:[]},
"jacket-guts-puffer":{typeTags:["jackets"],animeTags:["Berserk"],collectionTags:[]},
"jacket-phantom-troupe-varsity-alt":{typeTags:["jackets"],animeTags:["Hunter X Hunter"],collectionTags:[]},
"jacket-itachi-varsity-alt":{typeTags:["jackets"],animeTags:["Naruto"],collectionTags:[]},
"jacket-freedom-mint-green-alt":{typeTags:["jackets"],animeTags:["Attack on Titan"],collectionTags:[]},
"tee-custom-gon":{typeTags:["tees"],animeTags:["Hunter X Hunter"],collectionTags:[]},
"tee-winds-of-rage":{typeTags:["tees"],animeTags:[],collectionTags:[]},
"tee-sukuna-v1-alt":{typeTags:["tees"],animeTags:["Jujutsu Kaisen"],collectionTags:[]},
"tee-zoro-exclusive":{typeTags:["tees"],animeTags:["One Piece"],collectionTags:[]},
"tee-zoro-fandom-edition":{typeTags:["tees"],animeTags:["One Piece"],collectionTags:[]},
"tee-legendary-broly":{typeTags:["tees"],animeTags:["Dragon Ball Z"],collectionTags:[]},

"cap-survey-corps":{typeTags:["accessories"],animeTags:["Attack on Titan"],collectionTags:[]},
"cap-uchiha-clan":{typeTags:["accessories"],animeTags:["Naruto"],collectionTags:[]},
"cap-soul-eater":{typeTags:["accessories"],animeTags:[],collectionTags:[]},
"cap-death-note":{typeTags:["accessories"],animeTags:["Death Note"],collectionTags:[]},
"cap-frieren":{typeTags:["accessories"],animeTags:["Frieren"],collectionTags:[]},
"sticker-hunter-logo":{typeTags:["accessories"],animeTags:["Hunter X Hunter"],collectionTags:[]},
"socks-death-note":{typeTags:["accessories"],animeTags:["Death Note"],collectionTags:[]},
"tee-feitan-exe":{typeTags:["tees"],animeTags:["Hunter X Hunter"],collectionTags:[]},
"tee-blind-faith":{typeTags:["tees"],animeTags:["Hunter X Hunter"],collectionTags:[]},
"tee-limitless":{typeTags:["tees"],animeTags:["Jujutsu Kaisen"],collectionTags:[]},
"tee-toji-zenin-reject":{typeTags:["tees"],animeTags:["Jujutsu Kaisen"],collectionTags:[]},
"tee-sorcerer-killer":{typeTags:["tees"],animeTags:["Jujutsu Kaisen"],collectionTags:[]},
"tee-true-warrior":{typeTags:["tees"],animeTags:["Vinland Saga"],collectionTags:[]},
"set-naruto":{typeTags:["sets"],animeTags:["Naruto"],collectionTags:[]},
"set-sasuke":{typeTags:["sets"],animeTags:["Naruto"],collectionTags:[]},
"tee-naruto":{typeTags:["tees"],animeTags:["Naruto"],collectionTags:[]},

"keychain-berserk":{typeTags:["accessories"],animeTags:["Berserk"],collectionTags:[]},
"keychain-luffy-straw-hat":{typeTags:["accessories"],animeTags:["One Piece"],collectionTags:[]},
"frame-anime-university":{typeTags:["accessories"],animeTags:[],collectionTags:[]},
"frame-hxh-last-mission":{typeTags:["accessories"],animeTags:["Hunter X Hunter"],collectionTags:[]},
"frame-dbz-v1":{typeTags:["accessories"],animeTags:["Dragon Ball Z"],collectionTags:[]},
"frame-naruto-vs-sasuke":{typeTags:["accessories"],animeTags:["Naruto"],collectionTags:[]},
"frame-levi-from-aot":{typeTags:["accessories"],animeTags:["Attack on Titan"],collectionTags:[]},
"lamp-goku-super-saiyajin":{typeTags:["accessories"],animeTags:["Dragon Ball Z"],collectionTags:[]},
"lamp-luffy-gear-5":{typeTags:["accessories"],animeTags:["One Piece"],collectionTags:[]},
"lamp-zoro":{typeTags:["accessories"],animeTags:["One Piece"],collectionTags:[]},
"lamp-batman":{typeTags:["accessories"],animeTags:[],collectionTags:[]},
"lamp-pain-naruto":{typeTags:["accessories"],animeTags:["Naruto"],collectionTags:[]},
"lamp-uchiha-itachi":{typeTags:["accessories"],animeTags:["Naruto"],collectionTags:[]},
"tee-eren-yeager-typo":{typeTags:["t-shirts"],animeTags:["Attack on Titan"],collectionTags:[]},
"tee-gara":{typeTags:["t-shirts"],animeTags:["Naruto"],collectionTags:[]},
"tee-gojo-v3":{typeTags:["t-shirts"],animeTags:["Jujutsu Kaisen"],collectionTags:[]},
"tee-goku":{typeTags:["t-shirts"],animeTags:["Dragon Ball Z"],collectionTags:[]},
"tee-golden-joy-boy":{typeTags:["t-shirts"],animeTags:["One Piece"],collectionTags:[]},
"tee-griffith-v1":{typeTags:["t-shirts"],animeTags:["Berserk"],collectionTags:[]},
"tee-gyomei-beige":{typeTags:["t-shirts"],animeTags:["Demon Slayer"],collectionTags:[]},
"tee-gyomei-red":{typeTags:["t-shirts"],animeTags:["Demon Slayer"],collectionTags:[]},
"tee-kurapika":{typeTags:["t-shirts"],animeTags:["Hunter X Hunter"],collectionTags:[]},
"tee-99-killua-long-sleeve":{typeTags:["t-shirts"],animeTags:["Hunter X Hunter"],collectionTags:[]},
"tee-baki":{typeTags:["t-shirts"],animeTags:["BAKI"],collectionTags:[]},
"tee-berserk-d":{typeTags:["t-shirts"],animeTags:["Berserk"],collectionTags:[]},
"tee-byakuya-kuchiki-bankai":{typeTags:["t-shirts"],animeTags:["Bleach"],collectionTags:[]},
"tee-luffy-v1":{typeTags:["t-shirts"],animeTags:["One Piece"],collectionTags:[]},
"hoodie-black-eren":{typeTags:["hoodies"],animeTags:["Attack on Titan"],collectionTags:[]},
"hoodie-musashi-miyamoto":{typeTags:["hoodies"],animeTags:["Vagabond"],collectionTags:[]},
"hoodie-freedom-black":{typeTags:["hoodies"],animeTags:["Attack on Titan"],collectionTags:[]},
"tee-eren-founder":{typeTags:["t-shirts"],animeTags:["Attack on Titan"],collectionTags:[]},
"tee-path-to-freedom":{typeTags:["t-shirts"],animeTags:["Attack on Titan"],collectionTags:[]},
"tee-zoro-ashura-mode":{typeTags:["t-shirts"],animeTags:["One Piece"],collectionTags:[]},

"legendary-proliy-tee":{typeTags:["new-arrivals"],animeTags:["Dragon Ball"],collectionTags:[]},
"valhalla-tee":{typeTags:["new-arrivals"],animeTags:[],collectionTags:[]},

"basic-white-tee": {typeTags:["new-arrivals"], animeTags:[], collectionTags:[]},
"basic-yellow-tee": {typeTags:["new-arrivals"], animeTags:[], collectionTags:[]},
"basic-baby-blue-tee": {typeTags:["new-arrivals"], animeTags:[], collectionTags:[]},
"basic-red-tee": {typeTags:["new-arrivals"], animeTags:[], collectionTags:[]},
"basic-brown-tee": {typeTags:["new-arrivals"], animeTags:[], collectionTags:[]},
"basic-pink-tee": {typeTags:["new-arrivals"], animeTags:[], collectionTags:[]},
"basic-gray-tee": {typeTags:["new-arrivals"], animeTags:[], collectionTags:[]},
"basic-green-tee": {typeTags:["new-arrivals"], animeTags:[], collectionTags:[]},
"custom-killua-tee": {typeTags:["new-arrivals"], animeTags:["Hunter x Hunter"], collectionTags:[]},
"winds-of-rage-tee": {typeTags:["new-arrivals"], animeTags:[], collectionTags:[]},
"hollow-state-tee": {typeTags:["new-arrivals"], animeTags:["Bleach"], collectionTags:[]},
"custom-gon-tee": {typeTags:["new-arrivals"], animeTags:["Hunter x Hunter"], collectionTags:[]},
"sukuna-v1-tee": {typeTags:["new-arrivals"], animeTags:["Jujutsu Kaisen"], collectionTags:[]},
"attack-on-titan-accessory": {typeTags:["new-arrivals"], animeTags:["Attack on Titan"], collectionTags:[]},
"hollow-mask-icon": {typeTags:["new-arrivals"], animeTags:["Bleach"], collectionTags:[]},

"luFFy-straw-hat-tee": {typeTags:["new-arrivals"], animeTags:["One Piece"], collectionTags:[]},
"basic-black-tee": {typeTags:["new-arrivals"], animeTags:[], collectionTags:[]},
"phantom-troupe-varsity": {typeTags:["new-arrivals"], animeTags:["Hunter x Hunter"], collectionTags:[]},
"itachi-varsity": {typeTags:["new-arrivals"], animeTags:["Naruto"], collectionTags:[]},
"bizarre-bloodline-zip-hoodie": {typeTags:["new-arrivals"], animeTags:["JoJo's Bizarre Adventure"], collectionTags:[]},
"freedom-mint-green-jacket": {typeTags:["new-arrivals"], animeTags:["Attack on Titan"], collectionTags:[]},
"golden-dominance-zip-hoodie": {typeTags:["new-arrivals"], animeTags:[], collectionTags:[]},
"red-zipper-jacket": {typeTags:["new-arrivals"], animeTags:[], collectionTags:[]},
"green-zipper-jacket": {typeTags:["new-arrivals"], animeTags:[], collectionTags:[]},
"beige-basic-hoodie": {typeTags:["new-arrivals"], animeTags:[], collectionTags:[]},
"black-basic-hoodie-alt": {typeTags:["new-arrivals"], animeTags:[], collectionTags:[]},
"black-set": {typeTags:["new-arrivals"], animeTags:[], collectionTags:[]},
"zipper-brown": {typeTags:["new-arrivals"], animeTags:[], collectionTags:[]},
"socks-one-piece": {typeTags:["new-arrivals"], animeTags:["One Piece"], collectionTags:[]},
"socks-jujutsu-kaisen": {typeTags:["new-arrivals"], animeTags:["Jujutsu Kaisen"], collectionTags:[]},

"musashi-miyamoto-hoodie": {typeTags:["new-arrivals"], animeTags:["Vagabond"], collectionTags:[]},
"gojo-summer": {typeTags:["new-arrivals"], animeTags:["Jujutsu Kaisen"], collectionTags:[]},
"strawhat-solidarity-hoodie": {typeTags:["new-arrivals"], animeTags:["One Piece"], collectionTags:[]},
"spiders-hoodie": {typeTags:["new-arrivals"], animeTags:["Hunter x Hunter"], collectionTags:[]},
"mahito-hoodie": {typeTags:["new-arrivals"], animeTags:["Jujutsu Kaisen"], collectionTags:[]},
"rambling-aot": {typeTags:["new-arrivals"], animeTags:["Attack on Titan"], collectionTags:[]},
"gyro-zeppeli": {typeTags:["new-arrivals"], animeTags:["JoJo's Bizarre Adventure"], collectionTags:[]},
"grimmjow-embroidered": {typeTags:["new-arrivals"], animeTags:["Bleach"], collectionTags:[]},
"ulquiorra-cifer": {typeTags:["new-arrivals"], animeTags:["Bleach"], collectionTags:[]},
"patched-one-piece-hoodie": {typeTags:["new-arrivals"], animeTags:["One Piece"], collectionTags:[]},
"exclusive-sasuke": {typeTags:["new-arrivals"], animeTags:["Naruto"], collectionTags:[]},
"hxh-mission-chimera": {typeTags:["new-arrivals"], animeTags:["Hunter x Hunter"], collectionTags:[]},
"levi-embroidery": {typeTags:["new-arrivals"], animeTags:["Attack on Titan"], collectionTags:[]},
"blue-grimmjow-zipper": {typeTags:["new-arrivals"], animeTags:["Bleach"], collectionTags:[]},
"bankai-zipper": {typeTags:["new-arrivals"], animeTags:["Bleach"], collectionTags:[]},
"ichigo-full-embroidery": {typeTags:["new-arrivals"], animeTags:["Bleach"], collectionTags:[]},
"titan-hoodie": {typeTags:["new-arrivals"], animeTags:["Attack on Titan"], collectionTags:[]},
"white-toji": {typeTags:["new-arrivals"], animeTags:["Jujutsu Kaisen"], collectionTags:[]},
"black-toji": {typeTags:["new-arrivals"], animeTags:["Jujutsu Kaisen"], collectionTags:[]},
"white-basic-hoodie": {typeTags:["new-arrivals"], animeTags:[], collectionTags:[]},
"black-basic-hoodie": {typeTags:["new-arrivals"], animeTags:[], collectionTags:[]},
"pink-basic-hoodie": {typeTags:["new-arrivals"], animeTags:[], collectionTags:[]},
"pink-zipper": {typeTags:["new-arrivals"], animeTags:[], collectionTags:[]},
"purple-basic-sweatshirt": {typeTags:["new-arrivals"], animeTags:[], collectionTags:[]},
"hisoka-tee-alt": {typeTags:["new-arrivals"], animeTags:["Hunter x Hunter"], collectionTags:[]},
"phantom-troupe-spiders-tee": {typeTags:["new-arrivals"], animeTags:["Hunter x Hunter"], collectionTags:[]},
"luffy-gear5": {typeTags:["new-arrivals"], animeTags:["One Piece"], collectionTags:[]},
"zoro-three-swords": {typeTags:["new-arrivals"], animeTags:["One Piece"], collectionTags:[]},
"zoro-exclusive": {typeTags:["new-arrivals"], animeTags:["One Piece"], collectionTags:[]},
"zoro-fandom-edition": {typeTags:["new-arrivals"], animeTags:["One Piece"], collectionTags:[]},
"socks-bleach": {typeTags:["new-arrivals"], animeTags:["Bleach"], collectionTags:[]},
"socks-naruto": {typeTags:["new-arrivals"], animeTags:["Naruto"], collectionTags:[]},
"socks-hunterxhunter": {typeTags:["new-arrivals"], animeTags:["Hunter x Hunter"], collectionTags:[]},
"socks-berserk": {typeTags:["new-arrivals"], animeTags:["Berserk"], collectionTags:[]},
"socks-vinland-saga": {typeTags:["new-arrivals"], animeTags:["Vinland Saga"], collectionTags:[]},
"sukuna-cap": {typeTags:["new-arrivals"], animeTags:["Jujutsu Kaisen"], collectionTags:[]},
"bankai-cap": {typeTags:["new-arrivals"], animeTags:["Bleach"], collectionTags:[]},
"akatsuki-cap": {typeTags:["new-arrivals"], animeTags:["Naruto"], collectionTags:[]},
"one-piece-cap": {typeTags:["new-arrivals"], animeTags:["One Piece"], collectionTags:[]},
"hxh-cap": {typeTags:["new-arrivals"], animeTags:["Hunter x Hunter"], collectionTags:[]},
"hidden-leaf-cap": {typeTags:["new-arrivals"], animeTags:["Naruto"], collectionTags:[]},
"survey-corps-cap": {typeTags:["new-arrivals"], animeTags:["Attack on Titan"], collectionTags:[]},
"uchiha-clan-cap": {typeTags:["new-arrivals"], animeTags:["Naruto"], collectionTags:[]},
"soul-eater-cap": {typeTags:["new-arrivals"], animeTags:["Soul Eater"], collectionTags:[]},
"death-note-cap": {typeTags:["new-arrivals"], animeTags:["Death Note"], collectionTags:[]},
"frieren-cap": {typeTags:["new-arrivals"], animeTags:["Frieren"], collectionTags:[]},
"hunter-license-card": {typeTags:["new-arrivals"], animeTags:["Hunter x Hunter"], collectionTags:[]},
"winged-vanguard-sticker": {typeTags:["new-arrivals"], animeTags:["Attack on Titan"], collectionTags:[]},
"joyful-ascension-sticker": {typeTags:["new-arrivals"], animeTags:[], collectionTags:[]},
"brutal-crest-mark": {typeTags:["new-arrivals"], animeTags:[], collectionTags:[]},
"scarlet-core-symbol": {typeTags:["new-arrivals"], animeTags:[], collectionTags:[]},
"blade-skull-sticker": {typeTags:["new-arrivals"], animeTags:[], collectionTags:[]},
"cursed-arm-manifestation": {typeTags:["new-arrivals"], animeTags:["Jujutsu Kaisen"], collectionTags:[]},
"crimson-crescent-blade": {typeTags:["new-arrivals"], animeTags:[], collectionTags:[]},
"crimson-cloud-sticker": {typeTags:["new-arrivals"], animeTags:["Naruto"], collectionTags:[]},
"blindfolded-sorcerer-sprint": {typeTags:["new-arrivals"], animeTags:["Jujutsu Kaisen"], collectionTags:[]},

"berserk-cap": {typeTags:["new-arrivals"], animeTags:["Berserk"], collectionTags:[]},

"zoro-ashura-mode": {typeTags:["new-arrivals"], animeTags:["One Piece"], collectionTags:[]},
"hisoka-tee": {typeTags:["new-arrivals"], animeTags:["Hunter x Hunter"], collectionTags:[]},
"igris-legendary": {typeTags:["new-arrivals"], animeTags:["Solo Leveling"], collectionTags:[]},
"kaiju-no-8": {typeTags:["new-arrivals"], animeTags:["Kaiju No. 8"], collectionTags:[]},
"legendary-broly-tee": {typeTags:["new-arrivals"], animeTags:["Dragon Ball"], collectionTags:[]},
"kenpachi-zaraki": {typeTags:["new-arrivals"], animeTags:["Bleach"], collectionTags:[]},
"green-gon": {typeTags:["new-arrivals"], animeTags:["Hunter x Hunter"], collectionTags:[]},
"chainsaw-man-premium": {typeTags:["new-arrivals"], animeTags:["Chainsaw Man"], collectionTags:[]},
"musashi-miyamoto-tee": {typeTags:["new-arrivals"], animeTags:["Vagabond"], collectionTags:[]},
"yhwach-quincy-king": {typeTags:["new-arrivals"], animeTags:["Bleach"], collectionTags:[]},
"black-tokyo-ghoul": {typeTags:["new-arrivals"], animeTags:["Tokyo Ghoul"], collectionTags:[]},
"tanjiro-premium-tee": {typeTags:["new-arrivals"], animeTags:["Demon Slayer"], collectionTags:[]},
"sukuna-lava": {typeTags:["new-arrivals"], animeTags:["Jujutsu Kaisen"], collectionTags:[]},
"bleach-v1": {typeTags:["new-arrivals"], animeTags:["Bleach"], collectionTags:[]},
"berserk-v4": {typeTags:["new-arrivals"], animeTags:["Berserk"], collectionTags:[]},
"naruto-acid": {typeTags:["new-arrivals"], animeTags:["Naruto"], collectionTags:[]},
"eren-yeager-v1": {typeTags:["new-arrivals"], animeTags:["Attack on Titan"], collectionTags:[]},
"shadow-monarch": {typeTags:["new-arrivals"], animeTags:["Solo Leveling"], collectionTags:[]},
"aki-hayakawa": {typeTags:["new-arrivals"], animeTags:["Chainsaw Man"], collectionTags:[]},
"asta-red": {typeTags:["new-arrivals"], animeTags:["Black Clover"], collectionTags:[]},
"light-straight-pants-black": {typeTags:["new-arrivals"], animeTags:[], collectionTags:[]},
"light-straight-pants-gray": {typeTags:["new-arrivals"], animeTags:[], collectionTags:[]},
"light-straight-pants-brown": {typeTags:["new-arrivals"], animeTags:[], collectionTags:[]},
"utility-jogger-black": {typeTags:["new-arrivals"], animeTags:[], collectionTags:[]},
"utility-jogger-silver": {typeTags:["new-arrivals"], animeTags:[], collectionTags:[]},
"sweatpants-black": {typeTags:["new-arrivals"], animeTags:[], collectionTags:[]},
"sweatpants-brown": {typeTags:["new-arrivals"], animeTags:[], collectionTags:[]},
"naruto-straight-pants": {typeTags:["new-arrivals"], animeTags:["Naruto"], collectionTags:[]},
"sasuke-straight-pants": {typeTags:["new-arrivals"], animeTags:["Naruto"], collectionTags:[]},
"demon-slayer-pants": {typeTags:["new-arrivals"], animeTags:["Demon Slayer"], collectionTags:[]},
"zoro-pants": {typeTags:["new-arrivals"], animeTags:["One Piece"], collectionTags:[]},
"sweat-pants-sasuke": {typeTags:["new-arrivals"], animeTags:["Naruto"], collectionTags:[]},
"chains-pants": {typeTags:["new-arrivals"], animeTags:["Chainsaw Man"], collectionTags:[]},
"basic-pants": {typeTags:["new-arrivals"], animeTags:[], collectionTags:[]},
"heavy-straight-pants-gray": {typeTags:["new-arrivals"], animeTags:[], collectionTags:[]},
"heavy-straight-pants-black": {typeTags:["new-arrivals"], animeTags:[], collectionTags:[]},
"balloon-jeans-black": {typeTags:["new-arrivals"], animeTags:[], collectionTags:[]},
"balloon-jeans-light-blue": {typeTags:["new-arrivals"], animeTags:[], collectionTags:[]},
"balloon-jeans-indigo": {typeTags:["new-arrivals"], animeTags:[], collectionTags:[]},
"balloon-jeans-pale-blue": {typeTags:["new-arrivals"], animeTags:[], collectionTags:[]},
"balloon-jeans-olive": {typeTags:["new-arrivals"], animeTags:[], collectionTags:[]},
"paradis-quarter-zip": {typeTags:["new-arrivals"], animeTags:["Attack on Titan"], collectionTags:[]},
"aot-zip-up-black": {typeTags:["new-arrivals"], animeTags:["Attack on Titan"], collectionTags:[]},
"blue-lock-sweater": {typeTags:["new-arrivals"], animeTags:["Blue Lock"], collectionTags:[]},
"aot-green-zip-up": {typeTags:["new-arrivals"], animeTags:["Attack on Titan"], collectionTags:[]},
"yuta-sweatshirt": {typeTags:["new-arrivals"], animeTags:["Jujutsu Kaisen"], collectionTags:[]},
"ryuk-embroidered": {typeTags:["new-arrivals"], animeTags:["Death Note"], collectionTags:[]},
"aot-sweater": {typeTags:["new-arrivals"], animeTags:["Attack on Titan"], collectionTags:[]},
"the-gate-keeper": {typeTags:["new-arrivals"], animeTags:["One Piece"], collectionTags:[]},
"d-will-knit": {typeTags:["new-arrivals"], animeTags:["One Piece"], collectionTags:[]},
"guts-puffer-jacket": {typeTags:["new-arrivals"], animeTags:["Berserk"], collectionTags:[]},
"freedom-black-jacket": {typeTags:["new-arrivals"], animeTags:["Attack on Titan"], collectionTags:[]},

  "ultimate-berserk-tee": {typeTags:["best-sellers"], animeTags:["Berserk"], collectionTags:["core"]},
  "ultimate-berserk-hoodie": {typeTags:["new-arrivals","best-sellers","oversized","limited-edition"], animeTags:["Berserk"], collectionTags:["new","limited"]},
  "berserk-armor-tee": {typeTags:["best-sellers"], animeTags:["Berserk"], collectionTags:["core"]},
  "eren-freedom": {typeTags:["best-sellers","oversized"], animeTags:["Attack on Titan"], collectionTags:["winter"]},
  "godspeed-knit": {typeTags:["new-arrivals","limited-edition"], animeTags:["Hunter x Hunter"], collectionTags:["new","limited"]},
  "vinland-saga": {typeTags:["new-arrivals","limited-edition"], animeTags:["Vinland Saga"], collectionTags:["new","limited"]},
  "geto-embroidery": {typeTags:["new-arrivals","oversized","limited-edition"], animeTags:["Jujutsu Kaisen"], collectionTags:["new","limited"]},
  "exclusive-naruto": {typeTags:["new-arrivals","best-sellers","oversized"], animeTags:["Naruto"], collectionTags:["new"]},
  "shadow-hoodie": {typeTags:["essentials","oversized"], animeTags:[], collectionTags:["core"]},
  "arc-zip-hoodie": {typeTags:["new-arrivals","oversized"], animeTags:[], collectionTags:["new"]},
  "mono-tee": {typeTags:["essentials"], animeTags:[], collectionTags:["core"]},
  "eclipse-tee": {typeTags:["new-arrivals","oversized"], animeTags:[], collectionTags:["new"]},
  "relaxed-pants": {typeTags:["essentials","oversized"], animeTags:[], collectionTags:["core"]},
  "tapered-pants": {typeTags:["best-sellers"], animeTags:[], collectionTags:["core"]},
  "arc-jacket": {typeTags:["new-arrivals"], animeTags:[], collectionTags:["new"]},
  "mono-sweatshirt": {typeTags:["essentials"], animeTags:[], collectionTags:["core"]},
  "arc-jeans": {typeTags:["oversized"], animeTags:[], collectionTags:["core"]},
  "mono-knit": {typeTags:["essentials"], animeTags:[], collectionTags:["core"]}
};
PRODUCTS.forEach(p=>{const t=PRODUCT_TAGS[p.id]||{};p.typeTags=t.typeTags||p.typeTags||[];p.animeTags=t.animeTags||p.animeTags||[];p.collectionTags=t.collectionTags||p.collectionTags||[];});
PRODUCTS.forEach(p=>{
  if(p.cat==="accessories"){
    delete p.sizes;
    if(!p.typeTags.includes("accessories"))p.typeTags.push("accessories");
  }
  p.imgs=[...new Set(p.imgs||[])].slice(0,productImageLimit(p));
});
window.MONO_PRODUCTS=PRODUCTS;
})();
