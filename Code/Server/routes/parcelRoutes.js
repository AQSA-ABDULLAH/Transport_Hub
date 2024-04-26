const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const parcelFormController = require('../controllers/parcelManagement/parcelFormController');
const Parcelform = require("../models/Parcelform");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, "./uploads/parcel")
  },
  filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname))
  }
});

const upload = multer({ storage: storage });

router.post('/create', parcelFormController.createParcelForm);



router.post('/register',parcelFormController.registerPickupBoy);
//  upload.fields([
//   { name: 'picture', maxCount: 1 },
//   { name: 'drivingLicense', maxCount: 1 },
//   { name: 'vehiclePapers', maxCount: 1 },
// ]), async (req, res) => {
//   try {
//     await parcelFormController.registerPickupBoy(req, res);
//     console.log(res)
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });
router.get('/getParcels', parcelFormController.getParcels);
router.delete('/parcelforms/:id', async (req, res) => {
  const parcelId = req.params.id;

  try {
    await Parcelform.findByIdAndDelete(parcelId);
    res.json({ message: 'Parcel form deleted successfully' });
  } catch (error) {
    console.error('Error deleting parcel form', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
router.delete('/deleteParcel/:id', parcelFormController.deleteParcel);

router.get('/getAllData', async (req, res) => {
  try {
    const allData = await parcelFormController.getAllData();
    res.status(200).json(allData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
