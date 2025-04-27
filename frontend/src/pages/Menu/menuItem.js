import React from 'react';
import './menuItem.css';
import FruitImg from '../../images/fruit-plate.jpg';
import PastryImg from '../../images/pastry.jpg';
import BeverageImg from '../../images/beverages.jpg';
import SoupImg from '../../images/tomato-soup.jpg';
import PorkImg from '../../images/pork-chop-steak.jpg';
import VegeImg from '../../images/vegetable-rolls.jpg';
import GrilledImg from '../../images/fried-fish.jpg';
import FriesImg from '../../images/fries-mayonnaise.jpg';
import PastaImg from '../../images/pasta.jpg';

const menus = [
  {
    category: 'Breakfast',
    items: [
      {
        name: 'Fruit Plate',
        image: FruitImg,
        price: 'Rs. 900',
        description: 'A colorful plate of seasonal Sri Lankan fruits like papaya, pineapple, and banana.'
      },
      {
        name: 'Breads & Pastries',
        image: PastryImg,
        price: 'Rs. 750',
        description: 'Freshly baked breads and sweet pastries served with butter and jam.'
      },
      {
        name: 'Beverages',
        image: BeverageImg,
        price: 'Rs. 400',
        description: 'Fresh juices, Ceylon tea, and aromatic coffee to start your day right.'
      }
    ]
  },
  {
    category: 'Lunch',
    items: [
      {
        name: 'Tomato Soups',
        image: SoupImg,
        price: 'Rs. 850',
        description: 'Homemade creamy tomato soup seasoned with local spices, served with toasted bread.'
      },
      {
        name: 'Pork Chop Steak',
        image: PorkImg,
        price: 'Rs. 1800',
        description: 'Juicy grilled pork chop marinated in island herbs, served with sautéed vegetables.'
      },
      {
        name: 'Vegetable Roll',
        image: VegeImg,
        price: 'Rs. 250',
        description: 'Crispy Sri Lankan style vegetable rolls filled with spicy potato and vegetables.'
      }
    ]
  },
  {
    category: 'Dinner',
    items: [
      {
        name: 'Grilled Salmon',
        image: GrilledImg,
        price: 'Rs. 3200',
        description: 'Tender grilled salmon fillet served with coconut-infused rice and a lime butter sauce.'
      },
      {
        name: 'Steak & Fries',
        image: FriesImg,
        price: 'Rs. 3500',
        description: 'Premium beef steak cooked to your liking, paired with crispy fries and garden salad.'
      },
      {
        name: 'Italian Pasta',
        image: PastaImg,
        price: 'Rs. 1500',
        description: 'Sri Lankan twist on classic pasta, tossed with spicy tomato sauce and fresh herbs.'
      }
    ]
  }
];


const Menus = () => {
  return (
    <div className="menus-container">
      <div className="hero-container-menu">
        <section className="hero-menu">
          <h1>Discover Our Delicious Menu</h1>
          <p>
            Explore a variety of mouth-watering dishes crafted with the freshest ingredients and utmost care.
            From savory appetizers to indulgent main courses and delightful desserts, our menu has something to satisfy every craving.
          </p>
          <p>
            Browse through our selections, view detailed item descriptions, and find your next favorite meal.
            Whether you're dining in, taking out, or ordering for delivery, every bite promises quality and flavor you can trust.
          </p>
        </section>
        <section className="hero-img2-menu">
        </section>
      </div>
      <h1 className="menus-title">Our Menu</h1>
      <p className="menus-subtitle">Delicious dishes made with love, served all day long.</p>

      {menus.map((section, index) => (
        <div key={index} className="menu-section">
          <h2 className="menu-category">{section.category}</h2>
          <div className="menu-items">
            {section.items.map((item, idx) => (
              <div className="menu-card" key={idx}>
                <img src={item.image} alt={item.name} className="menu-image" />
                <div className="menu-details">
                  <h3>{item.name}</h3>
                  <p className="description">{item.description}</p>
                  <p className="price">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menus;
