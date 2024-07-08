import { Router } from "express";

const router = Router();

router.post('/login', (req, res) => {
    const {email, password} = req.body;
    res.send(`Email: ${email}, Password: ${password}`);
})

export default router;