const path = require("path");
const connetionUrl = require('./database').connetionUrl

const express = require("express");
const bodyParser = require("body-parser");

const mongoose = require('mongoose')

// const User = require("./models/user");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// app.use((req, res, next) => {
//     User.findUserById('5ef911d5880c597ba11d9a3a')
//         .then((user) => {
//             req.user = new User(user.username, user.email, user.cart, user._id);
//             next();
//         })
//         .catch((err) => console.log(err));
// });

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use((req, res) => {
    res.status(404).send("Page Not Found.");
});


mongoose.connect(connetionUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(result => {
        app.listen(3000)
    })
    .catch(err => console.log(err))