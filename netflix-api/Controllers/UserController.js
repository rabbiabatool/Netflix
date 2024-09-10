const User = require("../Models/UserModel");

// module.exports.addToLikedMovies=async(req,res,next)=>{
//     try{
//         const {email,data} = req.body;
//         const user=await User.findOne({email});
//         if(user){
//             const {likedMovies} = user;
//             const movieAlreadyLiked= likedMovies.find(({id})=>(id===data.id));

//             if(!movieAlreadyLiked){
//                 await User.findByIdAndUpdate(
//                     user._id,{
//                         likedMovies:[...user.likedMovies,data],
//                     },
//                     {new:true}
//                 );
//             }else return res.json({mesg: "Movie Already added to liked list"}); 
//         }else await User.create({email, likedMovies:[data]});
//         return res.json({msg:"Movie Added Successfully"});

//     }catch(error){
//         return res.json({msg:"error adding movie"});
//     }
// };

// module.exports.getLikedMovies = async(req,res)=>{
//     try{
//         const {email} = req.params;
//         const user=await User.findOne({email});
//         if(user){
//             res.json({msg:"success",movies:user.likedMovies});
//         }else return res.json({msg:"User with given email not find"});
        

//     }catch(err){
//         console.error(err);

//     }
   
    
    
    
// }

module.exports.addToLikedMovies=async (req, res) => {
        try {
            const { Email, movie } = req.body;
            const email=Email;
          
            console.log("email",Email);
    
            const users = await User.findOne({ email });
            console.log("users",users);
            if(users){
    
                await User.findOneAndUpdate(
                    users._id,
                    { $addToSet: {likedMovies:movie} },
                    { new: true }
                );
    
                return res.status(201).json({ message: "User created successfully" });
    
            }
            else await User.create({email, likedMovies:[movie]});
    
    
    
        } catch (err) {
            console.error('Server error:', err);
            res.status(500).send({ mesg: 'Internal server error' });
        }
};
    
module.exports.getLikedMovies=async(req,res)=>{
    
        const { Email } = req.params; 
        const email=Email;
    
        let user= await User.findOne({email});
        console.log("Email:",user);
    
        if(user){
            let likedMovie=user.likedMovies;
            console.log(likedMovie);
          
    
            return res.json({movies:likedMovie});
    
    
        }
        else{
            res.status(404).send({"mesg":"Email not found"});
        }
    
    
}

module.exports.removeFromLikedMovies = async(req,res)=>{
    try{

        const {Email,movieId} = req.body;
        const email=Email;
        const user=await User.findOne({email});
        if(user){
            const {likedMovies} = user;

            const movieIndex= likedMovies.findIndex(({id})=>(id === movieId));

            if (movieIndex === -1) {
                return res.status(400).send({ msg: "Movie not found" });
            }

            likedMovies.splice(movieIndex, 1);


            await User.findByIdAndUpdate(
                user._id, {
                likedMovies,
            },
                { new: true }
            );

            console.log("Movie deleted successfully")
            return res.json({msg:"Movie deleted successfully"});
            
        }  
    }
    catch (err){
        console.log("Cannot delete");


    }
}