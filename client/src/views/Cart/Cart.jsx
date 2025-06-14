
// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import useLocalCart from '../../hooks/useLocalCart';

// function Cart() {
//   const { cart, removeFromCart, clearCart } = useLocalCart();
//   const navigate = useNavigate();
//   const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

//   const handleCheckout = async () => {
//     const table = prompt('Enter table number:');
//     if (!table) return;

//     const res = await fetch('http://localhost:3001/api/orders', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ table, items: cart }),
//     });

//     if (res.ok) {
//       alert('✅ Order placed successfully!');
//       clearCart();
//       navigate(`/table/${table}`);
//     } else {
//       alert('❌ Failed to place order.');
//     }
//   };

//   return (
//     <div className="bg-white min-h-screen w-full px-4 py-6 font-sans">
//       <div className="max-w-md mx-auto w-full">
//         <h1 className="text-3xl font-playfair italic text-[#3E2C23] text-center mb-6">
//           Your Cart 🧺
//         </h1>

//         {cart.length === 0 ? (
//           <div className="text-center text-[#5C5A57]">
//             Your cart is empty.
//             <div className="mt-4">
//               <Link
//                 to="/menu"
//                 className="inline-block bg-[#D9C3A1] hover:bg-[#CBB291] text-[#3E2C23] italic underline font-cinzel px-5 py-2 rounded-full shadow text-sm transition"
//               >
//                 Go to Menu
//               </Link>
//             </div>
//           </div>
//         ) : (
//           <div className="space-y-6">
//             {cart.map(item => (
//               <div
//                 key={item.id || item._id}
//                 className="bg-white/80 rounded-xl shadow-md p-4 text-center"
//               >
//                 <div className="w-28 h-28 mx-auto mb-3">
//                   <img
//                     src={item.image}
//                     alt={item.name}
//                     className="w-full h-full object-cover rounded"
//                   />
//                 </div>
//                 <h2 className="text-base font-bold text-[#3E2C23] font-playfair mb-1">
//                   {item.name}
//                 </h2>
//                 <p className="text-sm text-[#5C5A57]">
//                   {item.quantity} × ${item.price.toFixed(2)}
//                 </p>
//                 <button
//                   onClick={() => removeFromCart(item.id || item._id)}
//                   className="mt-2 inline-block px-4 py-1 rounded-full bg-[#D9C3A1] hover:bg-[#CBB291] text-[#3E2C23] italic underline font-cinzel text-sm shadow transition"
//                 >
//                   Remove
//                 </button>
//               </div>
//             ))}

//             {/* Total & Actions */}
//             <div className="text-right mt-4">
//               <h3 className="text-lg font-bold text-[#3E2C23]">
//                 Total: ${total.toFixed(2)}
//               </h3>
//             </div>

//             <div className="flex justify-between mt-4">
//               <button
//                 onClick={clearCart}
//                 className="bg-gray-200 text-gray-700 text-sm px-4 py-2 rounded-full hover:bg-gray-300 transition"
//               >
//                 Clear Cart
//               </button>
//               <button
//                 onClick={handleCheckout}
//                 className="bg-[#D9C3A1] hover:bg-[#CBB291] text-[#3E2C23] italic underline font-cinzel text-sm px-4 py-2 rounded-full shadow transition"
//               >
//                 Checkout
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Cart;

Cart.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useLocalCart from '../../hooks/useLocalCart';

function Cart() {
  const { cart, removeFromCart, clearCart } = useLocalCart();
  const navigate = useNavigate();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = async () => {
    const table = prompt('Enter table number:');
    if (!table) return;

    const res = await fetch('http://localhost:3001/api/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ table, items: cart }),
    });

    if (res.ok) {
      alert('✅ Order placed successfully!');
      clearCart();
      navigate(`/table/${table}`);
    } else {
      alert('❌ Failed to place order.');
    }
  };

  return (
    <div className="bg-white min-h-screen w-full px-4 py-6 font-sans">
      <div className="max-w-md mx-auto w-full">
        <h1 className="text-3xl font-playfair italic text-[#3E2C23] text-center mb-6">
          Your Cart 🧺
        </h1>

        {cart.length === 0 ? (
          <div className="text-center text-[#5C5A57]">
            Your cart is empty.
            <div className="mt-4">
              <Link
                to="/menu"
                className="inline-block bg-[#D9C3A1] hover:bg-[#CBB291] text-[#3E2C23] italic underline font-cinzel px-5 py-2 rounded-full shadow text-sm transition"
              >
                Go to Menu
              </Link>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {cart.map(item => (
              <div
                key={item.id || item._id}
                className="bg-white/80 rounded-xl shadow-md p-4 text-center"
              >
                <div className="w-28 h-28 mx-auto mb-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover rounded"
                  />
                </div>
                <h2 className="text-base font-bold text-[#3E2C23] font-playfair mb-1">
                  {item.name}
                </h2>
                <p className="text-sm text-[#5C5A57]">
                  {item.quantity} × ${item.price.toFixed(2)}
                </p>
                <button
                  onClick={() => removeFromCart(item.id || item._id)}
                  className="mt-2 inline-block px-4 py-1 rounded-full bg-[#D9C3A1] hover:bg-[#CBB291] text-[#3E2C23] italic underline font-cinzel text-sm shadow transition"
                >
                  Remove
                </button>
              </div>
            ))}

            {/* Total & Actions */}
            <div className="text-right mt-4">
              <h3 className="text-lg font-bold text-[#3E2C23]">
                Total: ${total.toFixed(2)}
              </h3>
            </div>

            <div className="flex justify-between mt-4">
              <button
                onClick={clearCart}
                className="bg-gray-200 text-gray-700 text-sm px-4 py-2 rounded-full hover:bg-gray-300 transition"
              >
                Clear Cart
              </button>
              <button
                onClick={handleCheckout}
                className="bg-[#D9C3A1] hover:bg-[#CBB291] text-[#3E2C23] italic underline font-cinzel text-sm px-4 py-2 rounded-full shadow transition"
              >
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
