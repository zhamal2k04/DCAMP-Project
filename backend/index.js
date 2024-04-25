const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const app = express();

const connectDB = async () => {
    try {
        mongoose.set('strictQuery', false);
 
        await mongoose.connect(process.env.MONGO_URI, {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
            serverSelectionTimeoutMS: 5000
        });

        console.log('Mongo connected');
        const PORT = process.env.PORT;
        app.listen(PORT, () => {
            console.log('localhost open ' + PORT);
        });
    } catch (e) {
        console.error('Mongo connect ERROR:', e.message);
        process.exit(1);
    }
}

connectDB();

