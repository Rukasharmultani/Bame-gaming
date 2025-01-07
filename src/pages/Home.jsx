import React from 'react'
import GameSection from './Gamesection'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
       <div className="th-hero-wrapper hero-3" id="hero">
          <div
            className="th-hero-bg"
            data-bg-src="assets/img/hero/hero-bg3-1.png"
          />
          <div className="container">
            <div className="hero-style3">
              <span
                className="sub-title custom-anim-left wow"
                data-wow-duration="1.2s"
                data-wow-delay="0.1s"
              >
                Play, Improve &amp; Win
              </span>
              <h1
                className="hero-title custom-anim-left wow"
                data-wow-duration="1.2s"
                data-wow-delay="0.2s"
              >
                Online Fantasy
              </h1>
              <h1
                className="hero-title style2 text-theme custom-anim-left wow"
                data-wow-duration="1.2s"
                data-wow-delay="0.3s"
              >
                Video Game
              </h1>
              <div
                className="btn-group custom-anim-left wow"
                data-wow-duration="1.2s"
                data-wow-delay="0.5s"
              >
                <a href="contact.html" className="th-btn">
                  EXPLORE MORE <i className="fa-solid fa-arrow-right ms-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="overflow-hidden space" id="about-sec">
          <div className="about-bg-img shape-mockup" >
            <img src="assets/img/bg/about-bg1.png" alt="img" />
          </div>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-6 mb-50 mb-xl-0">
                <div className="img-box4">
                  <div
                    className="custom-anim-left wow"
                    data-wow-duration="1.5s"
                    data-wow-delay="0.2s"
                  >
                    <img
                      className
                      src="assets/img/normal/about4-1.png"
                      alt="About"
                    />
                  </div>
                  <div className="img2">
                    <img src="assets/img/normal/about4-2.png" alt="About" />
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="about-wrap4">
                  <div
                    className="title-area mb-35 custom-anim-left wow"
                    data-wow-duration="1.5s"
                    data-wow-delay="0.1s"
                  >
                    <span className="sub-title style3">
                      <span className="sub-title-shape icon-masking">
                        <span
                          className="mask-icon"
                          data-mask-src="assets/img/bg/section-title-bg.svg"
                        />{" "}
                      </span>
                      About Our Gaming Site
                    </span>
                    <h2 className="sec-title mb-0">
                      Beyond Gaming It's an Odyssey.
                    </h2>
                    <p className="mt-20">
                      Emerging trends in the esports industry include the growth
                      of mobile esports, the integration of virtual reality in
                      gaming experiences, and the increasing involvement of
                      traditional sports.
                    </p>
                  </div>
                  <div className="row gy-60">
                    <div className="col-sm-6">
                      <div className="counter-card">
                        <div className="media-body">
                          <h2 className="box-number">
                            <span className="counter-number">1.6</span>K
                            <span className="text-theme fw-medium">+</span>
                          </h2>
                          <p className="box-text">Our Daily Game Users</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="counter-card">
                        <div className="media-body">
                          <h2 className="box-number">
                            <span className="counter-number">50</span>M
                          </h2>
                          <p className="box-text">Game Downloads</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="counter-card">
                        <div className="media-body">
                          <h2 className="box-number">
                            <span className="counter-number">200</span>
                            <span className="text-theme fw-medium">+</span>
                          </h2>
                          <p className="box-text">Game Launched</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="counter-card">
                        <div className="media-body">
                          <h2 className="box-number">
                            <span className="counter-number">3.6</span>M
                          </h2>
                          <p className="box-text">Gaming Project Delivered</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="btn-wrap mt-50">
                    <a href="contact.html" className="th-btn">
                      EXPLORE MORE{" "}
                      <i className="fa-solid fa-arrow-right ms-2" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      <div>
        <GameSection/>
        </div>
        <div
          className="countdown-sec1 overflow-hidden"
          data-bg-src="assets/img/bg/countdown-sec1-bg.png"
          data-overlay="black"
          data-opacity={8}
        >
          <div
            className="countdown-thumb1-1 shape-mockup d-xl-block d-none"
            data-bottom={0}
            data-left="10%"
          >
            {/* <img src="assets/img/normal/countdown1-1.png" alt="img" /> */}
          </div>
          <div
            className="countdown-thumb1-2 shape-mockup d-xl-block d-none"
            data-bottom={0}
            
          >
            <img src="assets/img/normal/countdown1-2.png" alt="img" />
          </div>
          {/* <div className="container">
            <div className="countdown-wrap1 z-index-common text-center space">
              <h3 className="countdown-subtitle custom-anim-top wow">
                Big Match
              </h3>
              <h2 className="countdown-title custom-anim-top wow">
                Valorant Game
              </h2>
              <h4 className="countdown-time custom-anim-top wow">
                21 February, 2024 - 6:00 PM
              </h4>
              <ul
                className="counter-list custom-anim-top wow"
                data-offer-date="06/20/2024"
              >
                <li>
                  <div
                    className="day count-number"
                    data-bg-src="assets/img/bg/countdown_item_bg.png"
                  >
                    00
                  </div>
                  <span className="count-name">Days</span>
                </li>
                <li>
                  <div
                    className="hour count-number"
                    data-bg-src="assets/img/bg/countdown_item_bg.png"
                  >
                    00
                  </div>
                  <span className="count-name">Hour</span>
                </li>
                <li>
                  <div
                    className="minute count-number"
                    data-bg-src="assets/img/bg/countdown_item_bg.png"
                  >
                    00
                  </div>
                  <span className="count-name">Minute</span>
                </li>
                <li>
                  <div
                    className="seconds count-number"
                    data-bg-src="assets/img/bg/countdown_item_bg.png"
                  >
                    00
                  </div>
                  <span className="count-name">Second</span>
                </li>
              </ul>
              <div className="btn-wrap mt-40 justify-content-center custom-anim-top wow">
                <a href="contact.html" className="th-btn">
                  WATCH THE MATCH <i className="fa-solid fa-arrow-right ms-2" />
                </a>
              </div>
            </div>
          </div> */}
        </div>
        <div className="video-area-3 space overflow-hidden position-relative">
          <div className="radient-border-bottom" />
          <div className="container">
            <div className="row justify-content-between align-items-center flex-row-reverse">
              <div className="col-xl-6">
                <div className="text-xl-end video-box1 mb-50 mb-xl-0 custom-anim-right wow">
                  <img src="assets/img/normal/video2-1.png" alt="img" />
                  <a
                    href="https://www.youtube.com/watch?v=_sI_Ps7JSEk"
                    className="play-btn style3 popup-video"
                  >
                    <i className="fa-sharp fa-solid fa-play" />
                  </a>
                </div>
              </div>
              <div className="col-xl-6 custom-anim-left wow">
                <div className="title-area">
                  <span className="sub-title style3">
                    <span className="sub-title-shape icon-masking">
                      <span
                        className="mask-icon"
                        data-mask-src="assets/img/bg/section-title-bg.svg"
                      />{" "}
                    </span>
                    Why so special?
                  </span>
                  <h2 className="sec-title text-white">
                    Our Gaming special features
                  </h2>
                </div>
                <div className="accordion faq-wrap2" id="faqAccordion">
                  <div className="accordion-card style2">
                    <div className="accordion-header" id="collapse-item-1">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse-1"
                        aria-expanded="true"
                        aria-controls="collapse-1"
                      >
                        SURVIVE AT ALL COSTS
                      </button>
                    </div>
                    <div
                      id="collapse-1"
                      className="accordion-collapse collapse show"
                      aria-labelledby="collapse-item-1"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        <p className="faq-text">
                          You have 30 minutes to find a relic, signal for
                          extraction, &amp; grab one of three spots on the
                          rescue chopper. Gamers can join local gaming meetups
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-card style2">
                    <div className="accordion-header" id="collapse-item-2">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse-2"
                        aria-expanded="false"
                        aria-controls="collapse-2"
                      >
                        CREATE ALLIES AND ENEMIES
                      </button>
                    </div>
                    <div
                      id="collapse-2"
                      className="accordion-collapse collapse"
                      aria-labelledby="collapse-item-2"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        <p className="faq-text">
                          You have 30 minutes to find a relic, signal for
                          extraction, &amp; grab one of three spots on the
                          rescue chopper. Gamers can join local gaming meetups
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-card style2">
                    <div className="accordion-header" id="collapse-item-3">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse-3"
                        aria-expanded="false"
                        aria-controls="collapse-3"
                      >
                        IMPRESS THE AUDIENCE
                      </button>
                    </div>
                    <div
                      id="collapse-3"
                      className="accordion-collapse collapse"
                      aria-labelledby="collapse-item-3"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        <p className="faq-text">
                          You have 30 minutes to find a relic, signal for
                          extraction, &amp; grab one of three spots on the
                          rescue chopper. Gamers can join local gaming meetups
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <section
          className="space overflow-hidden"
          data-bg-src="assets/img/bg/tournament-sec4-bg.png"
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-12">
                <div
                  className="title-area text-center custom-anim-top wow"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.2s"
                >
                  <span className="sub-title style3">
                    <span className="sub-title-shape icon-masking">
                      <span
                        className="mask-icon"
                        data-mask-src="assets/img/bg/section-title-bg.svg"
                      />{" "}
                    </span>
                    Game Streaming Battle
                  </span>
                  <h2 className="sec-title">
                    Our Video Game Match Schedule{" "}
                    <span className="text-theme">!</span>
                  </h2>
                </div>
              </div>
              <div className="col-lg-auto custom-anim-top wow">
                <div className="game-filter-btn filter-menu filter-menu-active">
                  <button
                    data-filter=".tour-cat1"
                    className="tab-btn"
                    type="button"
                  >
                    Upcoming Games
                  </button>
                  <button
                    data-filter="*"
                    className="tab-btn active"
                    type="button"
                  >
                    All Games
                  </button>
                  <button
                    data-filter=".tour-cat2"
                    className="tab-btn"
                    type="button"
                  >
                    Finished Games
                  </button>
                </div>
              </div>
            </div>
            <div className="row gy-30 filter-active">
              <div className="col-12 filter-item tour-cat1">
                <div className="tournament-card style4">
                  <div className="tournament-player-wrap">
                    <div className="card-title-wrap">
                      <h6 className="tournament-card-subtitle">Video Game</h6>
                      <h3 className="tournament-card-title">
                        <a href="tournament-details.html">Pro Player</a>
                      </h3>
                    </div>
                    <div className="tournament-card-img">
                      <img
                        src="assets/img/tournament/3-1.png"
                        alt="tournament image"
                      />
                    </div>
                  </div>
                  <div className="tournament-card-content">
                    <div className="tournament-card-meta">
                      <span className="tournament-card-tag">Upcoming</span>
                    </div>
                    <h6 className="tournament-card-date">
                    {" "}
                      <span className="tournament-card-time">6:00 PM</span>
                    </h6>
                    <div className="th-social">
                      <a href="https://www.youtube.com/">
                        <i className="fab fa-youtube" />
                        Youtube
                      </a>
                      <a href="https://www.twitch.tv/">
                        <i className="fa-brands fa-twitch" />
                        Twitch
                      </a>
                    </div>
                    <a
                      href="tournament-details.html"
                      className="th-btn style-border3"
                    >
                      <span className="btn-border">
                        WATCH MATCH
                        <i className="fa-solid fa-arrow-right ms-2" />
                      </span>
                    </a>
                  </div>
                  <div className="tournament-player-wrap2">
                    <div className="card-title-wrap">
                      <h6 className="tournament-card-subtitle">Video Game</h6>
                      <h3 className="tournament-card-title">
                        <a href="tournament-details.html">Spiderman-II</a>
                      </h3>
                    </div>
                    <div className="tournament-card-img">
                      <img
                        src="assets/img/tournament/3-2.png"
                        alt="tournament image"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 filter-item tour-cat2">
                <div className="tournament-card style4">
                  <div className="tournament-player-wrap">
                    <div className="card-title-wrap">
                      <h6 className="tournament-card-subtitle">Video Game</h6>
                      <h3 className="tournament-card-title">
                        <a href="tournament-details.html">Assassin</a>
                      </h3>
                    </div>
                    <div className="tournament-card-img">
                      <img
                        src="assets/img/tournament/3-3.png"
                        alt="tournament image"
                      />
                    </div>
                  </div>
                  <div className="tournament-card-content">
                    <div className="tournament-card-meta">
                      <span className="tournament-card-tag">Finished</span>
                    </div>
                    <h6 className="tournament-card-date">
                      {" "}
                      <span className="tournament-card-time">6:00 PM</span>
                    </h6>
                    <div className="th-social">
                      <a href="https://www.youtube.com/">
                        <i className="fab fa-youtube" />
                        Youtube
                      </a>
                      <a href="https://www.twitch.tv/">
                        <i className="fa-brands fa-twitch" />
                        Twitch
                      </a>
                    </div>
                    <a
                      href="tournament-details.html"
                      className="th-btn style-border3"
                    >
                      <span className="btn-border">
                        WATCH MATCH
                        <i className="fa-solid fa-arrow-right ms-2" />
                      </span>
                    </a>
                  </div>
                  <div className="tournament-player-wrap2">
                    <div className="card-title-wrap">
                      <h6 className="tournament-card-subtitle">Video Game</h6>
                      <h3 className="tournament-card-title">
                        <a href="tournament-details.html">Hooligans</a>
                      </h3>
                    </div>
                    <div className="tournament-card-img">
                      <img
                        src="assets/img/tournament/3-4.png"
                        alt="tournament image"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 filter-item tour-cat1">
                <div className="tournament-card style4">
                  <div className="tournament-player-wrap">
                    <div className="card-title-wrap">
                      <h6 className="tournament-card-subtitle">Video Game</h6>
                      <h3 className="tournament-card-title">
                        <a href="tournament-details.html">Hacker King</a>
                      </h3>
                    </div>
                    <div className="tournament-card-img">
                      <img
                        src="assets/img/tournament/3-5.png"
                        alt="tournament image"
                      />
                    </div>
                  </div>
                  <div className="tournament-card-content">
                    <div className="tournament-card-meta">
                      <span className="tournament-card-tag">Upcoming</span>
                    </div>
                    <h6 className="tournament-card-date">
                    {" "}
                      <span className="tournament-card-time">6:00 PM</span>
                    </h6>
                    <div className="th-social">
                      <a href="https://www.youtube.com/">
                        <i className="fab fa-youtube" />
                        Youtube
                      </a>
                      <a href="https://www.twitch.tv/">
                        <i className="fa-brands fa-twitch" />
                        Twitch
                      </a>
                    </div>
                    <a
                      href="tournament-details.html"
                      className="th-btn style-border3"
                    >
                      <span className="btn-border">
                        WATCH MATCH
                        <i className="fa-solid fa-arrow-right ms-2" />
                      </span>
                    </a>
                  </div>
                  <div className="tournament-player-wrap2">
                    <div className="card-title-wrap">
                      <h6 className="tournament-card-subtitle">Video Game</h6>
                      <h3 className="tournament-card-title">
                        <a href="tournament-details.html">Cyberpunk</a>
                      </h3>
                    </div>
                    <div className="tournament-card-img">
                      <img
                        src="assets/img/tournament/3-6.png"
                        alt="tournament image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        
        <section className="space-bottom">
          <div className="container">
            <div className="cta-wrap3">
              <div className="row gx-0 gy-40 align-items-center flex-row-reverse">
                <div className="col-xl-7">
                  <div
                    className="cta-thumb3-1 custom-anim-left wow"
                    data-wow-duration="1.5s"
                    data-wow-delay="0.1s"
                  >
                    <img src="assets/img/normal/cta3-1.png" alt="img" />
                  </div>
                </div>
                <div className="col-xl-5">
                  <div
                    className="title-area mb-0 custom-anim-left wow"
                    data-wow-duration="1.5s"
                    data-wow-delay="0.1s"
                  >
                    <span className="sub-title style3">
                      <span className="sub-title-shape icon-masking">
                        <span
                          className="mask-icon"
                          data-mask-src="assets/img/bg/section-title-bg.svg"
                        />{" "}
                      </span>
                      Explore a New Dimension
                    </span>
                    <h2 className="sec-title mb-0">
                      Ready to unlock your potentials in a world of fun
                    </h2>
                    <p className="mt-20 mb-30">
                      The rise of mobile gaming has significantly expanded the
                      gaming audience, reaching a broader demographic. It has
                      also influenced game design
                    </p>
                    <Link to="/contact" className="th-btn">
                      JOIN COMMUNITY{" "}
                      <i className="fa-solid fa-arrow-right ms-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <div className="client-area-1 overflow-hidden space">
          <div className="container-fluid p-0">
            <div
              className="swiper th-slider client-slider1"
              data-slider-options='{"breakpoints":{"0":{"slidesPerView":2},"400":{"slidesPerView":"2"},"768":{"slidesPerView":"3"},"992":{"slidesPerView":"4"},"1200":{"slidesPerView":"7"},"1300":{"slidesPerView":"9"}}, "spaceBetween": "0", "loop": "true"}'
            >
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <a href="#" className="client-card">
                    <img src="assets/img/client/1-1.png" alt="Image" />
                  </a>
                </div>
                <div className="swiper-slide">
                  <a href="#" className="client-card">
                    <img src="assets/img/client/1-2.png" alt="Image" />
                  </a>
                </div>
                <div className="swiper-slide">
                  <a href="#" className="client-card">
                    <img src="assets/img/client/1-3.png" alt="Image" />
                  </a>
                </div>
                <div className="swiper-slide">
                  <a href="#" className="client-card">
                    <img src="assets/img/client/1-4.png" alt="Image" />
                  </a>
                </div>
                <div className="swiper-slide">
                  <a href="#" className="client-card">
                    <img src="assets/img/client/1-5.png" alt="Image" />
                  </a>
                </div>
                <div className="swiper-slide">
                  <a href="#" className="client-card">
                    <img src="assets/img/client/1-6.png" alt="Image" />
                  </a>
                </div>
                <div className="swiper-slide">
                  <a href="#" className="client-card">
                    <img src="assets/img/client/1-7.png" alt="Image" />
                  </a>
                </div>
                <div className="swiper-slide">
                  <a href="#" className="client-card">
                    <img src="assets/img/client/1-8.png" alt="Image" />
                  </a>
                </div>
                <div className="swiper-slide">
                  <a href="#" className="client-card">
                    <img src="assets/img/client/1-9.png" alt="Image" />
                  </a>
                </div>
                <div className="swiper-slide">
                  <a href="#" className="client-card">
                    <img src="assets/img/client/1-1.png" alt="Image" />
                  </a>
                </div>
                <div className="swiper-slide">
                  <a href="#" className="client-card">
                    <img src="assets/img/client/1-2.png" alt="Image" />
                  </a>
                </div>
                <div className="swiper-slide">
                  <a href="#" className="client-card">
                    <img src="assets/img/client/1-3.png" alt="Image" />
                  </a>
                </div>
                <div className="swiper-slide">
                  <a href="#" className="client-card">
                    <img src="assets/img/client/1-4.png" alt="Image" />
                  </a>
                </div>
                <div className="swiper-slide">
                  <a href="#" className="client-card">
                    <img src="assets/img/client/1-5.png" alt="Image" />
                  </a>
                </div>
                <div className="swiper-slide">
                  <a href="#" className="client-card">
                    <img src="assets/img/client/1-6.png" alt="Image" />
                  </a>
                </div>
                <div className="swiper-slide">
                  <a href="#" className="client-card">
                    <img src="assets/img/client/1-7.png" alt="Image" />
                  </a>
                </div>
                <div className="swiper-slide">
                  <a href="#" className="client-card">
                    <img src="assets/img/client/1-8.png" alt="Image" />
                  </a>
                </div>
                <div className="swiper-slide">
                  <a href="#" className="client-card">
                    <img src="assets/img/client/1-9.png" alt="Image" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        
        </div>
      
    
  )
}

export default Home
