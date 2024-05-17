import express from 'express'
import {
    dashboardPage,
    landing,
    loginUser,
    registerUser
} from '../controllers/user'

const router = express.Router()
 

router.get('/', landing) 

router.post('/register', registerUser)
router.post('/login', loginUser)
router.get('/dashboard', dashboardPage)




export default router
