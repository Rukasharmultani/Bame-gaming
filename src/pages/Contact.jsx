import React from 'react'

function Contact() {
  return (
   <div>
    <div className="space"></div>
  <div className="contact-page-1 space">
    <div className="contact-sec-1 space bg-repeat overflow-hidden" data-bg-src="assets/img/bg/jiji-bg2.png">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-xl-6 pe-xxl-5">
            <div className="title-area">
              <span className="sub-title style2"># Get In Touch</span>
              <h2 className="sec-title text-white">
                Contact Us &amp; Meet Our Team <span className="text-theme">!</span>
              </h2>
            </div>
            <form action="#" method="POST" className="contact-form ajax-contact pb-xl-0 space-bottom">
              <div className="row">
                <div className="form-group style-border2 col-md-6">
                  <input type="text" className="form-control" name="name" id="name" placeholder="Your Name" />
                  <i className="fal fa-user" />
                </div>
                <div className="form-group style-border2 col-md-6">
                  <input type="email" className="form-control" name="email" id="email" placeholder="Email Address" />
                  <i className="fal fa-envelope" />
                </div>
                <div className="form-group style-border2 col-md-6">
                  <input type="text" className="form-control" name="number" id="number" placeholder="Phone Number" />
                  <i className="fal fa-phone" />
                </div>
                <div className="col-md-6">
                  <div className="form-group style-border2">
                    <select className="form-select" aria-label="Default select example">
                      <option selected="selected">Subject</option>
                      <option value={1}>Esports</option>
                      <option value={2}>Tournament</option>
                      <option value={3}>Sports</option>
                    </select>
                    <i className="fal fa-angle-down" />
                  </div>
                </div>
                <div className="col-12 form-group style-border2">
                  <textarea placeholder="Write Massage...." className="form-control" defaultValue={""} />
                  <i className="far fa-pencil" />
                </div>
                <div className="form-btn col-12">
                  <button className="th-btn">
                    Send Message <i className="fa-solid fa-arrow-right ms-2" />
                  </button>
                </div>
              </div>
              <p className="form-messages mb-0 mt-3" />
            </form>
          </div>
          <div className="col-xl-6 ps-xxl-5">
            <div className="title-area">
              <span className="sub-title style2"># Information</span>
              <h2 className="sec-title text-white">
                Contact Information's <span className="text-theme">!</span>
              </h2>
            </div>
            <div className="contact-feature">
              <div className="contact-feature-icon icon-masking">
                <span className="mask-icon" data-mask-src="assets/img/icon/contact-map-icon1.svg" />
                <img src="assets/img/icon/contact-map-icon1.svg" alt="img" />
              </div>
              <div className="media-body">
                <h4 className="box-title">ADDRESS:</h4>
                <a href="https://www.google.com/maps" className="contact-feature_link">Floor 2, 4 Naval St, Ancoats, Manchester M4 6EW, United
                  Kingdom</a>
              </div>
            </div>
            <div className="contact-feature">
              <div className="contact-feature-icon icon-masking">
                <span className="mask-icon" data-mask-src="assets/img/icon/contact-phone-icon1.svg" />
                <img src="assets/img/icon/contact-phone-icon1.svg" alt="img" />
              </div>
              <div className="media-body">
                <h4 className="box-title">OFFICE NUMBER:</h4>
                <a href="tel:16365981254" className="contact-feature_link">Mobile: +163 6598 1254</a>
                <a href="tel:16365981254" className="contact-feature_link">Fax: +163 6985 2365</a>
              </div>
            </div>
            <div className="contact-feature">
              <div className="contact-feature-icon icon-masking">
                <span className="mask-icon" data-mask-src="assets/img/icon/contact-envelope-icon1.svg" />
                <img src="assets/img/icon/contact-envelope-icon1.svg" alt="img" />
              </div>
              <div className="media-body">
                <h4 className="box-title">OFFICE EMAIL:</h4>
                <a href="mailto:info@bame.com" className="contact-feature_link">Office Mail: info@bame.com</a>
                <a href="mailto:info@bameceo.com" className="contact-feature_link">CEO Mail: info@bameceo.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="contact-map">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3644.7310056272386!2d89.2286059153658!3d24.00527418490799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fe9b97badc6151%3A0x30b048c9fb2129bc!2sAngfuztheme!5e0!3m2!1sen!2sbd!4v1651028958211!5m2!1sen!2sbd" allowFullScreen loading="lazy" />
  </div>
</div>

  )
}

export default Contact
