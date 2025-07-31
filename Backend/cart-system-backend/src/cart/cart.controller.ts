import { Body, Controller, Delete, Get, Patch, Post, Query } from "@nestjs/common";
import { AddItemDto } from "./dto/add-item.dto";
import { CartService } from "./cart.service";

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post('add')
  add(@Body() dto: AddItemDto, @Query('userId') userId: string) {
    console.log("add item",dto);
    return this.cartService.addItem(userId, dto);
  }

  @Patch('update')
  update(@Query('userId') userId: string, @Query('productId') productId: string, @Query('quantity') quantity: number) {
    return this.cartService.updateItem(userId, productId, +quantity);
  }

  @Delete('remove')
  remove(@Query('userId') userId: string, @Query('productId') productId: string) {
    return this.cartService.removeItem(userId, productId);
  }

  @Get()
  get(@Query('userId') userId: string) {
    return this.cartService.getCart(userId);
  }
}
