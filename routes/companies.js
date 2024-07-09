import { Router } from "express";
import { addCompany, findCompany } from "../controllers/companiesController.js";

const router = Router();

router.post('/', addCompany);
router.get('/', findCompany);

export default router;