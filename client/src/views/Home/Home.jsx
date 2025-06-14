// import React from 'react'
// import { Link } from 'react-router-dom'
// import LayoutWrapper from '../../components/LayoutWrapper'

// function Home() {
//   return (
//     <LayoutWrapper>
//       <div className="flex flex-col justify-center items-center text-center min-h-screen px-4 py-10 space-y-6">
//       <h1 className="text-5xl font-playfair italic text-[#3E2C23]">
//   Welcome to Kissa Cafe
// </h1>

// <p className="mt-4 text-lg font-sans text-[#5C5A57] max-w-md text-center">
//   Explore our artisanal menu of drinks & treats.
// </p>

// <Link
//   to="/menu"
//   className="mt-6 inline-block bg-[#D9C3A1] hover:bg-[#DDC9AE] text-[#3E2C23] italic underline font-cinzel px-6 py-3 rounded-full text-base font-medium shadow-md transition-all duration-200"
// >
//   View Menu <span className="ml-1">🍵</span>
// </Link>
//       </div>
//     </LayoutWrapper>
//   )
// }

// export default Home

import React from 'react'
import { Link } from 'react-router-dom'
import { User } from 'lucide-react'

function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#3E2C23] relative overflow-hidden">
      {/* Top Navigation */}
      <div className="absolute top-0 left-0 w-full flex justify-between items-center px-6 py-5 z-10">
        {/* Left: Menu */}
        <Link
          to="/menu"
          className="text-[#3E2C23] italic underline font-playfair text-2xl"
        >
          Menu
        </Link>

        {/* Right: Login Icon */}
        <Link
          to="/admin/dashboard"
          className="w-12 h-12 rounded-full border border-[#3E2C23] flex items-center justify-center"
        >
          <User size={28} stroke="#3E2C23" />
        </Link>
      </div>

      {/* Center Content */}
      <div className="flex items-center justify-center flex-col text-center mt-[6.5rem] px-4">
        <h1 className="text-3xl md:text-4xl font-playfair italic font-bold mb-2">
          KISSA CAFE – WARSAW
        </h1>
        <p className="text-sm italic mb-4">
          Artisanal matcha & mindful bites — crafted for calm.
        </p>

        {/* Inserted Image */}
        <img
          src="/images/kissa-cafe.jpg"
          alt="Kissa Cafe Interior"
          className="w-full max-w-sm rounded-lg shadow-md"
        />
      </div>

      {/* Contact Section */}
      <div className="mt-12 px-6 md:px-12 lg:px-24 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-[#3E2C23]">
          {/* Contact Details */}
          <div>
            <h3 className="text-lg font-bold mb-2">Contact details</h3>
            <p>Bokserska 54, 02-690, Warsaw, Poland</p>
            <p className="mt-2">857 563 777</p>
            <p className="mt-2">kissa.warsaw@gmail.com</p>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="text-lg font-bold mb-2">Working hours</h3>
            <ul className="space-y-1">
              {[
                ['Monday', '08:00 - 22:00'],
                ['Tuesday', '08:00 - 22:00'],
                ['Wednesday', '08:00 - 22:00'],
                ['Thursday', '08:00 - 22:00'],
                ['Friday', '08:00 - 22:00', true],
                ['Saturday', '09:00 - 22:00'],
                ['Sunday', '09:00 - 22:00'],
              ].map(([day, hours, bold]) => (
                <li key={day} className={bold ? 'font-bold' : ''}>
<span className="inline-block w-28">{day}</span>                  {hours}
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Map */}
          <div>
            <h3 className="text-lg font-bold mb-2">We are on social networks</h3>
            <p className="mb-1">📘 Facebook</p>
            <p className="mb-4">📷 Instagram</p>

            <h3 className="text-lg font-bold mb-2">On the map</h3>
            <iframe
              src="https://www.google.com/maps?q=Bokserska+54,+Warsaw,+Poland&output=embed"
              width="100%"
              height="180"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Cafe Map"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home