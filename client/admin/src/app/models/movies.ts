


export interface Movies{

    imdb_title_id: {type:String, unique: true},
    title: {type:String, unique: true},
    year: Number,
    genre: String,
    description: String,
    image_url: String,
    trailer_video: String,
}