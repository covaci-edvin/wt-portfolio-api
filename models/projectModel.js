const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  year: {
    type: String,
    required: [true, 'Please enter the year!'],
  },
  name: {
    type: String,
    required: [true, 'Please enter the project name!'],
  },
  builtWith: {
    type: String,
    required: [true, 'Please enter the tech stack used for the project!'],
  },
  github: {
    type: String,
    required: [true, 'Please enter the project github link!'],
  },
});

const Project = mongoose.model('Project', projectSchema);
module.exports = Project;
