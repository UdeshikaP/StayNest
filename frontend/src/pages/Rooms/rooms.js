import React from 'react';
import './rooms.css';
import doubleRoomImg from '../../images/double room.png';
import singleRoomImg from '../../images/single room.png';
import studioRoomImg from '../../images/studio room.png';

const rooms = [
  {
    id: 1,
    name: 'Double Room',
    image: doubleRoomImg,
    priceNight: 'LKR. 5000/ night',
    priceDay: 'LKR. 3000/ Day',
    features: [
      '2 double  Bed',
      'Sea View ',
      'Traditional Sri Lankan Breakfast',
      'Private Balcony',
      'Free WiFi',
      'Air Conditioning',
      'Mini Fridge',
      'En-suite Bathroom with Hot Water',
    ]
  },
  {
    id: 2,
    name: 'Single Room',
    image: singleRoomImg,
    priceNight: 'LKR. 8000/ night',
    priceDay: 'LKR. 6000/ Day',
    features: [
      'Queen Bed',
      'City View (Colombo or Kandy)',
      'Complimentary Ceylon Tea Set',
      'Fast WiFi',
      'Work Desk',
      'Air Conditioning',
      'Flat-screen TV',
      'Attached Bathroom']
  },
  {
    id: 3,
    name: 'Studio Room',
    image: studioRoomImg,
    priceNight: 'LKR. 10000/ night',
    priceDay: 'LKR. 8000/ Day',
    features: [
      'Garden View with Tropical Plants',
      'Private Veranda',
      'Free Traditional Breakfast',
      'Air Conditioning',
      'WiFi Access',
      'Small Kitchenette',
      'Rain Shower Bathroom',
      'small living area'
    ]
  }
];

const Rooms = () => {
  return (
    <div className="rooms-container">
      <div className="hero-container">
        <section className="hero-img1">
        </section>
        <section className="hero-img2">
        </section>
      </div>
      <div className="room-types">
        <button  >Single Room</button>
        <button  >Double Room</button>
        <button  >Studio Room</button>
      </div>
      <h1 className="section-title">Our Rooms</h1>
      <p className="subtitle">Choose from our range of thoughtfully designed spaces for every traveler.</p>
     
      <div className="room-grid">
        {rooms.map(room => (
          <div className="room-card" key={room.id}>
            <img src={room.image} alt={room.name} className="room-image" />
            <div className="room-info">
              <h2>{room.name}</h2>
              <p className="price">{room.priceNight}</p>
              <p className="price">{room.priceDay}</p>
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
