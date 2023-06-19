const express = require('express');
const aboutController = require('../controllers/aboutController');
const authController = require('../controllers/authController');

const router = express.Router();

router.get('/', aboutController.getAbout);
router.use(authController.protect);
router.patch('/:id', aboutController.updateAbout);

module.exports = router;
