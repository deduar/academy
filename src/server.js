const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const errorMiddleware = require('./middleware/errorMiddleware');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);

// Error handling middleware
app.use(errorMiddleware);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on http://${HOSTNAME}:${PORT}`);
        });
    })
    .catch(err => console.error(err));
