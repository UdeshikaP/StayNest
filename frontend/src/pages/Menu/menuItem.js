import React from 'react';
import './menuItem.css';

const menus = [
  {
    category: 'Breakfast',
    items: [
      {
        name: 'Classic Pancakes',
        image: 'https://source.unsplash.com/600x400/?pancakes',
        price: '$8.50',
        description: 'Fluffy pancakes served with maple syrup and berries.'
      },
      {
        name: 'Avocado Toast',
        image: 'https://source.unsplash.com/600x400/?avocado-toast',
        price: '$9.00',
        description: 'Sourdough topped with smashed avocado, poached egg & herbs.'
      }
    ]
  },
  {
    category: 'Lunch',
    items: [
      {
        name: 'Grilled Chicken Salad',
        image: 'https://source.unsplash.com/600x400/?chicken-salad',
        price: '$12.50',
        description: 'Fresh greens with grilled chicken, vinaigrette & nuts.'
      },
      {
        name: 'Cheeseburger Deluxe',
        image: 'https://source.unsplash.com/600x400/?burger',
        price: '$11.00',
        description: 'Juicy beef patty, cheese, lettuce, tomato on a brioche bun.'
      }
    ]
  },
  {
    category: 'Dinner',
    items: [
      {
        name: 'Grilled Salmon',
        image: 'https://source.unsplash.com/600x400/?grilled-salmon',
        price: '$18.00',
        description: 'Salmon fillet with lemon butter sauce and roasted veggies.'
      },
      {
        name: 'Steak & Fries',
        image: 'https://source.unsplash.com/600x400/?steak',
        price: '$22.00',
        description: 'Tender sirloin served with garlic herb fries and greens.'
      }
    ]
  }
];

const Menus = () => {
  return (
    <div className="menus-container">
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
