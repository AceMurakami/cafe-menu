// import React, { useEffect, useState } from 'react'
// import LayoutWrapper from '../../components/LayoutWrapper'

// function OrderListAdmin() {
//   const [orders, setOrders] = useState([])
//   const [loading, setLoading] = useState(true)
//   const [error, setError] = useState(null)

//   const fetchOrders = async () => {
//     try {
//       const res = await fetch('/api/orders', {
//         headers: {
//           'Authorization': `Bearer ${localStorage.getItem('token')}`,
//         },
//       })
//       if (!res.ok) throw new Error('Failed to fetch orders')
//       const data = await res.json()
//       setOrders(data)
//     } catch (err) {
//       console.error('[ERROR] Fetching orders:', err)
//       setError(err.message)
//     } finally {
//       setLoading(false)
//     }
//   }

//   const handleMarkAsServed = async (id) => {
//     if (!confirm('Are you sure you want to mark this order as served?')) return

//     try {
//       const res = await fetch(`/api/orders/${id}`, {
//         method: 'DELETE',
//         headers: {
//           'Authorization': `Bearer ${localStorage.getItem('token')}`,
//         },
//       })
//       if (!res.ok) throw new Error('Failed to delete order')

//       setOrders((prev) => prev.filter((o) => o._id !== id))
//       alert('✅ Order marked as served!')
//     } catch (err) {
//       console.error('[ERROR] Marking as served:', err)
//       alert('❌ Failed to mark as served.')
//     }
//   }

//   useEffect(() => {
//     fetchOrders()
//   }, [])

//   return (
//     <LayoutWrapper>
//       <div className="min-h-screen flex items-start justify-center px-4 py-10">
//         <div className="bg-white/90 p-8 rounded-xl shadow-lg w-full max-w-4xl font-sans">
//           <h2 className="text-2xl font-playfair italic text-[#3E2C23] mb-6 text-center">
//             Table Orders
//           </h2>

//           {loading ? (
//             <p className="text-center text-[#3E2C23] italic">Loading...</p>
//           ) : error ? (
//             <p className="text-center text-red-600 italic">{error}</p>
//           ) : orders.length === 0 ? (
//             <p className="text-center text-[#3E2C23] italic">No orders found.</p>
//           ) : (
//             <ul className="space-y-4">
//               {orders.map((order) => (
//                 <li
//                   key={order._id}
//                   className="bg-[#fdfcf9] border border-[#d8c4a3] rounded-md p-4 shadow-sm"
//                 >
//                   <div className="font-cinzel text-[#3E2C23] text-sm">
//                     <strong>Table:</strong> {order.table}
//                   </div>
//                   <div className="text-[#3E2C23] text-sm mt-1">
//                     <strong>Items:</strong>
//                     <ul className="list-disc pl-6">
//                       {order.items.map((item, index) => (
//                         <li key={index}>
//                           {item.name} x {item.quantity}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                   <div className="text-[#3E2C23] text-sm mt-1 mb-2">
//                     <strong>Status:</strong>{' '}
//                     <span className="italic text-[#946b2d]">{order.status}</span>
//                   </div>
//                   <button
//                     onClick={() => handleMarkAsServed(order._id)}
//                     className="bg-[#D9C3A1] hover:bg-[#CBB291] text-[#3E2C23] italic underline font-cinzel text-sm px-4 py-1 rounded-full shadow transition-all duration-150"
//                   >
//                     Mark as Served
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>
//       </div>
//     </LayoutWrapper>
//   )
// }

// export default OrderListAdmin

import React, { useEffect, useState } from 'react';

function OrderListAdmin() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchOrders = async () => {
    try {
      const res = await fetch('http://localhost:3001/api/orders', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      if (!res.ok) throw new Error('Failed to fetch orders');
      const data = await res.json();
      setOrders(data);
    } catch (err) {
      console.error('[ERROR] Fetching orders:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleMarkAsServed = async (id) => {
    if (!confirm('Are you sure you want to mark this order as served?')) return;

    try {
      const res = await fetch(`http://localhost:3001/api/orders/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      if (!res.ok) throw new Error('Failed to delete order');

      setOrders((prev) => prev.filter((o) => o._id !== id));
      alert('✅ Order marked as served!');
    } catch (err) {
      console.error('[ERROR] Marking as served:', err);
      alert('❌ Failed to mark as served.');
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="min-h-screen bg-white flex items-start justify-center px-4 py-10">
      <div className="bg-white/90 p-8 rounded-xl shadow-lg w-full max-w-4xl font-sans">
        <h2 className="text-2xl font-playfair italic text-[#3E2C23] mb-6 text-center">
          Table Orders
        </h2>

        {loading ? (
          <p className="text-center text-[#3E2C23] italic">Loading...</p>
        ) : error ? (
          <p className="text-center text-red-600 italic">{error}</p>
        ) : orders.length === 0 ? (
          <p className="text-center text-[#3E2C23] italic">No orders found.</p>
        ) : (
          <ul className="space-y-4">
            {orders.map((order) => (
              <li
                key={order._id}
                className="bg-[#fdfcf9] border border-[#d8c4a3] rounded-md p-4 shadow-sm"
              >
                <div className="font-cinzel text-[#3E2C23] text-sm">
                  <strong>Table:</strong> {order.table}
                </div>
                <div className="text-[#3E2C23] text-sm mt-1">
                  <strong>Items:</strong>
                  <ul className="list-disc pl-6">
                    {order.items.map((item, index) => (
                      <li key={index}>
                        {item.name} x {item.quantity}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="text-[#3E2C23] text-sm mt-1 mb-2">
                  <strong>Status:</strong>{' '}
                  <span className="italic text-[#946b2d]">{order.status}</span>
                </div>
                <button
                  onClick={() => handleMarkAsServed(order._id)}
                  className="bg-[#D9C3A1] hover:bg-[#CBB291] text-[#3E2C23] italic underline font-cinzel text-sm px-4 py-1 rounded-full shadow transition-all duration-150"
                >
                  Mark as Served
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default OrderListAdmin;