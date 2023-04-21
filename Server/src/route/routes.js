const router = require ("express").Router();

const {register,getUser}= require("../controller/userController")

router.post("/register",register);

router.post("/getUser",getUser)


module.exports=router;