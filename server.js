// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors')
const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');
require("dotenv").config()
const app = express();
const PORT = process.env.PORT || 3000;
const MongoURL=process.env.MONGO_URL
app.use(bodyParser.json());

mongoose.connect(`${MongoURL}`);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB mongo');
});

app.use(cors())
app.use('/products', productRoutes);
app.use('/cart', cartRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
