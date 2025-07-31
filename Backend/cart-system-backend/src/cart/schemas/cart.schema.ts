// // cart.schema.ts
// import { Schema } from 'mongoose';

// export const CartSchema = new Schema({
//   userId: { type: String, required: true },
//   items: [
//     {
//       productId: String,
//       name: String,
//       price: Number,
//       quantity: Number,
//     }
//   ],
// }, { timestamps: true });
import { Schema } from 'mongoose';

const CartItemSchema = new Schema({
  productId: { type: String, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

export const CartSchema = new Schema(
  {
    userId: { type: String, required: true },
    items: [CartItemSchema], // ✅ use sub-schema here
  },
  { timestamps: true }
);
