import express from 'express'
import {
    
    loginUser,
    registerUser
} from '../controllers/user.js'

const router = express.Router()
 


// router.get('/', landing) 

router.post('/register', registerUser)   //tested
router.post('/login', loginUser)   //tested
// router.get('/dashboard', dashboardPage)




export default router
