import express from 'express'
import { newProjectController,deleteProjectContoller,getProjectsContoller } from '../Controller/ProjectContoller.js'
import { isAuthenticated } from '../Middleware/Auth.js'


const router=express.Router()

router.post('/new',isAuthenticated,newProjectController)

router.delete('/:id',isAuthenticated,deleteProjectContoller)

router.get('/allprojects',isAuthenticated,getProjectsContoller)


export default router