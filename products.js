/* Shared Mono Arc catalogue for the standalone shop pages. */
(()=>{
const PRODUCTS = [
{id:"shadow-hoodie",cat:"hoodies",name:"Shadow Hoodie",price:1850,colour:"Onyx",imgs:[],
 lead:"A heavyweight hoodie with a deep hood and a drop shoulder, finished with the Mono Arc emblem at the chest.",
 details:["Boxy oversized fit","Double-layer hood","Tonal embroidered emblem","Ribbed cuffs and hem","Made in small batches"],
 fabric:"480 gsm brushed cotton fleece. Machine wash cold, inside out. Hang dry."},
{id:"arc-zip-hoodie",cat:"hoodies",name:"Arc Zip Hoodie",price:2100,colour:"Graphite",imgs:[],
 lead:"A full-zip silhouette with a structured collar and a matte metal pull. Built to layer.",
 details:["Relaxed fit","Matte gunmetal zip","Hidden side pockets","Back arc print","Brushed interior"],
 fabric:"460 gsm cotton blend fleece. Machine wash cold. Do not tumble dry."},
{id:"mono-tee",cat:"tees",name:"Mono Tee",price:750,colour:"Black",imgs:[],
 lead:"A short sleeve tee in dense jersey. Clean neckline, long body, nothing you donâ€™t need.",
 details:["Boxy fit","Heavy jersey","Small emblem on the chest","Pre-washed for softness"],
 fabric:"240 gsm combed cotton. Machine wash cold. Low heat dry."},
{id:"eclipse-tee",cat:"tees",name:"Eclipse Tee",price:850,colour:"Steel",imgs:[],
 lead:"A washed grey tee with an oversized back print of the emblem, faded at the edges.",
 details:["Oversized fit","Garment dyed","Large back graphic","Dropped shoulder"],
 fabric:"260 gsm garment dyed cotton. Machine wash cold, inside out."},
{id:"relaxed-pants",cat:"pants",name:"Relaxed Pants",price:1450,colour:"Onyx",imgs:[],
 lead:"A wide leg trouser in soft twill with a high waist and a clean drape.",
 details:["Relaxed wide leg","Elastic back waist","Side and back pockets","Pressed front crease"],
 fabric:"Heavy cotton twill. Machine wash cold. Iron on low if needed."},
{id:"tapered-pants",cat:"pants",name:"Tapered Pants",price:1550,colour:"Graphite",imgs:[],
 lead:"A tapered shape with articulated knees and a drawcord waist. Sharp enough to dress up.",
 details:["Tapered fit","Articulated knees","Drawcord waist","Zip pocket at the thigh"],
 fabric:"Stretch cotton twill. Machine wash cold. Hang dry."},
{id:"exclusive-naruto",cat:"hoodies",name:"Exclusive Naruto",price:1095,colour:"Black",sizes:["S","M","L","XL","XXL"],imgs:[
"images/products/product-001.jpg",
"images/products/product-002.jpg",
"images/products/product-003.jpg",
"images/products/product-004.jpg"],
 lead:"Anime-inspired hoodie featuring Naruto artwork.",
 details:["Available sizes: S, M, L, XL and XXL","Anime graphic design","Hoodie silhouette"],
 fabric:"Exact fabric composition and care details have not yet been verified."},
{id:"godspeed-knit",cat:"knitwear",name:"Godspeed Knit",price:1049,colour:"Navy Blue",sizes:["M","L","XL","XXL"],imgs:[
"images/products/product-005.jpg",
"images/products/product-006.jpg",
"images/products/product-007.jpg"],
 lead:"A navy knit inspired by Killua's Godspeed technique from Hunter x Hunter.",
 details:["Relaxed unisex fit","Soft, warm knit","Sizes M, L, XL and XXL","Navy blue colour"],
 fabric:"Hand wash cold and lay flat to dry."},
{id:"ultimate-berserk-tee",cat:"tees",name:"Ultimate Berserk Tee",price:750,colour:"Black",sizes:["M","L","XL","XXL"],imgs:[
"images/products/product-008.png",
"images/products/product-009.png"],
 lead:"A Berserk-inspired graphic tee from the Fandom collection.",
 details:["Available sizes: M, L, XL and XXL","Graphic T-shirt","Black colour"],
 fabric:"Exact fabric composition and care details have not yet been verified."}
,{id:"ultimate-berserk-hoodie",cat:"hoodies",name:"Ultimate Berserk Hoodie",price:1049,colour:"Charcoal",sizes:["M","L","XL","XXL"],imgs:[],
lead:"A limited Berserk hoodie with a heavyweight cotton build, bold artwork and detailed print inspired by Guts.",
details:["Heavyweight cotton","Embroidered and puff-print details","Relaxed oversized fit","Available sizes: M, L, XL and XXL"],
fabric:"Premium heavyweight cotton. Follow the garment care label."},
{id:"berserk-armor-tee",cat:"tees",name:"Berserk ARMOR Tee",price:750,colour:"Black",sizes:["M","L","XL","XXL"],imgs:[
"images/products/product-013.png",
"images/products/product-014.png",
"images/products/product-015.png",
"images/products/product-016.png"],
lead:"A dark Berserk graphic tee featuring Guts in the Berserker Armor.",
details:["Premium 100% cotton","Regular unisex fit","Available sizes: M, L, XL and XXL"],
fabric:"Machine wash cold inside out. Hang to dry and avoid ironing directly over the print."}
,{id:"eren-freedom",cat:"hoodies",name:"Eren Freedom",price:949,colour:"Black",sizes:["M","L","XL","XXL"],imgs:[
"images/products/product-017.jpg",
"images/products/product-018.jpg",
"images/products/product-019.jpg",
"images/products/product-020.jpg"],
lead:"An Attack on Titan hoodie inspired by Eren Yeager, made for a relaxed everyday fit.",
details:["Premium heavyweight fleece","Relaxed unisex fit","Oversized cut","Available sizes: M, L, XL and XXL"],
fabric:"Heavyweight cotton with high-density print. Wash cold inside out, hang to dry, and do not iron directly over the print."},
{id:"vinland-saga",cat:"sweatshirts",name:"Vinland Saga",price:949,colour:"Black",sizes:["M","L","XL","XXL"],imgs:[
"images/products/product-021.jpg",
"images/products/product-022.jpg"],
lead:"A Vinland Saga graphic layer inspired by the series.",
details:["Cotton construction","Available sizes: M, L, XL and XXL"],
fabric:"Care details should follow the garment label."},
{id:"geto-embroidery",cat:"hoodies",name:"Geto Embroidery",price:1049,colour:"Black",sizes:["M","L","XL","XXL"],imgs:[
"images/products/product-023.jpg",
"images/products/product-024.jpg",
"images/products/product-025.jpg",
"images/products/product-026.jpg"],
lead:"A Jujutsu Kaisen hoodie inspired by Suguru Geto, with red embroidery and detailed print.",
details:["100% heavyweight cotton","Oversized unisex fit","Red embroidery and print details","Available sizes: M, L, XL and XXL"],
fabric:"Wash cold inside out. Avoid ironing directly over the design."},
{id:"zoro-ashura-mode",cat:"tees",name:"Zoro Ashura Mode",price:750,colour:"Black",sizes:["M","L","XL","XXL"],imgs:[],lead:"Zoro Ashura Mode from the current Fandom catalogue.",details:["Listed in the tees category","Sizes: M, L, XL, XXL","Product images and full specifications are not yet available for this listing"],fabric:"Check the garment label for fabric and care details."},
{id:"hisoka-tee",cat:"tees",name:"Hisoka Tee",price:750,colour:"Black",sizes:["S","M","L","XL","XXL"],imgs:[],lead:"Hisoka Tee from the current Fandom catalogue.",details:["Listed in the tees category","Sizes: S, M, L, XL, XXL","Product images and full specifications are not yet available for this listing"],fabric:"Check the garment label for fabric and care details."},
{id:"igris-legendary",cat:"tees",name:"IGRIS Legendary",price:750,colour:"Black",sizes:["M","L","XL","XXL"],imgs:[],lead:"IGRIS Legendary from the current Fandom catalogue.",details:["Listed in the tees category","Sizes: M, L, XL, XXL","Product images and full specifications are not yet available for this listing"],fabric:"Check the garment label for fabric and care details."},
{id:"kaiju-no-8",cat:"tees",name:"Kaiju No. 8",price:750,colour:"Black",sizes:["M","L","XL","XXL"],imgs:[],lead:"Kaiju No. 8 from the current Fandom catalogue.",details:["Listed in the tees category","Sizes: M, L, XL, XXL","Product images and full specifications are not yet available for this listing"],fabric:"Check the garment label for fabric and care details."},
{id:"legendary-broly-tee",cat:"tees",name:"Legendary Broly Tee",price:750,colour:"Black",sizes:["M","L","XL","XXL"],imgs:[],lead:"Legendary Broly Tee from the current Fandom catalogue.",details:["Listed in the tees category","Sizes: M, L, XL, XXL","Product images and full specifications are not yet available for this listing"],fabric:"Check the garment label for fabric and care details."},
{id:"kenpachi-zaraki",cat:"tees",name:"Kenpachi Zaraki",price:750,colour:"Black",sizes:["M","L","XL","XXL"],imgs:[],lead:"Kenpachi Zaraki from the current Fandom catalogue.",details:["Listed in the tees category","Sizes: M, L, XL, XXL","Product images and full specifications are not yet available for this listing"],fabric:"Check the garment label for fabric and care details."},
{id:"green-gon",cat:"tees",name:"Green Gon",price:750,colour:"Black",sizes:["M","L","XL","XXL"],imgs:[],lead:"Green Gon from the current Fandom catalogue.",details:["Listed in the tees category","Sizes: M, L, XL, XXL","Product images and full specifications are not yet available for this listing"],fabric:"Check the garment label for fabric and care details."},
{id:"chainsaw-man-premium",cat:"tees",name:"Chainsaw Man Premium Edition",price:750,colour:"Black",sizes:["M","L","XL","XXL"],imgs:[],lead:"Chainsaw Man Premium Edition from the current Fandom catalogue.",details:["Listed in the tees category","Sizes: M, L, XL, XXL","Product images and full specifications are not yet available for this listing"],fabric:"Check the garment label for fabric and care details."},
{id:"musashi-miyamoto-tee",cat:"tees",name:"Musashi Miyamoto",price:750,colour:"Black",sizes:["M","L","XL","XXL"],imgs:[],lead:"Musashi Miyamoto from the current Fandom catalogue.",details:["Listed in the tees category","Sizes: M, L, XL, XXL","Product images and full specifications are not yet available for this listing"],fabric:"Check the garment label for fabric and care details."},
{id:"yhwach-quincy-king",cat:"tees",name:"Yhwach Quincy King",price:750,colour:"Black",sizes:["M","L","XL","XXL"],imgs:[],lead:"Yhwach Quincy King from the current Fandom catalogue.",details:["Listed in the tees category","Sizes: M, L, XL, XXL","Product images and full specifications are not yet available for this listing"],fabric:"Check the garment label for fabric and care details."},
{id:"black-tokyo-ghoul",cat:"tees",name:"Black Tokyo Ghoul",price:750,colour:"Black",sizes:["M","L","XL","XXL"],imgs:[],lead:"Black Tokyo Ghoul from the current Fandom catalogue.",details:["Listed in the tees category","Sizes: M, L, XL, XXL","Product images and full specifications are not yet available for this listing"],fabric:"Check the garment label for fabric and care details."},
{id:"tanjiro-premium-tee",cat:"tees",name:"Tanjiro Premium Tee",price:750,colour:"Black",sizes:["M","L","XL"],imgs:[],lead:"Tanjiro Premium Tee from the current Fandom catalogue.",details:["Listed in the tees category","Sizes: M, L, XL","Product images and full specifications are not yet available for this listing"],fabric:"Check the garment label for fabric and care details."},
{id:"sukuna-lava",cat:"tees",name:"Sukuna Lava",price:750,colour:"Black",sizes:["M","L","XL","XXL"],imgs:[],lead:"Sukuna Lava from the current Fandom catalogue.",details:["Listed in the tees category","Sizes: M, L, XL, XXL","Product images and full specifications are not yet available for this listing"],fabric:"Check the garment label for fabric and care details."},
{id:"bleach-v1",cat:"tees",name:"Bleach V1",price:750,colour:"Black",sizes:["OVER M","OVER 1","OVER 2"],imgs:[],lead:"Bleach V1 from the current Fandom catalogue.",details:["Listed in the tees category","Sizes: OVER M, OVER 1, OVER 2","Product images and full specifications are not yet available for this listing"],fabric:"Check the garment label for fabric and care details."},
{id:"berserk-v4",cat:"tees",name:"Berserk V4",price:750,colour:"Black",sizes:["M","L","XL","XXL"],imgs:[],lead:"Berserk V4 from the current Fandom catalogue.",details:["Listed in the tees category","Sizes: M, L, XL, XXL","Product images and full specifications are not yet available for this listing"],fabric:"Check the garment label for fabric and care details."},
{id:"naruto-acid",cat:"tees",name:"Naruto Acid",price:750,colour:"Black",sizes:["M","L","XL","XXL"],imgs:[],lead:"Naruto Acid from the current Fandom catalogue.",details:["Listed in the tees category","Sizes: M, L, XL, XXL","Product images and full specifications are not yet available for this listing"],fabric:"Check the garment label for fabric and care details."},
{id:"eren-yeager-v1",cat:"tees",name:"Eren Yeager V1",price:750,colour:"Black",sizes:["M","L","XL","2XL"],imgs:[],lead:"Eren Yeager V1 from the current Fandom catalogue.",details:["Listed in the tees category","Sizes: M, L, XL, 2XL","Product images and full specifications are not yet available for this listing"],fabric:"Check the garment label for fabric and care details."},
{id:"shadow-monarch",cat:"tees",name:"Shadow Monarch",price:750,colour:"Black",sizes:["M","L","XL","XXL"],imgs:[],lead:"Shadow Monarch from the current Fandom catalogue.",details:["Listed in the tees category","Sizes: M, L, XL, XXL","Product images and full specifications are not yet available for this listing"],fabric:"Check the garment label for fabric and care details."},
{id:"aki-hayakawa",cat:"tees",name:"Aki Hayakawa",price:750,colour:"Black",sizes:["M","L","XL","XXL"],imgs:[],lead:"Aki Hayakawa from the current Fandom catalogue.",details:["Listed in the tees category","Sizes: M, L, XL, XXL","Product images and full specifications are not yet available for this listing"],fabric:"Check the garment label for fabric and care details."},
{id:"asta-red",cat:"tees",name:"Asta Red",price:750,colour:"Black",sizes:["OVER M","OVER 1","OVER 2"],imgs:[],lead:"Asta Red from the current Fandom catalogue.",details:["Listed in the tees category","Sizes: OVER M, OVER 1, OVER 2","Product images and full specifications are not yet available for this listing"],fabric:"Check the garment label for fabric and care details."},
{id:"light-straight-pants-black",cat:"pants",name:"Light Straight Pants - Black",price:750,colour:"Black",sizes:["M","L","XL","XXL"],imgs:[],lead:"Light Straight Pants - Black from the current Fandom catalogue.",details:["Listed in the pants category","Sizes: M, L, XL, XXL","Product images and full specifications are not yet available for this listing"],fabric:"Check the garment label for fabric and care details."},
{id:"light-straight-pants-gray",cat:"pants",name:"Light Straight Pants - Gray",price:680,colour:"Black",sizes:["M","L","XL","XXL"],imgs:[],lead:"Light Straight Pants - Gray from the current Fandom catalogue.",details:["Listed in the pants category","Sizes: M, L, XL, XXL","Product images and full specifications are not yet available for this listing"],fabric:"Check the garment label for fabric and care details."},
{id:"light-straight-pants-brown",cat:"pants",name:"Light Straight Pants - Brown",price:680,colour:"Black",sizes:["M","L","XL","XXL"],imgs:[],lead:"Light Straight Pants - Brown from the current Fandom catalogue.",details:["Listed in the pants category","Sizes: M, L, XL, XXL","Product images and full specifications are not yet available for this listing"],fabric:"Check the garment label for fabric and care details."},
{id:"utility-jogger-black",cat:"pants",name:"The Utility Jogger Gray",price:870,colour:"Gray",sizes:["M","L","XL","XXL"],imgs:[],lead:"The Utility Jogger Gray from the current Fandom catalogue.",details:["Listed in the pants category","Sizes: M, L, XL, XXL","Product images and full specifications are not yet available for this listing"],fabric:"Check the garment label for fabric and care details."},
{id:"utility-jogger-silver",cat:"pants",name:"The Utility Jogger Silver",price:870,colour:"Silver",sizes:["M","L","XL","XXL"],imgs:[],lead:"The Utility Jogger Silver from the current Fandom catalogue.",details:["Listed in the pants category","Sizes: M, L, XL, XXL","Product images and full specifications are not yet available for this listing"],fabric:"Check the garment label for fabric and care details."},
{id:"sweatpants-black",cat:"pants",name:"Sweatpants - Black",price:799,colour:"Black",sizes:["M","L","XL","XXL"],imgs:[
"images/products/sweatpants-black-front.webp",
"images/products/sweatpants-black-back.webp",
"images/products/sweatpants-black-side.webp"],lead:"Sweatpants - Black from the current Fandom catalogue.",details:["Listed in the pants category","Sizes: M, L, XL, XXL"],fabric:"Check the garment label for fabric and care details."},
{id:"sweatpants-brown",cat:"pants",name:"Sweatpants - Brown",price:799,colour:"Black",sizes:["M","L","XL","XXL"],imgs:[],lead:"Sweatpants - Brown from the current Fandom catalogue.",details:["Listed in the pants category","Sizes: M, L, XL, XXL","Product images and full specifications are not yet available for this listing"],fabric:"Check the garment label for fabric and care details."},
{id:"naruto-straight-pants",cat:"pants",name:"Naruto Straight Pants",price:680,colour:"Black",sizes:["M","L","XL","XXL"],imgs:[],lead:"Naruto Straight Pants from the current Fandom catalogue.",details:["Listed in the pants category","Sizes: M, L, XL, XXL","Product images and full specifications are not yet available for this listing"],fabric:"Check the garment label for fabric and care details."},
{id:"sasuke-straight-pants",cat:"pants",name:"Sasuke Straight Pants",price:680,colour:"Black",sizes:["M","L","XL","XXL"],imgs:[],lead:"Sasuke Straight Pants from the current Fandom catalogue.",details:["Listed in the pants category","Sizes: M, L, XL, XXL","Product images and full specifications are not yet available for this listing"],fabric:"Check the garment label for fabric and care details."},
{id:"demon-slayer-pants",cat:"pants",name:"Demon Slayer Pants",price:750,colour:"Black",sizes:["M","L","XL","XXL"],imgs:[],lead:"Demon Slayer Pants from the current Fandom catalogue.",details:["Listed in the pants category","Sizes: M, L, XL, XXL","Product images and full specifications are not yet available for this listing"],fabric:"Check the garment label for fabric and care details."},
{id:"zoro-pants",cat:"pants",name:"Zoro Pants",price:750,colour:"Black",sizes:["M","L","XL","XXL"],imgs:[],lead:"Zoro Pants from the current Fandom catalogue.",details:["Listed in the pants category","Sizes: M, L, XL, XXL","Product images and full specifications are not yet available for this listing"],fabric:"Check the garment label for fabric and care details."},
{id:"sweat-pants-sasuke",cat:"pants",name:"Sweat Pants Sasuke",price:450,colour:"Black",sizes:["M","L","XL","XXL"],imgs:[],lead:"Sweat Pants Sasuke from the current Fandom catalogue.",details:["Listed in the pants category","Sizes: M, L, XL, XXL","Product images and full specifications are not yet available for this listing"],fabric:"Check the garment label for fabric and care details."},
{id:"chains-pants",cat:"pants",name:"Chains Pants",price:849,colour:"Black",sizes:["M","L","XL","XXL"],imgs:[],lead:"Chains Pants from the current Fandom catalogue.",details:["Listed in the pants category","Sizes: M, L, XL, XXL","Product images and full specifications are not yet available for this listing"],fabric:"Check the garment label for fabric and care details."},
{id:"basic-pants",cat:"pants",name:"Basic Pants",price:600,colour:"Black",sizes:["M","L","XL","XXL"],imgs:[],lead:"Basic Pants from the current Fandom catalogue.",details:["Listed in the pants category","Sizes: M, L, XL, XXL","Product images and full specifications are not yet available for this listing"],fabric:"Check the garment label for fabric and care details."},
{id:"heavy-straight-pants-gray",cat:"pants",name:"Heavy Straight Pants - Gray",price:790,colour:"Black",sizes:["S","M","L","XL","XXL"],imgs:[],lead:"Heavy Straight Pants - Gray from the current Fandom catalogue.",details:["Listed in the pants category","Sizes: S, M, L, XL, XXL","Product images and full specifications are not yet available for this listing"],fabric:"Check the garment label for fabric and care details."},
{id:"heavy-straight-pants-black",cat:"pants",name:"Heavy Straight Pants - Black",price:790,colour:"Black",sizes:["S","M","L","XL","XXL"],imgs:[],lead:"Heavy Straight Pants - Black from the current Fandom catalogue.",details:["Listed in the pants category","Sizes: S, M, L, XL, XXL","Product images and full specifications are not yet available for this listing"],fabric:"Check the garment label for fabric and care details."},
{id:"balloon-jeans-black",cat:"jeans",name:"Balloon Jeans - Black",price:999,colour:"Black",sizes:["32","34","36","38"],imgs:[],lead:"Balloon Jeans - Black from the current Fandom catalogue.",details:["Listed in the jeans category","Sizes: 32, 34, 36, 38","Product images and full specifications are not yet available for this listing"],fabric:"Check the garment label for fabric and care details."},
{id:"balloon-jeans-light-blue",cat:"jeans",name:"Vintage Wash Balloon Jeans - Light Blue",price:999,colour:"Black",sizes:["32","34","36","38"],imgs:[],lead:"Vintage Wash Balloon Jeans - Light Blue from the current Fandom catalogue.",details:["Listed in the jeans category","Sizes: 32, 34, 36, 38","Product images and full specifications are not yet available for this listing"],fabric:"Check the garment label for fabric and care details."},
{id:"balloon-jeans-indigo",cat:"jeans",name:"Vintage Wash Balloon Jeans - Faded Indigo",price:999,colour:"Black",sizes:["32","34","36","38"],imgs:[],lead:"Vintage Wash Balloon Jeans - Faded Indigo from the current Fandom catalogue.",details:["Listed in the jeans category","Sizes: 32, 34, 36, 38","Product images and full specifications are not yet available for this listing"],fabric:"Check the garment label for fabric and care details."},
{id:"balloon-jeans-pale-blue",cat:"jeans",name:"Ice Wash Balloon Jeans - Pale Blue",price:999,colour:"Black",sizes:["32","34","36","38"],imgs:[],lead:"Ice Wash Balloon Jeans - Pale Blue from the current Fandom catalogue.",details:["Listed in the jeans category","Sizes: 32, 34, 36, 38","Product images and full specifications are not yet available for this listing"],fabric:"Check the garment label for fabric and care details."},
{id:"balloon-jeans-olive",cat:"jeans",name:"Vintage Wash Balloon Jeans - Washed Olive",price:999,colour:"Black",sizes:["32","34","36","38"],imgs:[],lead:"Vintage Wash Balloon Jeans - Washed Olive from the current Fandom catalogue.",details:["Listed in the jeans category","Sizes: 32, 34, 36, 38","Product images and full specifications are not yet available for this listing"],fabric:"Check the garment label for fabric and care details."},
{id:"paradis-quarter-zip",cat:"sweatshirts",name:"Paradis Quarter Zip-Up",price:999,colour:"Black",sizes:["M","L","XL","XXL"],imgs:[],lead:"Paradis Quarter Zip-Up from the current Fandom catalogue.",details:["Listed in the sweatshirts category","Sizes: M, L, XL, XXL","Product images and full specifications are not yet available for this listing"],fabric:"Check the garment label for fabric and care details."},
{id:"aot-zip-up-black",cat:"sweatshirts",name:"AOT Zip Up Black",price:999,colour:"Black",sizes:["M","L","XL","XXL"],imgs:[],lead:"AOT Zip Up Black from the current Fandom catalogue.",details:["Listed in the sweatshirts category","Sizes: M, L, XL, XXL","Product images and full specifications are not yet available for this listing"],fabric:"Check the garment label for fabric and care details."},
{id:"blue-lock-sweater",cat:"sweatshirts",name:"Blue Lock Sweater",price:899,colour:"Black",sizes:["M","L","XL","XXL"],imgs:[],lead:"Blue Lock Sweater from the current Fandom catalogue.",details:["Listed in the sweatshirts category","Sizes: M, L, XL, XXL","Product images and full specifications are not yet available for this listing"],fabric:"Check the garment label for fabric and care details."},
{id:"aot-green-zip-up",cat:"sweatshirts",name:"AOT Green Zip-Up",price:999,colour:"Black",sizes:["M","L","XL","XXL"],imgs:[],lead:"AOT Green Zip-Up from the current Fandom catalogue.",details:["Listed in the sweatshirts category","Sizes: M, L, XL, XXL","Product images and full specifications are not yet available for this listing"],fabric:"Check the garment label for fabric and care details."},
{id:"yuta-sweatshirt",cat:"sweatshirts",name:"Yuta",price:849,colour:"Black",sizes:["M","L","XL","XXL"],imgs:[],lead:"Yuta from the current Fandom catalogue.",details:["Listed in the sweatshirts category","Sizes: M, L, XL, XXL","Product images and full specifications are not yet available for this listing"],fabric:"Check the garment label for fabric and care details."},
{id:"ryuk-embroidered",cat:"sweatshirts",name:"Ryuk Embroidered",price:849,colour:"Black",sizes:["M","L","XL","XXL"],imgs:[],lead:"Ryuk Embroidered from the current Fandom catalogue.",details:["Listed in the sweatshirts category","Sizes: M, L, XL, XXL","Product images and full specifications are not yet available for this listing"],fabric:"Check the garment label for fabric and care details."},
{id:"aot-sweater",cat:"sweatshirts",name:"AOT Sweater",price:700,colour:"Black",sizes:["M","L","XL","XXL"],imgs:[],lead:"AOT Sweater from the current Fandom catalogue.",details:["Listed in the sweatshirts category","Sizes: M, L, XL, XXL","Product images and full specifications are not yet available for this listing"],fabric:"Check the garment label for fabric and care details."},
{id:"the-gate-keeper",cat:"knitwear",name:"The Gate Keeper",price:1049,colour:"Black",sizes:["M","L","XL","XXL"],imgs:[],lead:"The Gate Keeper from the current Fandom catalogue.",details:["Listed in the knitwear category","Sizes: M, L, XL, XXL","Product images and full specifications are not yet available for this listing"],fabric:"Check the garment label for fabric and care details."},
{id:"d-will-knit",cat:"knitwear",name:"D. Will Knit",price:949,colour:"Black",sizes:["M","L","XL","XXL"],imgs:[],lead:"D. Will Knit from the current Fandom catalogue.",details:["Listed in the knitwear category","Sizes: M, L, XL, XXL","Product images and full specifications are not yet available for this listing"],fabric:"Check the garment label for fabric and care details."},
{id:"guts-puffer-jacket",cat:"jackets",name:"Guts Puffer Jacket - Berserk",price:1499,colour:"Black",sizes:["M","L","XL","XXL"],imgs:[],lead:"Guts Puffer Jacket - Berserk from the current Fandom catalogue.",details:["Listed in the jackets category","Sizes: M, L, XL, XXL","Product images and full specifications are not yet available for this listing"],fabric:"Check the garment label for fabric and care details."},
{id:"freedom-black-jacket",cat:"jackets",name:"Freedom Black Jacket",price:1049,colour:"Black",sizes:["M","L","XL","XXL"],imgs:[],lead:"Freedom Black Jacket from the current Fandom catalogue.",details:["Listed in the jackets category","Sizes: M, L, XL, XXL","Product images and full specifications are not yet available for this listing"],fabric:"Check the garment label for fabric and care details."},
{id:"berserk-cap",cat:"accessories",name:"Berserk Cap",price:220,colour:"Black",sizes:["One Size"],imgs:[],lead:"Berserk-themed cap listed in the accessories catalogue.",details:["Accessory item","One size","Product image and full specifications are not yet available"],fabric:"Check the product label for care details."},
{id:"musashi-miyamoto-hoodie",cat:"hoodies",name:"Musashi Miyamoto Hoodie",price:1049,colour:"Black",sizes:["M","L","XL","XXL"],imgs:[],lead:"Musashi Miyamoto Hoodie from the current Fandom catalogue.",details:["Listed in hoodies","Available option(s): M, L, XL, XXL","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"gojo-summer",cat:"hoodies",name:"Gojo Summer",price:799,colour:"Black",sizes:["M","L","XL","XXL"],imgs:[],lead:"Gojo Summer from the current Fandom catalogue.",details:["Listed in hoodies","Available option(s): M, L, XL, XXL","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"strawhat-solidarity-hoodie",cat:"hoodies",name:"Strawhat Solidarity Hoodie",price:999,colour:"Black",sizes:["M","L","XL","XXL"],imgs:[],lead:"Strawhat Solidarity Hoodie from the current Fandom catalogue.",details:["Listed in hoodies","Available option(s): M, L, XL, XXL","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"spiders-hoodie",cat:"hoodies",name:"Spiders Hoodie",price:1099,colour:"Black",sizes:["M","L","XL","XXL"],imgs:[],lead:"Spiders Hoodie from the current Fandom catalogue.",details:["Listed in hoodies","Available option(s): M, L, XL, XXL","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"mahito-hoodie",cat:"hoodies",name:"Mahito",price:1049,colour:"Black",sizes:["M","L","XL","XXL"],imgs:[],lead:"Mahito from the current Fandom catalogue.",details:["Listed in hoodies","Available option(s): M, L, XL, XXL","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"rambling-aot",cat:"hoodies",name:"Rambling AOT",price:1049,colour:"Black",sizes:["M","L","XL","XXL"],imgs:[],lead:"Rambling AOT from the current Fandom catalogue.",details:["Listed in hoodies","Available option(s): M, L, XL, XXL","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"gyro-zeppeli",cat:"hoodies",name:"Gyro Zeppeli",price:1049,colour:"Black",sizes:["M","L","XL","XXL"],imgs:[],lead:"Gyro Zeppeli from the current Fandom catalogue.",details:["Listed in hoodies","Available option(s): M, L, XL, XXL","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"grimmjow-embroidered",cat:"hoodies",name:"Grimmjow Embroidered",price:899,colour:"Black",sizes:["M","L","XL","XXL"],imgs:[],lead:"Grimmjow Embroidered from the current Fandom catalogue.",details:["Listed in hoodies","Available option(s): M, L, XL, XXL","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"ulquiorra-cifer",cat:"hoodies",name:"Ulquiorra Cifer",price:999,colour:"Black",sizes:["M","L","XL","XXL"],imgs:[],lead:"Ulquiorra Cifer from the current Fandom catalogue.",details:["Listed in hoodies","Available option(s): M, L, XL, XXL","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"patched-one-piece-hoodie",cat:"hoodies",name:"Patched One Piece Hoodie",price:999,colour:"Black",sizes:["M","L","XL","XXL"],imgs:[],lead:"Patched One Piece Hoodie from the current Fandom catalogue.",details:["Listed in hoodies","Available option(s): M, L, XL, XXL","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"exclusive-sasuke",cat:"hoodies",name:"Exclusive Sasuke",price:1049,colour:"Black",sizes:["S","M","L","XL","XXL"],imgs:[],lead:"Exclusive Sasuke from the current Fandom catalogue.",details:["Listed in hoodies","Available option(s): S, M, L, XL, XXL","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"hxh-mission-chimera",cat:"hoodies",name:"HxH Mission Chimera",price:999,colour:"Black",sizes:["M","L","XL","XXL"],imgs:[],lead:"HxH Mission Chimera from the current Fandom catalogue.",details:["Listed in hoodies","Available option(s): M, L, XL, XXL","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"levi-embroidery",cat:"hoodies",name:"Levi's Embroidery",price:1049,colour:"Black",sizes:["S","M","L","XL","XXL"],imgs:[],lead:"Levi's Embroidery from the current Fandom catalogue.",details:["Listed in hoodies","Available option(s): S, M, L, XL, XXL","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"blue-grimmjow-zipper",cat:"hoodies",name:"Blue Grimmjow Zipper",price:999,colour:"Black",sizes:["M","L","XL","XXL"],imgs:[],lead:"Blue Grimmjow Zipper from the current Fandom catalogue.",details:["Listed in hoodies","Available option(s): M, L, XL, XXL","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"bankai-zipper",cat:"hoodies",name:"BANKAI Zipper",price:999,colour:"Black",sizes:["M","L","XL","XXL"],imgs:[],lead:"BANKAI Zipper from the current Fandom catalogue.",details:["Listed in hoodies","Available option(s): M, L, XL, XXL","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"ichigo-full-embroidery",cat:"hoodies",name:"Ichigo Full Embroidery",price:999,colour:"Black",sizes:["M","L","XL","XXL"],imgs:[],lead:"Ichigo Full Embroidery from the current Fandom catalogue.",details:["Listed in hoodies","Available option(s): M, L, XL, XXL","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"titan-hoodie",cat:"hoodies",name:"Titan Hoodie",price:999,colour:"Black",sizes:["M","L","XL","XXL"],imgs:[],lead:"Titan Hoodie from the current Fandom catalogue.",details:["Listed in hoodies","Available option(s): M, L, XL, XXL","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"white-toji",cat:"hoodies",name:"White Toji",price:999,colour:"Black",sizes:["M","L","XL","XXL"],imgs:[],lead:"White Toji from the current Fandom catalogue.",details:["Listed in hoodies","Available option(s): M, L, XL, XXL","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"black-toji",cat:"hoodies",name:"Black Toji",price:999,colour:"Black",sizes:["M","L","XL","XXL"],imgs:[],lead:"Black Toji from the current Fandom catalogue.",details:["Listed in hoodies","Available option(s): M, L, XL, XXL","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"white-basic-hoodie",cat:"hoodies",name:"White Basic Hoodie",price:699,colour:"Black",sizes:["M","L","XL","XXL"],imgs:[],lead:"White Basic Hoodie from the current Fandom catalogue.",details:["Listed in hoodies","Available option(s): M, L, XL, XXL","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"black-basic-hoodie",cat:"hoodies",name:"Black Basic Hoodie",price:699,colour:"Black",sizes:["M","L","XL","XXL"],imgs:[],lead:"Black Basic Hoodie from the current Fandom catalogue.",details:["Listed in hoodies","Available option(s): M, L, XL, XXL","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"pink-basic-hoodie",cat:"hoodies",name:"Pink Basic Hoodie",price:699,colour:"Black",sizes:["M","L","XL","XXL"],imgs:[],lead:"Pink Basic Hoodie from the current Fandom catalogue.",details:["Listed in hoodies","Available option(s): M, L, XL, XXL","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"pink-zipper",cat:"hoodies",name:"Pink Zipper",price:749,colour:"Black",sizes:["M","L","XL"],imgs:[],lead:"Pink Zipper from the current Fandom catalogue.",details:["Listed in hoodies","Available option(s): M, L, XL","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"purple-basic-sweatshirt",cat:"sweatshirts",name:"Purple Basic Sweatshirt",price:799,colour:"Black",sizes:["M","L","XL","XXL"],imgs:[],lead:"Purple Basic Sweatshirt from the current Fandom catalogue.",details:["Listed in sweatshirts","Available option(s): M, L, XL, XXL","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"hisoka-tee-alt",cat:"tees",name:"Hisoka Tee",price:750,colour:"Black",sizes:["S","M","L","XL","XXL"],imgs:[],lead:"Hisoka Tee from the current Fandom catalogue.",details:["Listed in tees","Available option(s): S, M, L, XL, XXL","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"phantom-troupe-spiders-tee",cat:"tees",name:"Phantom Troupe Spiders",price:750,colour:"Black",sizes:["M","L","XL","XXL"],imgs:[],lead:"Phantom Troupe Spiders from the current Fandom catalogue.",details:["Listed in tees","Available option(s): M, L, XL, XXL","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"luffy-gear5",cat:"tees",name:"Luffy Gear5",price:750,colour:"Black",sizes:["M","L","XL","XXL"],imgs:[],lead:"Luffy Gear5 from the current Fandom catalogue.",details:["Listed in tees","Available option(s): M, L, XL, XXL","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"zoro-three-swords",cat:"tees",name:"ZORO - THREE SWORDS",price:750,colour:"Black",sizes:["M","L","XL","XXL"],imgs:[],lead:"ZORO - THREE SWORDS from the current Fandom catalogue.",details:["Listed in tees","Available option(s): M, L, XL, XXL","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"zoro-exclusive",cat:"tees",name:"Zoro Exclusive",price:750,colour:"Black",sizes:["M","L","XL","XXL"],imgs:[],lead:"Zoro Exclusive from the current Fandom catalogue.",details:["Listed in tees","Available option(s): M, L, XL, XXL","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"zoro-fandom-edition",cat:"tees",name:"Zoro Fandom Edition",price:750,colour:"Black",sizes:["M","L","XL","XXL"],imgs:[],lead:"Zoro Fandom Edition from the current Fandom catalogue.",details:["Listed in tees","Available option(s): M, L, XL, XXL","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"socks-bleach",cat:"accessories",name:"Socks Bleach",price:100,colour:"Black",sizes:["One Size"],imgs:[],lead:"Socks Bleach from the current Fandom catalogue.",details:["Accessory item","Available option(s): One Size","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"socks-naruto",cat:"accessories",name:"Socks Naruto",price:100,colour:"Black",sizes:["One Size"],imgs:[],lead:"Socks Naruto from the current Fandom catalogue.",details:["Accessory item","Available option(s): One Size","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"socks-hunterxhunter",cat:"accessories",name:"Socks HunterXHunter",price:100,colour:"Black",sizes:["One Size"],imgs:[],lead:"Socks HunterXHunter from the current Fandom catalogue.",details:["Accessory item","Available option(s): One Size","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"socks-berserk",cat:"accessories",name:"Socks Berserk",price:100,colour:"Black",sizes:["One Size"],imgs:[],lead:"Socks Berserk from the current Fandom catalogue.",details:["Accessory item","Available option(s): One Size","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"socks-vinland-saga",cat:"accessories",name:"Socks Vinland Saga",price:100,colour:"Black",sizes:["One Size"],imgs:[],lead:"Socks Vinland Saga from the current Fandom catalogue.",details:["Accessory item","Available option(s): One Size","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"sukuna-cap",cat:"accessories",name:"Sukuna Cap",price:220,colour:"Black",sizes:["One Size"],imgs:[],lead:"Sukuna Cap from the current Fandom catalogue.",details:["Accessory item","Available option(s): One Size","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"bankai-cap",cat:"accessories",name:"BANKAI Cap",price:220,colour:"Black",sizes:["One Size"],imgs:[],lead:"BANKAI Cap from the current Fandom catalogue.",details:["Accessory item","Available option(s): One Size","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"akatsuki-cap",cat:"accessories",name:"Akatsuki Cap",price:220,colour:"Black",sizes:["One Size"],imgs:[],lead:"Akatsuki Cap from the current Fandom catalogue.",details:["Accessory item","Available option(s): One Size","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"one-piece-cap",cat:"accessories",name:"One Piece Cap",price:270,colour:"Black",sizes:["One Size"],imgs:[],lead:"One Piece Cap from the current Fandom catalogue.",details:["Accessory item","Available option(s): One Size","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"hxh-cap",cat:"accessories",name:"HxH Cap",price:270,colour:"Black",sizes:["One Size"],imgs:[],lead:"HxH Cap from the current Fandom catalogue.",details:["Accessory item","Available option(s): One Size","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"hidden-leaf-cap",cat:"accessories",name:"Hidden Leaf Cap",price:220,colour:"Black",sizes:["One Size"],imgs:[],lead:"Hidden Leaf Cap from the current Fandom catalogue.",details:["Accessory item","Available option(s): One Size","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"survey-corps-cap",cat:"accessories",name:"Survey Corps Cap",price:270,colour:"Black",sizes:["One Size"],imgs:[],lead:"Survey Corps Cap from the current Fandom catalogue.",details:["Accessory item","Available option(s): One Size","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"uchiha-clan-cap",cat:"accessories",name:"Uchiha Clan Cap",price:220,colour:"Black",sizes:["One Size"],imgs:[],lead:"Uchiha Clan Cap from the current Fandom catalogue.",details:["Accessory item","Available option(s): One Size","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"soul-eater-cap",cat:"accessories",name:"Soul Eater Cap",price:270,colour:"Black",sizes:["One Size"],imgs:[],lead:"Soul Eater Cap from the current Fandom catalogue.",details:["Accessory item","Available option(s): One Size","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"death-note-cap",cat:"accessories",name:"Death Note Cap",price:270,colour:"Black",sizes:["One Size"],imgs:[],lead:"Death Note Cap from the current Fandom catalogue.",details:["Accessory item","Available option(s): One Size","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"frieren-cap",cat:"accessories",name:"Frieren Cap",price:270,colour:"Black",sizes:["One Size"],imgs:[],lead:"Frieren Cap from the current Fandom catalogue.",details:["Accessory item","Available option(s): One Size","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"hunter-license-card",cat:"accessories",name:"Hunter License Card",price:15,colour:"Black",sizes:["One Size"],imgs:[],lead:"Hunter License Card from the current Fandom catalogue.",details:["Accessory item","Available option(s): One Size","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"winged-vanguard-sticker",cat:"accessories",name:"Winged Vanguard Sticker",price:15,colour:"Black",sizes:["One Size"],imgs:[],lead:"Winged Vanguard Sticker from the current Fandom catalogue.",details:["Accessory item","Available option(s): One Size","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"joyful-ascension-sticker",cat:"accessories",name:"Joyful Ascension Sticker",price:15,colour:"Black",sizes:["One Size"],imgs:[],lead:"Joyful Ascension Sticker from the current Fandom catalogue.",details:["Accessory item","Available option(s): One Size","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"brutal-crest-mark",cat:"accessories",name:"Brutal Crest Mark Sticker",price:15,colour:"Black",sizes:["One Size"],imgs:[],lead:"Brutal Crest Mark Sticker from the current Fandom catalogue.",details:["Accessory item","Available option(s): One Size","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"scarlet-core-symbol",cat:"accessories",name:"Scarlet Core Symbol Sticker",price:15,colour:"Black",sizes:["One Size"],imgs:[],lead:"Scarlet Core Symbol Sticker from the current Fandom catalogue.",details:["Accessory item","Available option(s): One Size","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"blade-skull-sticker",cat:"accessories",name:"Blade Skull Sticker",price:15,colour:"Black",sizes:["One Size"],imgs:[],lead:"Blade Skull Sticker from the current Fandom catalogue.",details:["Accessory item","Available option(s): One Size","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"cursed-arm-manifestation",cat:"accessories",name:"Cursed Arm Manifestation Sticker",price:15,colour:"Black",sizes:["One Size"],imgs:[],lead:"Cursed Arm Manifestation Sticker from the current Fandom catalogue.",details:["Accessory item","Available option(s): One Size","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"crimson-crescent-blade",cat:"accessories",name:"Crimson Crescent Blade Sticker",price:15,colour:"Black",sizes:["One Size"],imgs:[],lead:"Crimson Crescent Blade Sticker from the current Fandom catalogue.",details:["Accessory item","Available option(s): One Size","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"crimson-cloud-sticker",cat:"accessories",name:"Crimson Cloud Sticker",price:15,colour:"Black",sizes:["One Size"],imgs:[],lead:"Crimson Cloud Sticker from the current Fandom catalogue.",details:["Accessory item","Available option(s): One Size","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"blindfolded-sorcerer-sprint",cat:"accessories",name:"Blindfolded Sorcerer Sprint Sticker",price:15,colour:"Black",sizes:["One Size"],imgs:[],lead:"Blindfolded Sorcerer Sprint Sticker from the current Fandom catalogue.",details:["Accessory item","Available option(s): One Size","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"luFFy-straw-hat-tee",cat:"tees",name:"LUFFY - STRAW HAT",price:750,colour:"Black",sizes:["M","L","XL","XXL"],imgs:[],lead:"LUFFY - STRAW HAT from the current Fandom catalogue.",details:["Listed in tees","Available option(s): M, L, XL, XXL","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"basic-black-tee",cat:"tees",name:"Basic Black Tee",price:450,colour:"Black",sizes:["M","L","XL","XXL"],imgs:[],lead:"Basic Black Tee from the current Fandom catalogue.",details:["Listed in tees","Available option(s): M, L, XL, XXL","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"phantom-troupe-varsity",cat:"jackets",name:"Phantom Troupe Varsity",price:1399,colour:"Black",sizes:["M","L","XL","XXL"],imgs:[],lead:"Phantom Troupe Varsity from the current Fandom catalogue.",details:["Listed in jackets","Available option(s): M, L, XL, XXL","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"itachi-varsity",cat:"jackets",name:"Itachi Varsity",price:1399,colour:"Black",sizes:["M","L","XL","XXL"],imgs:[],lead:"Itachi Varsity from the current Fandom catalogue.",details:["Listed in jackets","Available option(s): M, L, XL, XXL","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"bizarre-bloodline-zip-hoodie",cat:"jackets",name:"Bizarre Bloodline Zip Hoodie",price:1099,colour:"Black",sizes:["M","L","XL","XXL"],imgs:[],lead:"Bizarre Bloodline Zip Hoodie from the current Fandom catalogue.",details:["Listed in jackets","Available option(s): M, L, XL, XXL","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"freedom-mint-green-jacket",cat:"jackets",name:"Freedom Mint-Green Jacket",price:1049,colour:"Black",sizes:["M","L","XL","XXL"],imgs:[],lead:"Freedom Mint-Green Jacket from the current Fandom catalogue.",details:["Listed in jackets","Available option(s): M, L, XL, XXL","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"golden-dominance-zip-hoodie",cat:"jackets",name:"Golden Dominance Zip Hoodie",price:1099,colour:"Black",sizes:["M","L","XL","XXL"],imgs:[],lead:"Golden Dominance Zip Hoodie from the current Fandom catalogue.",details:["Listed in jackets","Available option(s): M, L, XL, XXL","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"red-zipper-jacket",cat:"jackets",name:"Red Zipper",price:749,colour:"Black",sizes:["M","L","XL","XXL"],imgs:[],lead:"Red Zipper from the current Fandom catalogue.",details:["Listed in jackets","Available option(s): M, L, XL, XXL","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"green-zipper-jacket",cat:"jackets",name:"Green Zipper",price:749,colour:"Black",sizes:["M","L","XL","XXL"],imgs:[],lead:"Green Zipper from the current Fandom catalogue.",details:["Listed in jackets","Available option(s): M, L, XL, XXL","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"beige-basic-hoodie",cat:"hoodies",name:"Beige Basic",price:700,colour:"Black",sizes:["M","L","XL","XXL"],imgs:[],lead:"Beige Basic from the current Fandom catalogue.",details:["Listed in hoodies","Available option(s): M, L, XL, XXL","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"black-basic-hoodie-alt",cat:"hoodies",name:"Black Basic",price:700,colour:"Black",sizes:["M","L","XL","XXL"],imgs:[],lead:"Black Basic from the current Fandom catalogue.",details:["Listed in hoodies","Available option(s): M, L, XL, XXL","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"black-set",cat:"sweatshirts",name:"Black Set",price:999,colour:"Black",sizes:["M","L","XL","XXL"],imgs:[],lead:"Black Set from the current Fandom catalogue.",details:["Listed in sweatshirts","Available option(s): M, L, XL, XXL","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"zipper-brown",cat:"hoodies",name:"Zipper - Brown",price:749,colour:"Black",sizes:["M","L","XL","XXL"],imgs:[],lead:"Zipper - Brown from the current Fandom catalogue.",details:["Listed in hoodies","Available option(s): M, L, XL, XXL","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"socks-one-piece",cat:"accessories",name:"Socks One Piece",price:100,colour:"Black",sizes:["One Size"],imgs:[],lead:"Socks One Piece from the current Fandom catalogue.",details:["Listed in accessories","Available option(s): One Size","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"socks-jujutsu-kaisen",cat:"accessories",name:"Socks Jujutsu Kaisen",price:100,colour:"Black",sizes:["One Size"],imgs:[],lead:"Socks Jujutsu Kaisen from the current Fandom catalogue.",details:["Listed in accessories","Available option(s): One Size","Original product photos are not yet attached to this listing"],fabric:"Check the original product label or packaging for material and care details."},
{id:"basic-white-tee",cat:"tees",name:"Basic White Tee",price:450,colour:"Various",sizes:["M","L","XL","XXL"],imgs:[],lead:"Basic White Tee listed in the current Fandom catalogue.",details:["Category: tees","Available option(s): M, L, XL, XXL","Original product photos and full product specifications are not attached yet"],fabric:"Check the original product label or packaging for material and care details."},
{id:"basic-yellow-tee",cat:"tees",name:"Basic Yellow Tee",price:450,colour:"Various",sizes:["M","L","XL","XXL"],imgs:[],lead:"Basic Yellow Tee listed in the current Fandom catalogue.",details:["Category: tees","Available option(s): M, L, XL, XXL","Original product photos and full product specifications are not attached yet"],fabric:"Check the original product label or packaging for material and care details."},
{id:"basic-baby-blue-tee",cat:"tees",name:"Basic Baby Blue Tee",price:450,colour:"Various",sizes:["M","L","XL","XXL"],imgs:[],lead:"Basic Baby Blue Tee listed in the current Fandom catalogue.",details:["Category: tees","Available option(s): M, L, XL, XXL","Original product photos and full product specifications are not attached yet"],fabric:"Check the original product label or packaging for material and care details."},
{id:"basic-red-tee",cat:"tees",name:"Basic Red Tee",price:450,colour:"Various",sizes:["M","L","XL","XXL"],imgs:[],lead:"Basic Red Tee listed in the current Fandom catalogue.",details:["Category: tees","Available option(s): M, L, XL, XXL","Original product photos and full product specifications are not attached yet"],fabric:"Check the original product label or packaging for material and care details."},
{id:"basic-brown-tee",cat:"tees",name:"Basic Brown Tee",price:450,colour:"Various",sizes:["M","L","XL","XXL"],imgs:[],lead:"Basic Brown Tee listed in the current Fandom catalogue.",details:["Category: tees","Available option(s): M, L, XL, XXL","Original product photos and full product specifications are not attached yet"],fabric:"Check the original product label or packaging for material and care details."},
{id:"basic-pink-tee",cat:"tees",name:"Basic Pink Tee",price:450,colour:"Various",sizes:["M","L","XL","XXL"],imgs:[],lead:"Basic Pink Tee listed in the current Fandom catalogue.",details:["Category: tees","Available option(s): M, L, XL, XXL","Original product photos and full product specifications are not attached yet"],fabric:"Check the original product label or packaging for material and care details."},
{id:"basic-gray-tee",cat:"tees",name:"Basic Gray Tee",price:450,colour:"Various",sizes:["M","L","XL","XXL"],imgs:[],lead:"Basic Gray Tee listed in the current Fandom catalogue.",details:["Category: tees","Available option(s): M, L, XL, XXL","Original product photos and full product specifications are not attached yet"],fabric:"Check the original product label or packaging for material and care details."},
{id:"basic-green-tee",cat:"tees",name:"Basic Green Tee",price:450,colour:"Various",sizes:["M","L","XL","XXL"],imgs:[],lead:"Basic Green Tee listed in the current Fandom catalogue.",details:["Category: tees","Available option(s): M, L, XL, XXL","Original product photos and full product specifications are not attached yet"],fabric:"Check the original product label or packaging for material and care details."},
{id:"custom-killua-tee",cat:"tees",name:"Custom Killua Tee",price:750,colour:"Various",sizes:["M","L","XL","XXL"],imgs:[],lead:"Custom Killua Tee listed in the current Fandom catalogue.",details:["Category: tees","Available option(s): M, L, XL, XXL","Original product photos and full product specifications are not attached yet"],fabric:"Check the original product label or packaging for material and care details."},
{id:"winds-of-rage-tee",cat:"tees",name:"Winds of Rage Tee",price:750,colour:"Various",sizes:["M","L","XL","XXL"],imgs:[],lead:"Winds of Rage Tee listed in the current Fandom catalogue.",details:["Category: tees","Available option(s): M, L, XL, XXL","Original product photos and full product specifications are not attached yet"],fabric:"Check the original product label or packaging for material and care details."},
{id:"hollow-state-tee",cat:"tees",name:"Hollow State",price:750,colour:"Various",sizes:["M","L","XL","XXL"],imgs:[],lead:"Hollow State listed in the current Fandom catalogue.",details:["Category: tees","Available option(s): M, L, XL, XXL","Original product photos and full product specifications are not attached yet"],fabric:"Check the original product label or packaging for material and care details."},
{id:"custom-gon-tee",cat:"tees",name:"Custom Gon Tee",price:750,colour:"Various",sizes:["M","L","XL","XXL"],imgs:[],lead:"Custom Gon Tee listed in the current Fandom catalogue.",details:["Category: tees","Available option(s): M, L, XL, XXL","Original product photos and full product specifications are not attached yet"],fabric:"Check the original product label or packaging for material and care details."},
{id:"sukuna-v1-tee",cat:"tees",name:"Sukuna v1",price:750,colour:"Various",sizes:["M","L","XL","XXL"],imgs:[],lead:"Sukuna v1 listed in the current Fandom catalogue.",details:["Category: tees","Available option(s): M, L, XL, XXL","Original product photos and full product specifications are not attached yet"],fabric:"Check the original product label or packaging for material and care details."},
{id:"attack-on-titan-accessory",cat:"accessories",name:"ATTACK ON TITAN",price:60,colour:"Various",sizes:["One Size"],imgs:[],lead:"ATTACK ON TITAN listed in the current Fandom catalogue.",details:["Category: accessories","Available option(s): One Size","Original product photos and full product specifications are not attached yet"],fabric:"Check the original product label or packaging for material and care details."},
{id:"hollow-mask-icon",cat:"accessories",name:"Hollow Mask Icon",price:15,colour:"Various",sizes:["One Size"],imgs:[],lead:"Hollow Mask Icon listed in the current Fandom catalogue.",details:["Category: accessories","Available option(s): One Size","Original product photos and full product specifications are not attached yet"],fabric:"Check the original product label or packaging for material and care details."},
{id:"legendary-proliy-tee",cat:"tees",name:"LEGENDARY PROLIY TEE",price:600,colour:"Black",sizes:["M","L","XL","XXL"],imgs:[],lead:"LEGENDARY PROLIY TEE from the Fandom T-shirt collection.",details:["T-shirt collection listing","Sizes: M, L, XL, XXL","Original product photos are not attached yet"],fabric:"Check the product label for fabric and care details."},
{id:"valhalla-tee",cat:"tees",name:"VALHALLA TEE",price:680,colour:"Black",sizes:["M","L","XL","XXL"],imgs:[],lead:"VALHALLA TEE from the Fandom T-shirt collection.",details:["T-shirt collection listing","Sizes: M, L, XL, XXL","Original product photos are not attached yet"],fabric:"Check the product label for fabric and care details."},
{id:"keychain-berserk",cat:"accessories",name:"BERSERK",price:60,colour:"Original",sizes:["One size"],imgs:[],lead:"BERSERK from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"keychain-luffy-straw-hat",cat:"accessories",name:"LUFFY STRAW HAT",price:60,colour:"Original",sizes:["One size"],imgs:[],lead:"LUFFY STRAW HAT from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"frame-anime-university",cat:"accessories",name:"Anime University",price:250,colour:"Original",sizes:["One size"],imgs:[],lead:"Anime University from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"frame-hxh-last-mission",cat:"accessories",name:"HxH Last Mission",price:300,colour:"Original",sizes:["One size"],imgs:[],lead:"HxH Last Mission from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"frame-dbz-v1",cat:"accessories",name:"DBZ v1",price:300,colour:"Original",sizes:["One size"],imgs:[],lead:"DBZ v1 from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"frame-naruto-vs-sasuke",cat:"accessories",name:"Naruto vs Sasuke",price:300,colour:"Original",sizes:["One size"],imgs:[],lead:"Naruto vs Sasuke from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"frame-levi-from-aot",cat:"accessories",name:"Levi from AOT",price:300,colour:"Original",sizes:["One size"],imgs:[],lead:"Levi from AOT from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"lamp-goku-super-saiyajin",cat:"accessories",name:"Goku Super Saiyajin shadow lamp",price:1200,colour:"Original",sizes:["One size"],imgs:[],lead:"Goku Super Saiyajin shadow lamp from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"lamp-luffy-gear-5",cat:"accessories",name:"Luffy Gear 5 Shadow Lamp",price:1200,colour:"Original",sizes:["One size"],imgs:[],lead:"Luffy Gear 5 Shadow Lamp from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"lamp-zoro",cat:"accessories",name:"Zoro Shadow Lamp",price:1200,colour:"Original",sizes:["One size"],imgs:[],lead:"Zoro Shadow Lamp from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"lamp-batman",cat:"accessories",name:"Batman shadow Lamp",price:1200,colour:"Original",sizes:["One size"],imgs:[],lead:"Batman shadow Lamp from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"lamp-pain-naruto",cat:"accessories",name:"Pain (Naruto)- Shadow Lamp",price:1200,colour:"Original",sizes:["One size"],imgs:[],lead:"Pain (Naruto)- Shadow Lamp from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"lamp-uchiha-itachi",cat:"accessories",name:"Uchiha Itachi Shadow Lamp",price:1200,colour:"Original",sizes:["One size"],imgs:[],lead:"Uchiha Itachi Shadow Lamp from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"tee-eren-yeager-typo",cat:"tees",name:"Eren Yeager typo",price:550,colour:"Original",sizes:["One size"],imgs:[],lead:"Eren Yeager typo from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"tee-gara",cat:"tees",name:"Gara",price:550,colour:"Original",sizes:["One size"],imgs:[],lead:"Gara from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"tee-gojo-v3",cat:"tees",name:"Gojo v3",price:550,colour:"Original",sizes:["One size"],imgs:[],lead:"Gojo v3 from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"tee-goku",cat:"tees",name:"GOKU",price:550,colour:"Original",sizes:["One size"],imgs:[],lead:"GOKU from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"tee-golden-joy-boy",cat:"tees",name:"Golden Joy Boy",price:550,colour:"Original",sizes:["One size"],imgs:[],lead:"Golden Joy Boy from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"tee-griffith-v1",cat:"tees",name:"Griffith v1",price:550,colour:"Original",sizes:["One size"],imgs:[],lead:"Griffith v1 from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"tee-gyomei-beige",cat:"tees",name:"Gyomei Tee Beige",price:550,colour:"Original",sizes:["One size"],imgs:[],lead:"Gyomei Tee Beige from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"tee-gyomei-red",cat:"tees",name:"Gyomei Tee Red",price:550,colour:"Original",sizes:["One size"],imgs:[],lead:"Gyomei Tee Red from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"tee-kurapika",cat:"tees",name:"Kurapika",price:550,colour:"Original",sizes:["One size"],imgs:[],lead:"Kurapika from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"tee-99-killua-long-sleeve",cat:"tees",name:"99 Killua Long Sleeve",price:550,colour:"Original",sizes:["One size"],imgs:[],lead:"99 Killua Long Sleeve from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"tee-baki",cat:"tees",name:"BAKI",price:550,colour:"Original",sizes:["One size"],imgs:[],lead:"BAKI from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"tee-berserk-d",cat:"tees",name:"Berserk-D",price:550,colour:"Original",sizes:["One size"],imgs:[],lead:"Berserk-D from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"tee-byakuya-kuchiki-bankai",cat:"tees",name:"Byakuya Kuchiki Bankai",price:600,colour:"Original",sizes:["One size"],imgs:[],lead:"Byakuya Kuchiki Bankai from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"tee-luffy-v1",cat:"tees",name:"LUFFY v1",price:550,colour:"Original",sizes:["One size"],imgs:[],lead:"LUFFY v1 from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"hoodie-black-eren",cat:"hoodies",name:"Black Eren",price:550,colour:"Original",sizes:["One size"],imgs:[],lead:"Black Eren from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"hoodie-musashi-miyamoto",cat:"hoodies",name:"Musashi Miyamoto Hoodie",price:1049,colour:"Original",sizes:["One size"],imgs:[],lead:"Musashi Miyamoto Hoodie from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"hoodie-freedom-black",cat:"hoodies",name:"Freedom Black Hoodie",price:1049,colour:"Original",sizes:["One size"],imgs:[],lead:"Freedom Black Hoodie from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"tee-eren-founder",cat:"tees",name:"EREN: THE FOUNDER",price:750,colour:"Original",sizes:["One size"],imgs:[],lead:"EREN: THE FOUNDER from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"tee-path-to-freedom",cat:"tees",name:"Path to Freedom Tee",price:750,colour:"Original",sizes:["One size"],imgs:[],lead:"Path to Freedom Tee from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"tee-zoro-ashura-mode",cat:"tees",name:"Zoro Ashura Mode",price:750,colour:"Original",sizes:["One size"],imgs:[],lead:"Zoro Ashura Mode from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"cap-survey-corps",cat:"accessories",name:"Survey Corps Cap",price:270,colour:"Original",sizes:["One size"],imgs:[],lead:"Survey Corps Cap from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"cap-uchiha-clan",cat:"accessories",name:"Uchiha clan cap",price:220,colour:"Original",sizes:["One size"],imgs:[],lead:"Uchiha clan cap from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"cap-soul-eater",cat:"accessories",name:"Soul Eater Cap",price:270,colour:"Original",sizes:["One size"],imgs:[],lead:"Soul Eater Cap from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"cap-death-note",cat:"accessories",name:"Death Note Cap",price:270,colour:"Original",sizes:["One size"],imgs:[],lead:"Death Note Cap from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"cap-frieren",cat:"accessories",name:"Frieren cap",price:270,colour:"Original",sizes:["One size"],imgs:[],lead:"Frieren cap from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"sticker-hunter-logo",cat:"accessories",name:"Hunter Logo",price:15,colour:"Original",sizes:["One size"],imgs:[],lead:"Hunter Logo from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"socks-death-note",cat:"accessories",name:"Socks Death Note",price:100,colour:"Original",sizes:["One size"],imgs:[],lead:"Socks Death Note from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"tee-feitan-exe",cat:"tees",name:"FEITAN.EXE",price:750,colour:"Original",sizes:["M","L","XL","XXL"],imgs:[],lead:"FEITAN.EXE from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"tee-blind-faith",cat:"tees",name:"Blind Faith",price:750,colour:"Original",sizes:["M","L","XL","XXL"],imgs:[],lead:"Blind Faith from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"tee-limitless",cat:"tees",name:"limitless",price:750,colour:"Original",sizes:["M","L","XL","XXL"],imgs:[],lead:"limitless from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"tee-toji-zenin-reject",cat:"tees",name:"TOJI: ZENIN REJECT",price:750,colour:"Original",sizes:["M","L","XL","XXL"],imgs:[],lead:"TOJI: ZENIN REJECT from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"tee-sorcerer-killer",cat:"tees",name:"Sorcerer Killer",price:750,colour:"Original",sizes:["M","L","XL","XXL"],imgs:[],lead:"Sorcerer Killer from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"tee-true-warrior",cat:"tees",name:"True Warrior",price:750,colour:"Original",sizes:["M","L","XL","XXL"],imgs:[],lead:"True Warrior from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"set-naruto",cat:"sets",name:"Set Naruto",price:790,colour:"Original",sizes:["One size"],imgs:[],lead:"Set Naruto from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"set-sasuke",cat:"sets",name:"Set SasuKe",price:790,colour:"Original",sizes:["One size"],imgs:[],lead:"Set SasuKe from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"tee-naruto",cat:"tees",name:"Naruto",price:750,colour:"Original",sizes:["M","L","XL","XXL"],imgs:[],lead:"Naruto from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"tee-luffy-golden-boy",cat:"tees",name:"LUFFY: THE GOLDEN BOY",price:750,colour:"Original",sizes:["M","L","XL","XXL"],imgs:[],lead:"LUFFY: THE GOLDEN BOY from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"tee-luffy-thunder",cat:"tees",name:"LUFFY THUNDER",price:750,colour:"Original",sizes:["M","L","XL","XXL"],imgs:[],lead:"LUFFY THUNDER from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"tee-un-chained",cat:"tees",name:"Unchained",price:750,colour:"Original",sizes:["M","L","XL","XXL"],imgs:[],lead:"Unchained from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"tee-forest-division",cat:"tees",name:"Forest Division",price:750,colour:"Original",sizes:["M","L","XL","XXL"],imgs:[],lead:"Forest Division from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"tee-eclipse-04",cat:"tees",name:"Eclipse.04",price:750,colour:"Original",sizes:["M","L","XL","XXL"],imgs:[],lead:"Eclipse.04 from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"sticker-crossed-reaper-sigil",cat:"accessories",name:"Crossed Reaper Sigil",price:15,colour:"Original",sizes:["M","L","XL","XXL"],imgs:[],lead:"Crossed Reaper Sigil from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"sticker-hunter-logo-alt",cat:"accessories",name:"Hunter Logo Sticker",price:15,colour:"Original",sizes:["M","L","XL","XXL"],imgs:[],lead:"Hunter Logo Sticker from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"tee-gaara",cat:"tees",name:"Gaara",price:750,colour:"Original",sizes:["M","L","XL","XXL"],imgs:[],lead:"Gaara from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"tee-true-warrior-alt",cat:"tees",name:"True Warrior Tee",price:750,colour:"Original",sizes:["M","L","XL","XXL"],imgs:[],lead:"True Warrior Tee from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"tee-zoro-ashura-mode-alt",cat:"tees",name:"Zoro Ashura Mode Tee",price:750,colour:"Original",sizes:["M","L","XL","XXL"],imgs:[],lead:"Zoro Ashura Mode Tee from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"tee-bleach-v1-alt",cat:"tees",name:"Bleach v1 Tee",price:750,colour:"Original",sizes:["M","L","XL","XXL"],imgs:[],lead:"Bleach v1 Tee from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"tee-yhwach-quincy-king-alt",cat:"tees",name:"Yhwach Quincy King Tee",price:750,colour:"Original",sizes:["M","L","XL","XXL"],imgs:[],lead:"Yhwach Quincy King Tee from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"hoodie-paradis-quarter-zip",cat:"hoodies",name:"Paradis Quarter Zip-Up",price:999,colour:"Original",sizes:["M","L","XL","XXL"],imgs:[],lead:"Paradis Quarter Zip-Up from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"hoodie-hxh-mission-chimera",cat:"hoodies",name:"HxH mission Chimera",price:999,colour:"Original",sizes:["M","L","XL","XXL"],imgs:[],lead:"HxH mission Chimera from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"hoodie-strawhat-solidarity-alt",cat:"hoodies",name:"Strawhat Solidarity Hoodie",price:999,colour:"Original",sizes:["M","L","XL","XXL"],imgs:[],lead:"Strawhat Solidarity Hoodie from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"hoodie-gyro-zeppeli-alt",cat:"hoodies",name:"Gyro Zeppeli Hoodie",price:1049,colour:"Original",sizes:["M","L","XL","XXL"],imgs:[],lead:"Gyro Zeppeli Hoodie from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"hoodie-ulquiorra-cifer-alt",cat:"hoodies",name:"Ulquiorra Cifer Hoodie",price:999,colour:"Original",sizes:["M","L","XL","XXL"],imgs:[],lead:"Ulquiorra Cifer Hoodie from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"jacket-guts-puffer",cat:"jackets",name:"Guts Puffer Jacket - Berserk",price:1499,colour:"Original",sizes:["M","L","XL","XXL"],imgs:[],lead:"Guts Puffer Jacket - Berserk from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"jacket-phantom-troupe-varsity-alt",cat:"jackets",name:"Phantom Troupe Varsity",price:1399,colour:"Original",sizes:["M","L","XL","XXL"],imgs:[],lead:"Phantom Troupe Varsity from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"jacket-itachi-varsity-alt",cat:"jackets",name:"Itachi Varsity",price:1399,colour:"Original",sizes:["M","L","XL","XXL"],imgs:[],lead:"Itachi Varsity from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"jacket-freedom-mint-green-alt",cat:"jackets",name:"Freedom Mint-Green Jacket",price:1049,colour:"Original",sizes:["M","L","XL","XXL"],imgs:[],lead:"Freedom Mint-Green Jacket from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"tee-custom-gon",cat:"tees",name:"Custom Gon Tee",price:750,colour:"Original",sizes:["M","L","XL","XXL"],imgs:[],lead:"Custom Gon Tee from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"tee-winds-of-rage",cat:"tees",name:"Winds of Rage Tee",price:750,colour:"Original",sizes:["M","L","XL","XXL"],imgs:[],lead:"Winds of Rage Tee from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"tee-sukuna-v1-alt",cat:"tees",name:"Sukuna v1 Tee",price:750,colour:"Original",sizes:["M","L","XL","XXL"],imgs:[],lead:"Sukuna v1 Tee from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"tee-zoro-exclusive",cat:"tees",name:"Zoro Exclusive",price:750,colour:"Original",sizes:["M","L","XL","XXL"],imgs:[],lead:"Zoro Exclusive from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"tee-zoro-fandom-edition",cat:"tees",name:"Zoro Fandom Edition",price:750,colour:"Original",sizes:["M","L","XL","XXL"],imgs:[],lead:"Zoro Fandom Edition from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."},
{id:"tee-legendary-broly",cat:"tees",name:"LEGENDARY BROLY TEE",price:750,colour:"Original",sizes:["M","L","XL","XXL"],imgs:[],lead:"LEGENDARY BROLY TEE from the Fandom collection.",details:["Official Fandom catalogue listing","Product availability may change","Original product photos are not attached yet"],fabric:"See original product listing for material and care details."}
];
const extraCatalogue = [
 {id:"arc-jacket",cat:"jackets",name:"Arc Jacket",price:2350,colour:"Black",imgs:[],lead:"A clean outer layer with a structured shape.",details:["Relaxed fit","Minimal finish"],fabric:"Care details to be confirmed."},
 {id:"mono-sweatshirt",cat:"sweatshirts",name:"Mono Sweatshirt",price:1650,colour:"Graphite",imgs:[],lead:"A simple heavyweight layer for everyday wear.",details:["Relaxed fit","Ribbed cuffs"],fabric:"Care details to be confirmed."},
 {id:"arc-jeans",cat:"jeans",name:"Arc Denim",price:1750,colour:"Washed Black",imgs:[],lead:"A relaxed denim silhouette.",details:["Relaxed fit","Classic five-pocket styling"],fabric:"Care details to be confirmed."},
 {id:"mono-knit",cat:"knitwear",name:"Mono Knit",price:1900,colour:"Onyx",imgs:[],lead:"A minimal knit layer.",details:["Soft hand feel","Clean silhouette"],fabric:"Care details to be confirmed."}
];
const PRODUCT_IMAGE_ASSIGNMENTS = {
  "heavy-straight-pants-gray": [
    "images/products/IMG_6315_1.webp",
    "images/products/IMG_6317_1.webp",
    "images/products/IMG_6319_1.webp"
  ],
  "heavy-straight-pants-black": [
    "images/products/IMG_9484_c23e7cee-5be0-4c26-84af-0bf259db0c56.webp",
    "images/products/GenerativeFill6.webp",
    "images/products/IMG_9488_980e0605-174c-41f7-b503-f3ab17ff945a.webp",
    "images/products/GenerativeFill8_d7da2447-16e3-459d-b6da-178ed08156ec.webp"
  ],
  "sweatpants-brown": [
    "images/products/2_e18726f8-e251-40ba-9cee-30851b69b2ac.webp",
    "images/products/4_8cb9d022-dde1-430b-ae50-01a115ba6f6b.webp",
    "images/products/1_0ac364fe-e208-49c5-9403-5221ebfc3d19.webp",
    "images/products/3_1d6a7335-c0e6-4cfb-b894-beb804c1701a.webp"
  ],
  "light-straight-pants-gray": [
    "images/products/IMG_9399.webp",
    "images/products/GenerativeFill7_d414b0ba-d80c-40e9-b87c-315deddd7b04.webp",
    "images/products/IMG_9409.webp",
    "images/products/IMG_9420.webp"
  ],
  "light-straight-pants-brown": [
    "images/products/GenerativeFill2_6d2dcee7-787a-4d26-8e35-6c6e0cdfa458.webp",
    "images/products/GenerativeFill_fd14b58f-4b9b-4c72-bce7-e9150e2aaf0d.webp",
    "images/products/IMG_9453.webp"
  ],
  "basic-pants": [
    "images/products/black.webp",
    "images/products/beige.webp",
    "images/products/gray.webp",
    "images/products/navy-blue.webp"
  ],
  "zoro-pants": [
    "images/products/zoro-joggers-zams-2.webp",
    "images/products/zoro-joggers-zams-4-157115_76ef4447-807d-4317-bba7-69c34f3d49e9.webp"
  ],
  "chains-pants": [
    "images/products/GenerativeFill3_faabf748-f6e6-4d00-9cb9-6cdfbc6b878c.webp",
    "images/products/GenerativeFill_9d42c636-9ade-487d-abbc-1eaa60e72605.webp",
    "images/products/IMG_9425.webp",
    "images/products/GenerativeFill2_4d5cc54e-fc58-4213-afb4-1fc703eb02a2.webp"
  ],
  "balloon-jeans-olive": [
    "images/products/fandom-balloon-jeans-1.webp",
    "images/products/fandom-balloon-jeans-2.webp"
  ],
  "balloon-jeans-indigo": [
    "images/products/1000240765.webp",
    "images/products/1000240764.webp",
    "images/products/1000240766.webp"
  ],
  "balloon-jeans-light-blue": [
    "images/products/fandom-light-blue-balloon-1.webp",
    "images/products/fandom-light-blue-balloon-detail.webp"
  ],
  "balloon-jeans-black": [
    "images/products/fandom-black-balloon-0.webp",
    "images/products/fandom-black-balloon-2.webp"
  ],
  "musashi-miyamoto-tee": [
    "images/products/IMG_0156.webp",
    "images/products/IMG_0159.webp",
    "images/products/IMG_0158.webp"
  ],
  "naruto-acid": [
    "images/products/ChatGPT_Image_Aug_25_2026_06_15_02_AM.webp",
    "images/products/ChatGPT_Image_Aug_25_2026_06_17_34_AM.webp"
  ],
  "tee-gojo-v3": [
    "images/products/IMG_0172.webp",
    "images/products/IMG_0160.webp",
    "images/products/IMG_0162.webp"
  ],
  "tee-limitless": [
    "images/products/ChatGPTImageSep5_2026_04_32_46PM_1.webp",
    "images/products/ChatGPTImageSep5_2026_04_32_46PM_2.webp",
    "images/products/ChatGPTImageSep5_2026_04_16_57PM.webp"
  ],
  "kenpachi-zaraki": [
    "images/products/IMG_8050.webp",
    "images/products/IMG_8052.webp",
    "images/products/IMG_8053.webp"
  ],
  "brutal-crest-mark": [
    "images/products/Brutal Crest Mark.webp"
  ],
  "demon-slayer-pants": [
    "images/products/demon-slayer-joggers-zams-1.webp",
    "images/products/demon-slayer-joggers-zams-2.webp"
  ],
  "frame-anime-university": [
    "images/products/Anime University.webp"
  ],
  "keychain-luffy-straw-hat": [
    "images/products/LUFFY STRAW HAT.webp"
  ],
  "frame-hxh-last-mission": [
    "images/products/HxH Last Mission.webp"
  ],
  "frame-dbz-v1": [
    "images/products/DBZ v1.webp"
  ],
  "frame-naruto-vs-sasuke": [
    "images/products/Naruto vs Sasuke.webp"
  ],
  "frame-levi-from-aot": [
    "images/products/Levi from AOT.webp"
  ],
  "basic-red-tee": [
    "images/products/Basic Red Tee.webp",
    "images/products/4_79d81d03-a413-443b-80c0-7e588f0fdf52.webp",
    "images/products/1_e44161ff-393f-4e8b-a6c6-25ad159b43ae.webp",
    "images/products/IMG_9375.webp",
    "images/products/IMG_9378.webp",
    "images/products/3_b234d50f-1b04-4497-9736-2440d2ccd206.webp",
    "images/products/4_12169467-4d33-4720-870b-27ee45971f96.webp",
    "images/products/1_40eb9d93-d52d-4b2f-8d01-6cbab7f2d9c8.webp",
    "images/products/IMG_5058.webp",
    "images/products/IMG_5061.webp",
    "images/products/IMG_5060.webp"
  ],
  "basic-pink-tee": [
    "images/products/2_f350efca-1c15-4772-be5d-75a216bd73d7.webp",
    "images/products/3_ef334ef5-769d-4689-883f-616130e62659.webp",
    "images/products/4_bd1741a5-401b-4b09-b3f0-54e9440b625c.webp"
  ],
  "basic-brown-tee": [
    "images/products/3_47d517b6-7125-42c9-b3c1-8d73593da7c4.webp",
    "images/products/4_79c9cd7d-b45d-4a3d-815f-df7681ceab1a.webp"
  ],
  "basic-yellow-tee": [
    "images/products/1_b0b93abc-cb50-42f4-8724-da4cf1be0417.webp",
    "images/products/2_afaaf9b2-8a33-4646-b728-8f5f25e1ee34.webp",
    "images/products/3_c6a36657-4e1e-4d35-a021-ff99a09abe1c.webp"
  ],
  "basic-gray-tee": [
    "images/products/gray_deec856b-2024-452f-bdab-94fdc273bccf.webp",
    "images/products/4_8b24d7e5-bd41-4cab-86ef-bfa44478bb2e.webp",
    "images/products/5_d72671d3-598b-47b5-906d-565f93d55631.webp"
  ],
  "cap-survey-corps": [
    "images/products/exec-84bc7b37-d182-43d7-bdb4-b21e0cbbc7d3.webp",
    "images/products/exec-d34e5765-f4bf-491c-ba81-e94b4c454bd1.webp",
    "images/products/exec-ec89a2e5-a24f-480c-9416-5088c0b1b95f.webp"
  ],
  "one-piece-cap": [
    "images/products/CodexImageAug19_2026_04_10_28PM.webp",
    "images/products/exec-243547fb-5f6a-421f-b88b-77ca50687929.webp"
  ],
  "hidden-leaf-cap": [
    "images/products/exec-1156c395-81d8-4dce-97b4-530b9fc7ca96.webp",
    "images/products/exec-4327dd0d-5ea1-4c16-8bce-d8d32ce4b4f4.webp",
    "images/products/exec-a8e98b6c-0f58-4485-9a98-434de0befd45.webp"
  ],
  "cap-uchiha-clan": [
    "images/products/CodexImageAug19_2026_07_38_09PM.webp",
    "images/products/exec-41a6aae4-f436-44b6-9f3b-3fff7b2bab19.webp"
  ],
  "cap-death-note": [
    "images/products/CodexImageAug30_2026_06_32_43PM.webp",
    "images/products/CodexImageAug30_2026_06_33_13PM.webp",
    "images/products/CodexImageAug30_2026_06_38_54PM.webp"
  ],
  "paradis-quarter-zip": [
    "images/products/1_0f76af01-5bd8-46f1-90da-595367399b8c.webp"
  ],
  "kaiju-no-8": [
    "images/products/2_6a922374-909c-4ba2-bc0d-d47ea33b11d9.webp"
  ],
  "white-basic-hoodie": [
    "images/products/1_093ecdc7-baa3-4271-bf9d-6fec95a3460c.webp"
  ],
  "pink-basic-hoodie": [
    "images/products/09C9C0DF-0A3E-457D-B301-761AED39C787.jpg"
  ],
  "basic-baby-blue-tee": [
    "images/products/1_277cda11-3f8f-40fe-9dd1-2587c5e3d4c6.webp"
  ],
  "lamp-batman": [
    "images/products/Y7WwQge08G7rpNAr.webp"
  ],
  "hoodie-freedom-black": [
    "images/products/freedom-black-hoodie-front.webp",
    "images/products/1_79059f2c-80e9-40f7-8355-4d1a2380c3ad.webp",
    "images/products/freedom-black-hoodie-side.webp"
  ],
  "crimson-cloud-sticker": [
    "images/products/NARUTO68.webp"
  ],
  "tee-gaara": [
    "images/products/IMG_4983.webp",
    "images/products/IMG_4986.webp",
    "images/products/IMG_4985.webp"
  ],
  "tee-naruto": [
    "images/products/IMG_4960.webp",
    "images/products/IMG_4963.webp",
    "images/products/IMG_4962.webp"
  ],
  "cursed-arm-manifestation": [
    "images/products/JUJUTSU76.webp"
  ],
  "crimson-crescent-blade": [
    "images/products/BLEACH37.webp"
  ],
  "sticker-hunter-logo": [
    "images/products/HUNTERX23.webp"
  ],
  "winged-vanguard-sticker": [
    "images/products/ATTACK-ON-TITAN46.webp"
  ],
  "sticker-hunter-logo-alt": [
    "images/products/HUNTERX7_2822d5de-7861-4b7a-aef3-737d6313eaff.webp"
  ],
  "joyful-ascension-sticker": [
    "images/products/ONEPIECE63.webp",
    "images/products/ONEPIECE75.webp"
  ],
  "blue-lock-sweater": [
    "images/products/1_cccd4eb6-2dd4-4e57-b0d8-d5f86ed73a09.webp",
    "images/products/2_358d1463-fd76-40ef-b8d7-d83c179bcbcb.webp",
    "images/products/3_91378bbc-6a27-4ada-8735-a8b5a290e197.webp",
    "images/products/IMG_9488.webp",
    "images/products/IMG_9487.webp",
    "images/products/IMG_9485.webp"
  ],
  "tee-99-killua-long-sleeve": [
    "images/products/IMG_6415.webp",
    "images/products/IMG_6418.webp",
    "images/products/IMG_6417.webp"
  ],
  "phantom-troupe-varsity": [
    "images/products/4_d3a87af7-6c59-4882-803d-68ab03c56c40.webp",
    "images/products/3_caf5ee8d-25e9-4fc9-9d22-17f74fee73b1.webp",
    "images/products/2_069d2e02-b7fd-4cee-86b2-5d05ef616d5f.webp"
  ],
  "itachi-varsity": [
    "images/products/1_b761b95f-16a4-4944-964e-a91c088b2b0b.webp",
    "images/products/4_6e579b40-48d1-4628-b03f-d1a65511032b.webp"
  ],
  "red-zipper-jacket": [
    "images/products/3_fda13ac1-8db3-485a-9cb3-24f56ec506b3.webp"
  ],
  "ultimate-berserk-hoodie": [
    "images/products/1_a0525e22-2f5d-494c-8a58-a7850cdaf97f.webp",
    "images/products/3_07f4cae0-822f-4a2c-945f-f8d30e17b4b2.webp",
    "images/products/2_2485d3f4-b8bb-4d52-a221-0ef7a6995e47.webp"
  ],
  "basic-green-tee": [
    "images/products/ChatGPT_Image_Aug_25_2026_06_02_02_AM.webp",
    "images/products/IMG_5057.webp",
    "images/products/IMG_5055.webp"
  ],
  "bizarre-bloodline-zip-hoodie": [
    "images/products/47D56C3E-1FE0-4E6C-A28E-FF81CE3921F5.webp",
    "images/products/01B8B633-DC04-4031-912D-41D5A6837481.webp",
    "images/products/0E796B08-39F4-4FA1-BFB6-F0602D46E2E8.webp"
  ],
  "gyro-zeppeli": [
    "images/products/2_f0aafd42-698f-469c-96dc-6534b9503b24.webp",
    "images/products/1_3b3d0f65-df63-487e-b90a-5cf40248cce0.webp",
    "images/products/3_6bcb824b-99cb-4f73-8c5c-0f8b3e7ac8ab.webp"
  ],
  "utility-jogger-black": [
    "images/products/IMG_6262.webp",
    "images/products/IMG_6261.webp",
    "images/products/IMG_6263.webp"
  ],
  "utility-jogger-silver": [
    "images/products/Hue_Saturation1.webp",
    "images/products/Hue_Saturation1copy2.webp",
    "images/products/Hue_Saturation1copy.webp"
  ],
  "socks-one-piece": [
    "images/products/5_b8cbf7c7-565e-4c29-8dd1-35ffa16cb2b6.webp"
  ],
  "basic-black-tee": [
    "images/products/IMG_4951.webp",
    "images/products/IMG_4948.webp",
    "images/products/IMG_4950.webp"
  ],
  "tee-gyomei-red": [
    "images/products/3_c6c2aa65-a64b-495a-ab05-3c3d7a484774.webp",
    "images/products/4_ae80ab54-c25a-4f6d-8ccc-f37e19227304.webp",
    "images/products/4_6c82151d-88ab-426e-b8b7-17ba0bbf32d2.webp"
  ],
  "sukuna-v1-tee": [
    "images/products/IMG_6407.webp",
    "images/products/IMG_6410.webp",
    "images/products/IMG_6409.webp"
  ],
  "spiders-hoodie": [
    "images/products/1_478ecea0-5daf-466a-9378-d8258826d839.webp",
    "images/products/2_add76b38-f35c-462d-82d0-4f783d9f264d.webp",
    "images/products/3_ac8a2048-c868-44c6-ac3e-fcc6dda8498f.webp"
  ],
  "ulquiorra-cifer": [
    "images/products/IMG_6248.webp",
    "images/products/IMG_6251.webp",
    "images/products/IMG_6250.webp"
  ],
  "akatsuki-cap": [
    "images/products/6736ab67-a573-4612-b4ef-64d7a3ac2234.webp",
    "images/products/b9fb0c63-724f-4715-85f3-e8f4030b47af.webp",
    "images/products/9ccaadbc-36dd-4382-8287-415f6c4bc45e.webp"
  ],
  "hollow-mask-icon": [
    "images/products/BLEACH44_f4a01e33-5ffe-490b-a5b4-7f9a618cbb0c.webp"
  ],
  "black-tokyo-ghoul": [
    "images/products/IMG_6228.webp",
    "images/products/IMG_6231.webp",
    "images/products/IMG_6230.webp"
  ],
  "green-gon": [
    "images/products/IMG_5080_1.webp",
    "images/products/IMG_5082_1.webp",
    "images/products/IMG_5081_1.webp"
  ],
  "aot-green-zip-up": [
    "images/products/6.webp",
    "images/products/5_07d327e0-83a0-4246-9547-48888bf4e79e.webp"
  ],
  "custom-gon-tee": [
    "images/products/IMG_4968.webp",
    "images/products/IMG_4971.webp",
    "images/products/IMG_4970.webp"
  ],
  "attack-on-titan-accessory": [
    "images/products/59.webp"
  ],
  "sukuna-cap": [
    "images/products/3_a5f71c27-778e-4211-9463-50010eb7513b.webp",
    "images/products/1_dd836ff2-bfe5-43a1-8e23-9fec58dd1c0c.webp",
    "images/products/2_975fd221-1f91-426b-8735-1765b7c0004e.webp"
  ],
  "tee-baki": [
    "images/products/Baki_4_4e83a602-d975-451e-b444-1fb012011f35.webp",
    "images/products/Baki_08209954-5fa1-43f4-b508-26100920e4b9.webp"
  ],
  "hisoka-tee-alt": [
    "images/products/IMG_4987.webp",
    "images/products/IMG_4990.webp",
    "images/products/IMG_4989.webp"
  ],
  "rambling-aot": [
    "images/products/3_c65f451a-034d-4680-8a92-b1e1a8cfd6e0.webp",
    "images/products/4_da39e86b-2c7d-4c65-937d-34f82b571924.webp",
    "images/products/2_472375c4-ce33-4a5e-b59a-8e657abe9227.webp"
  ],
  "phantom-troupe-spiders-tee": [
    "images/products/IMG_4920_5f728230-fa29-43fc-82c8-386e2a7ced18.webp",
    "images/products/IMG_4923_008cb249-7d97-4942-9579-9d5dc5215cca.webp",
    "images/products/IMG_4922_d0b81d37-4c1e-4f43-8903-eb5ce66f2ddb.webp"
  ],
  "beige-basic-hoodie": [
    "images/products/IMG_5039.webp",
    "images/products/IMG_5010.webp",
    "images/products/IMG_5041.webp"
  ],
  "black-basic-hoodie-alt": [
    "images/products/IMG_6264.webp",
    "images/products/IMG_6267.webp",
    "images/products/IMG_6266.webp"
  ],
  "zipper-brown": [
    "images/products/IMG_5042.webp",
    "images/products/IMG_5045.webp",
    "images/products/IMG_5044.webp"
  ],
  "pink-zipper": [
    "images/products/3_1248e912-6088-40e1-ae35-bb9528cebae1.webp",
    "images/products/4_a3827325-61ee-4ab6-b914-8072912ee743.webp",
    "images/products/1_5b37f884-4496-4916-b482-e40890d7d63c.webp"
  ],
  "green-zipper-jacket": [
    "images/products/3_ff6be0e1-233e-48fb-9836-a22babcf07e8.webp",
    "images/products/4_3185c370-adec-4f04-a485-87a3c806d527.webp",
    "images/products/1_a2ad3d16-0458-4be4-8332-25fc5e7f55e0.webp"
  ],
  "hunter-license-card": [
    "images/products/HUNTERX10_fe532896-7d26-44cd-b7cc-6726532209e8.webp"
  ],
  "tee-griffith-v1": [
    "images/products/IMG_1531.webp",
    "images/products/IMG_1540.webp",
    "images/products/IMG_1533.webp"
  ],
  "asta-red": [
    "images/products/IMG_4964.webp",
    "images/products/IMG_4967.webp",
    "images/products/IMG_4966.webp"
  ],
  "tee-blind-faith": [
    "images/products/IMG_4991.webp",
    "images/products/IMG_4994.webp",
    "images/products/IMG_4993.webp"
  ],
  "chainsaw-man-premium": [
    "images/products/IMG_6244.webp",
    "images/products/IMG_6247.webp",
    "images/products/IMG_6246.webp"
  ],
  "berserk-v4": [
    "images/products/IMG_6232.webp",
    "images/products/IMG_6235.webp",
    "images/products/IMG_6234.webp"
  ],
  "patched-one-piece-hoodie": [
    "images/products/ChatGPTImageNov10_2026_05_42_26AM.webp",
    "images/products/ChatGPTImageNov10_2026_05_42_32AM.webp",
    "images/products/3_a7147da2-c023-4efb-995b-c1a00b6b8756.webp",
    "images/products/4_20925326-a026-4ddd-8d27-58fd1838f181.webp"
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
const TEMP_ALL_PRODUCT_IMAGES = ["images/products/01B8B633-DC04-4031-912D-41D5A6837481.webp", "images/products/0367D6E9-10EA-41BF-811B-7D1D58B55FCC.webp", "images/products/067376D3-37E7-4BE3-A90C-C531445178AD.webp", "images/products/072458420517d2dc.webp", "images/products/09C9C0DF-0A3E-457D-B301-761AED39C787.jpg", "images/products/0E796B08-39F4-4FA1-BFB6-F0602D46E2E8.webp", "images/products/1.webp", "images/products/10.webp", "images/products/1000240764.webp", "images/products/1000240765.webp", "images/products/1000240766.webp", "images/products/11_49a29e16-745c-4371-9036-067382e77c2a.webp", "images/products/11_8962c9a2-31b2-4ffb-820d-f09006787a49 (1).webp", "images/products/11_8962c9a2-31b2-4ffb-820d-f09006787a49.webp", "images/products/1_0099e88a-103f-488c-8f8f-4f7d9de451a4.webp", "images/products/1_05b08864-2d9f-47f1-b2c0-4525950169e9.webp", "images/products/1_093ecdc7-baa3-4271-bf9d-6fec95a3460c.webp", "images/products/1_0ac364fe-e208-49c5-9403-5221ebfc3d19.webp", "images/products/1_0c0617a1-b9b7-40f2-bc4f-c3e5e179c2ae.webp", "images/products/1_0f76af01-5bd8-46f1-90da-595367399b8c.webp", "images/products/1_19553d10-e256-4ad6-b516-66b7fd0aaaff.webp", "images/products/1_277cda11-3f8f-40fe-9dd1-2587c5e3d4c6.webp", "images/products/1_2fbe6031-850a-411e-baeb-78b65c8c7609.webp", "images/products/1_34d4a146-0e00-4826-b87b-3718f4f1b29a.webp", "images/products/1_36986487-bfe9-44f2-ba5a-b39486688836.webp", "images/products/1_36fbb623-0ab0-4c69-972a-fe53f88132a8.webp", "images/products/1_38686188-c180-4d0b-8b44-17a5843e1e3c.webp", "images/products/1_3b3d0f65-df63-487e-b90a-5cf40248cce0.webp", "images/products/1_3bf2b417-ad5a-4a34-9908-3bb98abfb8f1.webp", "images/products/1_3c6f7444-e147-4b7b-914a-0d37fb9d0822.webp", "images/products/1_40eb9d93-d52d-4b2f-8d01-6cbab7f2d9c8.webp", "images/products/1_478ecea0-5daf-466a-9378-d8258826d839.webp", "images/products/1_4b9a7b6b-3189-43fe-9f9c-e88c4ed2a15d.webp", "images/products/1_50935ef2-b916-42d8-bd29-f3e900c1fcc0.webp", "images/products/1_5ac45b76-6155-49c9-8b0e-b5b15fdf92fb.webp", "images/products/1_5b37f884-4496-4916-b482-e40890d7d63c.webp", "images/products/1_5ea53829-9505-49e0-8196-7c942926c926.webp", "images/products/1_69b72121-bea1-4127-a684-c6613cc542f9.webp", "images/products/1_75af65b3-cb7a-407a-8598-7dd8d73fdca6.webp", "images/products/1_765af5e4-2df3-4985-a71d-a3c075052cbd.webp", "images/products/1_79059f2c-80e9-40f7-8355-4d1a2380c3ad.webp", "images/products/1_7fba4c76-a79b-4f13-b78d-f691aa47e6b8.webp", "images/products/1_98506ab7-fd1f-451f-9f8e-560525085bf6.webp", "images/products/1_a0525e22-2f5d-494c-8a58-a7850cdaf97f.webp", "images/products/1_a2ad3d16-0458-4be4-8332-25fc5e7f55e0.webp", "images/products/1_a3f56b69-7031-4c20-9148-6e1f6ebe880e.webp", "images/products/1_b0b93abc-cb50-42f4-8724-da4cf1be0417.webp", "images/products/1_b0e9e35b-580c-4574-b95f-64ed0ad7bb5e.webp", "images/products/1_b4ed3811-d1a8-4bd1-8907-6948d611ca7a.webp", "images/products/1_b4fc5ede-7e43-404f-8383-fd77519f086e.webp", "images/products/1_b6e71dbe-982d-416e-a08d-387b580c5245.webp", "images/products/1_b761b95f-16a4-4944-964e-a91c088b2b0b.webp", "images/products/1_b7f56ac1-7b7f-4b32-b4dc-06a9755e9f72.webp", "images/products/1_bce8f48d-8b6f-4e0a-94d3-974cfce026d4.webp", "images/products/1_c1dc417e-a658-4639-8eae-da78a6adc61b.webp", "images/products/1_c59ceab2-1f17-4c7f-a8ba-e06d11a60463.webp", "images/products/1_cccd4eb6-2dd4-4e57-b0d8-d5f86ed73a09.webp", "images/products/1_dd836ff2-bfe5-43a1-8e23-9fec58dd1c0c.webp", "images/products/1_e19542f2-2f3d-4271-971f-c7c9a2dfd99f.webp", "images/products/1_e44161ff-393f-4e8b-a6c6-25ad159b43ae.webp", "images/products/1_f010d6b0-b1e7-4e31-a648-caf50ba38122.webp", "images/products/1_f6bff411-9656-4e0f-9ed3-389da9d85b74.webp", "images/products/1_f7ee37c3-7ca1-4daf-9c8f-1195edda07b7.webp", "images/products/1_f96e7e98-aa3c-4263-a949-eabda71c91a0.webp", "images/products/1_fcc248bd-ab85-4ee3-8b05-c76045195c8a.webp", "images/products/2.webp", "images/products/22_172246b6-aa36-4055-8269-01ceec2ef05b (1).webp", "images/products/22_172246b6-aa36-4055-8269-01ceec2ef05b.webp", "images/products/27420B19-024A-4BA9-990A-E3FC058833C1.webp", "images/products/2D3AE4B7-8CD0-4442-A7BD-11BE10DB791B.jpg", "images/products/2D735B48-D1CF-4913-9B73-35EAA072FD55.webp", "images/products/2_003ce501-5291-4b31-899f-4688ae0feabe.webp", "images/products/2_069d2e02-b7fd-4cee-86b2-5d05ef616d5f.webp", "images/products/2_0ac97605-bc68-4dfe-a0e1-571e2babda72.webp", "images/products/2_0c041a8c-5317-43b2-87ca-b3ddeffe83d6.webp", "images/products/2_1ec7d0c4-b8b6-45e7-9608-0f7ae0f1fe85.webp", "images/products/2_2485d3f4-b8bb-4d52-a221-0ef7a6995e47.webp", "images/products/2_29c4e52b-d345-40d8-b850-9aa13ea321dc.webp", "images/products/2_30a2a56b-a259-4ed7-833e-75480a6b2ce7.webp", "images/products/2_358d1463-fd76-40ef-b8d7-d83c179bcbcb.webp", "images/products/2_3f432a6d-6fef-4229-b453-28655c2f26c2.webp", "images/products/2_472375c4-ce33-4a5e-b59a-8e657abe9227.webp", "images/products/2_47d5f77e-bc16-49e4-861e-f2f3d9687c19.webp", "images/products/2_499d9437-89e4-4e3f-bf05-7304ec9ecab2.webp", "images/products/2_6894dd8a-0eff-4e91-b483-5fdc8c6772c3.webp", "images/products/2_6a922374-909c-4ba2-bc0d-d47ea33b11d9.webp", "images/products/2_83623434-3b14-4da4-b574-5f4c4940108b.webp", "images/products/2_8fd2bc97-d07e-43a1-a2a9-6de4fd3154ee.webp", "images/products/2_975fd221-1f91-426b-8735-1765b7c0004e.webp", "images/products/2_97e141e1-3ded-4e71-8d68-75a3eed7d191.webp", "images/products/2_9cfc4574-8565-46e5-83c0-303d02ba1984.webp", "images/products/2_a375c7ee-5087-4bcd-8c0f-751629c847b8.webp", "images/products/2_a3d0d881-fdd8-435b-af98-76e775e0e193.webp", "images/products/2_a77e2768-abdf-4f51-9c4f-e19cb7b4acaf.webp", "images/products/2_a7b3fbd1-ca42-491b-855c-79010754d2cb.webp", "images/products/2_a7df710e-e99b-4ac3-b051-d96eb8ebbd6d.webp", "images/products/2_a81a473b-3437-4af2-b86a-567d07f5e79e.webp", "images/products/2_ad2ab8f5-8afa-4eef-b5c6-908271339321.webp", "images/products/2_add76b38-f35c-462d-82d0-4f783d9f264d.webp", "images/products/2_afaaf9b2-8a33-4646-b728-8f5f25e1ee34.webp", "images/products/2_b7ab1741-dae1-4e38-b823-d75fc4e2b605.webp", "images/products/2_b83c44e3-fe95-4831-9c91-e30e306821b5.webp", "images/products/2_be031f01-38ef-448f-a19c-c1c5a475a9e8.webp", "images/products/2_c3b18154-1cf1-474d-b84a-511a9486451c.webp", "images/products/2_c8220ea6-ceaa-43d2-aff6-00bc060cb92a.webp", "images/products/2_d8ca7914-7fc4-4afb-8efb-182c1eff85a5.webp", "images/products/2_d94ebdee-45a4-44d2-b30c-a0648a33b86d.webp", "images/products/2_e18726f8-e251-40ba-9cee-30851b69b2ac.webp", "images/products/2_ed3fb7d6-06cc-444d-a1c1-ff05a0cc23b5.webp", "images/products/2_f02d2b4c-4951-490f-b99b-14d5a29346b5.webp", "images/products/2_f0aafd42-698f-469c-96dc-6534b9503b24.webp", "images/products/2_f350efca-1c15-4772-be5d-75a216bd73d7.webp", "images/products/2_f5bb35c5-3798-40f9-b8f9-d1b110e29312.webp", "images/products/2b4a66e6d51fc43a.webp", "images/products/3.webp", "images/products/308D23A5-9B93-4DC3-9C70-A8B037A2D389.jpg", "images/products/30EB5325-569A-4021-87D7-5A248F902791.webp", "images/products/33.webp", "images/products/3725932E-8454-4BDF-86D3-146EB90C0CF1.webp", "images/products/3_0493942f-4f97-4aba-8302-6b35926169e4.webp", "images/products/3_06819737-0ece-4b48-b9ab-09597d307640.webp", "images/products/3_07a194b0-b531-47fb-b1ec-2b815997a234.webp", "images/products/3_07f4cae0-822f-4a2c-945f-f8d30e17b4b2.webp", "images/products/3_10450599-f692-4f23-8bf0-b880b3172723.webp", "images/products/3_1248e912-6088-40e1-ae35-bb9528cebae1.webp", "images/products/3_1d6a7335-c0e6-4cfb-b894-beb804c1701a.webp", "images/products/3_3f447f2f-0113-49ec-b294-671040ee0405.webp", "images/products/3_47d517b6-7125-42c9-b3c1-8d73593da7c4.webp", "images/products/3_620d983b-cb6b-434b-8442-e110ef02080f.webp", "images/products/3_67809cba-fd55-41b0-9c3d-72b3d4d73b2d.webp", "images/products/3_6bcb824b-99cb-4f73-8c5c-0f8b3e7ac8ab.webp", "images/products/3_748f8169-356a-4810-90cf-d5d8dff15360.webp", "images/products/3_7ac376a3-6a23-4348-a4b5-15b0933ad770.webp", "images/products/3_7bb69ff8-1905-48f5-a45b-1ee71c313124.webp", "images/products/3_7bf64e78-eb7c-4442-a8c9-eb47d8e4d965.webp", "images/products/3_91378bbc-6a27-4ada-8735-a8b5a290e197.webp", "images/products/3_92ec26b3-5509-4bdf-9a77-438d6454949f.webp", "images/products/3_a5f71c27-778e-4211-9463-50010eb7513b.webp", "images/products/3_a7147da2-c023-4efb-995b-c1a00b6b8756.webp", "images/products/3_ac8a2048-c868-44c6-ac3e-fcc6dda8498f.webp", "images/products/3_b234d50f-1b04-4497-9736-2440d2ccd206.webp", "images/products/3_c65f451a-034d-4680-8a92-b1e1a8cfd6e0.webp", "images/products/3_c6a36657-4e1e-4d35-a021-ff99a09abe1c.webp", "images/products/3_c6c2aa65-a64b-495a-ab05-3c3d7a484774.webp", "images/products/3_c8694c8e-aa34-4c45-8b2c-ba0b9b06b17f.webp", "images/products/3_caf5ee8d-25e9-4fc9-9d22-17f74fee73b1.webp", "images/products/3_d1e99e60-d600-4e6d-96d6-a5aa3b737bbc.webp", "images/products/3_dcddae4e-4766-45fe-b629-82dac9ef7038.webp", "images/products/3_de1c331c-08c7-4dd9-94dd-369f7009cdc3.webp", "images/products/3_dfea29a1-44ed-497f-b7ac-0e6db18a6d50.webp", "images/products/3_e886f45a-853c-477d-a036-a52ec0174b48.webp", "images/products/3_e90a2a3a-5732-42b6-85a3-bbd1ae4ecffb.webp", "images/products/3_ef334ef5-769d-4689-883f-616130e62659.webp", "images/products/3_fd6a2028-9871-4291-b04b-9474992d995f.webp", "images/products/3_fda13ac1-8db3-485a-9cb3-24f56ec506b3.webp", "images/products/3_ff6be0e1-233e-48fb-9836-a22babcf07e8.webp", "images/products/4.webp", "images/products/42801EC7-8A30-4A0D-996C-B22D3700E03B.webp", "images/products/44.webp", "images/products/47D56C3E-1FE0-4E6C-A28E-FF81CE3921F5.webp", "images/products/483b0fe18b3aa9cc.webp", "images/products/4C35F3EF-B02B-4CC0-8180-579187CD487E.jpg", "images/products/4_086ccfd3-c652-43f2-9349-bf033387a990.webp", "images/products/4_0a6e6223-5e61-4528-bafb-7af5e78f7d1d.webp", "images/products/4_120eeab6-563f-40bc-aca9-81ec682d617e.webp", "images/products/4_12169467-4d33-4720-870b-27ee45971f96.webp", "images/products/4_16603236-c243-4113-b9c9-a7e158397290.webp", "images/products/4_18fc1ef3-8476-4abf-9629-51da4189e45a.webp", "images/products/4_1a2ef6c2-ee8e-4373-9278-5b46c8b4da2a.webp", "images/products/4_1c4053d9-8753-4874-b7c3-817a4e193fa0.webp", "images/products/4_1de7fab4-6ee0-4b79-b421-1809c10dadb2.webp", "images/products/4_20925326-a026-4ddd-8d27-58fd1838f181.webp", "images/products/4_2b2d4fb9-a959-448a-a223-73767881109a.webp", "images/products/4_3185c370-adec-4f04-a485-87a3c806d527.webp", "images/products/4_33fa97d3-69a5-4a24-b5c5-6372d2c1b8fa.webp", "images/products/4_3b2562c6-f279-4c6e-9202-4329746567e0.webp", "images/products/4_42586721-98e1-45da-a1c6-a36bc7ea4ecf.webp", "images/products/4_49862f21-0f96-4670-8bbe-8ca3497f9607.webp", "images/products/4_511f1b0d-7d10-4bf3-ae8b-b221a423c674.webp", "images/products/4_51b01076-ab84-4c74-ae80-6475ae3c1f69.webp", "images/products/4_53a058c5-35f3-4ac6-abd7-0b0afca89087.webp", "images/products/4_56c1ac5e-4edb-4d21-af8a-b8bd932aa756.webp", "images/products/4_6182afca-5f2d-49ca-94f4-9d39ead479e9.webp", "images/products/4_633f123e-1623-41a7-9e6f-50b63490baf6.webp", "images/products/4_6c82151d-88ab-426e-b8b7-17ba0bbf32d2.webp", "images/products/4_6e579b40-48d1-4628-b03f-d1a65511032b.webp", "images/products/4_79c9cd7d-b45d-4a3d-815f-df7681ceab1a.webp", "images/products/4_79d81d03-a413-443b-80c0-7e588f0fdf52.webp", "images/products/4_7b4b8643-8f91-4976-b72b-394a5b2fcde5.webp", "images/products/4_8b24d7e5-bd41-4cab-86ef-bfa44478bb2e.webp", "images/products/4_8cb9d022-dde1-430b-ae50-01a115ba6f6b.webp", "images/products/4_a3827325-61ee-4ab6-b914-8072912ee743.webp", "images/products/4_a9e9d3e6-e901-4b6c-9d00-561bc0900952.webp", "images/products/4_ae80ab54-c25a-4f6d-8ccc-f37e19227304.webp", "images/products/4_b28803db-e37b-4351-bb5b-6c50c60fad3e.webp", "images/products/4_b6543964-c3d6-4b47-bbf7-650d7dc0a19a.webp", "images/products/4_ba3a60f8-66eb-45c4-9712-5411126f14e5.webp", "images/products/4_bd1741a5-401b-4b09-b3f0-54e9440b625c.webp", "images/products/4_c2d55677-3bb5-4a5c-869d-c72e1826b8e9.webp", "images/products/4_cd510ec5-08f4-43fe-baec-4efd8962e5f5.webp", "images/products/4_ced0cbd3-590a-4769-aaa1-20d8771c3cb0.webp", "images/products/4_d3a87af7-6c59-4882-803d-68ab03c56c40.webp", "images/products/4_da39e86b-2c7d-4c65-937d-34f82b571924.webp", "images/products/4_e2c61543-7cbd-41ef-897c-0e69a584b51b.webp", "images/products/4_e33f6639-cfb8-4cb6-9cc4-23029754a51d.webp", "images/products/4_e3a3d00c-c093-4fab-8fa8-eb6af650722e.webp", "images/products/4_e7a1c4e2-94a3-4f1c-83b7-25876b90e71e.webp", "images/products/4_f4381ca9-f2d0-4aad-a033-0592ad01b6b9.webp", "images/products/4_f7f7c350-4a73-437e-85a1-e93691f787cb.webp", "images/products/4_fd8d2eb7-4020-4ac5-ac1d-ca98271ee475.webp", "images/products/5.webp", "images/products/51.webp", "images/products/56E12226-5674-483A-9510-9DD85B643486.webp", "images/products/5824283839214325187.webp", "images/products/5826621611388374233.webp", "images/products/5826854978436402416.webp", "images/products/59.webp", "images/products/5951e995f02419fa.webp", "images/products/5_07d327e0-83a0-4246-9547-48888bf4e79e.webp", "images/products/5_b8cbf7c7-565e-4c29-8dd1-35ffa16cb2b6.webp", "images/products/5_d72671d3-598b-47b5-906d-565f93d55631.webp", "images/products/6.webp", "images/products/6047453037153947011.jpg", "images/products/644d4b82406721f3.webp", "images/products/6736ab67-a573-4612-b4ef-64d7a3ac2234.webp", "images/products/6_c98309c2-0cd2-4522-9c0a-eb617a7b086e.webp", "images/products/7.webp", "images/products/735aebb586541dee.webp", "images/products/8.webp", "images/products/851FD2AB-55CA-43E9-8385-F02EC9058990.jpg", "images/products/8B2C1DAC-9BDD-415E-82D8-03B5869DCBBB.webp", "images/products/9 (1).webp", "images/products/9.webp", "images/products/916bbd3a71861738.webp", "images/products/943eb5896330f8c1.webp", "images/products/948BDAB6-F597-4636-A2BE-DE1F3582CEEA.jpg", "images/products/9ccaadbc-36dd-4382-8287-415f6c4bc45e.webp", "images/products/A7549E80-EDE1-4A22-A06D-9D4012870D94.jpg", "images/products/ATTACK-ON-TITAN46.webp", "images/products/Anime University.webp", "images/products/BCCE12AF-195A-4E9C-A477-04B79716E9E1.jpg", "images/products/BLEACH37.webp", "images/products/BLEACH43.webp", "images/products/BLEACH44_f4a01e33-5ffe-490b-a5b4-7f9a618cbb0c.webp", "images/products/Baki_08209954-5fa1-43f4-b508-26100920e4b9.webp", "images/products/Baki_4_4e83a602-d975-451e-b444-1fb012011f35.webp", "images/products/Basic Red Tee.webp", "images/products/Brutal Crest Mark.webp", "images/products/ChatGPTImageNov10_2026_05_42_26AM.webp", "images/products/ChatGPTImageNov10_2026_05_42_32AM.webp", "images/products/ChatGPTImageSep5_2026_04_16_57PM.webp", "images/products/ChatGPTImageSep5_2026_04_32_46PM_1.webp", "images/products/ChatGPTImageSep5_2026_04_32_46PM_2.webp", "images/products/ChatGPTImageSep6_2026_02_04_00PM_1.webp", "images/products/ChatGPTImageSep6_2026_02_04_00PM_2.webp", "images/products/ChatGPTImageSep6_2026_02_04_00PM_3.webp", "images/products/ChatGPTImageSep6_2026_02_28_36PM.webp", "images/products/ChatGPTImageSep6_2026_02_31_43PM_2.webp", "images/products/ChatGPTImageSep6_2026_02_31_43PM_3.webp", "images/products/ChatGPT_Image_Aug_25_2026_04_51_58_AM.webp", "images/products/ChatGPT_Image_Aug_25_2026_05_05_03_AM.webp", "images/products/ChatGPT_Image_Aug_25_2026_05_52_07_AM.webp", "images/products/ChatGPT_Image_Aug_25_2026_05_55_43_AM.webp", "images/products/ChatGPT_Image_Aug_25_2026_06_02_02_AM.webp", "images/products/ChatGPT_Image_Aug_25_2026_06_03_47_AM.webp", "images/products/ChatGPT_Image_Aug_25_2026_06_15_02_AM.webp", "images/products/ChatGPT_Image_Aug_25_2026_06_17_34_AM.webp", "images/products/ChatGPT_Image_Sep_17_2026_03_32_48_PM.webp", "images/products/CodexImageAug19_2026_04_10_28PM.webp", "images/products/CodexImageAug19_2026_07_38_09PM.webp", "images/products/CodexImageAug30_2026_06_21_14PM.webp", "images/products/CodexImageAug30_2026_06_21_48PM.webp", "images/products/CodexImageAug30_2026_06_32_43PM.webp", "images/products/CodexImageAug30_2026_06_33_13PM.webp", "images/products/CodexImageAug30_2026_06_38_54PM.webp", "images/products/D2155A01-C742-4A5D-B255-19F25DE08270.webp", "images/products/DBZ v1.webp", "images/products/E54B51F8-FD41-49C2-873B-80A400E39726.webp", "images/products/E705320A-F585-4F2A-A1D3-205B3B367FCF.jpg", "images/products/ED583A52-0874-4AAF-AE65-45C1E0DF3D4B.jpg", "images/products/F2273B0E-7E6B-4EDA-8F2D-450F1B4EB0CE.jpg", "images/products/F2533CFC-52F9-42B7-8F86-E99E8422F25C.webp", "images/products/GenerativeFill2_4d5cc54e-fc58-4213-afb4-1fc703eb02a2.webp", "images/products/GenerativeFill2_6d2dcee7-787a-4d26-8e35-6c6e0cdfa458.webp", "images/products/GenerativeFill3_38c45b9e-6f6e-44ea-865b-d13290a7fce6.webp", "images/products/GenerativeFill3_faabf748-f6e6-4d00-9cb9-6cdfbc6b878c.webp", "images/products/GenerativeFill4_5651baae-601b-44b2-80c2-2843587fcac7.webp", "images/products/GenerativeFill5_5ecef242-e767-434b-a014-33167579e33c.webp", "images/products/GenerativeFill6.webp", "images/products/GenerativeFill7_d414b0ba-d80c-40e9-b87c-315deddd7b04.webp", "images/products/GenerativeFill8_d7da2447-16e3-459d-b6da-178ed08156ec.webp", "images/products/GenerativeFill_9d42c636-9ade-487d-abbc-1eaa60e72605.webp", "images/products/GenerativeFill_fd14b58f-4b9b-4c72-bce7-e9150e2aaf0d.webp", "images/products/Group1.webp", "images/products/HUNTERX10_fe532896-7d26-44cd-b7cc-6726532209e8.webp", "images/products/HUNTERX23.webp", "images/products/HUNTERX7_2822d5de-7861-4b7a-aef3-737d6313eaff.webp", "images/products/Hue_Saturation1.webp", "images/products/Hue_Saturation1copy.webp", "images/products/Hue_Saturation1copy2.webp", "images/products/Hue_Saturation1copy2_0df9820c-4ae0-485a-80ef-c721d1b6f1d8.webp", "images/products/Hue_Saturation1copy_0abf4bfe-d71d-4705-bc53-75c758ae7553.webp", "images/products/HxH Last Mission.webp", "images/products/IMG_0156.webp", "images/products/IMG_0158.webp", "images/products/IMG_0159.webp", "images/products/IMG_0160.webp", "images/products/IMG_0162.webp", "images/products/IMG_0163.webp", "images/products/IMG_0164.webp", "images/products/IMG_0167.webp", "images/products/IMG_0168.webp", "images/products/IMG_0169.webp", "images/products/IMG_0171.webp", "images/products/IMG_0172.webp", "images/products/IMG_1523.webp", "images/products/IMG_1525.webp", "images/products/IMG_1526.webp", "images/products/IMG_1527.webp", "images/products/IMG_1529.webp", "images/products/IMG_1530.webp", "images/products/IMG_1531.webp", "images/products/IMG_1533.webp", "images/products/IMG_1540.webp", "images/products/IMG_1542.webp", "images/products/IMG_1544.webp", "images/products/IMG_1545.webp", "images/products/IMG_1547.webp", "images/products/IMG_1549.webp", "images/products/IMG_1550.webp", "images/products/IMG_1551.webp", "images/products/IMG_1553.webp", "images/products/IMG_1554.webp", "images/products/IMG_1559.webp", "images/products/IMG_1560.webp", "images/products/IMG_1561.webp", "images/products/IMG_1562.webp", "images/products/IMG_2606.webp", "images/products/IMG_2608.webp", "images/products/IMG_2609.webp", "images/products/IMG_2610.webp", "images/products/IMG_2612.webp", "images/products/IMG_2613.webp", "images/products/IMG_2622.webp", "images/products/IMG_2624.webp", "images/products/IMG_2625.webp", "images/products/IMG_2626.webp", "images/products/IMG_2628.webp", "images/products/IMG_2629.webp", "images/products/IMG_2630.webp", "images/products/IMG_2632.webp", "images/products/IMG_2633.webp", "images/products/IMG_4892.webp", "images/products/IMG_4894.webp", "images/products/IMG_4895.webp", "images/products/IMG_4916.webp", "images/products/IMG_4918.webp", "images/products/IMG_4919.webp", "images/products/IMG_4920_5f728230-fa29-43fc-82c8-386e2a7ced18.webp", "images/products/IMG_4922_d0b81d37-4c1e-4f43-8903-eb5ce66f2ddb.webp", "images/products/IMG_4923_008cb249-7d97-4942-9579-9d5dc5215cca.webp", "images/products/IMG_4924.webp", "images/products/IMG_4926.webp", "images/products/IMG_4927.webp", "images/products/IMG_4936.webp", "images/products/IMG_4938.webp", "images/products/IMG_4939.webp", "images/products/IMG_4942.webp", "images/products/IMG_4944.webp", "images/products/IMG_4946.webp", "images/products/IMG_4947.webp", "images/products/IMG_4948.webp", "images/products/IMG_4950.webp", "images/products/IMG_4951.webp", "images/products/IMG_4952.webp", "images/products/IMG_4954.webp", "images/products/IMG_4955.webp", "images/products/IMG_4956.webp", "images/products/IMG_4958.webp", "images/products/IMG_4959.webp", "images/products/IMG_4960.webp", "images/products/IMG_4962.webp", "images/products/IMG_4963.webp", "images/products/IMG_4964.webp", "images/products/IMG_4966.webp", "images/products/IMG_4967.webp", "images/products/IMG_4968.webp", "images/products/IMG_4970.webp", "images/products/IMG_4971.webp", "images/products/IMG_4972.webp", "images/products/IMG_4973.webp", "images/products/IMG_4975.webp", "images/products/IMG_4983.webp", "images/products/IMG_4985.webp", "images/products/IMG_4986.webp", "images/products/IMG_4987.webp", "images/products/IMG_4989.webp", "images/products/IMG_4990.webp", "images/products/IMG_4991.webp", "images/products/IMG_4993.webp", "images/products/IMG_4994.webp", "images/products/IMG_4999.webp", "images/products/IMG_5001.webp", "images/products/IMG_5002.webp", "images/products/IMG_5006.webp", "images/products/IMG_5010.webp", "images/products/IMG_5019.webp", "images/products/IMG_5020.webp", "images/products/IMG_5021.webp", "images/products/IMG_5029.webp", "images/products/IMG_5031.webp", "images/products/IMG_5032.webp", "images/products/IMG_5033.webp", "images/products/IMG_5035.webp", "images/products/IMG_5036.webp", "images/products/IMG_5039.webp", "images/products/IMG_5041.webp", "images/products/IMG_5042.webp", "images/products/IMG_5044.webp", "images/products/IMG_5045.webp", "images/products/IMG_5046.webp", "images/products/IMG_5048.webp", "images/products/IMG_5049.webp", "images/products/IMG_5055.webp", "images/products/IMG_5057.webp", "images/products/IMG_5058.webp", "images/products/IMG_5060.webp", "images/products/IMG_5061.webp", "images/products/IMG_5080_1.webp", "images/products/IMG_5081_1.webp", "images/products/IMG_5082_1.webp", "images/products/IMG_6151.webp", "images/products/IMG_6153.webp", "images/products/IMG_6154.webp", "images/products/IMG_6169.webp", "images/products/IMG_6171.webp", "images/products/IMG_6172.webp", "images/products/IMG_6178.webp", "images/products/IMG_6180.webp", "images/products/IMG_6181.webp", "images/products/IMG_6211.webp", "images/products/IMG_6213.webp", "images/products/IMG_6215.webp", "images/products/IMG_6216.webp", "images/products/IMG_6219.webp", "images/products/IMG_6222.webp", "images/products/IMG_6224.webp", "images/products/IMG_6226.webp", "images/products/IMG_6227.webp", "images/products/IMG_6228.webp", "images/products/IMG_6230.webp", "images/products/IMG_6231.webp", "images/products/IMG_6232.webp", "images/products/IMG_6234.webp", "images/products/IMG_6235.webp", "images/products/IMG_6244.webp", "images/products/IMG_6246.webp", "images/products/IMG_6247.webp", "images/products/IMG_6248.webp", "images/products/IMG_6250.webp", "images/products/IMG_6251.webp", "images/products/IMG_6261.webp", "images/products/IMG_6262.webp", "images/products/IMG_6263.webp", "images/products/IMG_6264.webp", "images/products/IMG_6266.webp", "images/products/IMG_6267.webp", "images/products/IMG_6268.webp", "images/products/IMG_6270.webp", "images/products/IMG_6271.webp", "images/products/IMG_6272.webp", "images/products/IMG_6274.webp", "images/products/IMG_6275.webp", "images/products/IMG_6315_1.webp", "images/products/IMG_6317_1.webp", "images/products/IMG_6319_1.webp", "images/products/IMG_6393.webp", "images/products/IMG_6395.webp", "images/products/IMG_6396.webp", "images/products/IMG_6398.webp", "images/products/IMG_6400.webp", "images/products/IMG_6401.webp", "images/products/IMG_6402.webp", "images/products/IMG_6405.webp", "images/products/IMG_6406.webp", "images/products/IMG_6407.webp", "images/products/IMG_6409.webp", "images/products/IMG_6410.webp", "images/products/IMG_6411.webp", "images/products/IMG_6412.webp", "images/products/IMG_6414.webp", "images/products/IMG_6415.webp", "images/products/IMG_6417.webp", "images/products/IMG_6418.webp", "images/products/IMG_8019.webp", "images/products/IMG_8021.webp", "images/products/IMG_8022.webp", "images/products/IMG_8030.webp", "images/products/IMG_8032.webp", "images/products/IMG_8033.webp", "images/products/IMG_8050.webp", "images/products/IMG_8052.webp", "images/products/IMG_8053.webp", "images/products/IMG_8058.webp", "images/products/IMG_8060.webp", "images/products/IMG_8061.webp", "images/products/IMG_8070.webp", "images/products/IMG_8072.webp", "images/products/IMG_8073.webp", "images/products/IMG_8085.webp", "images/products/IMG_8087.webp", "images/products/IMG_8088.webp", "images/products/IMG_9082.webp", "images/products/IMG_9084.webp", "images/products/IMG_9085.webp", "images/products/IMG_9086.webp", "images/products/IMG_9088.webp", "images/products/IMG_9089.webp", "images/products/IMG_9090.webp", "images/products/IMG_9091.webp", "images/products/IMG_9092.webp", "images/products/IMG_9093.webp", "images/products/IMG_9094.webp", "images/products/IMG_9096.webp", "images/products/IMG_9097.webp", "images/products/IMG_9098.webp", "images/products/IMG_9100.webp", "images/products/IMG_9101.webp", "images/products/IMG_9356.webp", "images/products/IMG_9357.webp", "images/products/IMG_9358.webp", "images/products/IMG_9361.webp", "images/products/IMG_9363.webp", "images/products/IMG_9364.webp", "images/products/IMG_9371.webp", "images/products/IMG_9373.webp", "images/products/IMG_9374.webp", "images/products/IMG_9375.webp", "images/products/IMG_9377.webp", "images/products/IMG_9378.webp", "images/products/IMG_9379.webp", "images/products/IMG_9381.webp", "images/products/IMG_9382.webp", "images/products/IMG_9383.webp", "images/products/IMG_9385.webp", "images/products/IMG_9386.webp", "images/products/IMG_9399.webp", "images/products/IMG_9409.webp", "images/products/IMG_9420.webp", "images/products/IMG_9425.webp", "images/products/IMG_9453.webp", "images/products/IMG_9475.webp", "images/products/IMG_9481.webp", "images/products/IMG_9482.webp", "images/products/IMG_9484.webp", "images/products/IMG_9484_c23e7cee-5be0-4c26-84af-0bf259db0c56.webp", "images/products/IMG_9485.webp", "images/products/IMG_9487.webp", "images/products/IMG_9488.webp", "images/products/IMG_9488_980e0605-174c-41f7-b503-f3ab17ff945a.webp", "images/products/IMG_9520.webp", "images/products/IMG_9522.webp", "images/products/IMG_9531.webp", "images/products/JUJUTSU57_8f28b000-3350-4a7a-a9d8-32f7b226906e.webp", "images/products/JUJUTSU76.webp", "images/products/LUFFY STRAW HAT.webp", "images/products/Layer1.webp", "images/products/Layer1_8d5cdb25-331e-4c31-8289-edd7bf606aef.webp", "images/products/Layer2.webp", "images/products/Layer4.webp", "images/products/Levi from AOT.webp", "images/products/Musashi Miyamoto.webp", "images/products/NARUTO68.webp", "images/products/Naruto vs Sasuke.webp", "images/products/ONEPIECE63.webp", "images/products/ONEPIECE75.webp", "images/products/Untitled-1_3bee052e-0654-4a9e-86bd-af8717ee20d0.webp", "images/products/Y7WwQge08G7rpNAr.webp", "images/products/b464bec3f6704264.webp", "images/products/b9fb0c63-724f-4715-85f3-e8f4030b47af.webp", "images/products/beige.webp", "images/products/black.webp", "images/products/c4d7f7407ec5a64e.webp", "images/products/demon-slayer-joggers-zams-1.webp", "images/products/demon-slayer-joggers-zams-2.webp", "images/products/exec-1156c395-81d8-4dce-97b4-530b9fc7ca96.webp", "images/products/exec-243547fb-5f6a-421f-b88b-77ca50687929.webp", "images/products/exec-41a6aae4-f436-44b6-9f3b-3fff7b2bab19.webp", "images/products/exec-4327dd0d-5ea1-4c16-8bce-d8d32ce4b4f4.webp", "images/products/exec-497edff4-4016-460a-99b1-76e09a691f7e.webp", "images/products/exec-84bc7b37-d182-43d7-bdb4-b21e0cbbc7d3.webp", "images/products/exec-89aaf82d-aa53-4133-828e-a534736b0e4f.webp", "images/products/exec-9767b260-2d7a-4f92-8cc1-e4fec9cca6c4.webp", "images/products/exec-a8e98b6c-0f58-4485-9a98-434de0befd45.webp", "images/products/exec-adb0990b-08fd-4b2a-9c2f-22d6879fdebf.webp", "images/products/exec-bc0e1f40-16d0-4806-a481-c6f65bc6b4d7.webp", "images/products/exec-d34e5765-f4bf-491c-ba81-e94b4c454bd1.webp", "images/products/exec-ec89a2e5-a24f-480c-9416-5088c0b1b95f.webp", "images/products/f09eba46229d0efb.webp", "images/products/fandom-balloon-jeans-1.webp", "images/products/fandom-balloon-jeans-2.webp", "images/products/fandom-black-balloon-0.webp", "images/products/fandom-black-balloon-2.webp", "images/products/fandom-light-blue-balloon-1.webp", "images/products/fandom-light-blue-balloon-detail.webp", "images/products/freedom-black-hoodie-front.webp", "images/products/freedom-black-hoodie-side.webp", "images/products/gray.webp", "images/products/gray_deec856b-2024-452f-bdab-94fdc273bccf.webp", "images/products/green-1.webp", "images/products/green-2.webp", "images/products/green-4.webp", "images/products/green.webp", "images/products/jqUFCPva_9VO72ev.webp", "images/products/navy-3.webp", "images/products/navy-blue-1.webp", "images/products/navy-blue-2.webp", "images/products/navy-blue.webp", "images/products/product-001.jpg", "images/products/product-002.jpg", "images/products/product-003.jpg", "images/products/product-004.jpg", "images/products/product-005.jpg", "images/products/product-006.jpg", "images/products/product-007.jpg", "images/products/product-008.png", "images/products/product-009.png", "images/products/product-010.jpg", "images/products/product-011.jpg", "images/products/product-012.jpg", "images/products/product-013.png", "images/products/product-014.png", "images/products/product-015.png", "images/products/product-016.png", "images/products/product-017.jpg", "images/products/product-018.jpg", "images/products/product-019.jpg", "images/products/product-020.jpg", "images/products/product-021.jpg", "images/products/product-022.jpg", "images/products/product-023.jpg", "images/products/product-024.jpg", "images/products/product-025.jpg", "images/products/product-026.jpg", "images/products/rn-image_picker_lib_temp_e8a0ee0f-592d-48dc-a34a-3f23f2b548ee.webp", "images/products/size_chart_old_O (1).webp", "images/products/size_chart_old_O (2).webp", "images/products/size_chart_old_O.webp", "images/products/sweatpants-black-back.webp", "images/products/sweatpants-black-front.webp", "images/products/sweatpants-black-side.webp", "images/products/zoro-joggers-zams-2.webp", "images/products/zoro-joggers-zams-4-157115_76ef4447-807d-4317-bba7-69c34f3d49e9.webp"];
PRODUCTS.forEach((p,index)=>{
  if(p.cat==="accessories"){
    delete p.sizes;
    if(!p.typeTags.includes("accessories"))p.typeTags.push("accessories");
  }
  p.imgs=TEMP_ALL_PRODUCT_IMAGES.slice(index*3,index*3+3);
});
window.MONO_PRODUCTS=PRODUCTS;
})();
