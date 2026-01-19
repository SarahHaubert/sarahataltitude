import { Routes, Route, Link, useLocation } from 'react-router-dom';
import Books from './pages/Store';
import Coaching from './pages/Coaching';
import Sound from './pages/Sound';
import Rooted from './pages/Rooted';


import './App.css';

import Slider from 'react-slick';
import type { Settings } from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  

  // Carousel settings go here, inside the component but before return
  const carouselSettings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
  };

  return (
    <div className="app-container">
      <div className="site-banner">
        <Link to="/" className="banner-home-link" aria-label="Home">
          <img src="/images/banner.png" alt="Site Banner" className="banner-image" />
        </Link>

        <header className="navbar-overlay">
          <nav className="nav-buttons">
            <Link to="/coaching" className="nav-button">
              <img src="/coaching.svg" alt="Strength" />
            </Link>
            <Link to="/store" className="nav-button">
              <img src="/books.svg" alt="Store" />
            </Link>
            {/* <Link to="/sound" className="nav-button">
              <img src="/soundhealing.svg" alt="About" />
            </Link>
            <Link to="/rooted" className="nav-button">
              <img src="/rootedinouray.svg" alt="Contact" />
            </Link> */}
          </nav>
        </header>
      </div>

      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <section className="hero-section">
                  <Slider {...carouselSettings} className="hero-carousel">
  <div className="carousel-slide">
<Link to="/coaching">
        <img src="/images/unlockhero.png" alt="Hero 1" />
      </Link>
  </div>

  <div className="carousel-slide">
    <img src="/images/trainhero.png" alt="Hero 2" />
  </div>

  <div className="carousel-slide">
    <img src="/images/goalshero.png" alt="Hero 3" />
  </div>
</Slider>
                </section>
                <div className="coaching-one-liner">
  <img
    src="/images/mission.svg"
    alt="I'm on a mission to climb every mountain — and I want to help you do the same"
  />
</div>


        {/* Wide Coaching Image Section */}
<div className="coaching-wide-section">
  <div className="coaching-wide-text">
    <img
      src="/images/ImSarah.png"
      alt="Do you need a coach? Mountain athlete coaching philosophy"
    />
  </div>

  <div className="coaching-wide-image">
    <img
      src="/images/sarah.jpg"
      alt="Sarah coaching mountain athletes"
    />
  </div>
</div>

              </>
            }
          />
          <Route path="/coaching" element={<Coaching />} />
          <Route path="/store" element={<Books />} />
          <Route path="/sound" element={<Sound />} />
          <Route path="/rooted" element={<Rooted />} />


        </Routes>

      

      </main>

      <footer className="site-footer">
        <p>
          Let's build your best season together <a href="mailto:glissadequeen@sarahataltitude.com">glissadequeen@sarahataltitude.com</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
