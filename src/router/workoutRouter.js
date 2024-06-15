import express from "express";
import workoutController from "../controller/workoutController.js";

const router = express.Router();

router.post("/api/pass", workoutController.createNewPass);

export default router;
