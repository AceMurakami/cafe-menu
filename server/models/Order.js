const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  table: { type: Number, required: true },
  items: [
    {
      name: String,
      quantity: Number,
      price: Number,
    },
  ],
  status: { type: String, default: 'pending' },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Order', OrderSchema);