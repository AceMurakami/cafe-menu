// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import LayoutWrapper from '../../components/LayoutWrapper';

// function Table() {
//   const { tableId } = useParams();
//   console.log("✅ Table.jsx mounted with tableId:", tableId);

//   const [menu, setMenu] = useState([]);
//   const [cart, setCart] = useState([]);

//   useEffect(() => {
//     fetch('http://localhost:3001/api/menu', {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     })
//       .then((res) => {
//         if (!res.ok) throw new Error('Menu fetch failed');
//         return res.json();
//       })
//       .then(setMenu)
//       .catch((err) => {
//         console.error("[MENU FETCH ERROR]", err);
//         alert('❌ Failed to load menu.');
//       });
//   }, []);

//   const addToCart = (item) => {
//     setCart((prev) => {
//       const existing = prev.find((i) => i._id === item._id);
//       if (existing) {
//         return prev.map((i) =>
//           i._id === item._id ? { ...i, quantity: i.quantity + 1 } : i
//         );
//       } else {
//         return [...prev, { ...item, quantity: 1 }];
//       }
//     });
//   };

//   const placeOrder = async () => {
//     try {
//       const res = await fetch('http://localhost:3001/api/orders', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           table: parseInt(tableId),
//           items: cart.map(({ name, price, quantity }) => ({ name, price, quantity })),
//         }),
//       });

//       if (!res.ok) throw new Error('Failed to place order');
//       alert('✅ Order placed successfully!');
//       setCart([]);
//     } catch (err) {
//       console.error('[ORDER ERROR]', err);
//       alert('❌ Failed to place order');
//     }
//   };

//   return (
//     <LayoutWrapper>
//       <div className="min-h-screen p-8">
//         <h1 className="text-2xl font-playfair italic mb-6 text-center text-[#3E2C23]">
//           Table {tableId} Menu
//         </h1>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {menu.map((item) => (
//             <div
//               key={item._id}
//               className="border border-[#D9C3A1] bg-white p-4 rounded-xl shadow-md"
//             >
//               <h3 className="font-cinzel text-[#3E2C23] text-lg">{item.name}</h3>
//               <p className="text-[#3E2C23] text-sm italic">{item.description}</p>
//               <p className="text-[#946b2d] mt-1">${item.price}</p>
//               <button
//                 className="mt-2 bg-[#D9C3A1] hover:bg-[#CBB291] text-[#3E2C23] italic px-4 py-1 rounded-full text-sm"
//                 onClick={() => addToCart(item)}
//               >
//                 Add to Cart
//               </button>
//             </div>
//           ))}
//         </div>

//         {cart.length > 0 && (
//           <div className="mt-8 border-t pt-6">
//             <h2 className="text-xl font-playfair italic mb-4 text-[#3E2C23]">Your Order</h2>
//             <ul className="text-[#3E2C23] space-y-2">
//               {cart.map((item) => (
//                 <li key={item._id}>
//                   {item.name} x {item.quantity} = ${(item.price * item.quantity).toFixed(2)}
//                 </li>
//               ))}
//             </ul>
//             <button
//               onClick={placeOrder}
//               className="mt-4 bg-[#D9C3A1] hover:bg-[#CBB291] text-[#3E2C23] italic underline font-cinzel px-4 py-2 rounded-full shadow-md"
//             >
//               Place Order
//             </button>
//           </div>
//         )}
//       </div>
//     </LayoutWrapper>
//   );
// }

// export default Table;

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Table() {
  const { tableId } = useParams();
  const [menu, setMenu] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/menu')
      .then((res) => res.json())
      .then(setMenu)
      .catch((err) => {
        console.error('[MENU FETCH ERROR]', err);
      });
  }, []);

  const addToCart = (item) => {
    setCart((prev) => {
      const existing = prev.find((i) => i._id === item._id);
      if (existing) {
        return prev.map((i) =>
          i._id === item._id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        return [...prev, { ...item, quantity: 1 }];
      }
    });
  };

  const placeOrder = async () => {
    try {
      const res = await fetch('http://localhost:3001/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          table: parseInt(tableId),
          items: cart.map(({ name, price, quantity }) => ({ name, price, quantity })),
        }),
      });

      if (!res.ok) throw new Error('Failed to place order');
      alert('✅ Order placed successfully!');
      setCart([]);
    } catch (err) {
      console.error('[ORDER ERROR]', err);
      alert('❌ Failed to place order');
    }
  };

  const total = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <div className="min-h-screen bg-white p-6 font-sans">
      <h1 className="text-3xl font-playfair italic text-center text-[#3E2C23] mb-8">
        Welcome to Table {tableId}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {menu.map((item) => (
          <div
            key={item._id}
            className="border border-[#D9C3A1] bg-white p-4 rounded-xl shadow-md"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-32 object-cover rounded mb-3"
            />
            <h3 className="font-playfair text-lg text-[#3E2C23]">{item.name}</h3>
            <p className="text-sm text-[#5C5A57] italic">{item.description}</p>
            <p className="text-[#946b2d] mt-1 font-semibold">${item.price.toFixed(2)}</p>
            <button
              className="mt-3 bg-[#D9C3A1] hover:bg-[#CBB291] text-[#3E2C23] italic px-4 py-1 rounded-full text-sm shadow"
              onClick={() => addToCart(item)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {cart.length > 0 && (
        <div className="bg-white/90 border border-[#E5E3DD] rounded-xl shadow p-6 max-w-lg mx-auto">
          <h2 className="text-xl font-playfair italic mb-4 text-[#3E2C23] text-center">
            Your Order
          </h2>
          <ul className="divide-y divide-[#E5E3DD] text-[#3E2C23]">
            {cart.map((item) => (
              <li key={item._id} className="py-2 flex justify-between">
                <span>{item.name} × {item.quantity}</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 text-right text-lg font-semibold text-[#3E2C23]">
            Total: ${total.toFixed(2)}
          </div>
          <button
            onClick={placeOrder}
            className="mt-5 w-full bg-[#D9C3A1] hover:bg-[#CBB291] text-[#3E2C23] italic underline font-cinzel py-2 rounded-full shadow transition"
          >
            Place Order
          </button>
        </div>
      )}
    </div>
  );
}

export default Table;