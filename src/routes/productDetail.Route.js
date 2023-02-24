const path = require("path");
const express = require("express");
const router = express.Router();
const { getProductDetail } = require("../controllers/productDetail.controller");

// Creo la ruta
router.get("/:id", getProductDetail);

// lo exporto para enlazarlo con el app.js
module.exports = router;