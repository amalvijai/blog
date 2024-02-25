import { errorHandler } from "../Utils/error.js";
import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs'
 import jwt from 'jsonwebtoken'

export const singup =async (req,res,next)=>{
    const { username, email, password}=req.body;

    if (!username || !email || !password || username === '' || email === '' || password === ''){

       next(errorHandler(400,'All fields are required'));
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
        next(error);
        
    }
  
}; 
export const singin = async ( req, res, next) => {
    const { email, password,} = req.body;
    if(!email || !password || email === '' || password === '' ){
    next(errorHandler(400,'All fields  are  required'));
    }
    try {
         const validUser = await User.findOne({email});
         if (!validUser){
           return  next(errorHandler(404,'User not found'));
         }
         const validPassword = bcryptjs.compareSync(password, validUser.password);
          if (!validPassword){
           return next(errorHandler(400,'Invalid password'));
          }

          const token = jwt.sign({id:validUser._id}, process.env.JWT_SECRET);
           
          const { password: pas, ...rest }=validUser._doc;
         

           res.status(200).cookie('access_token', token,{
            httpOnly: true,
        })
        .json(rest);
    } catch (error) {
         next(error);
    }
}