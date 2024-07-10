import Material from '../models/MaterialsModel.js';
import Furniture from '../models/FurnituresModel.js';

export const addMaterial = async (req, res) => {
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
}

export const findMaterial = async (req, res) => {
    try {
        const materials = await Material.find();
        res.status(200).json(materials);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const showMaterials = async (req, res) => {
    try {
        const materials = await Material.find().populate('company');

        const materialsFurnitures = await Promise.all(materials.map(async (material) => {
            const furnitures = await Furniture.find({ materials: material._id });
            return {
                ...material.toObject(),
                furnitures: furnitures.map(furniture => furniture.name) 
            };
        }));

        res.render('materials', { title: 'Liste des materiaux', materials: materialsFurnitures })
    } catch (error) {
        console.error(error);
        res.status(500).send('Erreur du serveur');
    }
}