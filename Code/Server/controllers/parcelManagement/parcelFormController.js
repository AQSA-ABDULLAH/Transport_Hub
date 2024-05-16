const mongoose = require("mongoose");
const Parcelform = require("../../models/Parcelform");
const PickupBoy = require("../../models/Pickupboy");
const mailSender = require("../../utils/mailSender");
const createParcelForm = async (req, res) => {
  console.log(req.body);
  try {
    const {
      pickupLocation, 
      destinationLocation,
      weight,
      parcelType,
      phone,
      email,
      time,
      address,
      selectedCompany,
      rate
    } = req.body;

    // Validate required fields
    if (!pickupLocation || !destinationLocation|| !weight || !parcelType || !phone || !email || !time || !address || !selectedCompany || !rate) {
      return res.status(422).json({ error: "Please fill in all the fields properly." });
    }

    // Create a new ParcelForm instance
    const newParcelForm = new Parcelform({
      pickupLocation,
      destinationLocation,
      weight,
      parcelType,
      phone,
      email,
      time,
      address,
      selectedCompany,
      rate
    });

    // Save the new ParcelForm to the database
    await newParcelForm.save();
  
    return res.status(201).json({ message: "Parcel form submitted successfully." });

  } catch (err) {
    console.error(err);
    return res.status(500).json({ success: false, error: "Internal Server Error" });
  }
};
// async function sendVerificationEmail(email) {
//   try {
//     const mailResponse = await mailSender(
//       email,
//       "Order Request recieved",
//       `<h1>We have recieved your order.Someone will contact your shortly</h1>
//        <p>We will update you soon for your order. </p>`
//     );
//     console.log("Email sent successfully: ", mailResponse);
//   } catch (error) {
//     console.log("Error occurred while sending email: ", error);
//     throw error;
//   }
// }

const registerPickupBoy = async (req, res) => {
  try {
        // const {
        //   name,
        //   email,
        //   phoneNumber,
        //   vehicleType,
        //   cnicNumber,
        //   city,
        //   picture,
        //   drivingLicense,
        //   vehiclePapers,
        //   referenceNumber,
        // } = req.body;
    
        // const picture = req.files['picture'][0].filename;
        // const drivingLicense = req.files['drivingLicense'][0].filename;
        // const vehiclePapers = req.files['vehiclePapers'][0].filename;
    
        // const pickupBoy = new PickupBoy({
        //   name,
        //   email,
        //   phoneNumber,
        //   vehicleType,
        //   cnicNumber,
        //   city,
        //   picture,
        //   drivingLicense,
        //   vehiclePapers,
        //   referenceNumber,
        // });
    console.log(req.body);
        const Pickupboy=await PickupBoy(req.body).save();
        res.status(201).json({ message: 'Pickup Boy registered successfully!' });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
};

  

const getParcels = async (req, res) => {
  try {
    const parcels = await Parcelform.find();
    res.status(200).json(parcels);
  } catch (error) {
    console.error('Error fetching parcels', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
const deleteParcel = async (req, res) => {
  const { id } = req.params;

  try {
    await Parcelform.findByIdAndDelete(id);
    res.json({ message: 'Parcel deleted successfully' });
  } catch (error) {
    console.error('Error deleting parcel', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Add a new function to get all data
const getAllData = async (req,res) => {
  try {
    const allData = await PickupBoy.find(); // Assuming your model is named PickupBoy
    return allData;
  } catch (error) {
    console.error(error);
    throw error;
  }
};





module.exports = { createParcelForm, registerPickupBoy, getParcels, deleteParcel,  getAllData };

// const mongoose = require("mongoose");
// const Parcelform = require("../../models/Parcelform");
// const PickupBoy = require("../../models/Pickupboy");

// const createParcelForm = async (req, res) => {
//   console.log(req.body);
//   try {
//     const {
//       pickupLocation, 
//       weight,
//       parcelType,
//       phone,
//       email,
//       time,
//       address,
//       selectedCompany,
//       rate
//     } = req.body;

//     // Validate required fields
//     if (!pickupLocation || !weight || !parcelType || !phone || !email || !time || !address || !selectedCompany || !rate) {
//       return res.status(422).json({ error: "Please fill in all the fields properly." });
//     }

//     // Create a new ParcelForm instance
//     const newParcelForm = new Parcelform({
//       pickupLocation,
//       weight,
//       parcelType,
//       phone,
//       email,
//       time,
//       address,
//       selectedCompany,
//       rate
//     });

//     // Save the new ParcelForm to the database
//     await newParcelForm.save();
//     return res.status(201).json({ message: "Parcel form submitted successfully." });
//   } catch (err) {
//     console.error(err);
//     return res.status(500).json({ success: false, error: "Internal Server Error" });
//   }
// };

// const registerPickupBoy = async (req, res) => {
//   try {
//     const {
//       name,
//       email,
//       phoneNumber,
//       vehicleType,
//       cnicNumber,
//       city,
//       referenceNumber,
//     } = req.body;

//     const picture = req.files['picture'][0].filename;
//     const drivingLicense = req.files['drivingLicense'][0].filename;
//     const vehiclePapers = req.files['vehiclePapers'][0].filename;

//     const pickupBoy = new PickupBoy({
//       name,
//       email,
//       phoneNumber,
//       vehicleType,
//       cnicNumber,
//       city,
//       picture,
//       drivingLicense,
//       vehiclePapers,
//       referenceNumber,
//     });

//     await pickupBoy.save();
//     res.status(201).json({ message: 'Pickup Boy registered successfully!' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// };

  

// const getParcels = async (req, res) => {
//   try {
//     const parcels = await Parcelform.find();
//     res.status(200).json(parcels);
//   } catch (error) {
//     console.error('Error fetching parcels', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// };
// const deleteParcel = async (req, res) => {
//   const { id } = req.params;

//   try {
//     await Parcelform.findByIdAndDelete(id);
//     res.json({ message: 'Parcel deleted successfully' });
//   } catch (error) {
//     console.error('Error deleting parcel', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// };

// // Add a new function to get all data
// const getAllData = async () => {
//   try {
//     const allData = await PickupBoy.find(); // Assuming your model is named PickupBoy
//     return allData;
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// };





// module.exports = { createParcelForm, registerPickupBoy, getParcels, deleteParcel,  getAllData };
