
---

## ✅ **Backend – `README.md`**

```markdown
# 🛍️ Cart & Product Backend (NestJS + MongoDB)

This backend serves APIs to manage products and user carts, including add/remove/update functionality and dynamic total price calculation.

## ✨ Features

- REST APIs to manage products (CRUD)
- REST APIs for cart:
  - Add to cart
  - Remove from cart
  - Update quantity
  - Get cart by user
- MongoDB for data persistence
- CORS enabled for frontend connection

## 🧰 Tech Stack

| Technology | Description                    |
|------------|--------------------------------|
| NestJS     | Progressive Node.js framework |
| TypeScript | Language for type safety |
| MongoDB    | NoSQL database for storage |
| Mongoose   | ODM to interact with MongoDB |
| Express.js | Underlying HTTP server |
| CORS       | Middleware for cross-origin requests |

## 🚀 Getting Started

### Prerequisites

- Node.js Version used 18.18
- MongoDB running locally or remotely
- Find Data dump and Postman collection in the Database Dump folder
- Import postman Collection in postman and data in mongodb

### Install and Run

```bash
cd backend
npm install
npm run start

### API End Points

Products

GET /products
POST /products
PATCH /products/:id
DELETE /products/:id

Cart

GET /cart?userId=002
POST /cart/add?userId=002
PATCH /cart/update?userId=002&productId=p1&quantity=2
DELETE /cart/remove?userId=002&productId=p1

### MongoDB Setup
# Update your DB URI in app.module.ts
MongooseModule.forRoot('mongodb://localhost:27017/cart-db')