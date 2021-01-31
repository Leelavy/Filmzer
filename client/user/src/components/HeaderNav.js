import React from 'react';

const HeaderNav = () => {

  return (
    <>
      <header id="main-header">
        <div className="main-header">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12">
                <nav className="navbar navbar-expand-lg navbar-light p-0">
                  <a href="#" className="navbar-toggler c-toggler" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <div className="navbar-toggler-icon" data-toggle="collapse">
                      <span className="navbar-menu-icon navbar-menu-icon--top" />
                      <span className="navbar-menu-icon navbar-menu-icon--middle" />
                      <span className="navbar-menu-icon navbar-menu-icon--bottom" />
                    </div>
                  </a>
                  <a className="navbar-brand" href="index.html"> <img className="img-fluid logo" src="images/logo.png" alt="streamit" /> </a>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="menu-main-menu-container">
                      <ul id="top-menu" className="navbar-nav ml-auto">
                        <li className="menu-item">
                          <a href="index.html">Movies</a>
                        </li>
                        <li className="menu-item">
                          <a href="show-category.html">Reviews</a>
                        </li>
                        <li className="menu-item">
                          <a href="movie-category.html">About</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mobile-more-menu">
                    <a href="javascript:void(0);" className="more-toggle" id="dropdownMenuButton" data-toggle="more-toggle" aria-haspopup="true" aria-expanded="false">
                      <i className="ri-more-line" />
                    </a>
                    <div className="more-menu" aria-labelledby="dropdownMenuButton">
                      <div className="navbar-right position-relative">
                        <ul className="d-flex align-items-center justify-content-end list-inline m-0">
                          <li>
                            <a href="#" className="search-toggle">
                              <i className="ri-search-line" />
                            </a>
                            <div className="search-box iq-search-bar">
                              <form action="#" className="searchbox">
                                <div className="form-group position-relative">
                                  <input type="text" className="text search-input font-size-12" placeholder="type here to search..." />
                                  <i className="search-link ri-search-line" />
                                </div>
                              </form>
                            </div>
                          </li>
                          <li className="nav-item nav-icon">
                            <a href="#" className="search-toggle position-relative">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={22} height={22} className="noti-svg">
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path d="M18 10a6 6 0 1 0-12 0v8h12v-8zm2 8.667l.4.533a.5.5 0 0 1-.4.8H4a.5.5 0 0 1-.4-.8l.4-.533V10a8 8 0 1 1 16 0v8.667zM9.5 21h5a2.5 2.5 0 1 1-5 0z" />
                              </svg>
                              <span className="bg-danger dots" />
                            </a>
                            <div className="iq-sub-dropdown">
                              <div className="iq-card shadow-none m-0">
                                <div className="iq-card-body">
                                  <a href="#" className="iq-sub-card">
                                    <div className="media align-items-center">
                                      <img src="images/notify/thumb-1.jpg" className="img-fluid mr-3" alt="streamit" />
                                      <div className="media-body">
                                        <h6 className="mb-0 ">Boop Bitty</h6>
                                        <small className="font-size-12"> just now</small>
                                      </div>
                                    </div>
                                  </a>
                                  <a href="#" className="iq-sub-card">
                                    <div className="media align-items-center">
                                      <img src="images/notify/thumb-2.jpg" className="img-fluid mr-3" alt="streamit" />
                                      <div className="media-body">
                                        <h6 className="mb-0 ">The Last Breath</h6>
                                        <small className="font-size-12">15 minutes ago</small>
                                      </div>
                                    </div>
                                  </a>
                                  <a href="#" className="iq-sub-card">
                                    <div className="media align-items-center">
                                      <img src="images/notify/thumb-3.jpg" className="img-fluid mr-3" alt="streamit" />
                                      <div className="media-body">
                                        <h6 className="mb-0 ">The Hero Camp</h6>
                                        <small className="font-size-12">1 hour ago</small>
                                      </div>
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <a href="#" className="iq-user-dropdown search-toggle d-flex align-items-center">
                              <img src="images/user/user.jpg" className="img-fluid avatar-40 rounded-circle" alt="user" />
                            </a>
                            <div className="iq-sub-dropdown iq-user-dropdown">
                              <div className="iq-card shadow-none m-0">
                                <div className="iq-card-body p-0 pl-3 pr-3">
                                  <a href="manage-profile.html" className="iq-sub-card setting-dropdown">
                                    <div className="media align-items-center">
                                      <div className="right-icon">
                                        <i className="ri-file-user-line text-primary" />
                                      </div>
                                      <div className="media-body ml-3">
                                        <h6 className="mb-0 ">Manage Profile</h6>
                                      </div>
                                    </div>
                                  </a>
                                  <a href="login.html" className="iq-sub-card setting-dropdown">
                                    <div className="media align-items-center">
                                      <div className="right-icon">
                                        <i className="ri-logout-circle-line text-primary" />
                                      </div>
                                      <div className="media-body ml-3">
                                        <h6 className="mb-0">Logout</h6>
                                      </div>
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="navbar-right menu-right">
                    <ul className="d-flex align-items-center list-inline m-0">
                      <li className="nav-item nav-icon">
                        <a href="#" className="search-toggle device-search">
                          <i className="ri-search-line" />
                        </a>
                        <div className="search-box iq-search-bar d-search">
                          <form action="#" className="searchbox">
                            <div className="form-group position-relative">
                              <input type="text" className="text search-input font-size-12" placeholder="type here to search..." />
                              <i className="search-link ri-search-line" />
                            </div>
                          </form>
                        </div>
                      </li>
                      <li className="nav-item nav-icon">
                        <a href="#" className="iq-user-dropdown search-toggle p-0 d-flex align-items-center" data-toggle="search-toggle">
                          <img src="images/user/user.jpg" className="img-fluid avatar-40 rounded-circle" alt="user" />
                        </a>
                        <div className="iq-sub-dropdown iq-user-dropdown">
                          <div className="iq-card shadow-none m-0">
                            <div className="iq-card-body p-0 pl-3 pr-3">
                              <a href="manage-profile.html" className="iq-sub-card setting-dropdown">
                                <div className="media align-items-center">
                                  <div className="right-icon">
                                    <i className="ri-file-user-line text-primary" />
                                  </div>
                                  <div className="media-body ml-3">
                                    <h6 className="mb-0 ">Manage Profile</h6>
                                  </div>
                                </div>
                              </a>
                              <a href="login.html" className="iq-sub-card setting-dropdown">
                                <div className="media align-items-center">
                                  <div className="right-icon">
                                    <i className="ri-logout-circle-line text-primary" />
                                  </div>
                                  <div className="media-body ml-3">
                                    <h6 className="mb-0 ">Logout</h6>
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </nav>
                <div className="nav-overlay" />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default HeaderNav;

