import express from "express";
import workoutController from "../controller/workoutController.js";

const router = express.Router();

router.post("/api/pass", workoutController.createNewPass);
router.get("/api/getAll", workoutController.getAllPass);
export default router;
