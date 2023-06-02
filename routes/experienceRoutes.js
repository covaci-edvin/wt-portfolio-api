const express = require('express');
const experienceController = require('../controllers/experienceController');
const authController = require('../controllers/authController');

const router = express.Router();

router.get('/', experienceController.getExperiences);
router.use(authController.protect);
router.post(
  '/',
  experienceController.uploadExperienceLogo,
  experienceController.createExperience
);
router.patch(
  '/:id',
  experienceController.uploadExperienceLogo,
  experienceController.updateExperience
);
router.delete('/:id', experienceController.deleteExperience);

module.exports = router;
