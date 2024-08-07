import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    tasks:[{ Title:{type:String,default:"new task"} , date:{type:String,default:new Date(Date.now()).toString()}}]
})

const User=mongoose.model("users",userSchema);
export default User;
