const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const AdminUserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
});

AdminUserSchema.methods.validatePassword = function (password) {
  return bcrypt.compare(password, this.passwordHash);
};

module.exports = mongoose.model('AdminUser', AdminUserSchema);