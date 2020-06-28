const path = require("path");

const express = require("express");

const router = express.Router();

const products = [];

router.get("/add-product", (req, res) => {
    // res.send("add-product");
    // res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
    res.render("add-product", {
        pageTitle: 'مدیریت',
    });
});

router.post("/add-product", (req, res) => {
    products.push({ title: req.body.title });
    res.redirect("/");
});

// module.exports = router;

exports.routes = router;
exports.products = products;