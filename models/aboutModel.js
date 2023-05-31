const mongoose = require('mongoose');

const aboutSchema = new mongoose.Schema({
  experience: {
    type: Number,
    required: [true, 'Please tell your name!'],
  },
  aboutInfo: {
    type: String,
    required: [true, 'Please enter you about info!'],
  },
});

const About = mongoose.model('About', aboutSchema);
module.exports = About;
