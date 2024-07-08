import { Router } from "express";
import Company from '../models/Companies.js';

const router = Router();

router.post('/', async (req, res) => {
    const { name, type } = req.body;
    try {
        const newCompany = new Company({
            name,
            type
        });
        await newCompany.save();
        res.status(201).json(newCompany);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
})

router.get('/', async (req, res) => {
    try {
        const companies = await Company.find();
        res.status(200).json(companies);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default router;