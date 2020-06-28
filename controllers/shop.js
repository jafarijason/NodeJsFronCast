const Product = require("../models/single-product");



module.exports.getAllProducts = (req, res) => {
    Product.fetchAllProducts((products) => {
        res.render("shop/product-list", {
            pageTitle: "All products",
            productsArray: products,
        });
    });
};

module.exports.getIndex = (req, res) => {
    Product.fetchAllProducts((products) => {
        res.render("shop/index", {
            pageTitle: "Shop",
            productsArray: products,
        });
    });
}

module.exports.getCart = (req, res) => {
    res.render('shop/cart', {
        pageTitle: 'shop basket'
    })
}

module.exports.getCheckout = (req, res) => {
    res.render('shop/checkout', {
        pageTitle: "Pay Order"
    })
}