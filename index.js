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

// todo: swagger

const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const swaggerOptions = require('./swagger/swagger-options');
const path = require('path');

// Serve Swagger UI at /api-docs endpoint

const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use(
  express.static(path.join(__dirname, 'node_modules', 'swagger-ui-dist'))
);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// todo: routes
const productRoutes = require('./routes/product-routes');
app.use('/api/v1/product', productRoutes);

// todo: starting express app

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`SERVER listening at port: ${PORT}`);
});

module.exports = app;
