
let express = require("express");
let app = express();
let cors = require("cors");
app.use(cors());

let products = [
  {
    "id": 1,
    "name": "Xiaomi iPhone 12",
    "brand": "xiaomi",
    "price": 60000,
    "ram": 6,
    "rom": 256,
    "rating": 4.5,
    "os": "android",
    "camera": 108
  },
  {
    "id": 2,
    "name": "Oppo Mi 10",
    "brand": "xiaomi",
    "price": 30000,
    "ram": 6,
    "rom": 512,
    "rating": 4,
    "os": "ios",
    "camera": 64
  },
  {
    "id": 3,
    "name": "Samsung Mi 10",
    "brand": "oppo",
    "price": 20000,
    "ram": 4,
    "rom": 256,
    "rating": 4,
    "os": "android",
    "camera": 24
  },
  {
    "id": 4,
    "name": "Apple Find X2",
    "brand": "samsung",
    "price": 60000,
    "ram": 8,
    "rom": 512,
    "rating": 4.5,
    "os": "ios",
    "camera": 48
  },
  {
    "id": 5,
    "name": "Oppo Mi 11",
    "brand": "xiaomi",
    "price": 30000,
    "ram": 12,
    "rom": 128,
    "rating": 4,
    "os": "ios",
    "camera": 24
  },
  {
    "id": 6,
    "name": "OnePlus Find X3",
    "brand": "apple",
    "price": 30000,
    "ram": 12,
    "rom": 64,
    "rating": 4,
    "os": "android",
    "camera": 64
  },
  {
    "id": 7,
    "name": "Apple Pixel 5",
    "brand": "apple",
    "price": 70000,
    "ram": 4,
    "rom": 512,
    "rating": 4.5,
    "os": "ios",
    "camera": 24
  },
  {
    "id": 8,
    "name": "Google Mi 10",
    "brand": "oppo",
    "price": 30000,
    "ram": 8,
    "rom": 64,
    "rating": 5,
    "os": "ios",
    "camera": 108
  },
  {
    "id": 9,
    "name": "Oppo Mi 11",
    "brand": "samsung",
    "price": 30000,
    "ram": 4,
    "rom": 64,
    "rating": 4,
    "os": "android",
    "camera": 24
  },
  {
    "id": 10,
    "name": "Xiaomi Mi 10",
    "brand": "oppo",
    "price": 60000,
    "ram": 16,
    "rom": 512,
    "rating": 4.5,
    "os": "android",
    "camera": 12
  },
  {
    "id": 11,
    "name": "OnePlus Pixel 5",
    "brand": "apple",
    "price": 60000,
    "ram": 12,
    "rom": 64,
    "rating": 5,
    "os": "android",
    "camera": 12
  },
  {
    "id": 12,
    "name": "Xiaomi OnePlus 8",
    "brand": "xiaomi",
    "price": 70000,
    "ram": 8,
    "rom": 64,
    "rating": 4.5,
    "os": "android",
    "camera": 48
  },
  {
    "id": 13,
    "name": "Xiaomi Pixel 6",
    "brand": "oppo",
    "price": 30000,
    "ram": 4,
    "rom": 64,
    "rating": 5,
    "os": "android",
    "camera": 108
  },
  {
    "id": 14,
    "name": "Samsung Find X2",
    "brand": "oppo",
    "price": 40000,
    "ram": 12,
    "rom": 512,
    "rating": 4.7,
    "os": "android",
    "camera": 48
  },
  {
    "id": 15,
    "name": "Google OnePlus 8",
    "brand": "apple",
    "price": 20000,
    "ram": 16,
    "rom": 64,
    "rating": 5,
    "os": "ios",
    "camera": 24
  },
  {
    "id": 16,
    "name": "OnePlus iPhone 12",
    "brand": "oneplus",
    "price": 20000,
    "ram": 6,
    "rom": 128,
    "rating": 4.5,
    "os": "ios",
    "camera": 64
  },
  {
    "id": 17,
    "name": "Google Mi 11",
    "brand": "oppo",
    "price": 70000,
    "ram": 6,
    "rom": 64,
    "rating": 4,
    "os": "android",
    "camera": 64
  },
  {
    "id": 18,
    "name": "Google OnePlus 9",
    "brand": "apple",
    "price": 20000,
    "ram": 4,
    "rom": 64,
    "rating": 5,
    "os": "android",
    "camera": 64
  },
  {
    "id": 19,
    "name": "Oppo Galaxy S22",
    "brand": "samsung",
    "price": 20000,
    "ram": 16,
    "rom": 256,
    "rating": 4.7,
    "os": "android",
    "camera": 12
  },
  {
    "id": 20,
    "name": "Apple Pixel 5",
    "brand": "oppo",
    "price": 40000,
    "ram": 8,
    "rom": 128,
    "rating": 4.7,
    "os": "android",
    "camera": 108
  }
];


function filterProductsOnPopularity(product1, product2){
  return product2.rating - product1.rating;
}

app.get('/products/sort/popularity', (req, res)=>{
 sortedProducts = products.slice();
 sortedProducts.sort(filterProductsOnPopularity);
 res.json({products: sortedProducts});
});

function filterProductsByPrice(product1, product2){
  return product2.price - product1.price;
}

app.get('/products/sort/price-high-to-low', (req, res)=>{
  sortedProducts = products.slice();
  sortedProducts.sort(filterProductsByPrice);
  res.json({products: sortedProducts});
});

function filterProductsByPriceAscending(product1, product2){
  return product1.price - product2.price;
}

app.get('/products/sort/price-low-to-high', (req, res)=>{
  sortedProducts = products.slice();
  sortedProducts.sort(filterProductsByPriceAscending);
  res.json({products: sortedProducts});
});

function filterByRam(product, ram){
  return product.ram === ram;
}

app.get('/products/filter/ram', (req, res)=>{
 let ram = parseFloat(req.query.ram);
 let result = products.filter(product => filterByRam(product, ram));
 res.json({products: result});
});

function filterByRom(product, rom){
  return product.rom == rom;
}

app.get('/products/filter/rom', (req, res)=>{
  let rom = req.query.rom;
  let result = products.filter(product => filterByRom(product, rom));
  res.json({products: result}); 
});

function filterByBrand(product, brand){
  return product.brand === brand;
}

app.get('/products/filter/brand', (req, res)=>{
  let brand = req.query.brand;
  let result = products.filter(product => filterByBrand(product, brand));
  res.json({products: result});
});

function filterByOs(product, os){
  return product.os === os;
}

app.get('/products/filter/os', (req, res)=>{
  let os = req.query.os;
  let result = products.filter(product => filterByOs(product, os));
  res.json({products: result});
});

function filterByPriceLessOrEqual(product, price){
  return product.price <= price;
}

app.get('/products/filter/price', (req, res)=>{
  let price = parseFloat(req.query.price);
  let result = products.filter(product => filterByPriceLessOrEqual(product, price));
  res.json({products: result}); 
});

app.get('/products', (req, res)=>{
  res.json({products: products});
});

PORT = 3000;
app.listen(PORT, ()=>{
  console.log("Server is running on https://localhost" + PORT);
});