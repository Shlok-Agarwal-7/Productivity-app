import express from 'express'
import { newProjectController,deleteProjectContoller } from '../Controller/ProjectContoller.js'
import { isAuthenticated } from '../Middleware/Auth.js'

const router=express.Router()

router.post('/new',isAuthenticated,newProjectController)

router.delete('/:id',isAuthenticated,deleteProjectContoller)



export default router