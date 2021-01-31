import React from 'react';
//Components
import ReviewsSliderItem from '../components/ReviewsSliderItem';

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
                  {/* Should render here a list of 10 review components fitted to the slider instead of the 5 hardcoded movies here */}
                  <ReviewsSliderItem movieTitle="Man In Black" userName={`${"Lee1"}`} reviewTitle="Awesome!" rating={`${8.5}`} />
                  <ReviewsSliderItem movieTitle="Thor 2" userName={`${"Lee2"}`} reviewTitle="Sick Movie." rating={`${9.2}`} />
                  <ReviewsSliderItem movieTitle="Avengers" userName={`${"Lee3"}`} reviewTitle="Meh...Could be better" rating={`${6}`} />
                  <ReviewsSliderItem movieTitle="Fight Club" userName={`${"Lee4"}`} reviewTitle="HOLY MOLY this is epic!" rating={`${8.4}`} />
                  <ReviewsSliderItem movieTitle="Matrix Reloaded" userName={`${"Lee5"}`} reviewTitle="wow..." rating={`${8}`} />
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