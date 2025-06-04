// import React, { useState } from 'react'
// import MenuItemCard from './MenuItemCard'

// function Menu() {
//   const [menuItems] = useState([
//     {
//       id: 1,
//       name: 'Matcha Latte',
//       category: 'drink',
//       description: 'Smooth, creamy matcha with steamed milk.',
//       price: 4.5,
//       image: '/images/matcha-latte.png',
//     },
//     {
//       id: 2,
//       name: 'Iced Americano',
//       category: 'drink',
//       description: 'Chilled espresso over ice.',
//       price: 3.0,
//       image: '/images/iced-americano.png',
//     },
//     {
//       id: 3,
//       name: 'Avocado Toast',
//       category: 'food',
//       description: 'Toasted sourdough with smashed avocado & chili flakes.',
//       price: 5.5,
//       image: '/images/avocado-toast.png',
//     },
//     {
//       id: 4,
//       name: 'Fluffy Matcha Pancakes',
//       category: 'food',
//       description: 'Thick, airy matcha pancakes topped with freshcberries and maple syrup.',
//       price: 6.5,
//       image: '/images/matcha-pancakes.png',
//     }
//   ])

//   const [filter, setFilter] = useState('food')

//   const filteredItems =
//     filter === 'all' ? menuItems : menuItems.filter(item => item.category === filter)

//   return (
//     <div className="bg-[#FDEDED] min-h-screen px-4 py-6 font-[Poppins]">
//       <div className="max-w-md mx-auto">
//         <h1 className="text-3xl font-bold text-[#4E342E] text-center mb-6">
//           Explore Our Menu 🍵
//         </h1>

//         <section className="pb-6">
//           <div className="flex justify-center gap-4">
//             <button
//               className={`px-4 py-1 rounded-full font-semibold shadow transition ${
//                 filter === 'food'
//                   ? 'bg-[#F8BBD0] text-[#4E342E]'
//                   : 'bg-gray-200 text-gray-600'
//               }`}
//               onClick={() => setFilter('food')}
//             >
//               Food
//             </button>
//             <button
//               className={`px-4 py-1 rounded-full font-semibold shadow transition ${
//                 filter === 'drink'
//                   ? 'bg-[#F8BBD0] text-[#4E342E]'
//                   : 'bg-gray-200 text-gray-600'
//               }`}
//               onClick={() => setFilter('drink')}
//             >
//               Drinks
//             </button>
//           </div>
//         </section>

//         <section className="pt-6">
//           <div className="grid grid-cols-1 gap-6">
//             {filteredItems.map(item => (
//               <MenuItemCard key={item.id} item={item} />
//             ))}
//           </div>
//         </section>
//       </div>
//     </div>
//   )
// }

// export default Menu     

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import MenuItemCard from './MenuItemCard'

function Menu() {
  const [menuItems] = useState([
    {
      id: 1,
      name: 'Matcha Latte',
      category: 'drink',
      description: 'Smooth, creamy matcha with steamed milk.',
      price: 4.5,
      image: '/images/matcha-latte.png',
    },
    {
      id: 2,
      name: 'Iced Americano',
      category: 'drink',
      description: 'Chilled espresso over ice.',
      price: 3.0,
      image: '/images/iced-americano.png',
    },
    {
      id: 3,
      name: 'Avocado Toast',
      category: 'food',
      description: 'Toasted sourdough with smashed avocado & chili flakes.',
      price: 5.5,
      image: '/images/avocado-toast.png',
    },
    {
      id: 4,
      name: 'Fluffy Matcha Pancakes',
      category: 'food',
      description: 'Thick, airy matcha pancakes topped with freshcberries and maple syrup.',
      price: 6.5,
      image: '/images/matcha-pancakes.png',
    }
  ])

  const [filter, setFilter] = useState('food')

  const filteredItems =
    filter === 'all' ? menuItems : menuItems.filter(item => item.category === filter)

  return (
    <div className="relative bg-[#FDEDED] min-h-screen px-4 py-6 font-[Poppins]">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold text-[#4E342E] text-center mb-6">
          Explore Our Menu 🍵
        </h1>

        <section className="pb-6">
          <div className="flex justify-center gap-4">
            <button
              className={`px-4 py-1 rounded-full font-semibold shadow transition ${
                filter === 'food'
                  ? 'bg-[#F8BBD0] text-[#4E342E]'
                  : 'bg-gray-200 text-gray-600'
              }`}
              onClick={() => setFilter('food')}
            >
              Food
            </button>
            <button
              className={`px-4 py-1 rounded-full font-semibold shadow transition ${
                filter === 'drink'
                  ? 'bg-[#F8BBD0] text-[#4E342E]'
                  : 'bg-gray-200 text-gray-600'
              }`}
              onClick={() => setFilter('drink')}
            >
              Drinks
            </button>
          </div>
        </section>

        <section className="pt-6">
          <div className="grid grid-cols-1 gap-6">
            {filteredItems.map(item => (
              <MenuItemCard key={item.id} item={item} />
            ))}
          </div>
        </section>
      </div>

      {/* Floating Cart Button */}
      <Link
        to="/cart"
        className="fixed bottom-5 right-5 bg-[#C5E1A5] hover:bg-[#AED581] text-[#4E342E] px-4 py-2 rounded-full shadow-lg text-sm font-semibold transition z-50"
      >
        🧺 Cart
      </Link>
    </div>
  )
}

export default Menu