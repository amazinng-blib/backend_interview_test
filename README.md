# Product Management API

This API allows merchants to manage their product listings.

## Endpoints

## BaseUrl = ['https://backend-interview-test.vercel.app/api/v1/product']

## Documentation = ["https://backend-interview-test.vercel.app/api-docs/"]

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

| Entity   | Attribute                                                                                                            |
| -------- | -------------------------------------------------------------------------------------------------------------------- |
| Merchant | - merchantId(string)                                                                                                 |
| Product  | - id(string)<br> - merchantId(string) <br> - product_name(string) <br> -description(string) <br> -price(number) <br> |

## Relationships

- Each merchant can have multiple products
- Each Product belongs to one merchant

<center><b>NO 2 ANSWER</b></center>

## ERD -- ENTITY RELATIONSHIP DAIGRAM

### ERD DIAGRAM LINK : [VIEW DIAGRAM](https://lucid.app/lucidchart/92f054dc-3ba5-4bc0-8401-2a87a8d2ad61/edit?viewport_loc=-1189%2C8%2C1683%2C898%2C0_0&invitationId=inv_e5b0063c-45bb-4bde-8dd4-b07e2c1b1a82)
