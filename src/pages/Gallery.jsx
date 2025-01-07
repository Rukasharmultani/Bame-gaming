import React from 'react'
import { Link } from 'react-router-dom'

function Gallery() {
  return (
   <div>
  
 <div className="space"></div>
  <div className="space">
    <div className="container">
      <div className="row gy-4 masonary-active">
        <div className="col-xl-8 col-md-6 filter-item">
          <div className="gallery-card">
            <div className="box-img">
              <img src="assets/img/gallery/gallery_1_1.jpg" alt="gallery image" />
              <a href="assets/img/gallery/gallery_1_1.jpg" className="play-btn popup-image style3"><i className="fa-solid fa-arrow-up-right" /></a>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-md-6 filter-item">
          <div className="gallery-card">
            <div className="box-img">
              <img src="assets/img/gallery/gallery_1_2.jpg" alt="gallery image" />
              <a href="assets/img/gallery/gallery_1_2.jpg" className="play-btn popup-image style3"><i className="fa-solid fa-arrow-up-right" /></a>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-md-6 filter-item">
          <div className="gallery-card">
            <div className="box-img">
              <img src="assets/img/gallery/gallery_1_3.jpg" alt="gallery image" />
              <a href="assets/img/gallery/gallery_1_3.jpg" className="play-btn popup-image style3"><i className="fa-solid fa-arrow-up-right" /></a>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-md-6 filter-item">
          <div className="gallery-card">
            <div className="box-img">
              <img src="assets/img/gallery/gallery_1_4.jpg" alt="gallery image" />
              <a href="assets/img/gallery/gallery_1_4.jpg" className="play-btn popup-image style3"><i className="fa-solid fa-arrow-up-right" /></a>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-md-6 filter-item">
          <div className="gallery-card">
            <div className="box-img">
              <img src="assets/img/gallery/gallery_1_5.jpg" alt="gallery image" />
              <a href="assets/img/gallery/gallery_1_5.jpg" className="play-btn popup-image style3"><i className="fa-solid fa-arrow-up-right" /></a>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-md-6 filter-item">
          <div className="gallery-card">
            <div className="box-img">
              <img src="assets/img/gallery/gallery_1_6.jpg" alt="gallery image" />
              <a href="assets/img/gallery/gallery_1_6.jpg" className="play-btn popup-image style3"><i className="fa-solid fa-arrow-up-right" /></a>
            </div>
          </div>
        </div>
        <div className="col-xl-8 col-md-6 filter-item">
          <div className="gallery-card">
            <div className="box-img">
              <img src="assets/img/gallery/gallery_1_7.jpg" alt="gallery image" />
              <a href="assets/img/gallery/gallery_1_7.jpg" className="play-btn popup-image style3"><i className="fa-solid fa-arrow-up-right" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <div className="scroll-top">
    <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
      <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" style={{transition: 'stroke-dashoffset 10ms linear 0s', strokeDasharray: '307.919, 307.919', strokeDashoffset: '307.919'}} />
    </svg>
  </div>
</div>

  )
}

export default Gallery

