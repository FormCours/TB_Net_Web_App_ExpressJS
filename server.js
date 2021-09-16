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

// Chargement des routes
app.use(router);

// Demarrage du server
app.listen(port, () => {
    console.log(`Server on localhost:${port} [${mode}]`);
});