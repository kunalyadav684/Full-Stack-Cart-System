import { Model } from 'mongoose';
import { Product } from './interfaces/product.interface';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
export declare class ProductService {
    private productModel;
    constructor(productModel: Model<Product>);
    create(dto: CreateProductDto): Promise<Product>;
    findAll(): Promise<Product[]>;
    findById(id: string): Promise<Product>;
    update(id: string, dto: UpdateProductDto): Promise<Product>;
    delete(id: string): Promise<void>;
}
