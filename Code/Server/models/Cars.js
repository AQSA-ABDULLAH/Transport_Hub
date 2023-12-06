const carSchema = new mongoose.Schema({
  image: {
    type: String,
    trim: true
  },
  nameAndModel: {
    type: String,
    required: true,
    trim: true
  },
  type: {
    type: String,
    required: true,
    trim: true
  },
  seats: {
    type: Number,
    required: true,
    trim: true
  },
  transmission: {
    type: String,
    required: true,
    trim: true
  },
  bags: {
    type: Number,
    required: true,
    trim: true
  },
  mileLimit: {
    type: Number,
    required: true,
    trim: true
  },
  price: {
    type: Number,
    required: true,
    trim: true
  },
  color: {
    type: String,
    required: true,
    trim: true
  },
  fuelType: {
    type: String,
    required: true,
    trim: true
  },
  engineType: {
    type: String,
    required: true,
    trim: true
  },
  zone: {
    type: String,
    required: true,
    trim: true
  },
  discount: {
    type: Number,
    trim: true
  },
  startDate: {
    type: Date,
    trim: true
  },
  endDate: {
    type: Date,
    trim: true
  },
},
  {
    timestamps: true
  });
const Car = mongoose.model('Car', carSchema);
export default Car;