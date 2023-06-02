const mongoose = require('mongoose');

const recommendationSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: [true, 'Please provide the recommendation date'],
  },
  photo: {
    type: String,
    default: 'defaultUser.png',
  },
  recommenderName: {
    type: String,
    required: [true, 'Please provide the recommender name'],
  },
  recommenderPosition: {
    type: String,
    required: [true, 'Please provide the recommender position'],
  },
  recommendation: {
    type: String,
    required: [true, 'Please provide the recommendation'],
  },
});

const Recommendation = mongoose.model('Recommendation', recommendationSchema);
module.exports = Recommendation;
