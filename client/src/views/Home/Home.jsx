import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="bg-[#FDEDED] min-h-screen px-6 py-10 flex flex-col justify-center items-center font-[Poppins]">
      <h1 className="text-4xl font-bold text-[#4E342E] text-center mb-6">
        Welcome to Kissa Cafe
      </h1>
      <p className="text-[#5D6166] text-center text-base mb-8 max-w-md">
        Scan the QR code on your table or explore our digital menu below!
      </p>
      <Link
        to="/menu"
        className="bg-[#F8BBD0] text-[#4E342E] px-6 py-3 rounded-full text-sm font-semibold shadow-md hover:bg-[#F48FB1] transition"
      >
        View Menu 🍵
      </Link>
    </div>
  )
}

export default Home