import Company from '../models/Companies.js';

export const addCompany = async (req, res) => {
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
}

export const findCompany = async (req, res) => {
    try {
        const companies = await Company.find();
        res.status(200).json(companies);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}