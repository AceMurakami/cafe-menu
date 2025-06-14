// const express = require('express');
// const QRCode = require('qrcode');
// const verifyToken = require('../middleware/auth');

// const router = express.Router();

// router.get('/', verifyToken, async (req, res) => {
//   const { table } = req.query;

//   if (!table) {
//     return res.status(400).json({ message: 'Missing table number' });
//   }

//   const url = `http://localhost:5173/?table=${table}`;

//   try {
//     const qrImage = await QRCode.toBuffer(url);
//     res.set('Content-Type', 'image/png');
//     res.send(qrImage);
//   } catch (err) {
//     console.error('[QR ERROR]', err);
//     res.status(500).json({ message: 'Failed to generate QR code' });
//   }
// });

// module.exports = router;

const express = require('express');
const QRCode = require('qrcode');
const verifyToken = require('../middleware/auth');

const router = express.Router();

router.get('/', verifyToken, async (req, res) => {
  const table = req.query.table;
  if (!table) return res.status(400).send('Missing table number');

  const url = `${process.env.FRONTEND_BASE_URL}/table/${table}`;
  try {
    const qr = await QRCode.toBuffer(url);
    res.set('Content-Type', 'image/png');
    res.send(qr);
  } catch (err) {
    console.error('[QR ERROR]', err);
    res.status(500).send('QR generation failed');
  }
});

module.exports = router;