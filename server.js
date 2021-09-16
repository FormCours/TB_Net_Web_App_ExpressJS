const express = require('express');
const loadConfig = require('./config');
const router = require('./routes');

// Création du web server
const app = express();

// Chargement de la config
const {mode, port} = loadConfig();

// Configurer le moteur de vue
app.set('view engine', 'ejs');
app.set('views', './views');

// Ajout d'un middleware pour les fichiers static (css, image, ...)
app.use(express.static('content'));

// Ajout du middleware pour gérer les données d'un formulaire
// -> "application/x-www-form-urlencoded" (Pas utile pour une API)
app.use(express.urlencoded({extended: false})) 

// Chargement des routes
app.use(router);

// Demarrage du server
app.listen(port, () => {
    console.log(`Server on localhost:${port} [${mode}]`);
});