import { Router } from "express";
import { addMaterial, findMaterial } from "../controllers/materialsController.js";

const router = Router();

router.post('/', addMaterial);
router.get('/', findMaterial);

export default router;