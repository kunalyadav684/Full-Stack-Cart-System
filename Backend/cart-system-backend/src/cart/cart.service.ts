import { Injectable, NotFoundException } from "@nestjs/common";
import { AddItemDto } from "./dto/add-item.dto";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { Cart } from "./interfaces/cart.interface";

@Injectable()
export class CartService {
  constructor(@InjectModel('Cart') private cartModel: Model<Cart>) {}

  async addItem(userId: string, item: AddItemDto) {
    console.log("inside add item");
    console.log("item value is",item)
    const cart = await this.cartModel.findOne({ userId });

    if (!cart) {
      return this.cartModel.create({ userId, items: [item] });
    }

    const index = cart.items.findIndex(i => i.productId === item.productId);
    if (index > -1) {
      cart.items[index].quantity += item.quantity;
    } else {
      cart.items.push(item);
    }

    return cart.save();
  }

  async updateItem(userId: string, productId: string, quantity: number) {
    const cart = await this.cartModel.findOne({ userId });
    const item = cart?.items.find(i => i.productId === productId);
    if (item) {
      item.quantity = quantity;
      return cart?.save();
    }
    throw new NotFoundException('Item not found');
  }

  async removeItem(userId: string, productId: string) {
    const cart:any = await this.cartModel.findOne({ userId });
    cart.items = cart?.items.filter(i => i.productId !== productId);
    return cart?.save();
  }

  async getCart(userId: string) {
    const cart = await this.cartModel.findOne({ userId });
    const total = cart?.items.reduce((acc, i) => acc + i.price * i.quantity, 0);
    return { ...cart?.toObject(), total };
  }
}
// function InjectModel(arg0: string): (target: typeof CartService, propertyKey: undefined, parameterIndex: 0) => void {
//     throw new Error("Function not implemented.");
// }

