const express = require('express');
const reviewController = require('../controllers/reviews');
var router = express.Router();


router.route('/getReviewByParams/:reviewRating/:movieTitle/:userName')
    .get(reviewController.getReviewsByTitleRatingUsername)


router.route('/')
    .post(reviewController.createReview)
    .get(reviewController.getReviews);


router.route('/:id')
    .get(reviewController.getReviewById)
    .delete(reviewController.deleteReview)
    .patch(reviewController.updateReview);


module.exports = router;