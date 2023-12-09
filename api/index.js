import express  from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
dotenv.config({path:'../.env'});
const app = express();
app.use(express.json());

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.log(err);
  });

 
app.listen(process.env.PORT,()=>{
    console.log("App is runing on port 3000!")
})

app.use("/api/user",userRoutes);
app.use("/api/auth",authRoutes);