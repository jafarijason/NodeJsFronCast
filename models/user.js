const mongodb = require("mongodb");
const getDB = require("../util/database").getDB;

class User {
    constructor(username, email, cart, id) {
        this.username = username;
        this.email = email;
        this.cart = cart;
        this._id = id;
    }

    saveUserData() {
        const db = getDB();
        return db.collection("user").insertOne(this);
    }

    addToCart(product) {
        const updatedCart = {
            items: [{ productId: new mongodb.ObjectID(product._id), qty: 1 }],
        };
        const db = getDB();
        return db.collection("user");
        updateOne({ _id: new mongodb.ObjectID(this._id) }, { $set: { cart: updatedCart } });
    }

    static findUserById(uId) {
        const db = getDB();
        return db
            .collection("user")
            .findOne({ _id: new mongodb.ObjectID(uId) })
            .then((user) => {
                console.log(user);
                return user;
            })
            .catch((err) => console.log(err));
    }
}

module.exports = User;