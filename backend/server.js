import express from "express";
import path from "path";
import "dotenv/config";
import connection from "./db/conn.js";
import cors from "cors";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.js";
import messageRoutes from "./routes/message.js";
import userRoutes from "./routes/userRoute.js";

import {app,server} from "./socket/socket.js";
const allowedOrigins = ["http://localhost:3000", "https://your-render-app.onrender.com"];

const __dirname = path.resolve();

const port = process.env.PORT || 5000;

app.use(cookieParser());
app.use(cors({
    origin:allowedOrigins,
    credentials:true
}));
app.use(express.urlencoded({extended:true}));
app.use(express.json());



app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes);

app.use(express.static(path.join(__dirname,"/frontend/dist")));

app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"frontend","dist","index.html"));
})

server.listen(5000,()=>{
    connection();
    console.log(`Server is running at port ${port}`);
})