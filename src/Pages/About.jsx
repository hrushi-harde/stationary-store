import React from 'react';
import './AboutUs.css';
import ContactCard from '../Components/ContactCard';

const AboutUs = () => {
  return (
    <section className="about-wrapper">
      <div className="about-container">
        <div className="about-image">
          <img src="Other/aboutus.jpg" alt="About our stationery brand" />
        </div>
        <div className="about-text">
          <h1>About WriteRight</h1>
          <p className="tagline">Crafting creativity, one page at a time ✍️</p>
          <p>
            At <strong>WriteRight</strong>, we’re passionate about elevating your writing and creative experience with high-quality, thoughtfully designed stationery products. Whether you're journaling your day, sketching your dreams, or taking important notes, our curated collection of notebooks, pens, diaries, and art supplies are made to inspire.
          </p>
          <p>
            Founded with the mission of making stationery exciting and accessible, we work with leading brands and eco-conscious manufacturers to deliver value, creativity, and joy — right to your desk. Trusted by students, professionals, and creators alike, WriteRight blends aesthetics with practicality in every product.
          </p>
          <div className="highlight-box">
            <h3>Why Choose Us?</h3>
            <ul>
              <li>✒️ Premium Quality Stationery</li>
              <li>🌱 Sustainable & Eco-Friendly Options</li>
              <li>🚚 Fast & Reliable Delivery</li>
              <li>🤝 100% Customer Satisfaction</li>
            </ul>
          </div>
        </div>

       <ContactCard></ContactCard>
      </div>
    </section>
  );
};

export default AboutUs;
