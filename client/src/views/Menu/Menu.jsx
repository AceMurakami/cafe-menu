Menu.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MenuItemCard from './MenuItemCard';

function Menu() {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/menu')
      .then((res) => res.json())
      .then((data) => {
        console.log('✅ Menu fetched:', data);
        setMenuItems(data);
      })
      .catch((err) => {
        console.error('❌ Failed to fetch menu:', err);
      });
  }, []);

  const drinks = menuItems.filter(item => item.category === 'drink');
  const food = menuItems.filter(item => item.category === 'food');

  return (
    <div className="bg-white min-h-screen w-full font-sans px-4 py-6">
      <div className="max-w-lg mx-auto w-full relative">
        <div className="pt-5 mb-4">
          <h1 className="text-3xl font-playfair italic text-[#3E2C23] text-center leading-snug mb-2">
            Explore Our Menu 🍵
          </h1>
          <div className="text-right mb-6">
            <Link
              to="/cart"
              className="bg-[#D9C3A1] hover:bg-[#CBB291] text-[#3E2C23] italic underline font-cinzel px-5 py-2 rounded-full shadow-md text-sm font-medium transition-all inline-block"
            >
              🧺 View Cart
            </Link>
          </div>
        </div>

        {/* Drinks Section */}
        {drinks.length > 0 && (
          <>
            <h2 className="text-lg text-[#3E2C23] font-cinzel font-semibold mb-2 border-b border-[#E5E3DD] pb-1">
              🥤 Drinks
            </h2>
            <div className="mb-8">
              {drinks.map((item) => (
                <MenuItemCard key={item._id} item={item} />
              ))}
            </div>
          </>
        )}

        {/* Food Section */}
        {food.length > 0 && (
          <>
            <h2 className="text-lg text-[#3E2C23] font-cinzel font-semibold mb-2 border-b border-[#E5E3DD] pb-1">
              🍽️ Food
            </h2>
            <div className="mb-8">
              {food.map((item) => (
                <MenuItemCard key={item._id} item={item} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Menu;

