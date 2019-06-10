var bodyParser  = require("body-parser"),
    mongoose    = require("mongoose"),
    express     = require("express"),
    app         = express();
    
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

/* Setup Mongoose */

//Connect
//mongoose.connect("mongodb://localhost/memories", { useNewUrlParser: true });

//Build Schema
var memoriesSchema = new mongoose.Schema({
    title: String,
    photo: String,
    date: Date,
    location: String,
    info: String
});

//Build Model
//var Memories = mongoose.model("Memories", memoriesSchema);


/* Restful Routes */

//Index
app.get("/memories", function(req,res){
    res.render("index.ejs");
});


//New
app.get("/memories/new", function(req,res){
    res.redirect("memoriesNew.ejs");
})

//Create
app.post("/memories", function(req,res){
    Memories.create("")
});

//Show
app.get("/memories/show", function(req,res){
    res.render("memoriesShow.ejs",{});
});

//Edit
app.get("memories/edit", function(req,res){
    res.render("memoriesEdit.ejs");
});

//Update
app.put("memories/:id", function(req,res){
    res.update();
});

//Delete
app.put("memories/:id", function(req,res){
    res.delete();
});

/* Routes for other pages */
app.get("/:id", function(req,res){
    console.log(req.params.id);
    res.render(req.params.id+".ejs");
});

//Catch all
app.get("*", function(req,res){
    res.send("<h1>Sorry the page you requested doesn't exist</h1>");
});


/* Connect to Server */  
app.listen(process.env.PORT || 5000, function(req,res){
    console.log("SERVER HAS NOW STARTED");
});