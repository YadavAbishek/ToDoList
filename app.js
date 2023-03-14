const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var items = [];

app.get("/", (req, res) => {
    const today = new Date();

    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    const day = today.toLocaleDateString("en-US", options);



    res.render('list', {kindOfDay: day, newListItem: items});
});


app.post("/", (req, res) => {
    var new_item = req.body.newItem;

    items.push(new_item);
    res.redirect("/");
})

app.listen(3000, () => {
    console.log("Listening at port 3000");
});