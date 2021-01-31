import React from 'react';

const MainVideoSlider = () => {

  return (
    < section id="home" className="iq-main-slider p-0" >
      <div id="home-slider" className="slider m-0 p-0">
        {/* Should render here a list of 10 movies components fitted to the slider instead of the 3 movies here */}
        {/* bushland - slider 1 */}
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
                  <h1 className="slider-text big-title title text-uppercase" data-animation-in="fadeInLeft" data-delay-in="0.6">bushland</h1>
                  <div className="d-flex align-items-center" data-animation-in="fadeInUp" data-delay-in={1}>
                    <span className="badge badge-secondary p-2">18+</span>
                    <span className="ml-3">2 Seasons</span>
                  </div>
                  <p data-animation-in="fadeInUp" data-delay-in="1.2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                  dummy text ever since the 1500s.
                       </p>
                  <div className="d-flex align-items-center r-mb-23" data-animation-in="fadeInUp" data-delay-in="1.2">
                    <a href="show-details.html" className="btn btn-hover"><i className="fa fa-play mr-2" aria-hidden="true" />Play Now</a>
                    <a href="show-details.html" className="btn btn-link">More details</a>
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
        {/* sail coaster - slider 2 */}
        <div className="slide slick-bg s-bg-2">
          <div className="container-fluid position-relative h-100">
            <div className="slider-inner h-100">
              <div className="row align-items-center  h-100">
                <div className="col-xl-6 col-lg-12 col-md-12">
                  <a href="javascript:void(0);">
                    <div className="channel-logo" data-animation-in="fadeInLeft">
                      <img src="images/logo.png" className="c-logo" alt="streamit" />
                    </div>
                  </a>
                  <h1 className="slider-text big-title title text-uppercase" data-animation-in="fadeInLeft">sail coaster</h1>
                  <div className="d-flex align-items-center" data-animation-in="fadeInUp" data-delay-in="0.5">
                    <span className="badge badge-secondary p-2">16+</span>
                    <span className="ml-3">2h 40m</span>
                  </div>
                  <p data-animation-in="fadeInUp" data-delay-in="0.7">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                  dummy text ever since the 1500s.
                       </p>
                  <div className="d-flex align-items-center r-mb-23" data-animation-in="fadeInUp" data-delay-in={1}>
                    <a href="movie-details.html" className="btn btn-hover"><i className="fa fa-play mr-2" aria-hidden="true" />Play Now</a>
                    <a href="movie-details.html" className="btn btn-link">More details</a>
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
        {/* the army - slider 3 */}
        <div className="slide slick-bg s-bg-3">
          <div className="container-fluid position-relative h-100">
            <div className="slider-inner h-100">
              <div className="row align-items-center  h-100">
                <div className="col-xl-6 col-lg-12 col-md-12">
                  <a href="javascript:void(0);">
                    <div className="channel-logo" data-animation-in="fadeInLeft">
                      <img src="images/logo.png" className="c-logo" alt="streamit" />
                    </div>
                  </a>
                  <h1 className="slider-text big-title title text-uppercase" data-animation-in="fadeInLeft">the army</h1>
                  <div className="d-flex align-items-center" data-animation-in="fadeInUp" data-delay-in="0.5">
                    <span className="badge badge-secondary p-2">20+</span>
                    <span className="ml-3">3h</span>
                  </div>
                  <p data-animation-in="fadeInUp" data-delay-in="0.7">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                  dummy text ever since the 1500s.
                       </p>
                  <div className="d-flex align-items-center r-mb-23" data-animation-in="fadeInUp" data-delay-in={1}>
                    <a href="movie-details.html" className="btn btn-hover"><i className="fa fa-play mr-2" aria-hidden="true" />Play Now</a>
                    <a href="movie-details.html" className="btn btn-link">More details</a>
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
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
        <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" width="44px" height="44px" id="circle" fill="none" stroke="currentColor">
          <circle r={20} cy={22} cx={22} id="test" />
        </symbol>
      </svg>
    </section >
  );
}

export default MainVideoSlider;