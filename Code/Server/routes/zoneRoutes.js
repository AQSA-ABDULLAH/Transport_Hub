const express = require('express');
const ZoneController = require('../controllers/zone/ZoneController')
const router = express.Router();
require("../db/connection");

router.post("/add_zone", ZoneController.createZone);
router.get("/get-zone", ZoneController.getZoneAll);

module.exports = router;