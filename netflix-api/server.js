const express=require("express");
const cors= require("cors");
const app=express();
const userRoutes= require("./routers/UserRoutes");



app.use(cors());
app.use(express.json());
app.use("/api/user",userRoutes);

app.get("/", (req, res) => res.send("Express on Vercel"));

app.listen(5000,()=>{
    console.log("server up and running");
})
