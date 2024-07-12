const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const bookRoutes = require('./routes/bookRoutes');
const bodyParser = require('body-parser');
const logger = require('./middleware/logger');

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(bodyParser.json());
app.use(logger);

// Routes
app.use('/api/users', userRoutes);
app.use('/api/books', bookRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
