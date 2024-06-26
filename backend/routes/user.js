import express from 'express'
import { isAuthenticated } from '../middlewares/auth.js'

import {
    profile,
    loginUser,
    registerUser,
    logout
} from '../controllers/user.js'

const router = express.Router()
 


// router.get('/', landing) 

router.post('/register', registerUser)   //tested
router.post('/login', loginUser)   //tested
router.get('/profile', isAuthenticated, profile)
router.get('/logout', logout)
// router.get('/dashboard', dashboardPage)




export default router
