const express = require('express');

const skillController = require('../controllers/skillController');
const authController = require('../controllers/authController');

const router = express.Router();

router.get('/', skillController.getSkills);
// router.get('/public/img/skills/:filename', skillController.getImage);
router.use(authController.protect);
router.post('/', skillController.uploadSkillLogo, skillController.createSkill);
router.patch(
  '/:id',
  skillController.uploadSkillLogo,
  skillController.updateSkill
);
router.delete('/:id', skillController.deleteSkill);

module.exports = router;
