import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import userRouter from "./routes/user.js";
import tourRouter from "./routes/tour.js";
import dotenv from "dotenv";

// pass=jaqxmukIpqv4Sji4
// const port = 5000;

const app=express();

app.use(morgan("dev"));
app.use(express.json({limit:"30mb",extended:true}));
app.use(express.urlencoded({limit:"30mb",extended:true}));
app.use(cors());

app.use("/users",userRouter); //http://localhost:5000/users/signup
app.use("/tour", tourRouter);
app.get("/",(req,res)=>{
    res.send("Welcome to Safar API");
});

const port = process.env.PORT || 5000;

const MONGODB_URL = "mongodb+srv://harshkumarsingh:jaqxmukIpqv4Sji4@cluster0.mnuopve.mongodb.net/touropedia?retryWrites=true&w=majority"

mongoose.connect(MONGODB_URL).then(()=>{
    app.listen(port,()=>console.log(`Server is running on port ${port}`));
}).catch((error)=>console.log(`${error} did not connect`));