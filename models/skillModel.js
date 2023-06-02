const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please enter skill name!'],
    unique: true,
  },
  knowledge: {
    type: Number,
    required: [true, 'Please enter skill knowledge from 1 to 100!'],
    min: 1,
    max: 100,
  },
  photo: {
    type: String,
    default: 'default.png',
  },
});

const Skill = mongoose.model('Skill', skillSchema);
module.exports = Skill;
