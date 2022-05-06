import express from "express";
import { getAllUser, signUp, login } from "../Controllers/user-controllers";

const router = express.Router();

router.get("/", getAllUser);
router.post("/signup", signUp);
router.post("/login", login);
export default router;
