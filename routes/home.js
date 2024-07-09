import { Router } from "express";
import requireAuth from '../middleware/auth.js'
import { renderHome, renderIndex } from "../controllers/homeController.js";

const router = Router();

router.get('/', renderIndex);
router.get('/home', requireAuth, renderHome);

export default router;