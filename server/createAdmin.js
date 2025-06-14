const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const AdminUser = require('./models/AdminUser');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI);

async function createAdmin() {
  const email = 'admin@example.com';
  const password = 'admin123';
  const passwordHash = await bcrypt.hash(password, 10);
  const existing = await AdminUser.findOne({ email });

  if (!existing) {
    await AdminUser.create({ email, passwordHash });
    console.log('✅ Admin user created!');
  } else {
    console.log('⚠️ Admin already exists.');
  }

  mongoose.disconnect();
}

createAdmin();