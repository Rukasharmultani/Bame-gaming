import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
   <div>
  <footer className="footer-wrapper footer-layout1">
    <div className="container">
      <div className="footer-top text-center">
        <div className="footer-logo bg-repeat" data-bg-src="assets/img/bg/jiji-bg.png">
          <a href="index.html"><span data-mask-src="assets/img/logo.svg" className="logo-mask" />
            <img src="assets/img/logo.svg" alt="Bame" /></a>
        </div>
        <div className="footer-links">
          <ul>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/about">ABOUT US</Link></li>
            
            <li><Link to="/game">GAME</Link></li> 
            <li><Link to="/gallery">GALLERY</Link></li>
            <li><Link to="/contact">CONTACT</Link></li>
          </ul>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="widget-area">
        <div className="row justify-content-between">
          <div className="col-md-6 col-lg-auto">
            <div className="widget footer-widget">
              <h3 className="widget_title">
                Office <span className="text-theme">Location:</span>
              </h3>
              <div className="th-widget-contact">
                <div className="info-box">
                  <p className="info-box_text">
                    Floor 2, 4 Naval St, Ancoats, Manchester M4 6EW, United
                    Kingdom
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-auto">
            <div className="widget footer-widget">
              <h3 className="widget_title">
                Contact <span className="text-theme">Information:</span>
              </h3>
              <div className="th-widget-contact">
                <div className="info-box">
                  <p className="info-box_text">
                    <a className="info-box_link" href="tel:163254736587">(+163)-6747-35787</a>
                    <a className="info-box_link" href="mailto:infohelp@bameexample.com">infohelp@bameexample.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-auto">
            <div className="widget footer-widget">
              <h3 className="widget_title">
                Follow <span className="text-theme">With Us:</span>
              </h3>
              <div className="th-widget-contact">
                <div className="th-social style-mask">
                  <a className="facebook" href="#"><i className="fab fa-facebook-f" /></a>
                  <a className="twitter" href="#"><i className="fab fa-twitter" /></a>
                  <a className="instagram" href="#"><i className="fab fa-instagram" /> </a><a className="linkedin" href="https://www.linkedin.com/"><i className="fab fa-linkedin" /></a>
                  <a className="google-play" href="#"><img src="assets/img/icon/google-playstore-icon.svg" alt="icon" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <form className="newsletter-form">
            <div className="form-group">
              <input className="form-control" type="email" placeholder="Subscribe to Our Newsletter" required />
              <button type="submit" className="th-btn">
                SUBSCRIBE NOW <i className="far fa-arrow-right ms-2" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div className="copyright-wrap text-center bg-repeat" data-bg-src="assets/img/bg/jiji-bg.png">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6">
            <p className="copyright-text bg-repeat" data-bg-src="assets/img/bg/jiji-bg.png">
              <i className="fal fa-copyright" /> Copyright 2024
              <a href=""></a> All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <div className="scroll-top">
    <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
      <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" style={{transition: 'stroke-dashoffset 10ms linear 0s', strokeDasharray: '307.919, 307.919', strokeDashoffset: '307.919'}} />
    </svg>
  </div>
</div>

  )
}

export default Footer
