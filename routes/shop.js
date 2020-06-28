const path = require('path')

const express = require('express')
const adminData = require('./admin')

const products = adminData.products
console.log(products);

const router = express.Router()

router.get("/", (req, res) => {
    // res.send("Shop Page");
    res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'))
});

module.exports = router