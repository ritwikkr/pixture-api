import express from "express";
import { postMovie } from "../controller/movieController.js";

const router = express.Router();

router.route("/").post(postMovie);

export default router;
