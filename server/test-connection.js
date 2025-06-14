const mongoose = require('mongoose');
require('dotenv').config();

async function test() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ Mongo connected successfully');

    // list all collections in the target db
    const collections = await mongoose.connection.db.listCollections().toArray();
    console.log('Collections:', collections.map(c => c.name));

    await mongoose.disconnect();
  } catch (err) {
    console.error('❌ Connection failed:', err.message);
  }
}

test();