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
const path = require('path');
const http = require('http');
const controllers = require('../first_interview_test/controller/merchant-controller');
const oas3Tools = require('oas3-tools');

const serverPort = 8080;

// SwaggerRouter configuration
const options = {
  routing: {
    controllers: controllers,
  },
};

// Express app configuration
const expressAppConfig = oas3Tools.expressAppConfig(
  path.join(__dirname, 'docs/api/openapi.yaml'),
  options
);

// Initialize the Swagger middleware
const swaggerApp = expressAppConfig.getApp();

// Use the Swagger middleware in your Express app
app.use(swaggerApp);

// Start the server
http.createServer(app).listen(serverPort, function () {
  console.log(
    'Your server is listening on port %d (https://backend-interview-test.vercel.app/api/v1/product)'
  );
  console.log(
    'Swagger-ui is available on https://backend-interview-test.vercel.app/api/v1/product'
  );
});

// todo: routes
const productRoutes = require('./routes/product-routes');
app.use('/api/v1/product', productRoutes);

// todo: starting express app

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`SERVER listening at port: ${PORT}`);
});

module.exports = app;
