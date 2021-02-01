const Reviews = require('../models/reviews');
const serviceUser = require('../services/users');
const moviesService = require('../services/movies');


const createReview = async (body) => {

    const review = new Reviews({
        reviewTitle: body.reviewTitle,
        reviewContent: body.reviewContent,
        rating: body.rating,
        movies: body.movies,
        users: body.users
    });

    await serviceUser.updateReviewOfUser(body.users, review);
    await moviesService.updateReviewOfMovie(body.movies, review);

    if (body.lastUpdated)
        review.lastUpdated = body.lastUpdated;

    return await review.save();
};

const getReviews = async () => {
    return await Reviews.find({});
};


const countReviews = async () => {
    return await Reviews.countDocuments({});
};


const getReviewByMovieId = async (id) => {
    return await Reviews.find({'movies': [id]});
};


const getReviewByUserId = async (id) => {
    return await Reviews.find({'users': [id]});
};


const getReviewsByTitleRatingUsername = async (rating, title, username) => {
    return await Reviews.find({'rating': rating}).
        populate({path:'movies', match:{'title': {$regex: `.*${title}.*`}}}).
        populate({path:'users', match:{'username': username}}).exec();
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
    getReviewById,
    getReviewsByTitleRatingUsername,
    countReviews
}