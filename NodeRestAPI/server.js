const http = require("http");
const {
   getProducts,
   getProductByID,
   createProduct,
} = require("./controllers/productController");

const PORT = 5100;


const server = http.createServer((req, res) => {
   // get all products:
   if (req.url === "/api/products" && req.method === "GET") {
      getProducts(req, res);
   } 
   
   else if (
      // get single product by ID (first by getting id from url, then using it in getProductByID)
      req.url.match(/\/api\/products\/([0-9])+/) &&
      req.method === "GET"
   ) {
      const id = req.url.split("/")[3];
      getProductByID(req, res, id);
   } 
   
   else if (req.url === "/api/products" && req.method === "POST") {
      // create a new product and add to file:
      createProduct(req, res);
   } 
    
   else {
      // otherwise return Route not found
      res.writeHead(404, { "content-type": "applicatoin/json" });
      res.end(JSON.stringify({ message: "Route not found" }));
   }
});

server.listen(PORT, () => console.log(`listening on  port ${PORT}`));
