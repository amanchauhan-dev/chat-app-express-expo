import express from "express";
import { registerUser, loginUser, getAll } from "../controllers/auth.controller";

const router = express.Router();

// ✅ Correctly pass registerUser as a callback
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/users", getAll);

export default router;
