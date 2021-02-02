const express = require('express');
const reviewController = require('../controllers/reviews');
var router = express.Router();


//http://localhost:8080/reviews/getReviewByParams/:reviewRating/:movieTitle/:userName
router.route('/getReviewByParams/:reviewRating/:movieTitle/:userName')
    .get(reviewController.getReviewsByTitleRatingUsername)


//http://localhost:8080/reviews/countReviews
router.route('/countReviews')
    .get(reviewController.countReviews);


//http://localhost:8080/reviews/topReviews
router.route('/topReviews')
    .get(reviewController.topReviewsByDate);


//http://localhost:8080/reviews/getReviewsByMovieId/:movieId
router.route('/getReviewsByMovieId/:movieId')
    .get(reviewController.getReviewsByMovieId)


//http://localhost:8080/reviews/topReviews/:topNumber
router.route('/topReviews/:topNumber')
    .get(reviewController.topReviewsByDate);


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