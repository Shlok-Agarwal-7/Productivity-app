import mongoose from "mongoose";

const taskSchema=new mongoose.Schema({
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
    project:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Project"

    },
    createdAt:{
        type: Date,
        default:Date.now
    }

})

const Task=mongoose.model("Task",taskSchema);
export default Task;