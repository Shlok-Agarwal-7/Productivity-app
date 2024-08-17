import express from 'express'
const router=express.Router()
import {addTaskController,deleteTaskContoller,updateTaskContoller,allTasksController } from '../Controller/TaskContoller.js';
import { isAuthenticated } from '../Middleware/Auth.js';


//Register
router.post('/new',isAuthenticated,addTaskController)

router.route("/:id").delete(isAuthenticated,deleteTaskContoller).put(isAuthenticated,updateTaskContoller)

router.get("/alltasks",isAuthenticated,allTasksController)


export default router