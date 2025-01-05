// /server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

// Initialize the Express app
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());  // To parse incoming JSON requests

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    console.log('Connected to MongoDB');
})
.catch(err => {
    console.error('Error connecting to MongoDB Atlas:', err);
});

// Import Routes
const authRoutes = require('./routes/authRoutes');
const dashboardRoute = require('./routes/dashboardRoute'); // Import the dashboard route
const notesRoute = require('./routes/notesRoute');

// Use Routes
app.use('/api/auth', authRoutes);
app.use('/api/dashboard', dashboardRoute);
app.use('/api/notes', notesRoute);

// Start the Express server
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
