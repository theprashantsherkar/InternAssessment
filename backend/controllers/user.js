import jwt from "jsonwebtoken"
import { User } from "../models/user.js"
// import mongoose from "mongoose"
import bcrypt from 'bcrypt'

export const registerUser = async(req, res) => {
    
    const { name, email, password } = req.body
    const alreadyExist = await User.findOne({ email })
    if (alreadyExist) return res.status(404).json({
        success: false,
        message:"user already exists"
    })
    
    const hashedpassword = await bcrypt.hash(password, 10)
    
    const newUser =
         await User.create({
            name,
            email,
            password:hashedpassword
         })
    
    

    const token = jwt.sign({ _id: newUser._id }, process.env.JWT_SECRET)

    res.status(200).cookie("token", token, {
        httpOnly: true,
        maxAge: new Date(Date.now() + 1000 * 60 * 15)
        
    }).json({
        success: true,
        message: `Welcome ${newUser.name}`,
        notifcation: 'user registered successfully',
        
    })
    // if (res.success == "true") return res.redirect('/profile') 
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

    const token = jwt.sign({ _id: oldUser._id }, process.env.JWT_SECRET)

    res.status(201).cookie("token", token, {
        httpOnly: true,
        maxAge: new Date(Date.now() + 1000 * 60 * 15)
        
        
    }).json({
        success: true,
        message: `welcome back ${oldUser.name}`
    })
    // if (res.success == "true") return res.redirect('/profile') 


}

export const profile = (req, res, next) => {
    res.json({
        success: true,
        message: `welcome back`,
        user:req.user.name
        
       
    })
}

export const logout = (req, res, next) => {
    res.status(200).cookie("token", "", {
        httpOnly: true,
        maxAge:Date.now()
    }).json({
        success: true,
        message:"successfully logged out."
    })
}

// export const dashboardPage = (req, res) => {
    
// }


// export const landing = (req, res) => {
    
// }