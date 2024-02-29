import mongoose from "mongoose";

const connection = async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Connection Succefull");
    } catch (error) {
        console.log("Error connecting to database");
    }
};

export default connection;