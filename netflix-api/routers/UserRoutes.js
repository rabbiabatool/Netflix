const {removeFromLikedMovies,getLikedMovies,addToLikedMovies} = require("../Controllers/UserController");
const router=require("express").Router();

router.post("/add",addToLikedMovies);
router.get("/liked/:Email",getLikedMovies);
router.put("/delete",removeFromLikedMovies);

module.exports = router;