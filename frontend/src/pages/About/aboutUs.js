import React from 'react';
import './aboutUs.css';

const AboutUs = () => {
  
  return (
    <div className="about-container">
      <section className="hero-img">
         <h1>Welcome to The Haven Retreat</h1>
      </section>

      <section className="two-boxes">
  <div className="box fade-in">
    <h2>Our Story</h2>
    <p>
      It all started with a passion for hospitality and a love for timeless elegance.
      What was once a cozy family home transformed into a boutique hideaway that blends
      modern luxury with heartfelt tradition.
    </p>
  </div>

  <div className="box fade-in">
    <h2>Our Promise</h2>
    <p>
      Whether you’re here for a romantic escape, a business getaway, or a spontaneous adventure,
      The Haven Retreat is where memories are made and relaxation reigns.
    </p>
  </div>
</section>


<section className="offer-section">
  <h2>What We Offer</h2>
  <div className="offer-cards">
    <div className="offer-card fade-in">
      <span className="icon">🌿</span>
      <p>Serene Rooms & Suites with sweeping views</p>
    </div>

    <div className="offer-card fade-in">
      <span className="icon">🍽️</span>
      <p>A farm-to-table restaurant celebrating local flavors</p>
    </div>

    <div className="offer-card fade-in">
      <span className="icon">💆</span>
      <p>Spa treatments to rejuvenate mind and body</p>
    </div>

    <div className="offer-card fade-in">
      <span className="icon">🌇</span>
      <p>Rooftop sunsets and cozy fireside lounges</p>
    </div>

    <div className="offer-card fade-in">
      <span className="icon">🎨</span>
      <p>Cultural events, live music, and guided tours</p>
    </div>
  </div>
</section>

    
    </div>
  );
};

export default AboutUs;
