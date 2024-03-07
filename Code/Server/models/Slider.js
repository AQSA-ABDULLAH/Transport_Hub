const mongoose = require("mongoose");

//Defining Schema
const sliderSchema = new mongoose.Schema({
    heading: {type: String, required: true, trim: true},
    content: {type: String, required: true, trim: true},
    image: {type: String, required: true, trim: true},
},{ 
    timestamps: true 
 });

 //CREATING MODAL
 const SliderModal = mongoose.model('Slider', sliderSchema);
module.exports = SliderModal;