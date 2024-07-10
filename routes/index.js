import { Router } from "express";
import homeRoutes from './home.js';
import authRoutes from './auth.js';
import furnituresRoutes from './furnitures.js';
import materialsRoutes from './materials.js';
import companiesRoutes from './companies.js';

const router = Router();

router.use('/', homeRoutes);
router.use('/', authRoutes);
router.use('/', furnituresRoutes);
router.use('/', materialsRoutes);
router.use('/', companiesRoutes);

export default router;