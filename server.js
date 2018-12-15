var express = require("express");

var PORT = process.env.PORT || 3000;
var app = express();

//allows things in public to be served statically
app.use(express.static("public"));

//needed to parse resquest body as json
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//importing routes
var routes = require("./controllers/burgers_controller");
app.use(routes);

app.listen(PORT, function() {
    console.log("App now listening at localhost:" + PORT);
});