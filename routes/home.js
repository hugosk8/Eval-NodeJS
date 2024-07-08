import { Router } from "express";

const router = Router();

router.get('/', (req, res) => {
    res.render('index', { title: 'Accueil' });
});

export default router;