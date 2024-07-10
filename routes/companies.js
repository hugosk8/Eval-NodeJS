import { Router } from "express";
import { addCompany, findCompany, showCompanies } from "../controllers/companiesController.js";

const router = Router();

router.post('/', addCompany);
router.get('/', findCompany);
router.get('/nos-fournisseurs', showCompanies);

export default router;