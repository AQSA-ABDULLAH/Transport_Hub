const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const multer  = require('multer')

// Load environment variables from config.env
dotenv.config({ path: './config.env' });

// Routes
const userRoutes = require('./routes/user.js');
const driverRoutes = require('./routes/driverRoutes.js');
const transporterRoutes = require('./routes/transporter.js');
const carsRoutes = require('./routes/carsRoutes.js');
const trucksRoutes = require('./routes/trucksRoutes.js');
const tripsRoutes = require('./routes/tripsRoutes.js');
const parcelRoutes = require('./routes/parcelRoutes.js');
const sliderRoutes  = require("./routes/sliderRoutes.js");
const blogsRoutes = require("./routes/blogsRoutes.js");
const zoneRoutes = require("./routes/zoneRoutes.js");
const rentalBookingRoutes = require("./routes/bookRentalRoutes.js");
const shipmentRoutes = require("./routes/shipmentRoutes.js")
const otpRoutes=require("./routes/otpRoutes.js");
// // const useredRoutes=require("./routes/usered.js");
const pickupBoyRouter = require('./routes/pickupBoyRouter');
// Express
const app = express();
app.use(express.json());

// Cors
app.use(cors());

// Connection to MongoDB
require('./db/connection.js');

//Multer
app.use("/uploads/carRental", express.static("uploads"))
app.use("/uploads", express.static("uploads"))

// Load Routes
app.use('/api/user', userRoutes);
app.use('/api/driver', driverRoutes);
app.use('/api/transporter', transporterRoutes);
app.use('/api/cars', carsRoutes);
app.use('/api/trucks', trucksRoutes);
app.use('/api/trips', tripsRoutes);
app.use("/api/user", sliderRoutes);
app.use("/api/blogs",blogsRoutes);
app.use("/api/zone",zoneRoutes);
app.use("/api/rental-booking",rentalBookingRoutes);
app.use("/api/shipment",shipmentRoutes)
app.use(parcelRoutes);
app.use(otpRoutes);
app.use("/api",pickupBoyRouter);

// app.use(useredRoutes)

// app.use('/user', useredRoutes)

// For Server Port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running at port http://localhost:${PORT}`);
});

// For Testing
app.post('/createblog', (req, res) => {
  res.send('API is working');
});

app.get('/', (req, res) => {
  res.send('API is working');
});

