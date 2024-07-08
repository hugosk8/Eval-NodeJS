import { Router } from "express";
import Material from '../models/Materials.js';

const router = Router();

router.post('/', async (req, res) => {
    const { name, type, company } = req.body;
    try {
        const newMaterial = new Material({
            name,
            type,
            company
        });
        await newMaterial.save();
        res.status(201).json(newMaterial);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
})

router.get('/', async (req, res) => {
    try {
        const materials = await Material.find();
        res.status(200).json(materials);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default router;