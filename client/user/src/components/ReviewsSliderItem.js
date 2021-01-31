import React from 'react';

//when we get a full review data - pass it entirely as one prop and delete multiple props
const ReviewsSliderItem = ({ movieTitle, userName, reviewTitle, rating }) => {

  return (
    <li className="slide-item">
      <a href="movie-details.html">
        <div className="block-images position-relative">
          <div className="img-box">
            <img src="images/favorite/01.jpg" className="img-fluid" alt="" />
          </div>
          <div className="block-description">
            <h6>{movieTitle}</h6>
            <div className="movie-time d-flex align-items-center my-2">
              <div className="badge badge-secondary p-1 mr-2">{rating}</div>
              <div className="text-white">{reviewTitle}</div>
            </div>
            <div className="hover-buttons">
              <span className="btn btn-hover">
                Read More
              </span>
            </div>
          </div>
        </div>
      </a>
    </li>
  );
}

export default ReviewsSliderItem;