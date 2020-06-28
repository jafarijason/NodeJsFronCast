const getDB = require("../util/database").getDB;

class Product {
    constructor(title, description, price) {
        this.title = title;
        this.description = description;
        this.price = price;
    }

    saveProductData() {
        const db = getDB();

        return db
            .collection("products")
            .insertOne(this)
            .then((result) => {
                console.log(result);
            })
            .catch((err) => {
                console.log(err);
            });
    }
}

module.exports = Product