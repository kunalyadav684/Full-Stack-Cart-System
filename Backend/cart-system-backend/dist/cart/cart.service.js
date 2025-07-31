"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let CartService = class CartService {
    cartModel;
    constructor(cartModel) {
        this.cartModel = cartModel;
    }
    async addItem(userId, item) {
        console.log("inside add item");
        console.log("item value is", item);
        const cart = await this.cartModel.findOne({ userId });
        if (!cart) {
            return this.cartModel.create({ userId, items: [item] });
        }
        const index = cart.items.findIndex(i => i.productId === item.productId);
        if (index > -1) {
            cart.items[index].quantity += item.quantity;
        }
        else {
            cart.items.push(item);
        }
        return cart.save();
    }
    async updateItem(userId, productId, quantity) {
        const cart = await this.cartModel.findOne({ userId });
        const item = cart?.items.find(i => i.productId === productId);
        if (item) {
            item.quantity = quantity;
            return cart?.save();
        }
        throw new common_1.NotFoundException('Item not found');
    }
    async removeItem(userId, productId) {
        const cart = await this.cartModel.findOne({ userId });
        cart.items = cart?.items.filter(i => i.productId !== productId);
        return cart?.save();
    }
    async getCart(userId) {
        const cart = await this.cartModel.findOne({ userId });
        const total = cart?.items.reduce((acc, i) => acc + i.price * i.quantity, 0);
        return { ...cart?.toObject(), total };
    }
};
exports.CartService = CartService;
exports.CartService = CartService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)('Cart')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], CartService);
//# sourceMappingURL=cart.service.js.map