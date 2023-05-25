// import 'bootstrap/dist/js/bootstrap';

//1-Chequear inicializacion variables / constantes
// const MOCKDATA = [
//   {
//     id: 1,
//     title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//     price: 109.95,
//     description:
//       "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//     category: "men's clothing",
//     image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//     rating: {
//       rate: 3.9,
//       count: 120,
//     },
//   },
//   {
//     id: 2,
//     title: "Mens Casual Premium Slim Fit T-Shirts ",
//     price: 22.3,
//     description:
//       "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
//     category: "men's clothing",
//     image:
//       "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
//     rating: {
//       rate: 4.1,
//       count: 259,
//     },
//   },
//   {
//     id: 3,
//     title: "Mens Cotton Jacket",
//     price: 55.99,
//     description:
//       "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
//     category: "men's clothing",
//     image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
//     rating: {
//       rate: 4.7,
//       count: 500,
//     },
//   },
//   {
//     id: 4,
//     title: "Mens Casual Slim Fit",
//     price: 15.99,
//     description:
//       "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
//     category: "men's clothing",
//     image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
//     rating: {
//       rate: 2.1,
//       count: 430,
//     },
//   },
//   {
//     id: 5,
//     title:
//       "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
//     price: 695,
//     description:
//       "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
//     category: "jewelery",
//     image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
//     rating: {
//       rate: 4.6,
//       count: 400,
//     },
//   },
//   {
//     id: 6,
//     title: "Solid Gold Petite Micropave ",
//     price: 168,
//     description:
//       "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
//     category: "jewelery",
//     image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
//     rating: {
//       rate: 3.9,
//       count: 70,
//     },
//   },
//   {
//     id: 7,
//     title: "White Gold Plated Princess",
//     price: 9.99,
//     description:
//       "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
//     category: "jewelery",
//     image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
//     rating: {
//       rate: 3,
//       count: 400,
//     },
//   },
//   {
//     id: 8,
//     title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
//     price: 10.99,
//     description:
//       "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
//     category: "jewelery",
//     image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
//     rating: {
//       rate: 1.9,
//       count: 100,
//     },
//   },
//   {
//     id: 9,
//     title: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
//     price: 64,
//     description:
//       "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
//     category: "electronics",
//     image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
//     rating: {
//       rate: 3.3,
//       count: 203,
//     },
//   },
//   {
//     id: 10,
//     title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
//     price: 109,
//     description:
//       "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
//     category: "electronics",
//     image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
//     rating: {
//       rate: 2.9,
//       count: 470,
//     },
//   },
//   {
//     id: 11,
//     title:
//       "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
//     price: 109,
//     description:
//       "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
//     category: "electronics",
//     image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
//     rating: {
//       rate: 4.8,
//       count: 319,
//     },
//   },
//   {
//     id: 12,
//     title:
//       "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
//     price: 114,
//     description:
//       "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
//     category: "electronics",
//     image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
//     rating: {
//       rate: 4.8,
//       count: 400,
//     },
//   },
//   {
//     id: 13,
//     title: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
//     price: 599,
//     description:
//       "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
//     category: "electronics",
//     image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
//     rating: {
//       rate: 2.9,
//       count: 250,
//     },
//   },
//   {
//     id: 14,
//     title:
//       "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
//     price: 999.99,
//     description:
//       "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
//     category: "electronics",
//     image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
//     rating: {
//       rate: 2.2,
//       count: 140,
//     },
//   },
//   {
//     id: 15,
//     title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
//     price: 56.99,
//     description:
//       "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
//     category: "women's clothing",
//     image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
//     rating: {
//       rate: 2.6,
//       count: 235,
//     },
//   },
//   {
//     id: 16,
//     title:
//       "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
//     price: 29.95,
//     description:
//       "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
//     category: "women's clothing",
//     image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
//     rating: {
//       rate: 2.9,
//       count: 340,
//     },
//   },
//   {
//     id: 17,
//     title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
//     price: 39.99,
//     description:
//       "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
//     category: "women's clothing",
//     image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
//     rating: {
//       rate: 3.8,
//       count: 679,
//     },
//   },
//   {
//     id: 18,
//     title: "MBJ Women's Solid Short Sleeve Boat Neck V ",
//     price: 9.85,
//     description:
//       "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
//     category: "women's clothing",
//     image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
//     rating: {
//       rate: 4.7,
//       count: 130,
//     },
//   },
//   {
//     id: 19,
//     title: "Opna Women's Short Sleeve Moisture",
//     price: 7.95,
//     description:
//       "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
//     category: "women's clothing",
//     image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
//     rating: {
//       rate: 4.5,
//       count: 146,
//     },
//   },
//   {
//     id: 20,
//     title: "DANVOUY Womens T Shirt Casual Cotton Short",
//     price: 12.99,
//     description:
//       "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
//     category: "women's clothing",
//     image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
//     rating: {
//       rate: 3.6,
//       count: 145,
//     },
//   },
// ];

// //2 - seleccionar elementos html
// const root = document.getElementById("root");

// //3 - Trabajo con la logica
// MOCKDATA.forEach((data) => {
//   //crear contenedor
//   const card = document.createElement("div");
//   card.className = "card";
//   //inyectamos resto del codigo
//   card.innerHTML = `
//         <img src="${data.image}" style="width: 150px" class="card-img-top" alt=${data.title}>
//   <div class="card-body">
//     <h5 class="card-title">${data.title}</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <p class="h2">${data.price}</p>
//   </div>
//     `;
  //anexo este objeto al div que esta en el html
//   root.appendChild(card);
// });

const MOCKDATA = [
  {
    driverId: "abate",
    url: "http://en.wikipedia.org/wiki/Carlo_Mario_Abate",
    givenName: "Carlo",
    familyName: "Abate",
    dateOfBirth: "1932-07-10",
    nationality: "Italian",
  },
  {
    driverId: "abecassis",
    url: "http://en.wikipedia.org/wiki/George_Abecassis",
    givenName: "George",
    familyName: "Abecassis",
    dateOfBirth: "1913-03-21",
    nationality: "British",
  },
  {
    driverId: "acheson",
    url: "http://en.wikipedia.org/wiki/Kenny_Acheson",
    givenName: "Kenny",
    familyName: "Acheson",
    dateOfBirth: "1957-11-27",
    nationality: "British",
  },
  {
    driverId: "adams",
    url: "http://en.wikipedia.org/wiki/Philippe_Adams",
    givenName: "Philippe",
    familyName: "Adams",
    dateOfBirth: "1969-11-19",
    nationality: "Belgian",
  },
  {
    driverId: "ader",
    url: "http://en.wikipedia.org/wiki/Walt_Ader",
    givenName: "Walt",
    familyName: "Ader",
    dateOfBirth: "1913-12-15",
    nationality: "American",
  },
  {
    driverId: "adolff",
    url: "http://en.wikipedia.org/wiki/Kurt_Adolff",
    givenName: "Kurt",
    familyName: "Adolff",
    dateOfBirth: "1921-11-05",
    nationality: "German",
  },
  {
    driverId: "agabashian",
    url: "http://en.wikipedia.org/wiki/Fred_Agabashian",
    givenName: "Fred",
    familyName: "Agabashian",
    dateOfBirth: "1913-08-21",
    nationality: "American",
  },
  {
    driverId: "ahrens",
    url: "http://en.wikipedia.org/wiki/Kurt_Ahrens,_Jr.",
    givenName: "Kurt",
    familyName: "Ahrens",
    dateOfBirth: "1940-04-19",
    nationality: "German",
  },
  {
    driverId: "aitken",
    permanentNumber: "89",
    code: "AIT",
    url: "http://en.wikipedia.org/wiki/Jack_Aitken",
    givenName: "Jack",
    familyName: "Aitken",
    dateOfBirth: "1995-09-23",
    nationality: "British",
  },
  {
    driverId: "albers",
    code: "ALB",
    url: "http://en.wikipedia.org/wiki/Christijan_Albers",
    givenName: "Christijan",
    familyName: "Albers",
    dateOfBirth: "1979-04-16",
    nationality: "Dutch",
  },
  {
    driverId: "albon",
    permanentNumber: "23",
    code: "ALB",
    url: "http://en.wikipedia.org/wiki/Alexander_Albon",
    givenName: "Alexander",
    familyName: "Albon",
    dateOfBirth: "1996-03-23",
    nationality: "Thai",
  },
  {
    driverId: "alboreto",
    url: "http://en.wikipedia.org/wiki/Michele_Alboreto",
    givenName: "Michele",
    familyName: "Alboreto",
    dateOfBirth: "1956-12-23",
    nationality: "Italian",
  },
  {
    driverId: "alesi",
    url: "http://en.wikipedia.org/wiki/Jean_Alesi",
    givenName: "Jean",
    familyName: "Alesi",
    dateOfBirth: "1964-06-11",
    nationality: "French",
  },
  {
    driverId: "alguersuari",
    code: "ALG",
    url: "http://en.wikipedia.org/wiki/Jaime_Alguersuari",
    givenName: "Jaime",
    familyName: "Alguersuari",
    dateOfBirth: "1990-03-23",
    nationality: "Spanish",
  },
  {
    driverId: "alliot",
    url: "http://en.wikipedia.org/wiki/Philippe_Alliot",
    givenName: "Philippe",
    familyName: "Alliot",
    dateOfBirth: "1954-07-27",
    nationality: "French",
  },
  {
    driverId: "allison",
    url: "http://en.wikipedia.org/wiki/Cliff_Allison",
    givenName: "Cliff",
    familyName: "Allison",
    dateOfBirth: "1932-02-08",
    nationality: "British",
  },
  {
    driverId: "alonso",
    permanentNumber: "14",
    code: "ALO",
    url: "http://en.wikipedia.org/wiki/Fernando_Alonso",
    givenName: "Fernando",
    familyName: "Alonso",
    dateOfBirth: "1981-07-29",
    nationality: "Spanish",
  },
  {
    driverId: "amati",
    url: "http://en.wikipedia.org/wiki/Giovanna_Amati",
    givenName: "Giovanna",
    familyName: "Amati",
    dateOfBirth: "1959-07-20",
    nationality: "Italian",
  },
  {
    driverId: "amick",
    url: "http://en.wikipedia.org/wiki/Red_Amick",
    givenName: "Red",
    familyName: "Amick",
    dateOfBirth: "1929-01-19",
    nationality: "American",
  },
  {
    driverId: "george_amick",
    url: "http://en.wikipedia.org/wiki/George_Amick",
    givenName: "George",
    familyName: "Amick",
    dateOfBirth: "1924-10-24",
    nationality: "American",
  },
  {
    driverId: "amon",
    url: "http://en.wikipedia.org/wiki/Chris_Amon",
    givenName: "Chris",
    familyName: "Amon",
    dateOfBirth: "1943-07-20",
    nationality: "New Zealander",
  },
  {
    driverId: "anderson",
    url: "http://en.wikipedia.org/wiki/Bob_Anderson_(racing_driver)",
    givenName: "Bob",
    familyName: "Anderson",
    dateOfBirth: "1931-05-19",
    nationality: "British",
  },
  {
    driverId: "andersson",
    url: "http://en.wikipedia.org/wiki/Conny_Andersson_(racing_driver)",
    givenName: "Conny",
    familyName: "Andersson",
    dateOfBirth: "1939-12-28",
    nationality: "Swedish",
  },
  {
    driverId: "andretti",
    url: "http://en.wikipedia.org/wiki/Michael_Andretti",
    givenName: "Michael",
    familyName: "Andretti",
    dateOfBirth: "1962-10-05",
    nationality: "American",
  },
  {
    driverId: "mario_andretti",
    url: "http://en.wikipedia.org/wiki/Mario_Andretti",
    givenName: "Mario",
    familyName: "Andretti",
    dateOfBirth: "1940-02-28",
    nationality: "American",
  },
  {
    driverId: "andrews",
    url: "http://en.wikipedia.org/wiki/Keith_Andrews_(driver)",
    givenName: "Keith",
    familyName: "Andrews",
    dateOfBirth: "1920-06-15",
    nationality: "American",
  },
  {
    driverId: "apicella",
    url: "http://en.wikipedia.org/wiki/Marco_Apicella",
    givenName: "Marco",
    familyName: "Apicella",
    dateOfBirth: "1965-10-07",
    nationality: "Italian",
  },
  {
    driverId: "armi",
    url: "http://en.wikipedia.org/wiki/Frank_Armi",
    givenName: "Frank",
    familyName: "Armi",
    dateOfBirth: "1918-10-12",
    nationality: "American",
  },
  {
    driverId: "arnold",
    url: "http://en.wikipedia.org/wiki/Chuck_Arnold",
    givenName: "Chuck",
    familyName: "Arnold",
    dateOfBirth: "1926-05-30",
    nationality: "American",
  },
  {
    driverId: "arnoux",
    url: "http://en.wikipedia.org/wiki/Ren%C3%A9_Arnoux",
    givenName: "René",
    familyName: "Arnoux",
    dateOfBirth: "1948-07-04",
    nationality: "French",
  },
];

//2 - seleccionar elementos html
const rootFOne = document.getElementById("f1RootTwo");

//3 - Trabajo con la logica
MOCKDATA.forEach((data) => {
  //crear contenedor
  const card = document.createElement("div");
  card.className = "card disBorder";
  //inyectamos resto del codigo
  card.innerHTML = `
    <div class="card-body d-flex flex-column justify-content-center align-items-center">
    <img src="/img/f1.jpg" style="width: 250gitpx" class="card-img-top" alt=${
      data.givenName + data.familyName
    }>
    <h5 class="card-title mt-2">${data.givenName} ${data.familyName}</h5>
    <p class="card-text mb-0"> Birthday: ${data.dateOfBirth}</p>
    <p class="card-text mb-0">Nationality: ${data.nationality}</p>
    <div class="d-flex flex-column mt-2">
    <a class="btn btn-primary" href="${data.url}">View Biography</a>
    </div>
    
  </div>
    `;
  //anexo este objeto al div que esta en el html
  root.appendChild(card);
});
//4 - Revisar si hay que "Hacer limpieza"
