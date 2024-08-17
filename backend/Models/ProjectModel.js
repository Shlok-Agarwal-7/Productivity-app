import mongoose from "mongoose";

const projectSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true,
    },
    description:{
        type:String,
        trim:true,
        default:"Add Details about project"
    },
    dueDate:{
        type:Date,
        required:true,
        default : Date.now
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }

})

projectSchema.index({ user: 1, name: 1 }, { unique: true });

const Project=mongoose.model("Project",projectSchema);
export default Project;