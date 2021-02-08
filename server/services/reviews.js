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

    return Reviews.aggregate([
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
                    "_id": 1,
                    "reviewTitle": 2,
                    "reviewContent": 3,
                    "rating": 4,
                    "movie._id":5,
                    "movie.title": 6,
                    "movie.year": 7,
                    "movie.genre": 8,
                    "movie.description": 9,
                    "movie.image_url": 10,
                    "movie.trailer_video": 11,
                    "user._id":12,
                    "user.username": 13,
                    "user.firstName": 14,
                    "user.lastName": 15
                }
        },
        {
            $match:match
        }
    ])};


const getReviewsByIds = async (review_ids) => {

    var query = [
        {
            $match: {
                "_id": {$in: review_ids}
            }
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
                    "_id": 1,
                    "reviewTitle": 2,
                    "reviewContent": 3,
                    "rating": 4,
                    "user._id":5,
                    "user.username": 6,
                    "user.firstName": 7,
                    "user.lastName": 8
                }
        }
    ]
    return await Reviews.aggregate(query);
    // return await Reviews.find({'_id':{ $in:review_ids }});
};


const topReviewsByDate = async (topNumber) => {

    var query = [
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
                    "_id": 1,
                    "reviewTitle": 2,
                    "reviewContent": 3,
                    "rating": 4,
                    "movie._id":5,
                    "movie.title": 6,
                    "movie.year": 7,
                    "movie.genre": 8,
                    "movie.description": 9,
                    "movie.image_url": 10,
                    "movie.trailer_video": 11,
                    "user._id":12,
                    "user.username": 13,
                    "user.firstName": 14,
                    "user.lastName": 15
                }
        },
        {
            $sort:{
                'lastUpdated': -1
            }
        },
        {
            $limit:parseInt(topNumber)
        }
    ]

    return await Reviews.aggregate([query])
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