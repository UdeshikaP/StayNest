import React from 'react';
import './rooms.css';

const rooms = [
  {
    id: 1,
    name: 'Deluxe Suite',
    image: 'https://source.unsplash.com/800x600/?hotel-room,luxury',
    price: '$250 / night',
    features: ['King Bed', 'Ocean View', 'Free Breakfast', 'WiFi']
  },
  {
    id: 2,
    name: 'Cozy Standard',
    image: 'https://source.unsplash.com/800x600/?hotel-room,cozy',
    price: '$120 / night',
    features: ['Queen Bed', 'City View', 'WiFi']
  },
  {
    id: 3,
    name: 'Family Room',
    image: 'https://source.unsplash.com/800x600/?family-room,hotel',
    price: '$180 / night',
    features: ['2 Double Beds', 'Balcony', 'Free Breakfast', 'WiFi']
  }
];

const Rooms = () => {
  return (
    <div className="rooms-container">
      <h1 className="section-title">Our Rooms</h1>
      <p className="subtitle">Choose from our range of thoughtfully designed spaces for every traveler.</p>
      <div className="room-grid">
        {rooms.map(room => (
          <div className="room-card" key={room.id}>
            <img src={room.image} alt={room.name} className="room-image" />
            <div className="room-info">
              <h2>{room.name}</h2>
              <p className="price">{room.price}</p>
              <ul className="features">
                {room.features.map((feature, index) => (
                  <li key={index}>✓ {feature}</li>
                ))}
              </ul>
              <button className="book-btn">Book Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rooms;
