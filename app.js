// app.js — démarre le serveur Next standalone
const path = require('path');

// Valeurs par défaut (Passenger peut aussi fixer PORT)
process.env.PORT = process.env.PORT || '3000';
process.env.NODE_ENV = process.env.NODE_ENV || 'production';

// On lance le serveur compilé par Next dans .next/standalone
require(path.join(__dirname, '.next', 'standalone', 'server.js'));
