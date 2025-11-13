// app.js — démarre le serveur Next standalone via Passenger
const path = require("path");

process.env.PORT = process.env.PORT || "3000";
process.env.NODE_ENV = process.env.NODE_ENV || "production";

// Next a généré le serveur standalone dans .next/standalone/server.js
require(path.join(__dirname, ".next", "standalone", "server.js"));
