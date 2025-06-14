// useLocalCart.js
// import { useState, useEffect } from 'react'

// const CART_KEY = 'kissa-cart'

// function useLocalCart() {
//   const [cart, setCart] = useState(() => {
//     const saved = localStorage.getItem(CART_KEY)
//     return saved ? JSON.parse(saved) : []
//   })

//   useEffect(() => {
//     localStorage.setItem(CART_KEY, JSON.stringify(cart))
//   }, [cart])

//   const addToCart = (item) => {
//     const itemId = item.id || item._id

//     setCart((prevCart) => {
//       const existing = prevCart.find((i) => (i.id || i._id) === itemId)
//       if (existing) {
//         return prevCart.map((i) =>
//           (i.id || i._id) === itemId ? { ...i, quantity: i.quantity + 1 } : i
//         )
//       }
//       return [...prevCart, { ...item, quantity: 1, id: itemId }]
//     })
//   }

//   const removeFromCart = (id) => {
//     setCart((prev) => prev.filter((i) => (i.id || i._id) !== id))
//   }

//   const clearCart = () => setCart([])

//   return {
//     cart,
//     addToCart,
//     removeFromCart,
//     clearCart,
//   }
// }

// export default useLocalCart

import { useState, useEffect } from 'react';

const CART_KEY = 'kissa-cart';

function useLocalCart() {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem(CART_KEY);
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item) => {
    const itemId = item.id || item._id;

    setCart(() => {
      const current = localStorage.getItem(CART_KEY);
      const prevCart = current ? JSON.parse(current) : [];

      const existing = prevCart.find((i) => (i.id || i._id) === itemId);
      if (existing) {
        return prevCart.map((i) =>
          (i.id || i._id) === itemId
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }

      return [...prevCart, { ...item, quantity: 1, id: itemId }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((i) => (i.id || i._id) !== id));
  };

  const clearCart = () => setCart([]);

  return {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
  };
}

export default useLocalCart;