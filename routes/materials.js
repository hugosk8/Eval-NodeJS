import { Router } from "express";
import { addMaterial, findMaterial, showMaterials } from "../controllers/materialsController.js";

const router = Router();

router.post('/', addMaterial);
router.get('/', findMaterial);
router.get('/nos-materiaux', showMaterials);

export default router;