import jwt from "jsonwebtoken"
import { User } from "../models/user"
import bcrypt from 'bcrypt'

export const registerUser = async(req, res) => {
    
    const { name, email, password } = req.body
    const alreadyExist = await User.findOne({ email })
    if (alreadyExist) return res.status(404).json({
        success: false,
        message:"user already exists"
    })
    
    const hashedpassword = await bcrypt.hash(password, 10)
    
    const newUser = User.create({
                    name,
                    email,
                    hashedpassword
                })
    

    const token = jwt.sign({ _id: newUser._id }, process.env.JWT_SECRET)
    

    res.status(200).cookie("token", token, {
        httpOnly: true,
        maxAge: 15 * 60 * 1000
        
    }).json({
        success: true,
        message: 'user registered successfully'
        
    })
}

export const loginUser = async(req, res) => {
    const { email, password } = req.body
    const oldUser = await User.findOne({ email })
    if (!oldUser) return res.status(404).json({
        success: false,
        message: "User doesnt exist, Register first"
    })

    const isMatched = await bcrypt.compare(password, oldUser.password)
    if (!isMatched) return res.status(404).json({
        success: false,
        message: 'password not matched'

    })

    const token = jwt.sign({ _id: oldUser._id })

    res.status(201).cookie("token",token,{}).json({
        success: true,
        message: `welcome back ${oldUser.name}`
    }).redirect('/dashboard')


}

export const dashboardPage = (req, res) => {
    
}


export const landing = (req, res) => {
    
}