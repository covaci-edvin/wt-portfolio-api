const Skill = require('../models/skillModel');
const factory = require('./handlerController');
const multer = require('multer');
const sharp = require('sharp');
const AppError = require('../utils/appError');
const filterObj = require('../utils/filterBodyObj');
const catchAsync = require('../utils/catchAsync');

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/img/skills');
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split('/')[1];
    cb(null, `skill-${req.body.name}-${Date.now()}.${ext}`);
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

exports.uploadSkillLogo = upload.single('photo');
exports.getSkills = factory.getAll(Skill);
exports.createSkill = factory.createOne(Skill);
exports.updateSkill = factory.updateOne(Skill);
exports.deleteSkill = factory.deleteOne(Skill);
