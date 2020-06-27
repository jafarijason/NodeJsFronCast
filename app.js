const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Shop Page");
});

app.get("/add-product", (req, res) => {
    res.send("add-product");
});

app.listen(3000);