const Product = require("../models/single-product");

module.exports.addProductPage = (req, res) => {
    res.render("admin/add-product", {
        pageTitle: "Admin Panel",
    });
};

module.exports.sendAllProducts = (req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const uId = req.user._id
    const products = new Product(title, description, price, uId);
    products
        .saveProductData()
        .then((result) => {
            console.log("Product Created!");
            res.redirect("/admin/add-product");
        })
        .catch((err) => {
            console.log(err);
        });
};

module.exports.getProducts = (req, res) => {
    Product.fetchAllProducts()
        .then((products) => {
            res.render("admin/products", {
                productsArray: products,
                pageTitle: "Admin Products",
            });
        })
        .catch((err) => {
            console.log(err);
        });
};

module.exports.deleteProducts = (req, res) => {
    const pId = req.body.productId;
    Product.deleteOneProduct(pId)
        .then(() => {
            console.log("Product Deleted!");
            res.redirect("/admin/products");
        })
        .catch((err) => console.log(err));
};