import express from "express";
import "dotenv/config";
import connection from "./db/conn.js";
import cors from "cors";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.js";
import messageRoutes from "./routes/message.js";
import userRoutes from "./routes/userRoute.js";

import {app,server} from "./socket/socket.js";

// const app = express();
const port = process.env.PORT || 5000;

app.use(cookieParser());
app.use(cors({
    origin:"http://localhost:3000",
    credentials:true
}));
app.use(express.urlencoded({extended:true}));
app.use(express.json());



app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes);

server.listen(port,()=>{
    connection();
    console.log(`Server is running at port ${port}`);
})