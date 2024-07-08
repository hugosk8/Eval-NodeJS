import { Router } from "express";
import Furniture from '../models/Furnitures.js';

const router = Router();

router.post('/', async (req, res) => {
    const { name, category, materials } = req.body;
    try {
        const newFurniture = new Furniture({
            name,
            category,
            materials
        });
        await newFurniture.save();
        res.status(201).json(newFurniture);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
})

router.get('/', async (req, res) => {
    try {
        const furnitures = await Furniture.find().populate('materials');
        res.status(200).json(furnitures);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default router;