const mongoose = require('mongoose');
const DB = process.env.DATABASE;
// const createCollection = require('./createCollection');
if (!DB) {
  console.error('MongoDB URI is not defined. Set the DATABASE environment variable.');
  process.exit(1);
}

mongoose.connect(DB)
  .then( () => {
    console.log('Connection successful...');
    // await createCollection();
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB', error);
    process.exit(1);
  });


