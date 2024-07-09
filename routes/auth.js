import { Router } from "express";
import { renderRegisterPage, registerUser, loginUser } from "../controllers/authController.js";

const router = Router();

router.post('/login', loginUser);
router.get('/register', renderRegisterPage);
router.post('/register', registerUser);

export default router;