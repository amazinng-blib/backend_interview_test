const express = require('express');
require('dotenv').config();

// todo: initiallise express app
const app = express();

// todo: global middleware
const cors = require('cors');

const developmentOrigin = 'http://localhost:3000';
const productionOrigin = ['https://backend-interview-test.vercel.app'];

app.use(
  cors({
    origin:
      process.env.NODE_ENV === 'development'
        ? productionOrigin
        : developmentOrigin,
  })
);
app.use(express.json());

// todo: routes
const productRoutes = require('./routes/product-routes');
app.use('/api/v1/product', productRoutes);

// todo: starting express app

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`SERVER listening at port: ${PORT}`);
});

module.exports = app;
