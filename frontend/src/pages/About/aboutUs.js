import React from 'react';
import './aboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-container">
      <section className="hero">
        <h1>Welcome to The Haven Retreat</h1>
        <p>Your sanctuary away from home</p>
      </section>

      <section className="section">
        <h2>Our Story</h2>
        <p>
          It all started with a passion for hospitality and a love for timeless elegance.
          What was once a cozy family home transformed into a boutique hideaway that blends
          modern luxury with heartfelt tradition.
        </p>
      </section>

      <section className="section">
        <h2>Our Philosophy</h2>
        <p>
          At The Haven Retreat, we believe luxury is personal. We don’t just serve guests—we host friends.
          Every stay is infused with thoughtful touches, from fresh flowers to handwritten notes.
        </p>
      </section>

      <section className="section">
        <h2>What We Offer</h2>
        <ul className="offer-list">
          <li>🌿 Serene Rooms & Suites with sweeping views</li>
          <li>🍽️ A farm-to-table restaurant celebrating local flavors</li>
          <li>💆 Spa treatments to rejuvenate mind and body</li>
          <li>🌇 Rooftop sunsets and cozy fireside lounges</li>
          <li>🎨 Cultural events, live music, and guided tours</li>
        </ul>
      </section>

      <section className="section">
        <h2>Our Promise</h2>
        <p>
          Whether you’re here for a romantic escape, a business getaway, or a spontaneous adventure,
          The Haven Retreat is where memories are made and relaxation reigns.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
