import mongoose from "mongoose";

const projectSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true,
    },
    description:{
        type:String,
        required:true,
    },
    dueDate:{
        type:Date,
        required:true,
        default : Date.now
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    createdAt:{
        type: Date,
        default:Date.now
    }

})

const Project=mongoose.model("Project",projectSchema);
export default Project;