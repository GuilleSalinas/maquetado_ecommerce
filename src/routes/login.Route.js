const path = require("path");
const express = require("express");
const router = express.Router();
const { getLogin } = require("../controllers/login.controller");

// Creo la ruta
router.get("/login", getLogin);

// lo exporto para enlazarlo con el app.js
module.exports = router;
