import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    console.log('[DEBUG] Login attempt', { email, password });
    try {
      const response = await fetch('http://localhost:3001/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) throw new Error('Login failed');
      const data = await response.json();
      localStorage.setItem('token', data.token);
      navigate('/admin/dashboard');
    } catch (err) {
      alert('Login failed. Check credentials.');
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 py-10">
      <div className="bg-white/90 p-6 rounded-xl shadow-lg w-full max-w-sm font-sans">
        <h2 className="text-2xl font-playfair italic text-[#3E2C23] text-center mb-6">
          Admin Login
        </h2>

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="mb-4 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D9C3A1]"
        />

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="mb-5 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D9C3A1]"
        />

        <button
          onClick={handleLogin}
          className="w-full bg-[#D9C3A1] hover:bg-[#CBB291] text-[#3E2C23] italic underline font-cinzel py-2 rounded-full shadow-md transition-all duration-200"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default AdminLogin;

// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import LayoutWrapper from '../../components/LayoutWrapper'

// function AdminLogin() {
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const navigate = useNavigate()

//   const handleLogin = async () => {
//     try {
//       const response = await fetch('/api/auth/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email, password }),
//       })
//       if (!response.ok) throw new Error('Login failed')
//       const data = await response.json()
//       localStorage.setItem('token', data.token)
//       navigate('/admin/dashboard')
//     } catch (err) {
//       alert('Login failed. Check credentials.')
//     }
//   }

//   return (
//     <LayoutWrapper>
//       <div className="min-h-screen flex items-center justify-center px-4 py-10">
//         <div className="bg-white/90 p-6 rounded-xl shadow-lg w-full max-w-sm font-sans">
//           <h2 className="text-2xl font-playfair italic text-[#3E2C23] text-center mb-6">
//             Admin Login
//           </h2>

//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Email"
//             className="mb-4 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D9C3A1]"
//           />

//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="Password"
//             className="mb-5 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D9C3A1]"
//           />

//           <button
//             onClick={handleLogin}
//             className="w-full bg-[#D9C3A1] hover:bg-[#CBB291] text-[#3E2C23] italic underline font-cinzel py-2 rounded-full shadow-md transition-all duration-200"
//           >
//             Login
//           </button>
//         </div>
//       </div>
//     </LayoutWrapper>
//   )
// }

// export default AdminLogin