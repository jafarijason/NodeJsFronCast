const Product = require("../models/single-product");

module.exports.addProductPage = (req, res) => {
    res.render("admin/add-product", {
        pageTitle: "مدیریت",
    });
};

module.exports.sendAllProducts = (req, res) => {
    const products = new Product(req.body.title);
    products.saveProductData();
    res.redirect("/");
};

module.exports.getAllProducts = (req, res) => {
    Product.fetchAllProducts((products) => {
        res.render("shop/product-list", {
            pageTitle: "فروشگاه",
            productsArray: products,
        });
    });
};