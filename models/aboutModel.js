const mongoose = require('mongoose');

const aboutSchema = new mongoose.Schema({
  experience: {
    type: String,
    required: [true, 'Please tell your experience years!'],
  },

  aboutInfo: {
    type: String,
    required: [true, 'Please enter your about info!'],
  },
  email: {
    type: String,
    required: [true, 'Please enter your email address!'],
  },
  linkedin: {
    type: String,
    required: [true, 'Please enter your linkedin profile link!'],
  },
  github: {
    type: String,
    required: [true, 'Please enter your github profile link!'],
  },
});

const About = mongoose.models.About || mongoose.model('About', aboutSchema);
module.exports = About;
