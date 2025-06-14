const express = require('express');
const jwt = require('jsonwebtoken');
const AdminUser = require('../models/AdminUser');

const router = express.Router();

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await AdminUser.findOne({ email });
  if (!user || !(await user.validatePassword(password))) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
  res.json({ token });
});

module.exports = router;