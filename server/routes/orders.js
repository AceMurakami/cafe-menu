

// // routes/orders.js
// const express = require('express');
// const Order = require('../models/Order');
// const verifyToken = require('../middleware/auth');

// const router = express.Router();

// router.post('/', async (req, res) => {
//   const { table, items } = req.body;
//   if (!table || !Array.isArray(items)) {
//     return res.status(400).json({ message: 'Invalid data' });
//   }

//   const order = await Order.create({ table, items });
//   res.status(201).json(order);
// });

// router.get('/', verifyToken, async (req, res) => {
//   const orders = await Order.find().sort({ createdAt: -1 });
//   res.json(orders);
// });

// router.delete('/:id', verifyToken, async (req, res) => {
//   console.log('DELETE request received for order:', req.params.id);
//   try {
//     const deleted = await Order.findByIdAndDelete(req.params.id);
//     if (!deleted) return res.status(404).json({ message: 'Order not found' });
//     res.sendStatus(204);
//   } catch (err) {
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// module.exports = router; // ✅ ensure this is at the bottom

const express = require('express');
const Order = require('../models/Order');
const QRCode = require('qrcode');
const verifyToken = require('../middleware/auth');

const router = express.Router();

// POST /api/orders — Customer creates order
router.post('/', async (req, res) => {
  try {
    const { table, items } = req.body;
    if (!table || !Array.isArray(items)) {
      return res.status(400).json({ message: 'Invalid data' });
    }

    const order = await Order.create({ table, items });
    res.status(201).json(order);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// GET /api/orders — Admin fetches all orders
router.get('/', verifyToken, async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: 'Failed to retrieve orders' });
  }
});

// DELETE /api/orders/:id — Admin deletes an order
router.delete('/:id', verifyToken, async (req, res) => {
  console.log('DELETE request received for order:', req.params.id);
  try {
    const deleted = await Order.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Order not found' });
    res.sendStatus(204);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// GET /api/orders/qr?table=9 — Generate QR code for table
router.get('/qr', verifyToken, async (req, res) => {
  const table = req.query.table;
  if (!table) return res.status(400).send('Table number required');

  const qrData = `http://localhost:5173/table/${table}`;

  try {
    const qr = await QRCode.toBuffer(qrData);
    res.setHeader('Content-Type', 'image/png');
    res.send(qr);
  } catch (err) {
    res.status(500).send('Failed to generate QR');
  }
});

module.exports = router;