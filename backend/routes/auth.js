import express from "express";
const router = express.Router();
import {signupUser,loginUser,logoutUser} from "../controllers/authController.js";

router.post("/signup",signupUser);
router.post("/login",loginUser);
router.post("/logout",logoutUser);



export default router;