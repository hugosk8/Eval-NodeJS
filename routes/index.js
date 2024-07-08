import { Router } from "express";
import homeRoutes from './home.js';
import authRoutes from './auth.js';

const router = Router();

router.use('/', homeRoutes);
router.use('/', authRoutes);

export default router;