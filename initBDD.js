import mongoose from "mongoose";
import dotenv from 'dotenv';
import Company from "./models/CompaniesModel.js";
import Material from "./models/MaterialsModel.js";
import Furniture from "./models/FurnituresModel.js";
import connectDB from "./config/db.js";

dotenv.config();

const seedData = async () => {
    await connectDB();

    await Company.deleteMany({});
    await Material.deleteMany({});
    await Furniture.deleteMany({});

    const companies = [
        { name: 'BBois' },
        { name: 'MetalO' },
        { name: 'pPlastique' }
    ];

    const createdCompanies = await Company.insertMany(companies);

    const materials = [
        { name: 'frêne', type: 'Bois', company: createdCompanies[0]._id },
        { name: 'chêne', type: 'Bois', company: createdCompanies[0]._id },
        { name: 'noyer', type: 'Bois', company: createdCompanies[0]._id },
        { name: 'acier', type: 'Fer', company: createdCompanies[1]._id },
        { name: 'inox', type: 'Fer', company: createdCompanies[1]._id },
        { name: 'aluminium', type: 'Fer', company: createdCompanies[1]._id },
        { name: 'plastique', type: 'Plastique', company: createdCompanies[2]._id }
    ];

    const createdMaterials = await Material.insertMany(materials);

    const furnitures = [
        { name: 'Armoire en frêne', category: 'Armoire', materials: createdMaterials[0]._id },
        { name: 'Armoire en chêne', category: 'Armoire', materials: createdMaterials[1]._id },
        { name: 'Étagère en noyer et acier', category: 'Étagère', materials: [createdMaterials[2]._id, createdMaterials[3]._id] },
        { name: 'Étagère en aluminium et plastique', category: 'Étagère', materials: [createdMaterials[5]._id, createdMaterials[6]._id] }
    ]

    await Furniture.insertMany(furnitures);

    console.log('Data seeded succesfully');
    process.exit();
};

seedData();