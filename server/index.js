const qs = require('qs');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/auth');
const menuRoutes = require('./routes/menu');
const orderRoutes = require('./routes/orders');
const qrRoutes = require('./routes/qr'); // ✅ Ensure this file exists and is implemented

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/menu', menuRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/admin/qr', qrRoutes); // ✅ Mounted under /api/admin/qr

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch((err) => console.error('MongoDB error:', err));

app.listen(3001, () => console.log('🚀 Backend running on http://localhost:3001'));