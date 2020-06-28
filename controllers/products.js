const products = [];

module.exports.addProductPage = (req, res) => {
    res.render("add-product", {
        pageTitle: 'مدیریت',
    });
}


module.exports.sendAllProducts = (req, res) => {
    products.push({ title: req.body.title });
    res.redirect("/");
}