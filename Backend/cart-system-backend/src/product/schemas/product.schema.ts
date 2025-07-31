import { Schema } from 'mongoose';

export const ProductSchema = new Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: String,
    imageUrl:String,
  },
  { timestamps: true }
);
