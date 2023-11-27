// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;
 

 


// Connect to MongoDB
mongoose.connect('mongodb+srv://kamesh:Kamesh007@cluster0.sguw7ny.mongodb.net/foodparadise', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Create a mongoose schema and model for the user
const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
});

const User = mongoose.model('User', userSchema);

// Middleware to parse JSON requests
app.use(bodyParser.json());
app.use(cors());

// Registration route
app.post('/api/register', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create a new user
    const newUser = new User({ username, email, password });
    await newUser.save();

    res.status(201).json({ message: 'Registration successful' });
  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Login route
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Check if the password is correct
    if (user.password !== password) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});
const restaurants = [
  {
    "id": 1,
    "name": 'Tasty Bites',
    "location": '123 Main Street, Cityville',
    "cuisine": 'Italian',
    "rating": 4.5,
    "image": "https://img.freepik.com/free-photo/delicious-pakistani-food-with-tomato-sauce_23-2148825164.jpg",
  },
  {
    "id": 2,
    "name": "Spice Paradise",
    "location": "456 Oak Avenue, Townsville",
    "cuisine": "Indian",
    "rating": 4.2,
    "image": "https://img.freepik.com/free-photo/close-up-delicious-asian-food_23-2150535861.jpg"
  },
  {
    "id": 3,
    "name": "Sushi Haven",
    "location": "789 Pine Road, Villagetown",
    "cuisine": "Japanese",
    "rating": 4.8,
    "image": "https://img.freepik.com/free-photo/freshness-cultures-plate-gourmet-seafood-meal-generated-by-artificial-intelligence_25030-67223.jpg"
  },
  {
    "id": 4,
    "name": "Mamma Mia Pizzeria",
    "location": "101 Elm Lane, Boroughburg",
    "cuisine": "Pizza",
    "rating": 4,
    "image": "https://img.freepik.com/free-photo/freshly-baked-pizza-rustic-wooden-table-generated-by-ai_24640-82021.jpg"
  },
  {
    "id": 5,
    "name": "Grill Master BBQ",
    "location": "202 Cedar Street, Hamlet City",
    "cuisine": "Barbecue",
    "rating": 4.6,
    "image": "https://img.freepik.com/free-photo/hot-grilled-spare-ribs-with-barbecue-sauce-with-fire-ai-generative_123827-23821.jpg"
  },
  {
    "id": 6,
    "name": "Cafe Serenity",
    "location": "303 Maple Drive, Tranquil Town",
    "cuisine": "Cafe",
    "rating": 4.3,
    "image": "https://img.freepik.com/free-photo/cup-coffee-with-heart-drawn-foam_1286-70.jpg?1"
  },
  {
    "id": 7,
    "name": "Ocean Fresh Seafood",
    "location": "404 Beach Boulevard, Coastal City",
    "cuisine": "Seafood",
    "rating": 4.7,
    "image": "https://img.freepik.com/free-photo/korean-fish-cake-vegetable-soup-table_1150-43010.jpg"
  },
  {
    "id": 8,
    "name": "Golden Wok",
    "location": "505 Silk Street, Chinatown",
    "cuisine": "Chinese",
    "rating": 4.1,
    "image": "https://img.freepik.com/free-photo/stir-fried-pork-vegetables-plate-with-chopsticks-generated-by-ai_188544-55572.jpg"
  },
  {
    "id": 9,
    "name": "Mediterranean Delight",
    "location": "606 Olive Lane, Meditown",
    "cuisine": "Mediterranean",
    "rating": 4.4,
    "image": "https://img.freepik.com/free-photo/fresh-greek-salad-with-mozzarella-olives-generated-by-ai_188544-24663.jpg"
  },
  {
    "id": 10,
    "name": "Street Tacos Express",
    "location": "707 Pepper Plaza, Salsaville",
    "cuisine": "Mexican",
    "rating": 4.9,
    "image": "https://img.freepik.com/free-photo/delicious-tacos-table_23-2150770477.jpg"
  },
  {
    "id": 11,
    "name": "Vegetarian Oasis",
    "location": "808 Green Avenue, Veggieville",
    "cuisine": "Vegetarian",
    "rating": 4.2,
    "image": "https://img.freepik.com/free-photo/rustic-bowl-vegetarian-stew-with-basmati-rice-generated-by-ai_188544-20573.jpg?uid=R111473984&ga=GA1.1.2050512200.1690883797&semt=ais_ai_generated"
  },
  {
    "id": 12,
    "name": "Bakery Bliss",
    "location": "909 Flour Road, Sweet City",
    "cuisine": "Bakery",
    "rating": 4.6,
    "image": "https://img.freepik.com/free-photo/view-plate-with-delicious-sweet-cupcake-dessert_23-2150679536.jpg?uid=R111473984&ga=GA1.1.2050512200.1690883797&semt=ais_ai_generated"
  },
  {
    "id": 13,
    "name": "Flavors of Thailand",
    "location": "1010 Lemongrass Lane, Thai Town",
    "cuisine": "Thai",
    "rating": 4.5,
    "image": "https://img.freepik.com/free-photo/plate-food-with-shrimps-rice_188544-8566.jpg?uid=R111473984&ga=GA1.1.2050512200.1690883797&semt=ais_ai_generated"
  },
  {
    "id": 14,
    "name": "Rustic Diner",
    "location": "1111 Oakwood Avenue, Rusticville",
    "cuisine": "American",
    "rating": 4.3,
    "image": "https://img.freepik.com/free-photo/view-delicious-steak-dish_23-2150777651.jpg?uid=R111473984&ga=GA1.1.2050512200.1690883797&semt=ais_ai_generated"
  },
  {
    "id": 15,
    "name": "Fusion Grill",
    "location": "1212 Spice Street, Fusion City",
    "cuisine": "Fusion",
    "rating": 4.8,
    "image": "https://img.freepik.com/free-photo/delicious-chicken-table_144627-8758.jpg"
  },
  {
    "id": 16,
    "name": "Healthy Bites",
    "location": "1313 Greenery Lane, Fitburg",
    "cuisine": "Healthy",
    "rating": 4.4,
    "image": "https://img.freepik.com/free-photo/fresh-salad-bowl-with-organic-vegetables-quinoa-generated-by-ai_24640-80537.jpg?t=st=1700633722~exp=1700637322~hmac=e049fb8a4cd65d56a853a098524f047a6aa16a60983e0104a35992f1032ab920&w=1380"
  },
  {
    "id": 17,
    "name": "Noodle Nirvana",
    "location": "1414 Ramen Road, Noodletown",
    "cuisine": "Japanese",
    "rating": 4.7,
    "image": "https://img.freepik.com/free-photo/gourmet-ramen-noodles-pork-meat-vegetable-soup-generated-by-ai_188544-22113.jpg?uid=R111473984&ga=GA1.1.2050512200.1690883797&semt=ais_ai_generated"
  },
  {
    "id": 18,
    "name": "Southwest Grill",
    "location": "1515 Pepper Lane, Southwest City",
    "cuisine": "Southwestern",
    "rating": 4,
    "image": "https://img.freepik.com/free-photo/delicious-skewers-with-meat_23-2150857780.jpg?uid=R111473984&ga=GA1.1.2050512200.1690883797&semt=ais_ai_generated"
  },
  {
    "id": 19,
    "name": "Mongolian Feast",
    "location": "1616 Silk Avenue, Mongoltown",
    "cuisine": "Mongolian",
    "rating": 4.5,
    "image": "https://img.freepik.com/free-photo/delicious-food-table_23-2150857744.jpg?uid=R111473984&ga=GA1.1.2050512200.1690883797&semt=ais_ai_generated"
  },
  {
    "id": 20,
    "name": "Pasta Paradise",
    "location": "1717 Tomato Terrace, Pastaville",
    "cuisine": "Italian",
    "rating": 4.2,
    "image": "https://img.freepik.com/free-photo/delicious-pasta-plate_23-2150690741.jpg?uid=R111473984&ga=GA1.1.2050512200.1690883797&semt=ais_ai_generated"
  },
  {
    "id": 21,
    "name": "Chennai briyani Delight",
    "location": "456 Beach Road, Chennai",
    "cuisine": "South Indian",
    "rating": 4.5,
    "image": "https://img.freepik.com/free-photo/gourmet-chicken-biryani-with-steamed-basmati-rice-generated-by-ai_188544-13480.jpg"
  }
  
];

// Define a route to get restaurants
app.get('/api/restaurants', (req, res) => {
  res.json(restaurants);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
 
