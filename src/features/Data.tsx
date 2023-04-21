import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DataState{
    value: Array<{ name: string, img: Array<string> , price: number, description: Array<string> ,
    category: string; }>
}

const initialState: DataState = {
    value: [{name:"Auriculares gamer inalámbricos HyperX Cloud Flight negro con luz rojo LED",
	img: [
		"https://http2.mlstatic.com/D_NQ_NP_2X_675916-MLA40762447172_022020-F.webp",
		"https://http2.mlstatic.com/D_NQ_NP_2X_650643-MLA40782098031_022020-F.webp",
		"https://http2.mlstatic.com/D_NQ_NP_2X_655577-MLA40762447178_022020-F.webp",
		"https://http2.mlstatic.com/D_NQ_NP_2X_750991-MLA40762174384_022020-F.webp"
	] ,
	price: 80.00,
	description: [
		"Gaming-grade wireless",
		"Virtual 7.1 surround sound via HyperX Ngenuity",
		"Lightweight comfort",
		"Immersive in-game audio",
		"Durable, adjustable steel sliders"
	],
	category: "Computer"
},
{name:"AMD Ryzen 3 3200G 4-Core Unlocked Desktop Processor with Radeon Graphics",
	img: [ 
		"https://http2.mlstatic.com/D_NQ_NP_2X_765679-MLA40219168655_122019-F.webp",
		"https://http2.mlstatic.com/D_NQ_NP_2X_890018-MLA42157659341_062020-F.webp",
		"https://http2.mlstatic.com/D_NQ_NP_2X_777703-MLA41292367301_032020-F.webp"
	 ] ,
	price: 400.00,
	description: [
		"Includes advanced Radeon Vega 8 graphics, no expensive graphics card required",
		"Can deliver smooth high definition performance in the world's most popular games",
		"4 processing cores, bundled with the quiet AMD Wraith stealth cooler",
		"4.0 GHz max boost, unlocked for overclocking, 6 MB cache, DDR 2933 support",
		"For the advanced socket AM4 platform. Base clock 3.6 GHz"
	],
	category: "Computer"
},
{name:"Wacom Cintiq 22 Drawing Tablet with HD Screen, Graphic Monitor, 8192 Pressure-Levels (DTK2260K0A) 2019 Version, Medium",
	img: [
		"https://m.media-amazon.com/images/I/51Q8845nixL._AC_SL1001_.jpg",
		"https://m.media-amazon.com/images/I/71F0jnk+pRL._AC_SL1500_.jpg",
		"https://m.media-amazon.com/images/I/61R4jHh-9GL._AC_SL1500_.jpg",
		"https://m.media-amazon.com/images/I/71hEFiGxH9L._AC_SL1500_.jpg",
		"https://m.media-amazon.com/images/I/819wY74eKuL._AC_SL1500_.jpg",
		"https://m.media-amazon.com/images/I/61nxV62zTAL._AC_SL1000_.jpg",
		"https://m.media-amazon.com/images/I/61jzC9BNyhL._AC_SL1200_.jpg" 
	 ] ,
	price: 1.374 ,
	description: [
		"A more affordable pen Display with Wacom Pro Pen 2 technology, 8, 192 pressure levels, low activation force and tilt recognition. Its amazing precision and reduced Parallax provide the most natural drawing experience.",
		"Cintiq’s 21.5” 1920x1080 HD Display provides you with clarity to see every detail of your work. The scratch-resistant Anti-Glare surface prevents distracting reflections as you create",
		"See your creations in vibrant color on the cinq's HD display (16.7 million colors, 72% NTSC/Cue 1931 typical). Work as long as you'd like with the battery free pen that charges off the screen while you create",
		"Connect to your computer with the convenient HDMI and USB cables and get into the perfect position with the included adjustable stand that lets you adjust how you want to work",
		"What’s in the box: Wacom Cintiq 22 pen display, Wacom Pro Pen 2, detachable pen holder with 3 replacement nibs (standard) and nib removal tool, Adjustable Stand, HDMI & USB 2.0 cables, AC adaptor, power cable (1.8m), quick start guide",
		"Level up your digital art skills by learning 3D sculpting with 3-months of ZBrush 2021 or create comics, manga, concept art, illustrations with 6-months of Clip Studio Paint EX"
	],
	category: "Computer"
},
{name:"Kingston FURY Beast RGB 16GB 3200MHz DDR4 CL16 Desktop Memory Single Stick KF432C16BBA/16",
	img: [ 
		"https://m.media-amazon.com/images/I/61D5qoqV2hS._AC_SL1500_.jpg",
		"https://m.media-amazon.com/images/I/51a9d6kY2nS._AC_SL1500_.jpg",
		"https://m.media-amazon.com/images/I/61862+0hXBS._AC_SL1500_.jpg",
		"https://m.media-amazon.com/images/I/61FMXMejv6S._AC_SL1500_.jpg",
		"https://m.media-amazon.com/images/I/718bkGsacmS._AC_SL1500_.jpg",
		"https://m.media-amazon.com/images/I/71y3DSb9H-S._AC_SL1500_.jpg",
		"https://m.media-amazon.com/images/I/817zB7vyDSS._AC_SL1500_.jpg"	
	 ],
	price: 31.36,
	description: [
		"Stunning RGB lighting with aggressive style",
		"Patented Kingston FURY Infrared Sync Technology",
		"Intel XMP-ready",
		"Ready for AMD Ryzen",
		"Plug N Play functionality at 3200MHz"
	],
	category: "Computer"
},
{name:"Corsair RMx Series (2021), RM850x, 850 Watt, GOLD, Fully Modular Power Supply (CP-9020200-NA)",
	img: [
		"https://m.media-amazon.com/images/I/81k55rfk1iL._AC_SL1500_.jpg",
		"https://m.media-amazon.com/images/I/81PPMawxblS._AC_SL1500_.jpg",
		"https://m.media-amazon.com/images/I/81DF6QzgKcS._AC_SL1500_.jpg",
		"https://m.media-amazon.com/images/I/81JRGxD4BJL._AC_SL1500_.jpg",
		"https://m.media-amazon.com/images/I/81fgZ5rL-fL._AC_SL1500_.jpg",
		"https://m.media-amazon.com/images/I/81sthKcmUJS._AC_SL1500_.jpg",
		"https://m.media-amazon.com/images/I/71Bam0yVOSS._AC_SL1500_.jpg",
		"https://m.media-amazon.com/images/I/81HqTuztxBL._AC_SL1500_.jpg",
		"https://m.media-amazon.com/images/I/71SKjN+f-hL._AC_SL1500_.jpg",
		"https://m.media-amazon.com/images/I/81MNfQ-jdhL._AC_SL1500_.jpg",
		"https://m.media-amazon.com/images/I/81i5uJYR+eL._AC_SL1500_.jpg",
		"https://m.media-amazon.com/images/I/91sqRJYVI1L._AC_SL1500_.jpg"
	],
	price: 149.99,
	description: [
		"80 Plus Gold certified for lower power consumption, less noise and cooler temperatures",
		"For maximum cooling surface area and performance",
		"Zero RPM fan mode for near silent operation at low to medium loads; Continuous output rated temperature: 50°C",
		"100 percent industrial grade, 105°C rated Japanese capacitors ensure unwavering power and reliability",
		"Fully modular cables, so you only connect the cables your system needs. Fan size-5.3 inches. iCUE Compatibility-No. Modern Standby Compatible- No",
	],
	category: "Computer"
},
{name:"ASUS ROG Strix B550-F Gaming AMD AM4 Zen 3 Ryzen 5000 & 3rd Gen Ryzen ATX Gaming Motherboard (PCIe 4.0, 2.5Gb LAN, BIOS Flashback, HDMI 2.1, Addressable Gen 2 RGB Header and Aura Sync)",
	img: [
		"https://m.media-amazon.com/images/I/81Q-hxowAqL._AC_SL1500_.jpg",
		"https://m.media-amazon.com/images/I/812Ned3ShRL._AC_SL1500_.jpg",
		"https://m.media-amazon.com/images/I/819fBNepfoL._AC_SL1500_.jpg",
		"https://m.media-amazon.com/images/I/913yADsqDxL._AC_SL1500_.jpg",
		"https://m.media-amazon.com/images/I/81FrshtRYkL._AC_SL1500_.jpg",
		"https://m.media-amazon.com/images/I/81sAb6F4BSL._AC_SL1500_.jpg",
		"https://m.media-amazon.com/images/I/81KLgPjpf0L._AC_SL1500_.jpg"		
	] ,
	price: 190.99,
	description: [
		"Cutting edge gaming motherboard: with AMD AM4 socket, it is a perfect pairing for Zen 3 Ryzen 5000 & 3rd Gen AMD Ryzen CPUs",
		"Faster memory: 4 memory slots support dual channel DDR4 memory up to 128 GB, with ASUS OptiMem enabling higher memory frequencies and lower latencies",
		"Blazing data transmission speeds: Two M.2 slots, including the latest PCIe 4.0, provide maximum storage flexibility and the fastest data speeds available via the 3rd Gen AMD Ryzen platform",
		"High-performance gaming networking: Onboard WiFi 6 (802.11ax) and 2.5 Gb Ethernet for exceptionally fast and smooth online gaming experiences",
		"Optimized thermal solution: Customizable fanless VRM and chipset heatsinks with ASUS Stack Cool 3+ design keep your system running reliably",
		"Please ensure your BIOS is up to date if installing a compatible Ryzen 5000 series CPU. Visit ASUS site search by motherboard model name, click on “Support” tab, Drivers and Tools, then BIOS & Firmware to download the latest BIOS"
	],
	category: "Computer"
},
{name:"Vince Women's Boat Neck Long Sleeve",
	img: [
		"https://m.media-amazon.com/images/I/81dcVecgxuL._AC_UX342_.jpg",
		"https://m.media-amazon.com/images/I/81Kz0MeXdvL._AC_UX342_.jpg"
	] ,
	price: 225.00,
	description: [
		"75% Wool, 20% Polyester, 5% Cashmere.",
		"Imported",
		"Pull On closure",
		"Hand wash cold, or dry clean",
		"Effortless"
	],
	category: "Fashion"
},
{name:"Pendleton Women's Rock Point Cotton Cardigan Sweater",
	img: [
		"https://m.media-amazon.com/images/I/61rrmkrn2DL._AC_UX385_.jpg",
		"https://m.media-amazon.com/images/I/61dSgQqawwL._AC_UX385_.jpg",
		"https://m.media-amazon.com/images/I/616sFOk+MLL._AC_UX385_.jpg",
		"https://m.media-amazon.com/images/I/71ejzcurgdL._AC_UX385_.jpg",
		"https://m.media-amazon.com/images/I/71D0cQa6WRL._AC_UX385_.jpg"
	] ,
	price: 153.96,
	description: [
		"100% Cotton",
		"Imported",
		"No Closure closure",
		"Machine Wash",
		"Two pockets",
		`28" Length`,
		"Open front"
	],
	category: "Fashion"
},
{name:"The Drop Women's Constance Rib Button Down Sweater",
	img: [ 
		"https://m.media-amazon.com/images/I/81wDp2XBuRL._AC_UX342_.jpg",
		"https://m.media-amazon.com/images/I/81WJTG+O26L._AC_UX342_.jpg",
		"https://m.media-amazon.com/images/I/71v86xzqX-L._AC_UX342_.jpg",
		"https://m.media-amazon.com/images/I/814iidfvHvL._AC_UX342_.jpg",
		"https://m.media-amazon.com/images/I/913+I4aTdZL._AC_UX342_.jpg",
		"https://m.media-amazon.com/images/I/817JkaW-H8L._AC_UY445_.jpg"
	] ,
	price: 49.90,
	description: [
		`65% Rayon, 35% Nylon`,
		`Imported`,
		`Machine Wash`,
		`Staples by The Drop`,
		`Models are 5'10"/178 cm and wearing a size S and XXL`,
		`This sweater is 27"/69 cm long in a size S and 30"/76 cm in a size XXL`,
		`Fit: snug fit, worn close to the body`,
		`Fitted Fib`,
		`Buttoned collar`,
		`Horn buttons`
	],
	category: "Fashion"
},
{name:"The Drop Women's Vivienne Padded-Shoulder Balloon-sleeve Crewneck Sweater",
	img: [
		"https://m.media-amazon.com/images/I/71Do53XNHgL._AC_UX342_.jpg",
		"https://m.media-amazon.com/images/I/719-26wtAzL._AC_UX342_.jpg",
		"https://m.media-amazon.com/images/I/61R8vsXSjAL._AC_UX342_.jpg",
		"https://m.media-amazon.com/images/I/81mdY9qF-LL._AC_UX342_.jpg",
		"https://m.media-amazon.com/images/I/81PFjqXoN8L._AC_UX342_.jpg"
	] ,
	price: 39.90,
	description: [
		`51% Viscose, 49% Nylon`,
		`Imported`,
		`Machine Wash`,
		`Staples by The Drop`,
		`Models are 5'10" wearing a size S and XXL.`,
		`This hip length sweater measures 22"/ 56 cm long`,
		`Regular-Fit: designed to follow the body - neither loose nor clingy`,
		`A perfect mix of retro power shoulders with soft shoulder pads in a feminine silhouette, full sleeves, and high rib cuffs. This fine knit sweater made from sustainable rayon is best styled tucked into high waist denim for a casual-yet-elevated look.`
	],
	category: "Fashion"
},
{name:"The Drop Women's Eloise Long-Sleeve Twist Front Cozy Cropped Sweater",
	img: [
		"https://m.media-amazon.com/images/I/91C23ixxQbL._AC_UX342_.jpg",
		"https://m.media-amazon.com/images/I/91s4-1ZL16L._AC_UX342_.jpg",
		"https://m.media-amazon.com/images/I/81mria-8oHL._AC_UX342_.jpg",
		"https://m.media-amazon.com/images/I/91UxgI6pIQL._AC_UX342_.jpg",
		"https://m.media-amazon.com/images/I/91VG9JLde6L._AC_UX342_.jpg",
		"https://m.media-amazon.com/images/I/91WPyrItRJL._AC_UX342_.jpg"
	] ,
	price: 31.26,
	description: [
		`77% Nylon, 15% Viscose, 8% Polyester`,
		`Imported`,
		`Machine Wash`,
		`Staples by The Drop`,
		`Models are 5'10"/178 cm and wearing a size S and XXL`,
		`This cropped length sweater measures 19"/ 48 cm long`,
		`Fitted: snug fit, worn close to the body`,
		`This soft cozy "eyelash" yarn sweater is knit in a classic crewneck silhouette and a twisted detail lends elevation to an easy wardrobe staple. Slightly cropped to hit at top of jean.`
	],
	category: "Fashion"
},
{name:"The Drop Women's Alice Crewneck Back Slit Ribbed Pullover Sweater",
	img: [
		"https://m.media-amazon.com/images/I/91lyE0XFRsL._AC_UX342_.jpg",
		"https://m.media-amazon.com/images/I/91mNS3XaTKL._AC_UX342_.jpg",
		"https://m.media-amazon.com/images/I/714nXbmLwBL._AC_UX342_.jpg",
		"https://m.media-amazon.com/images/I/91rqLOqMy1L._AC_UX342_.jpg",
		"https://m.media-amazon.com/images/I/91TW4oTaiGL._AC_UX342_.jpg",
		"https://m.media-amazon.com/images/I/A1zNFaAfFBL._AC_UX385_.jpg"
	] ,
	price: 39.90,
	description: [
		`52% Viscose, 28% Polyester, 20% Nylon`,
		`Imported`,
		`Machine Wash`,
		`Staples by The Drop`,
		`Models are 5'10"/178 cm and wearing a size S and XXL`,
		`This low hip length sweater measures 25"/ 64 cm long`,
		`Loose-Fit: designed for comfort`,
		`This plush and cozy bell-sleeve pullover sweater with a slit back vent is in cuddle-chic rib and a major step up from your sweatshirt. This sweater will leave you lounging for days worn with our Faith short as a set.`
	],
	category: "Fashion"
},
{name:"The Drop Women's Catalina Sweater Bralette",
	img: [
		"https://m.media-amazon.com/images/I/91CZBCLYAFS._AC_UX342_.jpg",
		"https://m.media-amazon.com/images/I/91XvMTgIxMS._AC_UX342_.jpg",
		"https://m.media-amazon.com/images/I/813Z4Qd3JBS._AC_UX342_.jpg",
		"https://m.media-amazon.com/images/I/91HbdYhssrS._AC_UX342_.jpg",
		"https://m.media-amazon.com/images/I/91fwThveAiS._AC_UX342_.jpg",
		"https://m.media-amazon.com/images/I/91JJ0oe2INS._AC_UX342_.jpg"
	] ,
	price: 29.90,
	description: [
		`44% Polyester, 31% Acrylic, 20% Nylon, 5% Wool`,
		`Imported`,
		`Machine Wash`,
		`Staples by The Drop`,
		`Models are 5'10"/178 cm and wearing a size S and XXL`,
		`This top is 16"/41 cm long`,
		`Fit: snug fit, worn close to the body`
	],
	category: "Fashion"
},
{name:"The Drop Women's Daisy Long Cardigan Sweater",
	img: [
		"https://m.media-amazon.com/images/I/81w2FG0ApOL._AC_UX342_.jpg",
		"https://m.media-amazon.com/images/I/81uBQ1vj1CL._AC_UX342_.jpg",
		"https://m.media-amazon.com/images/I/71OarYO1-iL._AC_UX342_.jpg",
		"https://m.media-amazon.com/images/I/81dnQ2-g6PL._AC_UX342_.jpg",
		"https://m.media-amazon.com/images/I/81muLlmUztL._AC_UX342_.jpg",
		"https://m.media-amazon.com/images/I/91VJwuGcGgL._AC_UY445_.jpg"
	] ,
	price: 49.90,
	description: [
		`44% Polyester, 31% Acrylic, 20% Nylon, 5% Wool`,
		`Imported`,
		`Machine Wash`,
		`Staples by The Drop`,
		`Models are 5'10"/178 cm and wearing a size S and XXL`,
		`This sweater is 42"/107 cm long in a size S and 45"/114 cm in a size XXL`,
		`Fit: Loose- designed for comfort`,
		`Nylon acryclic blend`,
		`Rib cuff and hem`,
		`Front pockets`
	],
	category: "Fashion"
},
{name:"Vince Women's Breton Striped Boat Neck",
	img: [
		"https://m.media-amazon.com/images/I/91TBIM57ZFL._AC_UX342_.jpg",
		"https://m.media-amazon.com/images/I/91tNZXfEhfL._AC_UX342_.jpg"
	] ,
	price: 365.00,
	description: [
        `100% Cashmere`,
        `Imported`,
        `Pull On closure`,
        `Dry Clean Only`,
        ` Our best-selling boiled cashmere blend in a timeless boatneck and a Breton stripe.`,
        `Fits true to size.`
    ] ,
	category: "Fashion"
},
{name:"Pamapic 5 Pieces Wicker Patio Furniture Set Outdoor Patio Chairs with Ottomans Conversation Furniture with coffetable for Poorside Garden Balcony(Beige)",
	img: [
		"https://m.media-amazon.com/images/I/91xOAVu9STL._AC_SL1500_.jpg",
		"https://m.media-amazon.com/images/I/91fcP+ab+2L._AC_SL1500_.jpg",
		"https://m.media-amazon.com/images/I/81F0FBIs42L._AC_SL1500_.jpg",
		"https://m.media-amazon.com/images/I/91HaW2I4cPL._AC_SL1500_.jpg",
		"https://m.media-amazon.com/images/I/91Res7ftdoL._AC_SL1500_.jpg",
		"https://m.media-amazon.com/images/I/81DZT8LXP+L._AC_SL1500_.jpg",
		"https://m.media-amazon.com/images/I/71Kv8eJRKoL._AC_SL1200_.jpg"
	] ,
	price: 432.00,
	description: [
		`Rattan`,
		`[Luxurious & Comfortable] PAMAPIC’s 5-piece patio furniture set includes 2 single chairs, 2 ottomans and 1 coffee table. Chairs are ergonomically designed for more comfort with soft, sponge-padded cushions. Large ottomans provide you with a comfortable place to rest.`,
		`[Flexible & Free] You can easily combine the pieces or use them separately. You can arrange them in the perfect shape to match your deck or garden. When you don't need to use a piece, you can easily remove it.`,
		`[Sturdy & Durable] Featuring sturdy construction and durable PE rattan, PAMAPIC’s outdoor chair set can endure rain and wind to withstand the test of time.Patio furniture cover not included. Search B0B76V4SYD to find the chair cover you may need.`,
		`[Occupies Less Space & Suitable For Both Inside & Outside] Because the ottomans can be tucked under the chairs, space consumption is greatly reduced. The chairs are as comfortable as a sofa, making this set great for any indoor or outdoor setting.`,
		`[Easy Assembly & Shipped in Two Boxes] Wicker patio furniture is quick and easy to install.In order to prevent the product from being damaged due to excessive weight,we will ship in two boxes. A box contains a chair, an ottoman, all screws. A box contains a chair, an ottoman, and a coffee table. If you have any assembly questions, please contact us,we will answer your questions ASAP.`
	],
	category: "Furniture"
},
{name:"Bush Furniture Key West Secretary Desk with Keyboard Tray and Storage Cabinet, 30W, Pure White Oak",
	img: [
		"https://m.media-amazon.com/images/I/81DpajbNrbL._AC_SL1500_.jpg",
		"https://m.media-amazon.com/images/I/81yQ+izyRXL._AC_SL1500_.jpg",
		"https://m.media-amazon.com/images/I/71yInLdOVCL._AC_SL1500_.jpg",
		"https://m.media-amazon.com/images/I/81dCPV9cGCL._AC_SL1500_.jpg",
		"https://m.media-amazon.com/images/I/81Qjcktun3L._AC_SL1500_.jpg",
		"https://m.media-amazon.com/images/I/81fSoJHR4mL._AC_SL1500_.jpg",
	],
	price: 205.99,
	description: [
		`30W x 20D x 30H Secretary Desk provides an ideal workspace for compact areas`,
		`Keyboard Tray can also be used to store a laptop, tablet or stationery`,
		`Drawer features full-extension ball bearing slides and a convenient flip down front`,
		`Storage Cabinet includes one adjustable shelf to accommodate items of various sizes`,
		`Cabinet doors open on smooth Euro style hinges and have stylish X pattern accents`
	],
	category: "Furniture"
},
{name:"Christopher Knight Home Toddman High-Back Fabric Club Chair, Dark Blue",
	img: [
		"https://m.media-amazon.com/images/I/71UDXrmE6iL._AC_SL1500_.jpg",
		"https://m.media-amazon.com/images/I/A1kxchiya0L._AC_SL1500_.jpg",
		"https://m.media-amazon.com/images/I/71mehcZPncL._AC_SL1500_.jpg",
		"https://m.media-amazon.com/images/I/81-DcmM-TPL._AC_SL1500_.jpg",
		"https://m.media-amazon.com/images/I/91PuuxUQAjL._AC_SL1500_.jpg",
		"https://m.media-amazon.com/images/I/911r0qgT22L._AC_SL1500_.jpg",
		"https://m.media-amazon.com/images/I/91d0+K-hiAL._AC_SL1500_.jpg",
		"https://m.media-amazon.com/images/I/91syqpOrdtL._AC_SL1500_.jpg",
		"https://m.media-amazon.com/images/I/81UU8oemUeL._AC_SL1500_.jpg",
		"https://m.media-amazon.com/images/I/71LR6YmIpmL._AC_SL1500_.jpg",
		"https://m.media-amazon.com/images/I/91MDN9re2OL._AC_SL1500_.jpg",
		"https://m.media-amazon.com/images/I/71jZsf3M+NL._AC_SL1500_.jpg"
	] ,
	price: 236.99,
	description: [
		`DIMENSIONS (Overall): 38.5" H x 27.25" W x 33.75" D | WEIGHT: 37.48 lbs. Seat height: 17.00 inches`,
		`TASTEFUL TUFTED DESIGN This is a modern wingback chair that effortlessly fuses elements of traditional and on trend design. It will put your plain armchair to shame with its gloriously graceful form, plush tufted seat and backrest, and contemporary mismatched legs. With ample room to wriggle into, our tufted wingback chair will become your new favorite chill out zone`,
		`THE PERFECT READING CHAIR; Position your wingback armchair in a spacious bedroom or by the fireplace in the lounge or den; You can repose in comfort on those peaceful evenings when your only company is the cat and a good novel; And when you do have guests, be sure to claim it as Your Chair because they'll flock to its inviting embrace`,
		`PREMIUM FINISH, ELEGANT DETAILS- A cut above every other upholstered wingback chair, this deluxe design is a true investment piece. The neat armless style makes the chair easy to fit into your chosen space. The frame is covered in soft but durable fabric, while the plump seat cushion retains its shape over time and gently cradles your body. A final flourish comes in the form of an undulating edge along the backrest`,
		`PROFESSIONALLY CRAFTED FOR YOU- High quality components, a serviceable design, and a beautiful look that will bring you years of pleasure. Order this fabric wingback chair, style up your room, then snuggle down in comfort`,
		`WINGBACK ACCENT CLUB CHAIR; A fabulous focal point for your room that combines charming style and superior comfort; This stunning high back wing chair is timeless yet so of the now, with its sensually curved design and spotlight on snugness`
	],
	category: "Furniture"
},
{name:"Balkene Home 63966 Greenwich Storage Shelf Mingle Greenwich with Modern Furnishings Complete Home Or Workspace Display Organizer Plant Flower Stand Storage Rack Lightweight & Easy Assemble",
	img: [
		"https://m.media-amazon.com/images/I/81542olmKUL._AC_SL1500_.jpg",
		"https://m.media-amazon.com/images/I/61wJ+saG9rL._AC_SL1500_.jpg",
		"https://m.media-amazon.com/images/I/71lBfS0JfwL._AC_SL1500_.jpg",
		"https://m.media-amazon.com/images/I/615PLMXx3SL._AC_SL1125_.jpg",
		"https://m.media-amazon.com/images/I/61Eui3lq-tL._AC_SL1125_.jpg",
		"https://m.media-amazon.com/images/I/61SOlmwD6vL._AC_SL1100_.jpg",
		"https://m.media-amazon.com/images/I/81K0Iv+JOmL._AC_SL1500_.jpg",
		"https://m.media-amazon.com/images/I/81T6LUSXDTL._AC_SL1500_.jpg"
	] ,
	price: 215.40,
	description: [
		`BALKENE HOME 63966: The Greenwich Collection from Balkene Home: substantial designs with sturdy steel frames accented by black and wood-look veneer surfaces provide a clean and uncluttered feel. This collection is curated with today's multi-use living spaces in mind.`,
		`GREENWICH COLLECTION STORAGE SHELF 3D WOOD VENEER: Each piece will be at home in your dining, entertaining, living, or office spaces - whether those are dedicated rooms or different functions of the same area. Mingle Greenwich with modern, industrial, or eclectic furnishings to complete your home or workspace.`,
		`LIGHTWEIGHT & EASY ASSEMBLY:`,
		`The Greenwich Storage Shelf couples reserved style with function. Equally at home in the living space or in the office, five tiers of shelving provide ample room for books, décor, or the plant collection you've managed to keep alive all year.`,
		`FEATURES: Style and proportions complement most décor styles | High-end 3D engineered veneer over a particle-board surface | Sturdy powder-coated steel frame | Lightweight and easy to assemble | Partially-concealed storage for papers, electronics, etc.`,
		`ASSEMBLED DIMENSIONS: 31.5"L x 11.75"D x 62.75"H, Weight: 66 lbs.`
	],
	category: "Furniture"
},
{name:"Keter Resin Wicker Patio Furniture Set with Side Table and Outdoor Chairs, Dark Grey",
	img: [
		"https://m.media-amazon.com/images/I/71ynY0qEo3L._AC_SL1500_.jpg",
		"https://m.media-amazon.com/images/I/91paNFAynsL._AC_SL1500_.jpg",
		"https://m.media-amazon.com/images/I/81OLE43RtoL._AC_SL1500_.jpg",
		"https://m.media-amazon.com/images/I/813u5bg9ulL._AC_SL1500_.jpg",
		"https://m.media-amazon.com/images/I/91nvzUiIZhL._AC_SL1500_.jpg",
		"https://m.media-amazon.com/images/I/81uxaLIjUSL._AC_SL1500_.jpg",
		"https://m.media-amazon.com/images/I/71dzLDKsYQL._AC_SL1322_.jpg",
		"https://m.media-amazon.com/images/I/51EbNvoenTL._AC_SL1240_.jpg",
		"https://m.media-amazon.com/images/I/51LnQzohA-L._AC_SL1240_.jpg"
	] ,
	price: 189.99,
	description: [
		`No Textiles Included`,
		`Made in the USA or Imported`,
		`CHAIRS MEASURE: 30. 5 in. W x 21. 3 in. D x 31. 1 in. H`,
		`TABLE MEASURES: 15 in. W x 15 in. D x 14. 4 in. H`,
		`RESIN CONSTRUCTION: Made out of durable, rust-proof, all-weather polypropylene resin for exceptional durability`,
		`DURABLE: Molded rattan design is more durable and comfortable than woven rattan - will not warp, dent, rust or peel - Unlike real rattan and wicker`,
		`LOUNGE SEATING: Provides comfortable lounge seating with a weight capacity of 299 lbs. per chair`,
		`QUICK ASSEMBLY: Ready to assemble with detailed assembly instructions included, and easy to rearrange thanks to it's lightweight design`,
		`VERSATILE USE: Perfect for front porch decor, patio chairs, balcony set, and poolside seating`
	],
	category: "Furniture"
},
{name:"Walker Edison Willa Modern Farmhouse Sliding Single Slat Door Storage Console, 32 Inch, White and Rustic Oak",
	img: [
		"https://m.media-amazon.com/images/I/81e+NDX8VOL._AC_SL1500_.jpg",
		"https://m.media-amazon.com/images/I/71V8496P6+L._AC_SL1500_.jpg",
		"https://m.media-amazon.com/images/I/81YKIvUlSRL._AC_SL1500_.jpg",
		"https://m.media-amazon.com/images/I/81JlzRAdq-L._AC_SL1500_.jpg",
		"https://m.media-amazon.com/images/I/81GsPHe4K6L._AC_SL1500_.jpg",
		"https://m.media-amazon.com/images/I/91TEDHmRHDL._AC_SL1500_.jpg"
	] ,
	price: 135.86,
	description: [
		`Dimensions: 32” H x 15.75” D x 32” L, Cubby: 12.5” H x 13.5” D x 13” L`,
		`Top surface supports up to 100 Ibs. and shelves support up to 30 Ibs. each`,
		`2 adjustable shelves for customizable organization`,
		`Supports TVs up to 34”`,
		`Ships ready-to-assemble with step-by-step instructions`
	],
	category: "Furniture"
},
{name:"Flash Furniture Contemporary Brown LeatherSoft Kids Recliner with Cup Holder",
	img: [
		"https://m.media-amazon.com/images/I/81rkmFCCjFL._AC_SL1500_.jpg",
		"https://m.media-amazon.com/images/I/81d0Ct--YuL._AC_SL1500_.jpg",
		"https://m.media-amazon.com/images/I/81PJYYm8beL._AC_SL1500_.jpg",
		"https://m.media-amazon.com/images/I/81y5CAA8HML._AC_SL1500_.jpg",
		"https://m.media-amazon.com/images/I/81sy30chxuL._AC_SL1500_.jpg",
		"https://m.media-amazon.com/images/I/81LDnx0XqXL._AC_SL1500_.jpg",
		"https://m.media-amazon.com/images/I/81p-PcmhYJL._AC_SL1500_.jpg",
		"https://m.media-amazon.com/images/I/81IfAmyi8fL._AC_SL1500_.jpg",
		"https://m.media-amazon.com/images/I/81yP3N4S29L._AC_SL1500_.jpg",
		"https://m.media-amazon.com/images/I/81nVqfzTYML._AC_SL1500_.jpg",
		"https://m.media-amazon.com/images/I/81twqbYFeYL._AC_SL1500_.jpg",
		"https://m.media-amazon.com/images/I/81YOzlBEH7L._AC_SL1500_.jpg",
		"https://m.media-amazon.com/images/I/81Nz0KxpDcL._AC_SL1500_.jpg"
	] ,
	price: 109.33,
	description: [
		`Kids love having a place to sit that is just their size and this deluxe padded chair is an ideal seating solution; Product cannot be shipped to Canada`,
		`Kids love having a place to sit that is just their size, especially when it looks just like their parent's. This deluxe padded chair is an ideal seating solution that will look right at home in your living room as well as the playroom.`,
		`Cup holder armrest, plush padded back, vinyl upholstery, raised black feet`,
		`CAL 117 fire retardant foam, solid hardwood frame construction, 90 lb. weight capacity`,
		`Contemporary styling fits nicely in your living room, child's bedroom, playroom, pediatrician's office or pediatric therapists office`,
		`PRODUCT MEASUREMENTS: Overall Size: 24.5"W x 25-39"D x 28"H; Seat Size: 13.75"W x 12"D x 14.5"H; Back Size: 22"W x 17"H; Arm Size: 16"H from floor; 4"H from seat; Wall Clearance: 6`
	],
	category: "Furniture"
},
{name:"VECELO Nightstand Set of 2, Modern Bedside End Tables, Night Stands with Drawer and Storage Shelf for Living Room Bedroom, Industrial Metal Frame, Brown",
	img: [
		"https://m.media-amazon.com/images/I/81Swz-GfSiL._AC_SL1500_.jpg",
		"https://m.media-amazon.com/images/I/814bASrcaSS._AC_SL1500_.jpg",
		"https://m.media-amazon.com/images/I/71ajlIoNrLL._AC_SL1500_.jpg",
		"https://m.media-amazon.com/images/I/718u8eKEo5L._AC_SL1500_.jpg",
		"https://m.media-amazon.com/images/I/71NeJj6hDrL._AC_SL1500_.jpg",
		"https://m.media-amazon.com/images/I/81at5t-9yIL._AC_SL1500_.jpg",
		"https://m.media-amazon.com/images/I/91Ci-Ijk6hL._AC_SL1500_.jpg",
		"https://m.media-amazon.com/images/I/71E2zItYyjL._AC_SL1500_.jpg"

	] ,
	price: 89.99,
	description: [
		`Decorate Your Space with This Industrial Nightstands Set of 2 - The classic brown wood tabletop and black steel frames complement each other and create the glossy shine of the vintage look. These modern end tables are perfectly placed next to any bed, sofa or recliner. End Tables Dimensions: 11.8"D x 15.8"W x 21.7"H`,
		`End Tables with Storage Drawer - VECELO nightstands set of 2 are designed for one drawer and open storage shelf for placing a lamp, Ipad, small radio, books etc. You can put your precious or private items in the drawer. Making your bedroom and living room tidy and organized.`,
		`Surdy and Stable Construction: Vecelo nightstand set of 2 is constructed of high-quality MDF board which is thick and durable enough to strongly support the end itself and stuff inside or on it. Four adjustable metal feet pads keep the end tables balanced on uneven ground and increase its stability.`,
		`Easy Assembly: Detailed instructions and all labeled parts accessories are included. Just follow the easy-to-understand instructions and finish the end table assembly within 15-20 minutes. Clean with a wet cloth.`,
		`We provide a 30-day full refund with no question asked & 24-hour instant customer service. If there are any problems with the nightstands, please contact us to get free parts or a NEW item for replacement.`
	],
	category: "Furniture"
},
{
	name:"Grand Theft Auto V - PlayStation 5",
	img: [
		"https://m.media-amazon.com/images/I/71rmY66nqoL._SL1361_.jpg",
		"https://m.media-amazon.com/images/I/81CaxtOZofL._SL1500_.jpg",
		"https://m.media-amazon.com/images/I/81hUPLAplQL._SL1500_.jpg",
		"https://m.media-amazon.com/images/I/71slSSoakTL._SL1500_.jpg",
		"https://m.media-amazon.com/images/I/81u-0qRF6XL._SL1500_.jpg",
		"https://m.media-amazon.com/images/I/91IH+i2RyEL._SL1500_.jpg",
		"https://m.media-amazon.com/images/I/71VkXKI8yeL._SL1500_.jpg"
	] ,
	price: 23.00,
	description: [
		"STUNNING VISUALS — Enhanced levels of fidelity and performance with new graphics modes featuring up to 4K resolution, up to 60 frames per second, HDR options, ray tracing, improved texture quality, and",
		"FASTER LOADING — Quicker access to the action as the world of Los Santos and Blaine County load in faster than ever before",
		"ADAPTIVE TRIGGERS AND HAPTIC FEEDBACK — Feel every moment through the DualSense controller, from directional damage to weather effects, rough road surfaces to explosions, and more",
		"TEMPEST 3D AUDIO — Hear the sounds of the world with pinpoint precision: the throttle of a stolen supercar, the rattle of neighboring gunfire, the roar of a helicopter overhead, and more"
	],
	category: "Games"
},
{
	name:"God of War Ragnarök - PlayStation 5",
	img: [
		"https://m.media-amazon.com/images/I/81Pagnfx1DL._SL1500_.jpg",
		"https://m.media-amazon.com/images/I/81tSQchr61L._SL1500_.jpg",
		"https://m.media-amazon.com/images/I/81Z6g4ppWHL._SL1500_.jpg",
		"https://m.media-amazon.com/images/I/81zadb8VWpL._SL1500_.jpg",
		"https://m.media-amazon.com/images/I/81d3MmvD2BL._SL1500_.jpg",
		"https://m.media-amazon.com/images/I/813hw4o8SAL._SL1500_.jpg",
		"https://m.media-amazon.com/images/I/81H+6RI6U7L._SL1500_.jpg",
		"https://m.media-amazon.com/images/I/91PDnTXtenL._SL1500_.jpg",
		"https://m.media-amazon.com/images/I/91j4QxPUvaL._SL1500_.jpg"
	] ,
	price: 68.00,
	description: [
		"Feel your journey through the Norse realms, made possible by immersive haptic feedback and adaptive trigger functionality.",
		"Take advantage of multidirectional 3D Audio; hear enemies approaching from any direction. (3D audio with stereo headphones (analog or USB))",
		"Bask in the beautiful worlds you travel through, brought to life by precise art direction and arresting attention to detail.",
		"Switch between full 4K resolution at a targeted 30 frames per second, or dynamic resolution upscaled to 4K at a targeted 60fps. (4K resolution requires a compatible 4K TV or display)"
	],
	category: "Games"
},
{
	name:"The Last of Us Part I – PlayStation 5",
	img: [
		"https://m.media-amazon.com/images/I/81l41iKPF3L._SL1500_.jpg",
		"https://m.media-amazon.com/images/I/71klFuJqZDL._SL1500_.jpg",
		"https://m.media-amazon.com/images/I/81qjCuT6ZwL._SL1500_.jpg",
		"https://m.media-amazon.com/images/I/71j9Es6ZFSL._SL1500_.jpg",
		"https://m.media-amazon.com/images/I/81d18KUk43L._SL1500_.jpg",
		"https://m.media-amazon.com/images/I/71XNeZxjUtL._SL1500_.jpg",
		"https://m.media-amazon.com/images/I/71eZnq6LQ0L._SL1500_.jpg",
		"https://m.media-amazon.com/images/I/71ZRrlXy7fL._SL1500_.jpg",
		"https://m.media-amazon.com/images/I/71wVqPrGXnL._SL1500_.jpg",
		"https://m.media-amazon.com/images/I/71MEv-MISyL._SL1500_.jpg",
		"https://m.media-amazon.com/images/I/71Ynz6X6w0L._SL1500_.jpg",
		"https://m.media-amazon.com/images/I/7123YsBEhpL._SL1500_.jpg"
	] ,
	price: 69.00,
	description: [
		"Enhanced visuals: Completely rebuilt from the ground up using Naughty Dog’s latest PS5 engine technology to improve every visual detail, The Last of Us experience has been faithfully enhanced with more realistic lighting and atmosphere, more intricate environments and creative reimaginings of familiar spaces.",
		"Fast loading: Initial loading times are near instant, and seamless after the first instance thanks to the PS5 console’s SSD – so you can pick up where you left off in the story and load specific encounters and chapters more quickly.",
		"Haptic feedback: DualSense wireless controller haptic feedback support for every weapon elevates combat encounters, and environments are brought to life through DualSense wireless controller haptic sensations of subtle falling rain, the crunch of stepping on snow and more.",
		"Adaptive triggers: All The Last of Us iconic weapons, including Joel’s revolver and Ellie’s bow, now deliver dynamic DualSense wireless controller trigger resistance and kickback on firing for deeper combat immersion.",
		"3D Audio: Designed to make use of the PS5 console’s Tempest 3D AudioTech, Naughty Dog’s newly upgraded audio engine delivers richer soundscapes, bigger explosive moments and more visceral gameplay through compatible stereo headphones (analogue or USB) or TV speakers."
	],
	category: "Games"
},
{
	name:"Marvel's Spider-Man: Miles Morales - PlayStation 5",
	img: [
		"https://m.media-amazon.com/images/I/71ez57A5HtL._SL1361_.jpg",
		"https://m.media-amazon.com/images/I/810p7CmPODL._SL1500_.jpg",
		"https://m.media-amazon.com/images/I/81L0X99ZEOL._SL1500_.jpg",
		"https://m.media-amazon.com/images/I/81Ke1uk4VwL._SL1500_.jpg",
		"https://m.media-amazon.com/images/I/81SZHiAq53L._SL1500_.jpg",
		"https://m.media-amazon.com/images/I/81xcM5svCAL._SL1500_.jpg"
	] ,
	price: 38.99,
	description: [
		"Miles morales discovers explosive powers that set him apart from his mentor, peter parker. Master his unique, bio-electric venom Blast attacks and covert camouflage power alongside spectacular web-slinging acrobatics, gadgets and skills.",
		"A war for control of Marvel's new York has broken out between a devious Energy Corporation and a high-tech criminal army. With his new home at the heart of the battle, miles must learn the cost of becoming a hero.",
		"Traverse the snowy streets of his new, vibrant and bustling Neighborhood as miles searches for a sense of belonging. When the lines blur between his personal and crime-fighting lives, he discovers who he can trust, and what it feels like to truly be home."
	],
	category: "Games"
},
{
	name:"Mortal Kombat 11 Ultimate - PlayStation 5",
	img: [
		"https://m.media-amazon.com/images/I/71H-61NX1pL._SL1361_.jpg",
		"https://m.media-amazon.com/images/I/91LtG7Ja6zL._SL1500_.jpg",
		"https://m.media-amazon.com/images/I/71rj3A53ToL._SL1500_.jpg",
		"https://m.media-amazon.com/images/I/71rObqx8kAL._SL1500_.jpg",
		"https://m.media-amazon.com/images/I/818sCiFAYaL._SL1500_.jpg",
		"https://m.media-amazon.com/images/I/910jhFKpLgL._SL1500_.jpg"
	] ,
	price: 27.84,
	description: [
		"Experience 2 robust and critically acclaimed story campaigns from Mk11 & Mk11: aftermath",
		"Play as the complete 37-character roster, including newly added fighters Mileena, RaiN & Rambo",
		"Thousands of Skins & weapons & Gear for an unprecedented level of Fighter customization",
		"Includes all previous guest fighters such as Terminator Joker spawns & Robocop",
		"Every mode included"
	],
	category: "Games"
},
{
	name:"Dead Island 2: Day 1 Edition - Xbox Series X",
	img: [
		"https://m.media-amazon.com/images/I/81hQumhfFeL._SL1500_.jpg",
		"https://m.media-amazon.com/images/I/91m0oN4sqQL._SL1500_.jpg",
		"https://m.media-amazon.com/images/I/81b0+feqv5L._SL1500_.jpg",
		"https://m.media-amazon.com/images/I/81-8yT9rheL._SL1500_.jpg",
		"https://m.media-amazon.com/images/I/71-Hbb4Iu0L._SL1500_.jpg",
		"https://m.media-amazon.com/images/I/81bt4OV8HyL._SL1500_.jpg"
	] ,
	price: 69.99,
	description: [
		"Dead Island 2 takes players across the most iconic locations of the City of Angels, now stained with horror, in an exciting pulp journey from the verdant suburbia of Beverly Hills to the quirky promenade of Venice Beach",
		"Combat delivers the most intense, visceral and gory first person experience possible, with plenty of weapons and tactical (and brutal) options to chew your way through the zombie horde",
		"There are 6 characters to choose from, each with their own unique personality and dialogues - You can fully customize the abilities of each Slayer, with our brand-new skill system allowing you to re-spec instantly and try out the craziest builds.",
		"Our LA is crawling with zombies that look & react realistically - These mutated wretches are the reanimated, rotten heart of Dead Island 2 with dozens of distinct zombie types, each with their own mutations, attacks & hundreds of LA-themed variants",
		"Day 1 Edition includes the Memories of Banoi Pack - Banoi War Club, Memories of Banoi Baseball Bat, Weapon Perk – balanced, Personal space skill card",
		"Alexa Game Control: Use your voice to swap weapons, set waypoints, goad zombies, and much more, available first on Dead Island 2. Play with any microphone or headset, no Alexa device required."
	],
	category: "Games"
},
{
	name:"Elden Ring - Xbox Series X",
	img: [
		"https://m.media-amazon.com/images/I/81AXuMBqy9L._SL1500_.jpg",
		"https://m.media-amazon.com/images/I/71ugu+Io97L._SL1500_.jpg",
		"https://m.media-amazon.com/images/I/61tSIL4L7KL._SL1500_.jpg",
		"https://m.media-amazon.com/images/I/71UkqgzWtcL._SL1500_.jpg",
		"https://m.media-amazon.com/images/I/71EuANxoSsL._SL1500_.jpg",
		"https://m.media-amazon.com/images/I/71GSR-A0BfL._SL1500_.jpg",
		"https://m.media-amazon.com/images/I/71AcpAptdxL._SL1500_.jpg",
		"https://m.media-amazon.com/images/I/71tL5mpSFKL._SL1500_.jpg"
	] ,
	price: 45.49,
	description: [
		"ELDEN RING is a fantasy action-RPG adventure set within a world created by Hidetaka Miyazaki—creator of the influential DARK SOULS video game series; and George R.R. Martin—author of The New York Times best-selling fantasy series, A Song of Ice and Fire",
		"Danger and discovery lurk around every corner in FromSoftware’s largest game to-date",
		"HIDETAKA MIYAZAKI: President and Game Director of FromSoftware Inc. Known for directing critically-acclaimed games in beloved franchises including Armored Core and Dark Souls",
		"GEORGE R. R. MARTIN: the #1 The New York Times bestselling author of many novels, including the acclaimed series A Song of Ice and Fire—A Game of Thrones, A Clash of Kings, A Storm of Swords, A Feast For Crows, and A Dance with Dragons"
	],
	category: "Games"
},
{
	name:"The Callisto Protocol Day One Edition - Xbox Series X",
	img: [
		"https://m.media-amazon.com/images/I/71BfHb2WCTL._SL1500_.jpg",
		"https://m.media-amazon.com/images/I/51tAwtJOaJL.jpg",
		"https://m.media-amazon.com/images/I/61+776UWF0L._SL1500_.jpg",
		"https://m.media-amazon.com/images/I/61zIwzL7JML._SL1500_.jpg",
		"https://m.media-amazon.com/images/I/613kF6d4zwL._SL1500_.jpg",
		"https://m.media-amazon.com/images/I/61QpIT+XgWL._SL1500_.jpg",
		"https://m.media-amazon.com/images/I/61Sx03SefIL._SL1500_.jpg",
		"https://m.media-amazon.com/images/I/71IHaEzKdtL._SL1500_.jpg"
	] ,
	price: 49.94,
	description: [
		"Horror Engineering - The Callisto Protocol is a next generation take on survival horror from the mind of Glen Schofield",
		"Uncover the Secrets of the united Jupiter Company - Set on Jupiter’s dead moon Callisto in the year 2320",
		"Players will be forced to get up close and personal with their grotesque opponents, hacking off limbs, blasting off legs, and getting creative with whatever is at their disposal to survive",
		"Experience the Isolation of Jupiter’s Dead Moon - One of the most hostile, isolated environments in the universe",
		"Players must not only contend with the horrors of Black Iron Prison, but also the centuries-old secrets that plague Jupiter’s long-dead moon"
	],
	category: "Games"
},
]
}


export const DataSlice = createSlice({
    name : 'Data',
    initialState,
    reducers: {
		addItem : (state, action : PayloadAction<{ name: string, img: Array<string> , price: number, description: Array<string> ,
			category: string; }>) => {
				state.value = [action.payload, ...state.value];
			}
    }
})
export const { addItem } = DataSlice.actions;
export default DataSlice.reducer;