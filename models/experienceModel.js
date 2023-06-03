const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema({
  startedAt: {
    type: Date,
    required: [true, 'Please provide the start date'],
  },
  endedAt: Date,
  position: {
    type: String,
    required: [true, 'Please provide a job position title'],
  },
  companyName: {
    type: String,
    required: [true, 'Please provide the company name'],
  },
  companyLink: {
    type: String,
    required: [true, 'Please provide the company link'],
  },
  photo: {
    type: String,
    default: 'defaultCompany.png',
  },
});

const Experience = mongoose.model('Experience', experienceSchema);
module.exports = Experience;
