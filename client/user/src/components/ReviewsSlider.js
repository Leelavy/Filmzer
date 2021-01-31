import React from 'react';

const ReviewsSlider = () => {

  return (
    <div className="main-content">
      <section id="iq-favorites">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 overflow-hidden">
              <div className="iq-main-header d-flex align-items-center justify-content-between">
                <h4 className="main-title"><a href="movie-category.html">Latest Reviews</a></h4>
              </div>
              <div className="favorites-contens">
                <ul className="favorites-slider list-inline  row p-0 mb-0">
                  {/* Should render here a list of 10 review components fitted to the slider instead of the 5 movies here */}
                  {/* Champions slider item */}
                  <li className="slide-item">
                    <a href="movie-details.html">
                      <div className="block-images position-relative">
                        <div className="img-box">
                          <img src="images/favorite/01.jpg" className="img-fluid" alt="" />
                        </div>
                        <div className="block-description">
                          <h6>Champions</h6>
                          <div className="movie-time d-flex align-items-center my-2">
                            <div className="badge badge-secondary p-1 mr-2">13+</div>
                            <span className="text-white">2h 30m</span>
                          </div>
                          <div className="hover-buttons">
                            <span className="btn btn-hover">
                              <i className="fa fa-play mr-1" aria-hidden="true" />
                                    Play Now
                                  </span>
                          </div>
                        </div>
                        <div className="block-social-info">
                          <ul className="list-inline p-0 m-0 music-play-lists">
                            <li><span><i className="ri-volume-mute-fill" /></span></li>
                            <li><span><i className="ri-heart-fill" /></span></li>
                            <li><span><i className="ri-add-line" /></span></li>
                          </ul>
                        </div>
                      </div>
                    </a>
                  </li>
                  {/* Last Race slider item */}
                  <li className="slide-item">
                    <a href="show-details.html">
                      <div className="block-images position-relative">
                        <div className="img-box">
                          <img src="images/favorite/02.jpg" className="img-fluid" alt="" />
                        </div>
                        <div className="block-description">
                          <h6>Last Race</h6>
                          <div className="movie-time d-flex align-items-center my-2">
                            <div className="badge badge-secondary p-1 mr-2">7+</div>
                            <span className="text-white">2 Seasons</span>
                          </div>
                          <div className="hover-buttons">
                            <span className="btn btn-hover"><i className="fa fa-play mr-1" aria-hidden="true" />
                                    Play Now
                                  </span>
                          </div>
                        </div>
                        <div className="block-social-info">
                          <ul className="list-inline p-0 m-0 music-play-lists">
                            <li><span><i className="ri-volume-mute-fill" /></span></li>
                            <li><span><i className="ri-heart-fill" /></span></li>
                            <li><span><i className="ri-add-line" /></span></li>
                          </ul>
                        </div>
                      </div>
                    </a>
                  </li>
                  {/* Boop Bitty slider item */}
                  <li className="slide-item">
                    <a href="movie-details.html">
                      <div className="block-images position-relative">
                        <div className="img-box">
                          <img src="images/favorite/03.jpg" className="img-fluid" alt="" />
                        </div>
                        <div className="block-description">
                          <h6>Boop Bitty</h6>
                          <div className="movie-time d-flex align-items-center my-2">
                            <div className="badge badge-secondary p-1 mr-2">15+</div>
                            <span className="text-white">2h 30m</span>
                          </div>
                          <div className="hover-buttons">
                            <span className="btn btn-hover">
                              <i className="fa fa-play mr-1" aria-hidden="true" />
                                    Play Now
                                  </span>
                          </div>
                        </div>
                        <div className="block-social-info">
                          <ul className="list-inline p-0 m-0 music-play-lists">
                            <li><span><i className="ri-volume-mute-fill" /></span></li>
                            <li><span><i className="ri-heart-fill" /></span></li>
                            <li><span><i className="ri-add-line" /></span></li>
                          </ul>
                        </div>
                      </div>
                    </a>
                  </li>
                  {/* Dino Land slider item */}
                  <li className="slide-item">
                    <a href="show-details.html">
                      <div className="block-images position-relative">
                        <div className="img-box">
                          <img src="images/favorite/04.jpg" className="img-fluid" alt="" />
                        </div>
                        <div className="block-description">
                          <h6>Dino Land</h6>
                          <div className="movie-time d-flex align-items-center my-2">
                            <div className="badge badge-secondary p-1 mr-2">18+</div>
                            <span className="text-white">3 Seasons</span>
                          </div>
                          <div className="hover-buttons">
                            <span className="btn btn-hover">
                              <i className="fa fa-play mr-1" aria-hidden="true" />
                                    Play Now
                                  </span>
                          </div>
                        </div>
                        <div className="block-social-info">
                          <ul className="list-inline p-0 m-0 music-play-lists">
                            <li><span><i className="ri-volume-mute-fill" /></span></li>
                            <li><span><i className="ri-heart-fill" /></span></li>
                            <li><span><i className="ri-add-line" /></span></li>
                          </ul>
                        </div>
                      </div>
                    </a>
                  </li>
                  {/* Jaction action slider item */}
                  <li className="slide-item">
                    <a href="show-details.html">
                      <div className="block-images position-relative">
                        <div className="img-box">
                          <img src="images/favorite/05.jpg" className="img-fluid" alt="" />
                        </div>
                        <div className="block-description">
                          <h6>Jaction action</h6>
                          <div className="movie-time d-flex align-items-center my-2">
                            <div className="badge badge-secondary p-1 mr-2">10+</div>
                            <span className="text-white">1 Season</span>
                          </div>
                          <div className="hover-buttons">
                            <span className="btn btn-hover">
                              <i className="fa fa-play mr-1" aria-hidden="true" />
                                    Play Now
                                  </span>
                          </div>
                        </div>
                        <div className="block-social-info">
                          <ul className="list-inline p-0 m-0 music-play-lists">
                            <li><span><i className="ri-volume-mute-fill" /></span></li>
                            <li><span><i className="ri-heart-fill" /></span></li>
                            <li><span><i className="ri-add-line" /></span></li>
                          </ul>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ReviewsSlider;