const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

// Mock menu data
const mockMenuData = [
  {
    id: 'item_001',
    name: 'Vegetable Rice Bowl',
    description: 'Nutritious rice bowl with seasonal vegetables, dal, and yogurt',
    price: 45.00,
    category: 'lunch',
    nutritionInfo: {
      calories: 380,
      protein: 12,
      carbohydrates: 65,
      fat: 8,
      fiber: 6
    },
    ingredients: ['Basmati Rice', 'Mixed Vegetables', 'Dal', 'Yogurt', 'Spices'],
    allergens: ['Dairy'],
    isVegetarian: true,
    isVegan: false,
    isGlutenFree: true,
    isAvailable: true
  },
  {
    id: 'item_002',
    name: 'Chicken Curry with Roti',
    description: 'Tender chicken curry served with whole wheat roti and salad',
    price: 65.00,
    category: 'lunch',
    nutritionInfo: {
      calories: 520,
      protein: 28,
      carbohydrates: 45,
      fat: 18,
      fiber: 8
    },
    ingredients: ['Chicken', 'Whole Wheat Flour', 'Onions', 'Tomatoes', 'Spices', 'Mixed Salad'],
    allergens: ['Gluten'],
    isVegetarian: false,
    isVegan: false,
    isGlutenFree: false,
    isAvailable: true
  },
  {
    id: 'item_003',
    name: 'Fresh Fruit Salad',
    description: 'Seasonal mixed fruit salad with honey dressing',
    price: 25.00,
    category: 'snack',
    nutritionInfo: {
      calories: 120,
      protein: 2,
      carbohydrates: 30,
      fat: 1,
      fiber: 4
    },
    ingredients: ['Apple', 'Banana', 'Orange', 'Grapes', 'Honey', 'Mint'],
    allergens: [],
    isVegetarian: true,
    isVegan: true,
    isGlutenFree: true,
    isAvailable: true
  },
  {
    id: 'item_004',
    name: 'Masala Dosa',
    description: 'Crispy dosa with spiced potato filling, served with sambar and chutney',
    price: 55.00,
    category: 'breakfast',
    nutritionInfo: {
      calories: 420,
      protein: 8,
      carbohydrates: 58,
      fat: 16,
      fiber: 5
    },
    ingredients: ['Rice', 'Lentils', 'Potatoes', 'Onions', 'Curry Leaves', 'Coconut'],
    allergens: [],
    isVegetarian: true,
    isVegan: true,
    isGlutenFree: true,
    isAvailable: true
  },
  {
    id: 'item_005',
    name: 'Grilled Fish with Quinoa',
    description: 'Grilled fish fillet with quinoa pilaf and steamed vegetables',
    price: 85.00,
    category: 'dinner',
    nutritionInfo: {
      calories: 450,
      protein: 32,
      carbohydrates: 35,
      fat: 15,
      fiber: 6
    },
    ingredients: ['Fish Fillet', 'Quinoa', 'Broccoli', 'Carrots', 'Bell Peppers', 'Lemon'],
    allergens: ['Fish'],
    isVegetarian: false,
    isVegan: false,
    isGlutenFree: true,
    isAvailable: true
  }
];

// Middleware
app.use(express.json());

// CORS middleware (optional, for cross-origin requests)
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// Single endpoint to get menu
app.get('/api/menu', (req, res) => {
  try {
    res.json({
      success: true,
      data: mockMenuData,
      count: mockMenuData.length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error retrieving menu data',
      error: error.message
    });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Start server
app.listen(PORT, () => {
  console.log(`Menu service running on port ${PORT}`);
  console.log(`Menu endpoint: http://localhost:${PORT}/api/menu`);
});

module.exports = app;
