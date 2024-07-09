import mongoose from "mongoose";
import dotenv from 'dotenv';
import Company from "./models/Companies.js";
import Material from "./models/Materials.js";
import connectDB from "./config/db.js";

dotenv.config();

const seedData = async () => {
    await connectDB();
    
    await Company.deleteMany({});
    await Material.deleteMany({});

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

    await Material.insertMany(materials);

    console.log('Data seeded succesfully');
    process.exit();
};

seedData();