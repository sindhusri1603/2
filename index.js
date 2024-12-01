const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const app = express();

// Connect to MongoDB
const mongoURI = process.env.MONGO_URI || 'your-mongo-uri';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected!'))
  .catch(err => console.log('Error connecting to MongoDB:', err));

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// API routes can be defined in formroutes.js
const formRoutes = require('./formroutes');
app.use('/api', formRoutes); // Example API route

// Handle the homepage route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html')); // Serve index.html from public folder
});

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
