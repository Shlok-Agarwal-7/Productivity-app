
import Project from '../Models/ProjectModel.js';
import ErrorHandler from '../Middleware/Error.js';

export const newProjectController =async(req,res,next)=>{
    try {
        const {title, description, dueDate} = req.body

        const project = await new Project({
            title,
            description,
            dueDate,
            user:req.user.id
          }).save();
        res.status(201).json({
            success:true,
            message:"Project added successfully"
        })
    } catch (error) {
      if (error.code === 11000) {
        return res.status(400).json({ success:false, message: 'Project name already exists for this user' });
    }
        next(error)    
    }
}

export const deleteProjectContoller=async(req,res,next)=>{
    try{
        const project = await Project.findById(req.params.id)

        if(!project) return next (new ErrorHandler("project not found",404));

        await project.deleteOne();

    res.status(200).json({
      message: "project Deleted!",
      success: true,
    });
  } catch (error) {
    next(error);
  }
    }

    export const getProjectsContoller=async(req,res,next)=>{
      try {
        const userid = req.user._id;
    
        const projects = await Project.find({ user: userid });
    
        res.status(200).json({
          success: true,
          projects,
        });
      } catch (error) {
        next(error);
      }
    };




