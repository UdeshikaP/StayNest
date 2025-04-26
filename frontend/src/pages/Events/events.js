import React from 'react';
import './events.css';

const events = [
  {
    title: 'Sunset Beach Wedding',
    date: 'May 15, 2025',
    image: 'https://source.unsplash.com/600x400/?beach-wedding',
    description: 'Celebrate love with a magical beachside wedding organized with elegance and care.'
  },
  {
    title: 'Gourmet Food Festival',
    date: 'June 10, 2025',
    image: 'https://source.unsplash.com/600x400/?food-festival',
    description: 'Join us for a weekend of flavor, featuring top chefs and live cooking demos.'
  },
  {
    title: 'Live Jazz Night',
    date: 'April 30, 2025',
    image: 'https://source.unsplash.com/600x400/?jazz-music',
    description: 'Relax to the soulful sound of jazz every Friday night in our garden lounge.'
  },
  {
    title: 'Corporate Conference 2025',
    date: 'July 20, 2025',
    image: 'https://source.unsplash.com/600x400/?conference',
    description: 'Host your next big event in our state-of-the-art conference halls.'
  }
];

const Events = () => {
  return (
    <div className="events-container">
      <h1 className="events-title">Upcoming Events</h1>
      <p className="events-subtitle">Experience unforgettable moments curated just for you.</p>
      <div className="events-grid">
        {events.map((event, index) => (
          <div className="event-card" key={index}>
            <img src={event.image} alt={event.title} className="event-image" />
            <div className="event-info">
              <h2 className="event-title">{event.title}</h2>
              <p className="event-date">{event.date}</p>
              <p className="event-description">{event.description}</p>
              <button className="event-btn">Learn More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
