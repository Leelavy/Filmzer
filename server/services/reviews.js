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


const getReviewsMoviesUsers = async (movieTitle=null, rating=NaN, userName=null) => {

    var match = {};

    if(movieTitle!==null){
        match["movie.title"] = new RegExp(movieTitle)
    }

    if(isNaN(rating)!==true){
        match["rating"] = {$eq:parseInt(rating)};
    }

    if(userName!==null){
        match["user.username"] = new RegExp(userName)
    }

    return await Reviews.aggregate([
        {
            $lookup:
                {
                    from: "movies",
                    localField: "movies",
                    foreignField: "_id",
                    as: "movie"
                }
        },
        {
            $unwind:"$movie"
        },
        {
            $lookup:
                {
                    from: "users",
                    localField: "users",
                    foreignField: "_id",
                    as: "user"
                }
        },
        {
            $unwind:"$user"
        },
        {
            $project:
                {
                    "_id": 0,
                    "reviewTitle": 1,
                    "reviewContent": 2,
                    "rating": 3,
                    "movie.title": 4,
                    "movie.year": 5,
                    "movie.genre": 6,
                    "movie.description": 7,
                    "movie.image_url": 8,
                    "movie.trailer_video": 9,
                    "user.username": 10,
                    "user.firstName": 11,
                    "user.lastName": 12
                }
        },
        {
            $match:match
        }
    ])};


const getReviewsByIds = async (review_ids) => {
    return await Reviews.find({'_id':{ $in:review_ids }});
};


const topReviewsByDate = async (topNumber) => {
    if (!topNumber){
        return await Reviews.find({}).sort({'lastUpdated': -1}).exec();
    }
    else {
        return await Reviews.find({}).sort({'lastUpdated': -1}).limit(parseInt(topNumber)).exec();
    }
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
    countReviews,
    topReviewsByDate,
    getReviewsByIds,
    getReviewsMoviesUsers
}