const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables from config.env
dotenv.config({ path: './config.env' });

// Routes
const userRoutes = require('./routes/user.js');
const carsRoutes = require('./routes/carsRoutes.js');
const tripsRoutes = require('./routes/tripsRoutes.js');


// Express
const app = express();
app.use(express.json());

// Cors
app.use(cors());

// Connection to MongoDB
require('./db/connection.js');

// Load Routes
app.use('/api/user', userRoutes);
app.use('/api/cars', carsRoutes);
app.use('/api/trips', tripsRoutes);

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

