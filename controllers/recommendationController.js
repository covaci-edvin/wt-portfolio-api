const Recommendation = require('../models/recommendationModel');
const factory = require('./handlerController');
const multer = require('multer');
const AppError = require('../utils/appError');

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/img/recommendations');
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split('/')[1];
    cb(null, `recommendation-${Date.now()}.${ext}`);
  },
});

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb(new AppError('Not an image! Please upload only images', 400), false);
  }
};

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});

exports.uploadRecommenderPhoto = upload.single('photo');

exports.getRecommendations = factory.getAll(Recommendation);
exports.createRecommendations = factory.createOne(Recommendation);
exports.updateRecommendation = factory.updateOne(Recommendation);
exports.deleteRecommendation = factory.deleteOne(Recommendation);
