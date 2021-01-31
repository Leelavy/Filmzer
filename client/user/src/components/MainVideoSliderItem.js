import React from 'react';

//when we get a full movie data - pass it entirely as one prop and delete multiple props
const MainVideoSliderItem = ({ movieTitle, genre, year, description, trailerVideoURL, imageURL }) => {

  return (
    <div className="slide slick-bg s-bg-1">
      <div className="container-fluid position-relative h-100">
        <div className="slider-inner h-100">
          <div className="row align-items-center  h-100">
            <div className="col-xl-6 col-lg-12 col-md-12">
              <a href="javascript:void(0);">
                <div className="channel-logo" data-animation-in="fadeInLeft" data-delay-in="0.5">
                  <img src="images/logo.png" className="c-logo" alt="streamit" />
                </div>
              </a>
              <h1 className="slider-text big-title title text-uppercase" data-animation-in="fadeInLeft" data-delay-in="0.6">{movieTitle}</h1>
              <div className="d-flex align-items-center" data-animation-in="fadeInUp" data-delay-in={1}>
                <span className="badge badge-secondary p-2">{year}</span>
                <span className="ml-3">{genre}</span>
              </div>
              <p data-animation-in="fadeInUp" data-delay-in="1.2">
                {description}
              </p>
              <div className="d-flex align-items-center r-mb-23" data-animation-in="fadeInUp" data-delay-in="1.2">
                <a href="show-details.html" className="btn btn-hover">More Details</a>
              </div>
            </div>
          </div>
          <div className="trailor-video">
            <a href="video/trailer.mp4" className="video-open playbtn">
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="80px" height="80px" viewBox="0 0 213.7 213.7" enableBackground="new 0 0 213.7 213.7" xmlSpace="preserve">
                <polygon className="triangle" fill="none" strokeWidth={7} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} points="73.5,62.5 148.5,105.8 73.5,149.1 " />
                <circle className="circle" fill="none" strokeWidth={7} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} cx="106.8" cy="106.8" r="103.3" />
              </svg>
              <span className="w-trailor">Watch Trailer</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainVideoSliderItem;