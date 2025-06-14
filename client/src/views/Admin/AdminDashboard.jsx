// import React from 'react'
// import { Link } from 'react-router-dom'
// import LayoutWrapper from '../../components/LayoutWrapper'

// function AdminDashboard() {
//   return (
//     <LayoutWrapper>
//       <div className="min-h-screen flex items-center justify-center px-4 py-10">
//         <div className="bg-white/90 p-8 rounded-xl shadow-lg w-full max-w-md font-sans text-center">
//           <h1 className="text-2xl font-playfair italic text-[#3E2C23] mb-6">Admin Dashboard</h1>

         
//           <div className="flex flex-col gap-4">
//             <Link
//               className="block w-full bg-[#D9C3A1] hover:bg-[#CBB291] text-[#3E2C23] py-2 rounded-full shadow-md italic underline font-cinzel transition-all duration-200"
//               to="/admin/menu"
//             >
//               Manage Menu
//             </Link>

//             <Link
//               className="block w-full bg-[#D9C3A1] hover:bg-[#CBB291] text-[#3E2C23] py-2 rounded-full shadow-md italic underline font-cinzel transition-all duration-200"
//               to="/admin/orders"
//             >
//               View Orders
//             </Link>

//             <Link
//               className="block w-full bg-[#D9C3A1] hover:bg-[#CBB291] text-[#3E2C23] py-2 rounded-full shadow-md italic underline font-cinzel transition-all duration-200"
//               to="/admin/qr"
//             >
//               Generate QR Code
//             </Link>
//           </div>
//         </div>
//       </div>
//     </LayoutWrapper>
//   )
// }

// export default AdminDashboard


import React from 'react';
import { Link } from 'react-router-dom';

function AdminDashboard() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 py-10">
      <div className="bg-white/90 p-8 rounded-xl shadow-lg w-full max-w-md font-sans text-center">
        <h1 className="text-2xl font-playfair italic text-[#3E2C23] mb-6">
          Admin Dashboard
        </h1>

        <div className="flex flex-col space-y-4">
          <div>
            <Link
              to="/admin/menu"
              className="block w-full bg-[#D9C3A1] hover:bg-[#CBB291] text-[#3E2C23] py-2 rounded-full shadow-md italic underline font-cinzel transition-all duration-200"
            >
              Manage Menu
            </Link>
          </div>
          <div>
            <Link
              to="/admin/orders"
              className="block w-full bg-[#D9C3A1] hover:bg-[#CBB291] text-[#3E2C23] py-2 rounded-full shadow-md italic underline font-cinzel transition-all duration-200"
            >
              View Orders
            </Link>
          </div>
          <div>
            <Link
              to="/admin/qr"
              className="block w-full bg-[#D9C3A1] hover:bg-[#CBB291] text-[#3E2C23] py-2 rounded-full shadow-md italic underline font-cinzel transition-all duration-200"
            >
              Generate QR Code
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;