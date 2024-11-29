import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import heropic1 from "../../assets/hero/4.webp";
import heropic2 from "../../assets/hero/5.webp";
import heropic3 from "../../assets/hero/3.jpg";
import './Hero.css';
import { Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        navigation
      >
        <SwiperSlide className="relative h-screen">
          <div
            className="slide w-full h-full object-cover mix-blend-overlay"
            style={{ backgroundImage: `url(${heropic1})`, position: 'relative' }}
          >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="content-container relative z-10">
              <h1 className="subtitle text-white">Discover Over 200 Unique Training Programs</h1>
              <h2 className="main-title text-white">
                Take Your Athletic Skills <span className="text-[#ef1629]">to the Next Level</span>
              </h2>
              <p className="description text-white">
                Our comprehensive training courses are designed to help athletes and coaches excel, blending science and practical experience.
              </p>
              <div className="button-group">
                <Link to="/Login">
                  <button className="primary-btn text-[#ef1629] bg-white hover:bg-[#ef1629] hover:text-white">
                    Start Your Journey
                  </button>
                </Link>
                <Link to="/Signup" className="secondary-btn text-[#2176ad] border-[#2176ad] hover:bg-[#2176ad] hover:text-white">
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Repeat for other slides */}
        <SwiperSlide>
          <div
            className="slide"
            style={{ backgroundImage: `url(${heropic2})`, position: 'relative' }}
          >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="content-container relative z-10">
              <h1 className="subtitle text-white">Empower Yourself with Our Training Programs</h1>
              <h2 className="main-title text-white">
                Unlock Your Full Athletic Potential <span className="text-[#ef1629]">Worldwide</span>
              </h2>
              <p className="description text-white">
                Experience top-tier training that integrates cutting-edge sports science and hands-on methods for optimal results.
              </p>
              <div className="button-group">
                <Link to="/Login">
                  <button className="primary-btn text-[#ef1629] bg-white hover:bg-[#ef1629] hover:text-white">
                    Start Your Journey
                  </button>
                </Link>
                <Link to="/Signup" className="secondary-btn text-[#2176ad] border-[#2176ad] hover:bg-[#2176ad] hover:text-white">
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="slide"
            style={{ backgroundImage: `url(${heropic3})`, position: 'relative' }}
          >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="content-container relative z-10">
              <h1 className="subtitle text-white">Achieve Excellence with Proven Training</h1>
              <h2 className="main-title text-white">
                Reach New Heights in Athletic Performance <span className="text-[#ef1629]">Globally</span>
              </h2>
              <p className="description text-white">
                Our courses combine innovative sports techniques and dedicated coaching to help you excel in every aspect of your sport.
              </p>
              <div className="button-group">
                <Link to="/Login">
                  <button className="primary-btn text-[#ef1629] bg-white hover:bg-[#ef1629] hover:text-white">
                    Start Your Journey
                  </button>
                </Link>
                <Link to="/Signup" className="secondary-btn text-[#2176ad] border-[#2176ad] hover:bg-[#2176ad] hover:text-white">
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSection;
