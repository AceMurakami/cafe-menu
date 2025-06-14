
// import React, { useEffect, useState } from 'react';

// function AdminMenuEditor() {
//   const [menu, setMenu] = useState([]);
//   const [form, setForm] = useState({ name: '', description: '', price: '', category: '' });

//   const fetchMenu = async () => {
//     try {
//       const res = await fetch('/api/menu', {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem('token')}`,
//         },
//       });
//       if (!res.ok) throw new Error('Unauthorized');
//       const data = await res.json();
//       setMenu(data);
//     } catch (err) {
//       console.error('Failed to fetch menu:', err);
//       setMenu([]);
//     }
//   };

//   const handleSubmit = async () => {
//     try {
//       await fetch('/api/menu', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${localStorage.getItem('token')}`,
//         },
//         body: JSON.stringify(form),
//       });
//       fetchMenu();
//       setForm({ name: '', description: '', price: '', category: '' });
//     } catch (err) {
//       console.error('Failed to submit menu item:', err);
//     }
//   };

//   useEffect(() => {
//     fetchMenu();
//   }, []);

//   return (
//     <div className="min-h-screen bg-white flex items-start justify-center px-4 py-10">
//       <div className="bg-white/90 p-8 rounded-xl shadow-lg w-full max-w-2xl font-sans">
//         <h2 className="text-2xl font-playfair italic text-[#3E2C23] mb-6 text-center">
//           Edit Menu
//         </h2>

//         <div className="grid gap-4 mb-8">
//           <input
//             type="text"
//             placeholder="Name"
//             value={form.name}
//             onChange={(e) => setForm({ ...form, name: e.target.value })}
//             className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D9C3A1]"
//           />
//           <input
//             type="text"
//             placeholder="Description"
//             value={form.description}
//             onChange={(e) => setForm({ ...form, description: e.target.value })}
//             className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D9C3A1]"
//           />
//           <input
//             type="number"
//             placeholder="Price"
//             value={form.price}
//             onChange={(e) => setForm({ ...form, price: e.target.value })}
//             className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D9C3A1]"
//           />
//           <select
//             value={form.category}
//             onChange={(e) => setForm({ ...form, category: e.target.value })}
//             className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D9C3A1]"
//           >
//             <option value="">Select Category</option>
//             <option value="food">Food</option>
//             <option value="drink">Drink</option>
//           </select>

//           <button
//             onClick={handleSubmit}
//             className="bg-[#D9C3A1] hover:bg-[#CBB291] text-[#3E2C23] italic underline font-cinzel px-4 py-2 rounded-full shadow-md transition-all duration-200"
//           >
//             Add Item
//           </button>
//         </div>

//         <ul className="space-y-3">
//           {menu.map((item) => (
//             <li
//               key={item._id}
//               className="border-b pb-2 text-[#3E2C23] font-cinzel text-sm"
//             >
//               <span className="font-semibold">{item.name}</span> - ${item.price}{' '}
//               <span className="italic text-gray-600">({item.category})</span>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default AdminMenuEditor;

import React, { useEffect, useState } from 'react';

function AdminMenuEditor() {
  const [menu, setMenu] = useState([]);
  const [form, setForm] = useState({ name: '', description: '', price: '', category: '' });

  const fetchMenu = async () => {
    try {
      const res = await fetch('/api/menu', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      if (!res.ok) throw new Error('Unauthorized');
      const data = await res.json();
      setMenu(data);
    } catch (err) {
      console.error('Failed to fetch menu:', err);
      setMenu([]);
    }
  };

  const handleSubmit = async () => {
    try {
      await fetch('/api/menu', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(form),
      });
      fetchMenu();
      setForm({ name: '', description: '', price: '', category: '' });
    } catch (err) {
      console.error('Failed to submit menu item:', err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`/api/menu/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      fetchMenu();
    } catch (err) {
      console.error('Failed to delete menu item:', err);
    }
  };

  const handleEdit = (item) => {
    setForm(item);
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  return (
    <div className="min-h-screen bg-white flex items-start justify-center px-4 py-10">
      <div className="bg-white/90 p-8 rounded-xl shadow-lg w-full max-w-2xl font-sans">
        <h2 className="text-2xl font-playfair italic text-[#3E2C23] mb-6 text-center">
          Edit Menu
        </h2>

        <div className="grid gap-4 mb-8">
          <input
            type="text"
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D9C3A1]"
          />
          <input
            type="text"
            placeholder="Description"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D9C3A1]"
          />
          <input
            type="number"
            placeholder="Price"
            value={form.price}
            onChange={(e) => setForm({ ...form, price: e.target.value })}
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D9C3A1]"
          />
          <select
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D9C3A1]"
          >
            <option value="">Select Category</option>
            <option value="food">Food</option>
            <option value="drink">Drink</option>
          </select>

          <button
            onClick={handleSubmit}
            className="bg-[#D9C3A1] hover:bg-[#CBB291] text-[#3E2C23] italic underline font-cinzel px-4 py-2 rounded-full shadow-md transition-all duration-200"
          >
            Add Item
          </button>
        </div>

        <ul className="space-y-4">
          {menu.map((item) => (
            <li
              key={item._id}
              className="border-b pb-4 text-[#3E2C23] font-cinzel text-sm flex justify-between items-start"
            >
              <div>
                <div className="font-semibold">{item.name} - ${item.price}</div>
                <div className="italic text-gray-600 mb-1">({item.category})</div>
                <div className="text-sm text-[#5C5A57]">{item.description}</div>
              </div>
              <div className="flex flex-col gap-2 items-end">
                <button
                  onClick={() => handleEdit(item)}
                  className="px-3 py-1 text-sm bg-[#E5EFFF] text-[#1E3A8A] font-medium rounded-full hover:bg-[#dbeafe] shadow-sm transition"
                >
                  ✏️ Edit
                </button>
                <button
                  onClick={() => handleDelete(item._id)}
                  className="px-3 py-1 text-sm bg-[#FFECEC] text-[#B91C1C] font-medium rounded-full hover:bg-[#fca5a5] shadow-sm transition"
                >
                  🗑️ Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AdminMenuEditor;