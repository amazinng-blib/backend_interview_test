# Product Management API

This API allows merchants to manage their product listings.

## Endpoints

## BaseUrl = ['http://localhost:5080/api/v1/product']

### Display Products by Merchant ID

Url: BaseUrl/:merchantId

Method: `GET`

This endpoing Retrieves all products listed created by a specific merchant.

### Create Product

Create a new product for a merchant.
Url: BaseUrl/create-product

Method: `POST`

BODY : `{
  "merchantId": "string",
  "product_name": "string"
  "price":"number",
  "description":"string"
} `

### Edit Product

Url: BaseUrl/:productId

Method: `PUT`

BODY : `{
  "merchantId": "string",
  "product_name": "string"
  "price":"number",
  "description":"string"
} `

Edit an existing product.

### Delete Product

Url: BaseUrl/:productId

Method: `DELETE`

This delete an existing product

<center><b>Data Structure</b></center>

The data structure used to hold product records is an array named `products`, which contains objects with the following attributes:

- `id`: Unique identifier for the product.
- `merchantId`: ID of the merchant who listed or created the product.
- `product_name`: Name of the product.
- `description`: Description of the product.
- `price`: Price of the product.
- `createdAt`: Date and time when the product was created.
- `updatedAt`: Date and time when the product was updated.

## Usage

1. Clone this repository.
2. Install dependencies using `yarn`.
3. Run the server using `yarn run dev`.
4. Test the endpoint by running `yarn test`
5. Access or test the API endpoints using an HTTP client such as Postman or thunder Client.
