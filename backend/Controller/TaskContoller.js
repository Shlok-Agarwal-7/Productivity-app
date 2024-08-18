import ErrorHandler from "../Middleware/Error.js";
import Task from "../Models/TaskModel.js";
import Project from "../Models/ProjectModel.js";

export const addTaskController = async (req, res, next) => {
  try {
    const { title, description, dueDate, projectName } = req.body;

    let project = null;
    if (projectName) {
      project = await Project.findOneAndUpdate(
        { title: projectName },
        { title: projectName },
        { new: true, upsert: true }
      );

      project.user = req.user._id;
    }

    const task = await new Task({
      title,
      description,
      dueDate,
      user: req.user.id,
      project: project ? project._id : null,
    }).save();

    res.status(201).json({
      success: true,
      message: "Task Created",
    });
  } catch (error) {
    next(error);
  }
};

export const deleteTaskContoller = async (req, res, next) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) return next(new ErrorHandler("task not found", 404));

    await task.deleteOne();

    res.status(200).json({
      message: "task Deleted!",
      success: true,
    });
  } catch (error) {
    next(error);
  }
};

export const updateTaskContoller = async (req, res, next) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) return next(new ErrorHandler("task not found", 404));

    task.status = !task.status;
    await task.save();

    res.status(200).json({
      message: "Status Updated!",
      success: true,
    });
  } catch (error) {
    next(error);
  }
};

export const allTasksController = async (req, res, next) => {
  try {
    const userid = req.user._id;

    const tasks = await Task.find({ user: userid });

    res.status(200).json({
      success: true,
      tasks,
    });
  } catch (error) {
    next(error);
  }
};


