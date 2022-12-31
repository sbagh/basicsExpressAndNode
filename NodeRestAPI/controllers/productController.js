const Product = require("../models/productModel");
const { getPostData } = require("../utils");

// Get all products
async function getProducts(req, res) {
   try {
      const products = await Product.findAll();

      res.writeHead(200, { "content-type": "application/json" });
      res.end(JSON.stringify(products));
   } 
   
   catch (error) {
      console.log(error);
   }
}

// Gets single product by id
async function getProductByID(req, res, id) {
   try {
      const product = await Product.findByID(id);

      if (!product) {
         res.writeHead(404, { "content-type": "application/json" });
         res.end(JSON.stringify({ message: "no product found" }));
      } else {
         res.writeHead(200, { "content-type": "application/json" });
         res.end(JSON.stringify(product));
      }
   } 
   
   catch (error) {
      console.log(error);
   }
}

// Create a product
async function createProduct(req, res) {
   try {
      const body = await getPostData(req);

      const { title, description, price } = JSON.parse(body);

      const product = {
         title,
         description,
         price,
      };

      const newProduct = await Product.create(product);

      res.writeHead(201, { "content-type": "application/json" });
      return res.end(JSON.stringify(newProduct));

   } 
   
   catch (error) {
      console.log(error);
   }
}

module.exports = {
   getProducts,
   getProductByID,
   createProduct,
};
