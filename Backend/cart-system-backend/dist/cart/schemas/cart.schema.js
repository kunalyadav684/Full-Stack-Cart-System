"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartSchema = void 0;
const mongoose_1 = require("mongoose");
const CartItemSchema = new mongoose_1.Schema({
    productId: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
});
exports.CartSchema = new mongoose_1.Schema({
    userId: { type: String, required: true },
    items: [CartItemSchema],
}, { timestamps: true });
//# sourceMappingURL=cart.schema.js.map