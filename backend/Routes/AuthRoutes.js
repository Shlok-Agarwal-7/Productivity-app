import express from 'express'
const router=express.Router()
import { registerController,loginController} from '../Controller/AuthController.js';


//Register
router.post('/register',registerController)

router.post('/login',loginController)

export default router