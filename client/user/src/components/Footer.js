import React from 'react';

const Footer = () => {

  return (
    <>
      <footer className="mb-0">
        <div className="container-fluid">
          <div className="block-space">
            <div className="row">
              <div className="col-lg-9 col-md-12">
                <ul className="f-link list-unstyled mb-0">
                  <li><a href="#">Movies</a></li>
                  <li><a href="#">Reviews</a></li>
                  <li><a href="#">About</a></li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-12 r-mt-15">
                <div className="d-flex">
                  <a href="#" className="s-icon">
                    <i className="ri-facebook-fill" />
                  </a>
                  <a href="#" className="s-icon">
                    <i className="ri-skype-fill" />
                  </a>
                  <a href="#" className="s-icon">
                    <i className="ri-linkedin-fill" />
                  </a>
                  <a href="#" className="s-icon">
                    <i className="ri-whatsapp-fill" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright py-2">
          <div className="container-fluid">
            <p className="mb-0 text-center font-size-14 text-body">FILMZER - 2021 All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;