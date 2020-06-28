const path = require("path");

const express = require("express");

const shopControllers = require("../controllers/shop");

const router = express.Router();

router.get("/", shopControllers.getIndex);

router.get("/products", shopControllers.getAllProducts);


module.exports = router;