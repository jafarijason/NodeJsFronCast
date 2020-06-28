const Product = require("../models/single-product");

module.exports.addProductPage = (req, res) => {
    res.render("add-product", {
        pageTitle: "مدیریت",
    });
};

module.exports.sendAllProducts = (req, res) => {
    // products.push({ title: req.body.title });
    const products = new Product(req.body.title);
    products.saveProductData()
    res.redirect("/");
};

module.exports.getAllProducts = (req, res) => {
    const products = Product.fetchAllProducts()
    res.render("shop", {
        pageTitle: "فروشگاه",
        productsArray: products,
    });
};