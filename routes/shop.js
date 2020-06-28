const path = require("path");

const express = require("express");
const adminData = require("./admin");


const router = express.Router();

router.get("/", (req, res) => {
    const products = adminData.products;

    res.render('shop', {
        pageTitle: 'فروشگاه',
        productsArray: products
    })
});

module.exports = router;