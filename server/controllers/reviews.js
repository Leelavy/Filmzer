const reviewsService = require('../services/reviews');

const createReview = async (req, res) => {
    const newReview = await reviewsService.createReview(req.body);
    res.json(newReview);
};


const getReviews = async (req, res) => {
    const review = await reviewsService.getReviews();
    res.json(review);
};


const countReviews = async (req, res) => {
    const review = await reviewsService.countReviews();
    res.json(review);
};


const getReviewById = async (req, res) => {

    const review = await reviewsService.getReviewById(req.params.id);

    if (!review){
        return res.status(404).json({errors: ['review_id not found']});
    }

    res.json(review);
};


const getReviewsByTitleRatingUsername = async (req, res) => {

    const review = await reviewsService.getReviewsByTitleRatingUsername(
        req.params.reviewRating, req.params.movieTitle, req.params.userName
    );

    var reviewResult = [];
    review.forEach(function (arrayItem) {
        if(arrayItem.movies.length !== 0)
            reviewResult.push(arrayItem);
    });

    if (!reviewRating){
        return res.status(404).json({errors: ['reviews not found']});
    }

    res.json(reviewRating);
};


const updateReview = async (id, body) => {
    const review = await getReviewById(id);
    if (!review)
        return null;

    review.reviewTitle = body.reviewTitle;
    review.reviewContent = body.reviewContent;
    review.rating = body.rating;

    await review.save();
    return review;
};


const deleteReview = async (req, res) => {
    const review = await reviewsService.deleteReview(req.params.id);
    if (!review) {
        return res.status(404).json({ errors: ['review not found'] });
    }

    res.send();
};


module.exports = {
    createReview,
    getReviews,
    getReviewById,
    updateReview,
    deleteReview,
    getReviewsByTitleRatingUsername,
    countReviews
}
