const requireAuth = (req, res, next) => {
    if (!req.session.userId) {
        return res.redirect('/')
    }
    next();
}

export default requireAuth;