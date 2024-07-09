export const renderHome = (req, res) => {
    res.render('home', { title: 'Accueil'});
}

export const renderIndex = (req, res) => {
    res.render('index', { title: 'Connexion' });
}