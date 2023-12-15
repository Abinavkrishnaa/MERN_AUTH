import  Jwt  from "jsonwebtoken";
import { errorHandler } from "./error.js";
export const verifyToken = (req,res,next)=>{
    const token = req.cookies.access_token;
    if(!token) return next(errorHandler(401,'not authenticated'));
    Jwt.verify(token,process.env.JWT_SECRET,(err,user)=>{
        if(err) return next(errorHandler(403,'token is not valid'));
        req.user = user ;
        next();
    })
}