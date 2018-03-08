var express = require("express");
var app = express();
app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("index");
});


app.get("/contactUs", function(req, res) {
    res.render("contactUs");
});

app.get("*", function(req, res)
{
     res.send("Sorry, page not found...What are you doing with your life?");
});

app.listen(process.env.PORT, process.env.IP, function()
{
    console.log("Server Started!!!!");
});