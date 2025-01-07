import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  let [query,setQuery] = useState("");
  console.log(query);
  let navigate = useNavigate();
  let searchgames = (e)=>{
    e.preventDefault();
    navigate(`search?query=${query}`);
  }


  return (
    <div>
      <div className="popup-search-box d-none d-lg-block">
        <button className="searchClose">
          <i className="fal fa-times"></i>
        </button>
        <form action="#">
          <input type="text" placeholder="What are you looking for?" />
          <button type="submit">
            <i className="fal fa-search"></i>
          </button>
        </form>
      </div>
      <div className="th-menu-wrapper">
        <div className="th-menu-area text-center">
          <button className="th-menu-toggle">
            <i className="fal fa-times"></i>
          </button>
          <div className="mobile-logo">
            <a href="index.html">
              <span
                data-mask-src="assets/img/logo.svg"
                className="logo-mask"
              ></span>
              <img src="assets/img/logo.svg" alt="Bame" />
            </a>
          </div>
          <div className="th-mobile-menu">
            <ul>
              <li className="menu-item-has-children">
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to="about.html">ABOUT US</Link>
              </li>
              <li className="menu-item-has-children">
                <a href="#">TOURNAMENT</a>
                <ul className="sub-menu">
                  <li>
                    <a href="tournament.html">Tournament</a>
                  </li>
                  <li>
                    <a href="tournament-details.html">Tournament Details</a>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a href="#">BLOG</a>
                <ul className="sub-menu">
                  <li>
                    <a href="blog.html">Blog</a>
                  </li>
                  <li>
                    <a href="blog-details.html">Blog Details</a>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a href="#">PAGES</a>
                <ul className="sub-menu">
                  <li className="menu-item-has-children">
                    <a href="#">Shop</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="shop.html">Shop</a>
                      </li>
                      <li>
                        <a href="shop-details.html">Shop Details</a>
                      </li>
                      <li>
                        <a href="cart.html">Cart Page</a>
                      </li>
                      <li>
                        <a href="checkout.html">Checkout</a>
                      </li>
                      <li>
                        <a href="wishlist.html">Wishlist</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="team.html">Players</a>
                  </li>
                  <li>
                    <a href="team-details.html">Players Details</a>
                  </li>
                  <li>
                    <a href="game.html">Game</a>
                  </li>
                  <li>
                    <a href="game-details.html">Game Details</a>
                  </li>
                  <li>
                    <a href="gallery.html">Gallery</a>
                  </li>
                  <li>
                    <a href="point-table.html">Point Table</a>
                  </li>
                  <li>
                    <a href="error.html">Error Page</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="contact.html">CONTACT</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <header className="th-header header-layout2">
        <div className="sticky-wrapper">
          <div className="container">
            <div className="row gx-0 justify-content-between">
              <div className="col-auto">
                <div className="header-logo-wrap">
                  <div className="header-logo">
                    <a href="index.html">
                      <span
                        data-mask-src="assets/img/logo.svg"
                        className="logo-mask"
                      ></span>
                      <img src="assets/img/logo.svg" alt="Bame" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-auto">
                <div className="menu-area">
                  <div className="row gx-0 align-items-center justify-content-lg-between justify-content-end">
                    <div className="col-auto">
                      <nav className="main-menu d-none d-lg-inline-block">
                        <ul>
                          <li>
                            <Link to="/">HOME</Link>
                          </li>
                          <li>
                            <Link to="/about">ABOUT US</Link>
                          </li>
                          <li>
                            <Link to="/game">GAMES</Link>
                          </li>
                          <li>
                            <Link to="/gallery">GALLERY</Link>
                          </li>

                          <li>
                            <Link to="/contact">CONTACT</Link>
                          </li>
                        </ul>
                      </nav>
                      <div className="header-button d-flex d-lg-none">
                        <button type="button" className="th-menu-toggle">
                          <span className="btn-border"></span>
                          <i className="far fa-bars"></i>
                        </button>
                      </div>
                    </div>
                    <div className="col-auto d-none d-xl-block">
                      <div className="header-button">
                        {/* <form action="#">
                          <input type="text" placeholder="" />
                          <button type="submit">
                            <i className="fal fa-search"></i>
                          </button>
                        </form> */}
                        {/* <button
                          type="button"
                          className="simple-icon sideMenuInfo d-none d-xxl-block"
                        >
                          <i className="fa-solid fa-bars"></i>
                        </button> */}
                        <div className="d-xl-block d-none">
                          <form action="#" onSubmit={searchgames}>
                            <input type="text" placeholder="search games" value={query} onChange={(e)=>{
                                setQuery(e.target.value);
                            }} />
                          </form>
                          {/* <Link to="/contact" className="th-btn">
                            <i className="fa-brands fa-twitch me-1"></i> Live
                            Streaming
                          </Link> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
