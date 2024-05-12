const express = require('express');
const router = express.Router();
const { submitFormData } = require('../controllers/parcelManagement/pickupBoyController');

// POST /api/submitFormData - Submit form data
router.post('/submitFormData', submitFormData);

module.exports = router;
