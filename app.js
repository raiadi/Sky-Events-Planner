var 
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose"),
    express     = require("express"),
    app         = express();
    
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));


app.get("/", function(req,res){
    res.render("index.ejs");
});

app.get("/memories/show", function(req,res){
    res.render("memoriesShow.ejs",{});
});

app.get("/:id", function(req,res){
    console.log(req.params.id);
    res.render(req.params.id+".ejs");
});

app.get("*", function(req,res){
    res.send("<h1>Sorry the page you requested doesn't exist</h1>");
});

    
app.listen(process.env.PORT, process.env.IP, function(req,res){
    console.log("SERVER HAS NOW STARTED");
});