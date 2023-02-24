const path = require("path");
const express = require("express");
const router = express.Router();
const { getCart } = require("../controllers/cart.controller");

// Creo la ruta
router.get("/cart", getCart);

// lo exporto para enlazarlo con el app.js
module.exports = router;
