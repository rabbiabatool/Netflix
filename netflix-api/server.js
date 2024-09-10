const express=require("express");
const cors= require("cors");
const app=express();
const userRoutes= require("./routers/UserRoutes");



app.use(cors());
app.use(express.json());
app.use("/api/user",userRoutes);

app.get('/',(req,res)=>{
    console.log("hello");
})

app.listen(5000,()=>{
    console.log("server up and running");
})

// let Users = mongoose.model("Users",{
//     Email:{
//         type:String,
//         unique:true,
//         required:true,

//     },

//     likedMovies:{
//         type:Array
//     }

// });


// app.post('/liked', async (req, res) => {
//     try {
//         const { Email, movie } = req.body;

//         const users = await Users.findOne({ Email });
//         if(users){

//             await Users.findOneAndUpdate(
//                 users._id,
//                 { $addToSet: {likedMovies:movie} },
//                 { new: true }
//             );

//             return res.status(201).json({ message: "User created successfully" });

//         }
//         else await Users.create({Email, likedMovies:[movie]});

//         // const user = new Users({
//         //     Email:Email,
//         //     likedMovies:[id]

//         // });

//         // await user.save();
//         // res.status(201).json({ message: "User created successfully" });



//     } catch (err) {
//         console.error('Server error:', err);
//         res.status(500).send({ mesg: 'Internal server error' });
//     }
// });

// app.get("/get_liked",async(req,res)=>{

//     const { Email } = req.query; 

//     let user= await Users.findOne({Email});
//     console.log("Email:",user);

//     if(user){
//         let likedMovie=user.likedMovies;
//         console.log(likedMovie);
      

//         return res.json({movies:likedMovie});


//     }
//     else{
//         res.status(404).send({"mesg":"Email not found"});
//     }


// })









// const express= require("express");
// const cors =require("cors");
// const mongoose=require("mongoose");
// const userRoutes= require("./routers/UserRoutes");

// const app=express();

// app.use(cors());

// app.use(express.json());

// mongoose.connect("mongodb://localhost:27017/netflix", {
//     // useNewUrlParser: true,
//     // useUnifiedTopology: true, 
// }).then(() => {
//     console.log("DB connected");
// }).catch((err) => {
//     console.error("Connection error", err);
// });


// app.listen(5000,console.log("server started"));