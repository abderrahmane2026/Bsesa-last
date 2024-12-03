import React, { useEffect } from 'react';
import './ServiceSection.css';
import AOS from 'aos'; // استيراد AOS
import 'aos/dist/aos.css'; // استيراد أنماط AOS
// إضافة الصور للخدمات
import trainingImage from '../../assets/pictur/4.webp';
import academyImage from '../../assets/pictur/5.webp';
import trainerImage from '../../assets/pictur/trainer.jpg';
import { Link } from 'react-router-dom';



const ServiceSection = () => {
  useEffect(() => {
    const cards = document.querySelectorAll('.service-card');

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show'); // إضافة كلاس عند الظهور
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    cards.forEach(card => {
      observer.observe(card);
    });
  }, []);

  return (
    <section className="service-section">
      <div className="service-container">
        <h2 className="service-title">Our Services</h2>
        <p className="service-description">
          Discover the wide range of services we offer to help you achieve your goals.
        </p>

        <div className="services">
          <div className="service-card">
            <img src={trainingImage} alt="Training Courses" className="service-image" />
            <h3 className="service-card-title">Training Courses</h3>
            <p className="service-card-description">
              Explore our diverse training courses tailored to boost your career.
            </p>
           <Link to="/Courses"> <button className="service-card-btn">Learn More</button></Link>
          </div>
          <div className="service-card">
            <img src={academyImage} alt="Academy Development" className="service-image" />
            <h3 className="service-card-title">Academy Development</h3>
            <p className="service-card-description">
              Build your academy with our expert development strategies and support.
            </p>
            <button className="service-card-btn">Learn More</button>
          </div>
          <div className="service-card">
            <img src={trainerImage} alt="Trainer Experience" className="service-image" />
            <h3 className="service-card-title">Trainer Experience</h3>
            <p className="service-card-description">
              Access premium experiences from our expert trainers to elevate your skills.
            </p>
            <button className="service-card-btn">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;