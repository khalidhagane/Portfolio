import React from 'react'
import "../assets/vendor/bootstrap/css/bootstrap.min.css";
import "../assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "../assets/vendor/glightbox/css/glightbox.min.css";
import "../assets/vendor/swiper/swiper-bundle.min.css";
import "../assets/css/style.css";
import Header from "../components/header/Header";
import Contact from "../components/contact/Contact";
import AboutMe from "../components/aboutme/AboutMe";
import Service from '../components/servics/Service';
import Blog from '../components/blog/Blog';
import Projets from '../components/Projets/Projects';








function Home() {
  return (
    <div>
  <meta charSet="utf-8" />
  <meta content="width=device-width, initial-scale=1.0" name="viewport" />
  <title>DevFolio Bootstrap Portfolio Template - Index</title>
  <meta content name="description" />
  <meta content name="keywords" />
  {/* Favicons */}
  <link href="/img/favicon.png" rel="icon" />
  <link href="/img/apple-touch-icon.png" rel="apple-touch-icon" />
 
  <Header/>
  {/* ======= Hero Section ======= */}
  <div id="hero" className="hero route bg-image" style={{backgroundImage: "url(img/hero-bg.jpg)"}}>
  {/* <div className="error-content text-center" style={{backgroundImage: 'url(assets/images/demos/demo-2/slider/slide-1.jpg)'}}> assets/img/hero-bg.jpg*/}
    <div className="overlay-itro" />
    
    <div className="hero-content display-table">
      <div className="table-cell">
        <div className="container">
          {/*<p class="display-6 color-d">Hello, world!</p>*/}
          <h1 className="hero-title mb-4">I am Morgan Freeman</h1>
          <p className="hero-subtitle"><span className="typed"  data-typed-items="Designer, Developer, Freelancer, Photographer" /></p>
          {/* <p class="pt-3"><a class="btn btn-primary btn js-scroll px-4" href="#about" role="button">Learn More</a></p> */}
        </div>
      </div>
    </div>
  </div>{/* End Hero Section */}
  <main id="main">
    {/* ======= About Section ======= */}
    <section id="about" className="about-mf sect-pt4 route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <AboutMe/>

          </div>
        </div>
      </div>
    </section>{/* End About Section */}
    {/* ======= Services Section ======= */}
    <Service/>
    {/* End Services Section */}
    {/* ======= Counter Section ======= */}
    <div className="section-counter paralax-mf bg-image" style={{backgroundImage: 'url(/img/counters-bg.jpg)'}}>
      <div className="overlay-mf" />
      <div className="container position-relative">
        <div className="row">
          <div className="col-sm-3 col-lg-3">
            <div className="counter-box counter-box pt-4 pt-md-0">
              <div className="counter-ico">
                <span className="ico-circle"><i className="bi bi-check" /></span>
              </div>
              <div className="counter-num">
                <p data-purecounter-start={0} data-purecounter-end={450} data-purecounter-duration={1} className="counter purecounter" />
                <span className="counter-text">WORKS COMPLETED</span>
              </div>
            </div>
          </div>
          <div className="col-sm-3 col-lg-3">
            <div className="counter-box pt-4 pt-md-0">
              <div className="counter-ico">
                <span className="ico-circle"><i className="bi bi-journal-richtext" /></span>
              </div>
              <div className="counter-num">
                <p data-purecounter-start={0} data-purecounter-end={25} data-purecounter-duration={1} className="counter purecounter" />
                <span className="counter-text">YEARS OF EXPERIENCE</span>
              </div>
            </div>
          </div>
          <div className="col-sm-3 col-lg-3">
            <div className="counter-box pt-4 pt-md-0">
              <div className="counter-ico">
                <span className="ico-circle"><i className="bi bi-people" /></span>
              </div>
              <div className="counter-num">
                <p data-purecounter-start={0} data-purecounter-end={550} data-purecounter-duration={1} className="counter purecounter" />
                <span className="counter-text">TOTAL CLIENTS</span>
              </div>
            </div>
          </div>
          <div className="col-sm-3 col-lg-3">
            <div className="counter-box pt-4 pt-md-0">
              <div className="counter-ico">
                <span className="ico-circle"><i className="bi bi-award" /></span>
              </div>
              <div className="counter-num">
                <p data-purecounter-start={0} data-purecounter-end={48} data-purecounter-duration={1} className="counter purecounter" />
                <span className="counter-text">AWARD WON</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>{/* End Counter Section */}
    {/* ======= Projets Section ======= */}
    <Projets/>
    {/* End Projets Section */}
    {/* ======= Testimonials Section ======= */}
    <div className="testimonials paralax-mf bg-image" style={{backgroundImage: 'url(/img/overlay-bg.jpg)'}}>
      <div className="overlay-mf" />
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay={100}>
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="testimonial-box">
                    <div className="author-test">
                      <img src="/img/testimonial-2.jpg" alt className="rounded-circle b-shadow-a" />
                      <span className="author">Xavi Alonso</span>
                    </div>
                    <div className="content-test">
                      <p className="description lead">
                        Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit.
                      </p>
                    </div>
                  </div>
                </div>{/* End testimonial item */}
                <div className="swiper-slide">
                  <div className="testimonial-box">
                    <div className="author-test">
                      <img src="/img/testimonial-4.jpg" alt className="rounded-circle b-shadow-a" />
                      <span className="author">Marta Socrate</span>
                    </div>
                    <div className="content-test">
                      <p className="description lead">
                        Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit.
                      </p>
                    </div>
                  </div>
                </div>{/* End testimonial item */}
              </div>
              <div className="swiper-pagination" />
            </div>
            {/* <div id="testimonial-mf" class="owl-carousel owl-theme">
    
  </div> */}
          </div>
        </div>
      </div>
    </div>{/* End Testimonials Section */}
    {/* ======= Blog Section ======= */}
    <Blog/>
    {/* End Blog Section */}
    {/* ======= Contact Section ======= */}
    <Contact/>
    {/* End Contact Section */}
  </main>{/* End #main */}
  {/* ======= Footer ======= */}
  <footer>
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="copyright-box">
            <p className="copyright">© Copyright <strong>DevFolio</strong>. All Rights Reserved</p>
            <div className="credits">
              {/*
        All the links in the footer should remain intact.
        You can delete the links only if you purchased the pro version.
        Licensing information: https://bootstrapmade.com/license/
        Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/buy/?theme=DevFolio
      */}
              Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>{/* End  Footer */}
  <div id="preloader" />
  <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short" /></a>
  {/* Vendor JS Files */}
  {/* Template Main JS File */}
</div>

  )
}

export default Home