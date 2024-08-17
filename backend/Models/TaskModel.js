import mongoose from "mongoose";

const taskSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true,
    },
    description:{
        type:String,
        default:"Add details about task"
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
    status: {
        type: Boolean,
        default: false
    },

})

const Task=mongoose.model("Task",taskSchema);
export default Task;