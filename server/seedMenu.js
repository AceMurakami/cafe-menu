// seedMenu.js
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const MenuItem = require('./models/MenuItem');

dotenv.config();

const items = [
  {
    name: 'Matcha Latte',
    description: 'Smooth, creamy matcha with steamed milk.',
    price: 4.5,
    category: 'drink',
    image: '/images/matcha-latte.jpg',
  },
  {
    name: 'Iced Americano',
    description: 'Chilled espresso over ice.',
    price: 3.0,
    category: 'drink',
    image: '/images/iced-americano.png',
  },
  {
    name: 'Avocado Toast',
    description: 'Toasted sourdough with smashed avocado & chili flakes.',
    price: 5.5,
    category: 'food',
    image: '/images/avocado-toast.png',
  },
  {
    name: 'Fluffy Matcha Pancakes',
    description: 'Thick, airy matcha pancakes topped with berries & syrup.',
    price: 6.5,
    category: 'food',
    image: '/images/matcha-pancakes.png',
  },
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('🌿 Connected to MongoDB');

    await MenuItem.deleteMany({});
    await MenuItem.insertMany(items);
    console.log('✅ Menu seeded');

    process.exit();
  } catch (err) {
    console.error('❌ Seed failed', err);
    process.exit(1);
  }
}

seed();