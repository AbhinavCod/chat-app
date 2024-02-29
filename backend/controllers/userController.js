import User from "../models/userModel.js";

export const getUsersForSideBar = async (req,res)=>{
    try {
        const loggedInUserId = req.user._id;

        const allUsers = await User.find({_id: {$ne: loggedInUserId}}).select("-password");
        
        return res.status(200).json(allUsers);
    } catch (error) {
        console.log(error);
        return res.status(500).json({error:"Internal server error"});
    }
}