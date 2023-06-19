const express = require('express');
const projectController = require('../controllers/projectController');
const authController = require('../controllers/authController');

const router = express.Router();

router.get('/', projectController.getProjects);
router.use(authController.protect);
router.post('/', projectController.createProject);
router.patch('/:id', projectController.updateProject);
router.delete('/:id', projectController.deleteProject);

module.exports = router;
