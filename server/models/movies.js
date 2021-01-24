const mongoose = require('mongoose');
const cachegoose = require('cachegoose');
cachegoose(mongoose);
const Schema = mongoose.Schema;


const Movies = new Schema({
    imdb_title_id: {type:String, unique: true},
    title: {type:String, unique: true},
    year: Number,
    genre: String,
    description: String,
    image_url: String,
    trailer_video: String
});

module.exports = mongoose.model('Movies', Movies);