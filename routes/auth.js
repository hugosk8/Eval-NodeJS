import { Router } from "express";
import bcrypt from 'bcrypt';
import User from '../models/Users.js';

const router = Router();

router.post('/login', (req, res) => {
    const { email, password } = req.body;
    res.send(`Email: ${email}, Password: ${password}`);
})

router.get('/register', (req, res) => {
    res.render('register', { title: 'Création d\'un compte' });
});

router.post('/register', async (req, res) => {
    const { email, password } = req.body;
    try {
        const existignUser = await User.findOne({ email });
        if (existignUser) {
            return res.status(400).json({ message: 'Email déja utilisé' })
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({ email, password: hashedPassword });
        await newUser.save();

        res.status(201).json({ message: 'Utilisateur créé avec succès'});
    } catch (error) {
        res.status(500).json({ error: error.message });
        console.log(error.message);
    }
})

export default router;