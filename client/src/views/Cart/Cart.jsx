import React from 'react'
import useLocalCart from '../../hooks/useLocalCart'
import { Link } from 'react-router-dom'

function Cart() {
  const { cart, removeFromCart, clearCart } = useLocalCart()
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="min-h-screen bg-[#FDEDED] px-4 py-6 font-[Poppins]">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold text-[#4E342E] text-center mb-6">
          Your Cart 🧺
        </h1>

        {cart.length === 0 ? (
          <div className="text-center text-[#607D8B]">
            Your cart is empty.
            <div className="mt-4">
              <Link
                to="/menu"
                className="bg-[#F8BBD0] text-[#4E342E] px-4 py-2 rounded-full font-semibold shadow hover:bg-[#F48FB1] transition"
              >
                Go to Menu
              </Link>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="bg-[#FDEDED] rounded-xl shadow-md p-4 text-center"
              >
                <div className="w-32 h-32 flex items-center justify-center mx-auto mb-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover rounded"
                  />
                </div>
                <h2 className="text-lg font-bold text-[#4E342E] mb-1">
                  {item.name}
                </h2>
                <p className="text-sm text-[#607D8B]">
                  {item.quantity} × ${item.price.toFixed(2)}
                </p>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="mt-2 inline-block px-4 py-1 rounded-full bg-[#F8BBD0] text-[#4E342E] text-sm font-medium shadow hover:bg-[#F48FB1] transition"
                >
                  Remove
                </button>
              </div>
            ))}

            <div className="text-right mt-4">
              <h3 className="text-lg font-bold text-[#4E342E]">
                Total: ${total.toFixed(2)}
              </h3>
            </div>

            <div className="flex justify-between mt-2">
              <button
                onClick={clearCart}
                className="bg-gray-200 text-gray-700 text-sm px-4 py-2 rounded-full hover:bg-gray-300 transition"
              >
                Clear Cart
              </button>
              <button
                onClick={() => alert('Checkout coming soon!')}
                className="bg-[#C5E1A5] text-[#4E342E] text-sm px-4 py-2 rounded-full shadow hover:bg-[#B2D89D] transition"
              >
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart

