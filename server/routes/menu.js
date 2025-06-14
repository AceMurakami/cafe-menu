// const express = require('express');
// const MenuItem = require('../models/MenuItem');
// const verifyToken = require('../middleware/auth');

// const router = express.Router();

// // GET /api/menu - Get all menu items (admin only)
// router.get('/', verifyToken, async (req, res) => {
//     console.log('✅ GET /api/menu called');
//     const items = await MenuItem.find();
//     res.json(items);
//   });

// // POST /api/menu - Create a new menu item
// router.post('/', verifyToken, async (req, res) => {
//   const item = new MenuItem(req.body);
//   await item.save();
//   res.status(201).json(item);
// });

// // PUT /api/menu/:id - Update an existing menu item
// router.put('/:id', verifyToken, async (req, res) => {
//   const updated = await MenuItem.findByIdAndUpdate(req.params.id, req.body, { new: true });
//   res.json(updated);
// });

// // DELETE /api/menu/:id - Delete a menu item
// router.delete('/:id', verifyToken, async (req, res) => {
//   await MenuItem.findByIdAndDelete(req.params.id);
//   res.status(204).send();
// });

// module.exports = router;

const express = require('express');
const MenuItem = require('../models/MenuItem');
const verifyToken = require('../middleware/auth');

const router = express.Router();

// ✅ PUBLIC for customers
router.get('/', async (req, res) => {
  try {
    const menu = await MenuItem.find().sort({ category: 1, name: 1 });
    res.json(menu);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch menu' });
  }
});

// 🔐 Protected for admin only
router.post('/', verifyToken, async (req, res) => {
  const item = await MenuItem.create(req.body);
  res.status(201).json(item);
});

router.patch('/:id', verifyToken, async (req, res) => {
  const updated = await MenuItem.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

router.delete('/:id', verifyToken, async (req, res) => {
  await MenuItem.findByIdAndDelete(req.params.id);
  res.sendStatus(204);
});

module.exports = router;