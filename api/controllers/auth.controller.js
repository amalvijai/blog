
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
export const google = async (req, res, next) => {

    const {email, name, googlePhotoUrl}=req.body;
    try {
        const user = await User.findOne({email});
        if(user){
            const token =jwt.sign({id: user._id}, process.emv.JWT_SECRET);
            const {password, ...rest} = user._doc;
            res.status(200).cookie('access_token',token, {
                httpOnly: true
            }).json(rest);
        }else{
            const generatePassword = Math.random().toString(36).slice(-8 + Math.random().toString
            (36).slice).slice(-8)
            const hashedPassword = bcryptjs.hashSync(generatePassword, 10);
            const newUser = new User({
                username: name.toLowerCase().split('').join('') + Math.random()
                .toString(9).slice(-4),
                email,
                password: hashedPassword,
               profilePicture: googlePhotoUrl,
            });
            await newUser.save();
            const token = jwt.sign({id: newUser._id}, process.env.JWT_SECRET);
            const {password, ...rest } =newUser._doc;
            res
            .status(200)
            .cookie('access_token', token, {
                httpOnly: true,
            })
            .json(rest);

        }
        
    } catch (error) {
        next(error)
        
    }
}