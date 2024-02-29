import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

const protectRoute = async (req,res,next)=>{
    try {
        const token = res.cookies.jwt;
        if(!token){
            return res.status(401).json({error:"Unauthorized"});
        };

        const decoded = jwt.verify(token,process.env.JWT_SECRET_KEY);
         
        if(!decoded){
            return res.status(401).json({error:"Unauthorized"});
        }

        const user = await User.findById(decoded.userId).select("-password");

        if(!user){
            return res.status(400).json({message:"User not found"});
        }

        req.user = user;
        next();
    } catch (error) {
        console.log(error);
        return res.status(500).json({error:"Internal server error"});
    }
};

export default protectRoute;