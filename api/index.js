import express  from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
dotenv.config();
const app = express();
app.use(express.json());
mongoose.connect('mongodb+srv://abinavkrishna2003:abinavkrishna2003@mern.m14w1eu.mongodb.net/mern-auth?retryWrites=true&w=majority').then(()=>{
    console.log("connected to database");
}).catch((err)=>{
    console.log(err);
});
 
app.listen(3000,()=>{
    console.log("App is runing on port 3000!")
})

app.use("/api/user",userRoutes);
app.use("/api/auth",authRoutes);