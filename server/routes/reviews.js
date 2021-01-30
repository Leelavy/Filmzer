const express = require('express');
const reviewController = require('../controllers/reviews');
var router = express.Router();


//http://localhost:8080/reviews/getReviewByParams/:reviewRating/:movieTitle/:userName
router.route('/getReviewByParams/:reviewRating/:movieTitle/:userName')
    .get(reviewController.getReviewsByTitleRatingUsername)


//http://localhost:8080/reviews
router.route('/')
    .post(reviewController.createReview)
    .get(reviewController.getReviews);


//http://localhost:8080/reviews/:id
router.route('/:id')
    .get(reviewController.getReviewById)
    .delete(reviewController.deleteReview)
    .patch(reviewController.updateReview);


module.exports = router;