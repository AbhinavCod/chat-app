import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import generateToken from "../utils/generateToken.js";
// import toast from "react-hot-toast";
export const signupUser = async (req,res)=>{
    try {
        const {fullName,username,password,confirmPassword,gender} = req.body;
        if(password !== confirmPassword){
            // toast.error("Passwords do not match 😒")
            return res.status(400).json({message:"Passwords do not match"});
        };

        const user = await User.findOne({username});

        if(user){
            return res.status(400).json({message:"User already exists"});
        }

        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password,salt);

        const boyProfilepic = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const girlProfilepic = `https://avatar.iran.liara.run/public/girl?username=${username}`

        const newUser = new User({
            fullName,
            username,
            password:hashPassword,
            gender,
            profilePic: gender === "male" ? boyProfilepic : girlProfilepic
        });

        if(newUser){
            await generateToken(newUser._id,res);
            await newUser.save();
        }else{
            return res.status(400).json({error:"Invalid user data"});
        }


        return res.status(200).json({
            _id:newUser._id,
            fullName:newUser.fullName,
            username:newUser.username,
            profilePic:newUser.profilePic
        });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({error:"Intenal error"});
    }
}


export const loginUser = async (req,res)=>{
    try {
        const {username,password} = req.body;

        const user = await User.findOne({username});
        const isMatch = await bcrypt.compare(password,user?.password || "");

        if(!user || !isMatch){
            return res.status(400).json({message:"Invalid Credentials"});
        }

        await generateToken(user._id,res);

        return res.status(200).json({
            _id:user._id,
            fullName:user.fullName,
            username:user.username,
            profilePic:user.profilePic
        });

    } catch (error) {
        console.log(error);
        return res.status(400).json({error:"Login Failed"});
    }
}

export const logoutUser = async (req,res)=>{
    try {
        res.cookie("jwt","",{maxAge:0});
        return res.status(200).json({message:"Logged out successfully"});
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:"Intrernal Server error"});
    }
}

