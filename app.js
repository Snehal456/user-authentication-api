const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Middleware
app.use(express.json()); // For parsing JSON requests

// MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/snehal')
    .then(() => {
        console.log('Connected to MongoDB successfully');
    })
    .catch((err) => {
        console.error('MongoDB connection error:', err);
    });

// Import Routes
const authRoutes = require('./routes/auth'); // Import the auth routes

// Use Routes
app.use('/api/auth', authRoutes); // Add auth routes

// Test route
app.get('/', (req, res) => {
    res.send('Server is running');
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
