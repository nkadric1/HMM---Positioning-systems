import express from "express";
import { updateHMM, getProbabilities, getMatrix } from "../controllers/hmmController.js";

const router = express.Router();

router.post("/update", updateHMM);
router.get("/probabilities", getProbabilities);
router.get("/matrix", getMatrix);

export default router;
