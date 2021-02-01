import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

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
                  <Link to="/"> <img className="img-fluid logo" src="images/logo.png" alt="filmzer" /> </Link>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="menu-main-menu-container">
                      <ul id="top-menu" className="navbar-nav ml-auto">
                        <li className="menu-item">
                          <Link to="/movies">Movies</Link>
                        </li>
                        <li className="menu-item">
                          <Link to="/reviews">Reviews</Link>
                        </li>
                        <li className="menu-item">
                          <Link to="/about">About</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="navbar-right menu-right">
                    <ul className="d-flex align-items-center list-inline m-0">
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

