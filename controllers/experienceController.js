const Experience = require('../models/experienceModel');
const factory = require('./handlerController');
const multer = require('multer');
const AppError = require('../utils/appError');

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/img/experiences');
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split('/')[1];
    cb(null, `experience-${req.body.companyName}-${Date.now()}.${ext}`);
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

exports.uploadExperienceLogo = upload.single('photo');

exports.getExperiences = factory.getAll(Experience);
exports.createExperience = factory.createOne(Experience);
exports.updateExperience = factory.updateOne(Experience);
exports.deleteExperience = factory.deleteOne(Experience);
