import { Router } from "express";
import requireAuth from '../middleware/auth.js'

const router = Router();

router.get('/', (req, res) => {
    res.render('index', { title: 'Connexion' });
});

router.get('/home', requireAuth, (req, res) => {
    res.render('home', { title: 'Accueil'});
})

export default router;