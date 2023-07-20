import express from "express";
import { loginUser } from "../controller/userController.js";

const router = express.Router();

router.route("/").post(loginUser);

export default router;
