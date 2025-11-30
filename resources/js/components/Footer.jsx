import React from 'react';

const Footer = (onNavigate) => {

return(
    <footer className="footer bg-light position-relative pt-5 mt-5">

  <div className="sphinx-container position-absolute top-0 start-0 translate-middle-y">
    
    <img src="css/sphynx.png" alt="Sphinx" className="sphinx-img"/>
  </div>

  <div className="container pt-3">
    <div className="row">
      <div className="col-md-8">
        <p className="text-muted small fw-bold">
          DISCOVER EGYPT YOUR WAY WITH OUR CUSTOMIZED TRAVEL PLANS.
          FROM WORLD FAMOUS LANDMARKS TO HIDDEN GEMS,
          WE HELP YOU CREATE JOURNEYS THAT MATCH YOUR BUDGET AND INTERESTS.
          START PLANNING TODAY AND MAKE YOUR ADVENTURE UNFORGETTABLE.
        </p>
      </div>

      <div className="col-md-4 text-md-end text-center">
        <p className="fw-bold mb-2">FOLLOW US</p>
        <div className="d-flex justify-content-md-end justify-content-center gap-3">
          <a href="#" className="text-decoration-none">
            <i className="bi bi-facebook fs-4"></i>
          </a>
          <a href="#" className="text-decoration-none">
            <i className="bi bi-instagram fs-4"></i>
          </a>
          <a href="#" className="text-decoration-none">
            <i className="bi bi-tiktok fs-4"></i>
          </a>
        </div>
      </div>
    </div>

    <hr className="my-4"/>

    <div className="d-flex justify-content-between flex-wrap text-muted small">
      <span>© Copyright 2025 | Where In Egypt</span>
      <div>
        <a href="#" className="text-muted text-decoration-none me-3 fw-bold" onClick={(e) => {e.preventDefault();onNavigate('about')}}>About</a>
        <a href="#" className="text-muted text-decoration-none fw-bold"onClick={(e) => {e.preventDefault();onNavigate('contact')}}>Contact</a>
      </div>
    </div>
  </div>
</footer>

);

};

export default Footer;