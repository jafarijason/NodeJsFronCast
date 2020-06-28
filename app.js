const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const mongoConnect = require("./util/database").mongoDBConnect;

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(express.static(path.join(__dirname, "public")));

app.use((req, res) => {
    res.status(404).send("Page Not Found.");
});

mongoConnect(() => {
    app.listen(3000);
});

// app.listen(3000);