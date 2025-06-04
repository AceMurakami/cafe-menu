import { useState, useEffect } from 'react'

const CART_KEY = 'kissa-cart'

function useLocalCart() {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem(CART_KEY)
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    console.log('Cart updated → syncing to localStorage:', cart)
    localStorage.setItem(CART_KEY, JSON.stringify(cart))
  }, [cart])

  const addToCart = (item) => {
    console.log('ADDING TO CART:', item)

    setCart((prev) => {
      const exists = prev.find((i) => i.id === item.id)
      if (exists) {
        console.log('Item exists, increasing quantity.')
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        )
      }

      console.log('New item, adding with quantity 1.')
      return [...prev, { ...item, quantity: 1 }]
    })
  }

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((i) => i.id !== id))
  }

  const clearCart = () => setCart([])

  return {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
  }
}

export default useLocalCart