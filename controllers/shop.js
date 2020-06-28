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

module.exports.getOneProduct = (req, res) => {
    const pId = req.params.productId;
    Product.fetchOneProduct(pId)
        .then((product) => {
            res.render("shop/product-details", {
                product: product,
                pageTitle: product.title,
            });
        })
        .catch((err) => console.log(err));
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

module.exports.getCart = (req, res) => {
    res.render("shop/cart", {
        pageTitle: "shop basket",
    });
};

module.exports.postCart = (req, res) => {
    const pId = req.body.productId;
    Product.fetchOneProduct(pId)
        .then((product) => {
            return req.user.addToCart(product);
        })
        .then((result) => {
            console.log(result);
            res.redirect("/cart");
        });
};