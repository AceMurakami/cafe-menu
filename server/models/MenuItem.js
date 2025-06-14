const mongoose = require('mongoose');

const MenuItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  category: { type: String, enum: ['food', 'drink'], required: true },
  image: String, // ✅ add this line
});

module.exports = mongoose.model('MenuItem', MenuItemSchema);