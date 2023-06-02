const Project = require('../models/projectModel');
const factory = require('./handlerController');

exports.getProjects = factory.getAll(Project);
exports.createProject = factory.createOne(Project);
exports.updateProject = factory.updateOne(Project);
exports.deleteProject = factory.deleteOne(Project);
