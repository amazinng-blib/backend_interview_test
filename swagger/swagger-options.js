const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Interview Test - OpenAPI 3.0',
      description: `This is an API documentation for Express JS CRUD Operation`,
      version: 'v1',
    },
    servers: [
      {
        url: 'https://backend-interview-test.vercel.app',
      },
    ],
    paths: {
      '/create-product': {
        post: {
          tags: ['Online Merchant Store'],
          summary: 'Create product Route',
          description: 'Merchant creates products using this route.',
          operationId: 'createProductByMerchant',
          requestBody: {
            description: 'Created product by merchant',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/CreateProduct',
                },
              },
              'application/x-www-form-urlencoded': {
                schema: {
                  $ref: '#/components/schemas/CreateProduct',
                },
              },
            },
          },
          responses: {
            default: {
              description: 'Product Created Successfully',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/ProductModel',
                  },
                },
              },
            },
          },
          'x-swagger-router-controller': 'ProductModel',
        },
      },
      '/{productId}': {
        put: {
          tags: ['Online Merchant Store'],
          summary: 'Update product route',
          description: 'This route is used for updating existing product.',
          operationId: 'updateMerchantProduct',
          parameters: [
            {
              name: 'productId',
              in: 'path',
              description: 'Id of the product to be update',
              required: true,
              schema: {
                type: 'string',
              },
            },
          ],
          requestBody: {
            description: 'Update product by merchant',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/UpdateProduct',
                },
              },
              'application/x-www-form-urlencoded': {
                schema: {
                  $ref: '#/components/schemas/UpdateProduct',
                },
              },
            },
          },
          responses: {
            200: {
              description: 'Product updated successfully',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/ProductModel',
                  },
                },
              },
            },
            400: {
              description: 'Invalid ID supplied',
            },
            404: {
              description: 'No Product found',
            },
          },
          'x-swagger-router-controller': 'ProductModel',
        },
        delete: {
          tags: ['Online Merchant Store'],
          summary: 'Delete  product Route',
          description: 'This route deletes product using the product ID',
          operationId: 'deleteProductById',
          parameters: [
            {
              name: 'productId',
              in: 'path',
              description: 'Id of the product to be deleted',
              required: true,
              schema: {
                type: 'string',
              },
            },
          ],
          responses: {
            200: {
              description: 'Deleted successfully',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/ProductModel',
                  },
                },
              },
            },
            400: {
              description: 'Invalid ID supplied',
            },
            404: {
              description: 'No Products found',
            },
          },
          'x-swagger-router-controller': 'ProductModel',
        },
      },
      '/{merchantId}': {
        get: {
          tags: ['Online Merchant Store'],
          summary: 'Filter all Merchant products',
          description:
            'This Route filters all merchant products using merchantID',
          operationId: 'filterProductByMerchantId',
          parameters: [
            {
              name: 'merchantId',
              in: 'path',
              description:
                'Id of merchant whose products are to be filtered or returned',
              required: true,
              schema: {
                type: 'integer',
                format: 'int64',
              },
            },
          ],
          responses: {
            200: {
              description: 'Successful operation',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/ProductModel',
                  },
                },
              },
            },
            400: {
              description: 'Invalid ID supplied',
            },
            404: {
              description: 'No Products found',
            },
          },
          'x-swagger-router-controller': 'ProductModel',
        },
      },
    },
    components: {
      schemas: {
        ProductModel: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
              example: 'rtynnmma234245',
            },
            merchantId: {
              type: 'string',
              example: '1',
            },
            product_name: {
              type: 'string',
              example: 'paste tomatoes',
            },
            description: {
              type: 'string',
              example: 'A nice tomatoe',
            },
            price: {
              type: 'number',
              example: 200,
            },
            createdAt: {
              type: 'string',
              format: 'date-time',
              example: '2024-02-19T09:58:53.385Z',
            },
            updatedAt: {
              type: 'string',
              format: 'date-time',
              example: '2024-02-19T09:58:53.385Z',
            },
          },
        },
        CreateProduct: {
          type: 'object',
          properties: {
            merchantId: {
              type: 'string',
              example: '1',
            },
            product_name: {
              type: 'string',
              example: 'paste tomatoes',
            },
            description: {
              type: 'string',
              example: 'a nice tomato',
            },
            price: {
              type: 'number',
              example: 200,
            },
          },
        },
        UpdateProduct: {
          type: 'object',
          properties: {
            product_name: {
              type: 'string',
              example: 'paste tomatoes',
            },
            description: {
              type: 'string',
              example: 'a nice tomato',
            },
            price: {
              type: 'number',
              example: 200,
            },
            id: {
              type: 'string',
              example: 'rtynnmma234245',
            },
          },
        },
      },
      responses: {
        ApiResponse: {
          type: 'object',
          properties: {
            code: {
              type: 'integer',
              format: 'int32',
            },
            type: {
              type: 'string',
            },
            message: {
              type: 'string',
            },
          },
          example: {
            code: 0,
            type: 'type',
            message: 'message',
          },
        },
      },
    },
  },
  apis: ['../routes/*.js'],
};

module.exports = swaggerOptions;
