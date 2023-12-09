const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const multer = require('multer')

// Load environment variables from config.env
dotenv.config({ path: './config.env' });

// Routes
const userRoutes = require('./routes/user.js');
const carsRoutes = require('./routes/carsRoutes.js');


// Express
const app = express();
app.use(express.json());

// Cors
app.use(cors());

// Multer path
const path = require('path')
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "/Images")
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname))
  }
})

const upload = multer ({
  storage : storage
})

app.post('/upload', (req,res) =>{
  console.log(req.file)
})

// Connection to MongoDB
require('./db/connection.js');

// Load Routes
app.use('/api/user', userRoutes);
app.use('/api/car', carsRoutes);

// For Server Port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});

// For Testing
// app.post('/addCars', (req, res) => {
//   res.send('API is working');
// });

// app.get('/', (req, res) => {
//   res.send('API is working');
// });

