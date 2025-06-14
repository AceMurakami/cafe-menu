MenuItemCard.jsx
import React from 'react';
import useLocalCart from '../../hooks/useLocalCart';

function MenuItemCard({ item }) {
  const { addToCart } = useLocalCart();

  const handleAdd = () => {
    const payload = {
      id: item._id || item.id, // ensure consistent ID
      name: item.name,
      description: item.description,
      price: item.price,
      image: item.image,
      category: item.category,
    };
    addToCart(payload);
  };

  return (
    <div className="bg-white/70 rounded-lg shadow-md p-3 font-sans w-full text-center mb-4">
      {item.image && (
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-20 object-cover rounded mb-2"
        />
      )}

      <h2 className="text-sm font-bold text-[#3E2C23] font-playfair mb-1">
        {item.name}
      </h2>

      <p className="text-xs text-[#5C5A57] leading-snug mb-2">
        {item.description}
      </p>

      <div className="flex items-center justify-between mt-1">
        <span className="text-sm text-[#3E2C23] font-medium">
          ${item.price.toFixed(2)}
        </span>
        <button
          className="bg-[#D9C3A1] hover:bg-[#CBB291] text-[#3E2C23] italic underline font-cinzel text-xs px-3 py-1 rounded-full shadow transition"
          onClick={handleAdd}
        >
          Add 🧺
        </button>
      </div>
    </div>
  );
}

export default MenuItemCard;
