import express  from 'express'
import { google, singin, singup } from "../controllers/auth.controller.js";
 const router = express.Router();

 router.post('/singup', singup);
 router.post('/singin', singin);
 router.post('/google', google);

 export default router;
//  singup