import { Router } from "express";
import { addFurniture, findFurniture } from "../controllers/furnituresController.js";

const router = Router();

router.post('/', addFurniture);
router.get('/', findFurniture);

export default router;