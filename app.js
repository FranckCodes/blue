// app.js — démarre le serveur Next standalone (plus léger)
const path = require('path');

// Passenger définit généralement PORT ; par sécurité on met un défaut
process.env.PORT = process.env.PORT || '3000';
// Assure le mode prod si tu lances "start"
process.env.NODE_ENV = process.env.NODE_ENV || 'production';

// Lance le serveur pré-compilé de Next (standalone)
require(path.join(__dirname, '.next', 'standalone', 'server.js'));
