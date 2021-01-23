const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Users = new Schema({
    username: {
        type: String,
        index: { unique: true }
    },
    password: String,
    name: String,
    watchlists: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Watchlists'
        }
    ],
    ratings: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Ratings'
        }
    ],
    reviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Reviews'
        }
    ]
});



module.exports = mongoose.model('Users', Users);