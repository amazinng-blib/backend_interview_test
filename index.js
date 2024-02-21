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

('use strict');

var path = require('path');
var http = require('http');
var controllers = require('./controller/merchant-controller.js');

var oas3Tools = require('oas3-tools');
var serverPort = 8080;

// swaggerRouter configuration
var options = {
  routing: {
    controllers: controllers,
  },
};

var expressAppConfig = oas3Tools.expressAppConfig(
  path.join(__dirname, '/docs/api/openapi.yaml'),
  options
);
var swaggerApp = expressAppConfig.getApp();
app.use('/api/v1', swaggerApp);

// Initialize the Swagger middleware
http.createServer(swaggerApp).listen(serverPort, function () {
  console.log(
    'Your server is listening on port %d (http://localhost:%d)',
    serverPort,
    serverPort
  );
  console.log(
    'Swagger-ui is available on http://localhost:%d/docs',
    serverPort
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
