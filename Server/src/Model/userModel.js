const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true
    },
    email:{
        type:String,
        trim:true,
        required:true
    },
    phone:{
        type:String,
        trim:true,
        required:true
    },
    city:{
        type:String,
        trim:true,
        required:true
    }
},{timestamps:true});

module.exports = mongoose.model("user",userSchema)