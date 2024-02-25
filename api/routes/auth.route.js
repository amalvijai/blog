import express  from 'express'
import { singin, singup } from "../controllers/auth.controller.js";
 const router = express.Router();

 router.post('/singup', singup);
 router.post('/singin', singin);

 export default router;
//  singup