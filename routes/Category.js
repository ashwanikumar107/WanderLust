const express = require("express");
const router = express.Router();

router.get("/trending", (req, res) => res.render("Category/trending"));
router.get("/Rooms", (req, res) => res.render("Category/Rooms.ejs"));
router.get("/IconicCities", (req, res) => res.render("Category/iconiccities.ejs"));
router.get("/Mountains", (req, res) => res.render("Category/Mountains"));
router.get("/Castles", (req, res) => res.render("Category/Castles"));
router.get("/AmazingPools", (req, res) => res.render("Category/AmazingPools"));
router.get("/Camping", (req, res) => res.render("Category/Camping"));
router.get("/Farms", (req, res) => res.render("Category/Farms"));
router.get("/Arctic", (req, res) => res.render("Category/Arctic"));
router.get("/Dome", (req, res) => res.render("Category/Dome"));
router.get("/Boats", (req, res) => res.render("Category/Boats"));

module.exports = router;