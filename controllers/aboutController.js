const About = require('../models/aboutModel');
const factory = require('./handlerController');

exports.getAbout = factory.getAll(About);
exports.updateAbout = factory.updateOne(About);
