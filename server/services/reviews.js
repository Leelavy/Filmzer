const Reviews = require('../models/reviews');

const createReview = async (body) => {

    const review = new Reviews({
        reviewTitle: body.reviewTitle,
        reviewContent: body.reviewContent,
        rating: body.rating,
        movies: body.movies,
        users: body.users
    });

    if (body.lastUpdated)
        review.lastUpdated = body.lastUpdated;

    return await review.save();
};

const getReviews = async () => {
    return await Reviews.find({});
};

const getReviewByMovieId = async (id) => {
    return await Reviews.find({'movies': [id]});
};


const getReviewByUserId = async (id) => {
    return await Reviews.find({'users': [id]});
};


const getReviewById = async (id) => {
    return await Reviews.findById(id);
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


const deleteReview = async (id) => {
    const review = await getReviewById(id);
    if (!review)
        return null;

    await review.remove();
    return review;
};



module.exports = {
    createReview,
    getReviews,
    updateReview,
    deleteReview,
    getReviewByMovieId,
    getReviewByUserId,
    getReviewById
}