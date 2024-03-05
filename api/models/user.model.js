
import mongoose from 'mongoose';




const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required :true,
        unique :true,

    },
    email:{
        type: String,
        required :true,
        unique :true,

    },
    password:{
        type: String,
        required :true,
    },

    profilePicture:{
        type: String,
        default:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPKf7bdPa_aOiwGzeNO4YY4YwvAya-Hy8vOUtOFkfi1SD3HDDhjCz7Ux6OqLKNiD3SIxM&usqp=CAU",

    },
},{timestamps:true}
);
const User =mongoose.model('User',userSchema)
export default User;