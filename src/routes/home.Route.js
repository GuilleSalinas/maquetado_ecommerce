const path = require("path");
const express = require("express");
const router = express.Router();
const { getHome } = require("../controllers/index.controller");

// Creo la ruta
router.get("/", getHome);

// lo exporto para enlazarlo con el app.js
module.exports = router;
