const Product = require("../models/single-product");

module.exports.getAllProducts = (req, res) => {
    Product.fetchAllProducts()
        .then((products) => {
            res.render("shop/product-list", {
                productsArray: products,
                pageTitle: "All products",
            });
        })
        .catch((err) => {
            console.log(err);
        });
};

module.exports.getIndex = (req, res) => {
    Product.fetchAllProducts()
        .then((products) => {
            res.render("shop/index", {
                productsArray: products,
                pageTitle: "Shop",
            });
        })
        .catch((err) => {
            console.log(err);
        });
};