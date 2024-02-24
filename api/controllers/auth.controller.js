import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs'

export const singup =async (req,res)=>{
    const { username, email, password}=req.body;

    if (!username || !email || !password || username === '' || email === '' || password === ''){
       return res. status(400).json ({message:'All fields are  required'});
    }

    const  volgPassword = bcryptjs.hashSync(password,10);


    const newUser = new User({
        username,
        email,
        password :volgPassword ,
    }); 
    try {
        await newUser.save();
        res.json ('singup sucessful')
    } catch (error) {
        res.status(500).json({message:error.message});
        
    }
  
};