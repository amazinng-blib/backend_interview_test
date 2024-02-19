const expressAsyncHandler = require('express-async-handler');
const generateRandom = require('../utils/generate-random-number');
const products = require('../data/products');

/* todo: CREATE PRODUCT
 *
 */

const createProduct = expressAsyncHandler(async (req, res) => {
  const { merchantId, product_name, description, price } = req.body;
  // todo: below supposed to be auto-gen.
  const createdAt = new Date();
  const updatedAt = new Date();
  const id = generateRandom();
  try {
    // todo: first, query through the DB with merchantId to check if the marchant exist
    // todo: if merchant exist, create the product
    // todo: for the sake of the test, we will be updating the products array
    const newProduct = {
      id,
      merchantId,
      product_name,
      description,
      price,
      createdAt,
      updatedAt,
    };
    products.push(newProduct);
    return res
      .status(201)
      .json({ message: 'Product Created Successfully', newProduct });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/* todo: READ /GET MERCHANT PRODUCTS
 *
 */

const filterMerchantProducts = expressAsyncHandler(async (req, res) => {
  const { merchantId } = req.params;
  try {
    // todo: get all the products and filter using merchantId
    const merchantProducts = products?.filter(
      (product) => product.merchantId === merchantId
    );

    const isEmpty = merchantProducts.length === 0;

    if (isEmpty) {
      return res.status(200).json({ message: 'No Prodcts found ' });
    }
    return res.status(200).json({ merchantProducts });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/* todo: EDIT PRODUCTS
 *
 */

const editProduct = expressAsyncHandler(async (req, res) => {
  const { productId } = req.params;
  const { product_name, description, price } = req.body;

  try {
    // todo: get the product and edit
    const findProduct = products?.find(
      (product) => product.id.toString() === productId.toString()
    );

    if (!findProduct) {
      return res.status(404).json({ message: 'No Product found' });
    }

    findProduct.price = price;
    findProduct.description = description;
    findProduct.product_name = product_name;

    res.status(200).json({ findProduct });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/* todo: DELETE PRODUCTS
 *
 */

const deleteProduct = expressAsyncHandler(async (req, res) => {
  const { productId } = req.params;
  try {
    const filterProduct = products?.filter(
      (product) => product.id !== productId
    );
    return res
      .status(200)
      .json({ message: 'Product deleted Successfully', filterProduct });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
module.exports = {
  createProduct,
  filterMerchantProducts,
  editProduct,
  deleteProduct,
};
