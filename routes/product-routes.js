const {
  createProduct,
  filterMerchantProducts,
  editProduct,
  deleteProduct,
} = require('../controller/merchant-controller');

const route = require('express').Router();

// todo: protected route
route.post('/create-product', createProduct);
route.get('/:merchantId', filterMerchantProducts);
route.put('/:productId', editProduct);
route.delete('/:productId', deleteProduct);

module.exports = route;
