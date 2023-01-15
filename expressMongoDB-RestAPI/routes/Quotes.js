const express = require("express");
const router = express.Router();

//Get all routes
router.get("/", (req, res) => {
   res.send("get all routes");
});

//Create new quote
router.post("/new", (req, res) => {
   res.send("Create new quote");
});

module.exports = router;
