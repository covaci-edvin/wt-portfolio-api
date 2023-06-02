const express = require('express');
const recommendationController = require('../controllers/recommendationController');
const authController = require('../controllers/authController');

const router = express.Router();

router.get('/', recommendationController.getRecommendations);
router.use(authController.protect);
router.post(
  '/',
  recommendationController.uploadRecommenderPhoto,
  recommendationController.createRecommendations
);
router.patch(
  '/:id',
  recommendationController.uploadRecommenderPhoto,
  recommendationController.updateRecommendation
);
router.delete('/:id', recommendationController.deleteRecommendation);

module.exports = router;
