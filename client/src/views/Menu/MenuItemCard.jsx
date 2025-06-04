import React from 'react'
import useLocalCart from '../../hooks/useLocalCart'

function MenuItemCard({ item }) {
  const { addToCart } = useLocalCart()

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-[1.01] transform transition w-full">
      <div className="w-full h-[160px] bg-white flex items-end justify-center overflow-hidden pt-4">
        <img
          src={item.image}
          alt={item.name}
          className="max-h-full object-contain"
        />
      </div>

      <div className="p-4">
        <h2 className="text-lg font-bold text-[#4E342E]">{item.name}</h2>
        <p className="text-sm text-[#607D8B] mt-1">{item.description}</p>

        <div className="mt-4 flex items-center justify-between">
          <span className="font-bold text-base text-[#4E342E]">
            ${item.price.toFixed(2)}
          </span>
          <button
            className="bg-[#A5D6A7] text-[#4E342E] px-4 py-1 rounded-full shadow hover:bg-[#B2D89D] transition text-sm"
            onClick={() => {
              console.log('Add clicked for:', item.name)
              addToCart(item)
            }}
          >
            Add 🧺
          </button>
        </div>
      </div>
    </div>
  )
}

export default MenuItemCard