import { Router } from "express";
import { addFurniture, findFurniture, showFurnitures } from "../controllers/furnituresController.js";

const router = Router();

router.post('/', addFurniture);
router.get('/entreprises/nos-fournisseurs', findFurniture); 
router.get('/nos-meubles', showFurnitures); 

export default router;