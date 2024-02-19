const app = require('../index');
const superTest = require('supertest');

describe('API endpoints', () => {
  let server;

  beforeAll(() => {
    server = app.listen(5000);
  });

  afterAll((done) => {
    server.close(done);
  });

  test('App Running', () => {
    expect(true).toBe(true);
  });
});

// todo: Create product
describe('/product/create-product', () => {
  test('Create Product By Merchant', async () => {
    const newProduct = {
      merchantId: '1',
      product_name: 'Test Product',
      description: 'This is a test product',
      price: 10.99,
    };
    const res = await superTest(app)
      .post('/api/v1/product/create-product')
      .send(newProduct);
    expect(res.status).toBe(201);
    expect(res && res.body && typeof res.body === Object);
    expect(res && res.body.merchantId === String);
    expect(res && res.body.product_name === String);
    expect(res && res.body.description === String);
    expect(res && res.body.price === Number);
  });
});

// todo: Filter merchant products

describe('/product/:merchantId', () => {
  test('Filter Merchant Products', async () => {
    const res = await superTest(app).get('/api/v1/product/1');
    expect(res.status).toBe(200);
    expect(res && res.body && typeof res.body === Array);
  });
});

// todo: Edit Merchant Product

describe('/product/:productId', () => {
  test('Edit Product By Merchant', async () => {
    const productId = 'G554ZTAHZY0VCBDDBUAUD7WH';
    const value = {
      product_name: 'Updated Product Name',
      description: 'Updated Product Description',
      price: 99.99,
    };

    const res = await superTest(app)
      .put(`/api/v1/product/${productId}`)
      .send(value)
      .set('Accept', 'application/json');
    expect(res.status).toBe(200);
    expect(res && res.body && typeof res.body === Object);
    expect(res && res.body.product_name === String);
    expect(res && res.body.description === String);
    expect(res && res.body.price === Number);
  });

  //todo: return 404 if there's no matching id
  test('Return 404 if ID does not match', async () => {
    const productId = '5';
    const data = {
      name: 'Updated Product Name',
      description: 'Updated Product Description',
      price: 99.99,
    };
    const res = await superTest(app)
      .put(`/api/v1/product/${productId}`)
      .send(data)
      .set('Accept', 'application/json');
    expect(res.status).toBe(404);
    expect(res.body).toEqual({ message: 'No Product found' });
  });
});

// todo: Delete product

describe('/product/:productId', () => {
  test('Delete Merchant product', async () => {
    const productId = '5';
    const res = await superTest(app).delete(`/api/v1/product/${productId}`);
    expect(res.status).toBe(200);
    expect(res && res.body).toEqual({
      message: 'Product deleted Successfully',
    });
  });
});
