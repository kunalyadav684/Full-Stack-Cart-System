import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    create(dto: CreateProductDto): Promise<import("./interfaces/product.interface").Product>;
    findAll(): Promise<import("./interfaces/product.interface").Product[]>;
    findOne(id: string): Promise<import("./interfaces/product.interface").Product>;
    update(id: string, dto: UpdateProductDto): Promise<import("./interfaces/product.interface").Product>;
    delete(id: string): Promise<void>;
}
