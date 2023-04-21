const userModel= require("../Model/userModel")
const validator = require('validator');

const register = async function(req,res){
    try {
        const data = req.body;
       
        let newObj = {};
        
        if (data.email) {
            
            if (!validator.isEmail(data.email))
                return res.json({ status: false, msg: "Enter a valid email-id" })
        };
        

        if (data.name) {
         
            if (!validator.isAlpha(data.name, "en-US" , { ignore: ' ' })) {
                return res.json({ status: false, msg: "Invalid name !" });
            }
        };

        if(!data.phone || data.phone.length != 10){
            return res.json({ status: false, msg: "Invalid phone no. !" });

        }
        let checkDublicateNo = await userModel.findOne({ phone: data.phone });
        if (checkDublicateNo) {
            return res.json({ status: false, msg: "Dublicate Phone Number !" });
        }
        let checkEmail = await userModel.findOne({ email: data.email });
        if (checkEmail) {
            return res.json({ status: false, msg: "Email already exists !" })
        }

        newObj = {
            name: data.name,
            email: data.email,
            phone:data.phone,
            city:data.city
        }
        
        const createUser = await userModel.create(newObj);
        
        return res.json({ status: true, info:createUser });

    } catch (err) {
        
        return res.json({ status: false, msg: err.message });
    }

}

const getUser= async function(req,res){
    let getData= await userModel.find().select({name:1,email:1,phone:1,city:1});

    return res.json({ status: true, info:getData });
}

module.exports= {register,getUser}