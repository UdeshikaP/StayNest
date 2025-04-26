import React from 'react';
import './home.css';
import { Wifi } from 'lucide-react';
import Rooms from "../../../../frontend/src/images/rooms.jpg"
import Menu from "../../../../frontend/src/images/dining-service.jpg"
import Pool from "../../../../frontend/src/images/pool-service.jpg"
import Wellness from "../../../../frontend/src/images/wellness.jpg"
import RoomsService from "../../../../frontend/src/images/room.png"
import customerService from "../../../../frontend/src/images/customer.png"
import parkingService from "../../../../frontend/src/images/parking.png"

const Home = () => {
  return (
    <>
      <div className="services" id="#services">
        <div className="service-item">
          <div className="icon-circle">
            <Wifi size={40} color="black" />
          </div>

          <p>Free Wifi</p>
        </div>
        <div className="service-item">
          <div className="icon-circle">
          <img src={RoomsService || "/placeholder.svg"} alt="Delicious food" />

          </div>
          <p>Room Service</p>
        </div>
        <div className="service-item">
          <div className="icon-circle">          
            <img src={parkingService || "/placeholder.svg"} alt="Delicious food" />
          </div>
          <p>Free Parking</p>
        </div>
        <div className="service-item">
          <div className="icon-circle">          
            <img src={ customerService|| "/placeholder.svg"} alt="Delicious food" />
          </div>
          <p>Customer Support</p>
        </div>
      </div>

      {/* About Section */}
      <section className="about">
        <h2>About Us</h2>
        <p>
          Located in the heart of nature, Paradise Hotel is your perfect getaway for relaxation and indulgence.
          With world-class facilities, breathtaking views, and warm hospitality, we redefine luxury living.
        </p>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Why Choose Us</h2>
        <div className="features-grid">
          <div className="feature-box">
            <div className="img-service">
              <img src={Rooms || "/placeholder.svg"} alt="Delicious food" />
            </div>
            <h3>Luxury Rooms</h3>
            <p>Elegantly designed rooms with scenic views and top-class.</p>
          </div>
          <div className="feature-box">
            <div className="img-service">
              <img src={Wellness || "/placeholder.svg"} alt="Delicious food" />
            </div>            
            <h3>Spa & Wellness</h3>
            <p>Rejuvenate your senses with our relaxing spa treatments.</p>
          </div>
          <div className="feature-box">
            <div className="img-service">
              <img src={Menu || "/placeholder.svg"} alt="Delicious food" />
            </div>            
            <h3>Fine Dining</h3>
            <p>Savor gourmet meals prepared by award-winning chefs.</p>
          </div>
          <div className="feature-box">
            <div className="img-service">
              <img src={Pool || "/placeholder.svg"} alt="Delicious food" />
            </div>            <h3>Infinity Pool</h3>
            <p>Swim under the stars in our stunning infinity-edge pool.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
