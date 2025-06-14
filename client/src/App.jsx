App.jsx
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Home from './views/Home/Home';
import Menu from './views/Menu/Menu';
import Cart from './views/Cart/Cart';
import Table from './views/Table/Table';

// Admin pages
import AdminLogin from './views/Admin/AdminLogin';
import AdminDashboard from './views/Admin/AdminDashboard';
import AdminMenuEditor from './views/Admin/AdminMenuEditor';
import OrderListAdmin from './views/Admin/OrderListAdmin';
import QRGenerator from './views/Admin/QRGenerator';

// Simple auth check component
const RequireAuth = ({ children }) => {
  const token = localStorage.getItem('token');
  return token ? children : <Navigate to="/admin/login" />;
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Customer routes */}
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/table/:tableId" element={<Table />} />
        {/* Admin routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="/admin/dashboard"
          element={
            <RequireAuth>
              <AdminDashboard />
            </RequireAuth>
          }
        />
        <Route
          path="/admin/menu"
          element={
            <RequireAuth>
              <AdminMenuEditor />
            </RequireAuth>
          }
        />
        <Route
          path="/admin/orders"
          element={
            <RequireAuth>
              <OrderListAdmin />
            </RequireAuth>
          }
        />
        <Route
          path="/admin/qr"
          element={
            <RequireAuth>
              <QRGenerator />
            </RequireAuth>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;