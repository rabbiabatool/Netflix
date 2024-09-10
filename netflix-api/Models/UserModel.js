const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost:27017/netflix")
.then(()=>{
    console.log("mongodb connected");
    
});


const userScheme = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true,
        max:50,
    },
    likedMovies:Array,
});

module.exports= mongoose.model("User",userScheme);