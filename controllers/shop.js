const Product = require("../models/single-product");

const Cart = require("../models/cart")

module.exports.getAllProducts = (req, res) => {
    Product.fetchAllProducts((products) => {
        res.render("shop/product-list", {
            pageTitle: "All products",
            productsArray: products,
        });
    });
};

module.exports.getOneProduct = (req, res) => {
    const pId = req.params.productId;
    Product.fetchOneProduct(pId, (product) => {
        res.render("shop/product-details", {
            product: product,
            pageTitle: `Product Deateil ${product.title}`,
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
};

module.exports.getCart = (req, res) => {
    res.render("shop/cart", {
        pageTitle: "shop basket",
    });
};

module.exports.postCart = (req, res) => {
    const pId = req.body.productId;
    Product.fetchOneProduct(pId, (product) => {
        Cart.addProduct(pId, product.price)
    })
    res.redirect('/cart')
};

module.exports.getOrders = (req, res) => {
    res.render("shop/orders", {
        pageTitle: "shop Orders",
    });
};

module.exports.getCheckout = (req, res) => {
    res.render("shop/checkout", {
        pageTitle: "Pay Order",
    });
};