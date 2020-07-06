const mongoose = require('mongoose')

const Schema = mongoose.connect.Schema


// const mongodb = require("mongodb");
// const getDB = require("../database").getDB;

// class Product {
//     constructor(title, description, price, uId) {
//         this.title = title;
//         this.description = description;
//         this.price = price;
//         this.uId = uId;
//     }

//     saveProductData() {
//         const db = getDB();

//         return db
//             .collection("products")
//             .insertOne(this)
//             .then((result) => {
//                 console.log(result);
//             })
//             .catch((err) => {
//                 console.log(err);
//             });
//     }

//     static fetchAllProducts() {
//         const db = getDB();
//         return db
//             .collection("products")
//             .find()
//             .toArray()
//             .then((products) => {
//                 console.log(products);
//                 return products;
//             })
//             .catch((err) => {
//                 console.log(err);
//             });
//     }

//     static fetchOneProduct(pId) {
//         const db = getDB();
//         return db
//             .collection("products")
//             .find({ _id: new mongodb.ObjectID(pId) })
//             .next()
//             .then((product) => {
//                 console.log(product);
//                 return product;
//             })
//             .catch((err) => console.log(err));
//     }

//     static deleteOneProduct(pId) {
//         const db = getDB();
//         return db
//             .collection("products")
//             .deleteOne({ _id: new mongodb.ObjectID(pId) })
//             .then((result) => {
//                 console.log("Product Delete");
//             })
//             .catch((err) => console.log(err));
//     }
// }

// module.exports = Product;