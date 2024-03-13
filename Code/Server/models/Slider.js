const mongoose = require("mongoose");

//Defining Schema
const sliderSchema = new mongoose.Schema({
    image: {type: String, trim: true},
    heading: {type: String, trim: true},
    content: {type: String,  trim: true},
},{ 
    timestamps: true 
 });

 //CREATING MODAL
 const SliderModal = mongoose.model('Slider', sliderSchema);
module.exports = SliderModal;