import CreateProductsDto from './dto/create-products.dto';
import UpdateProductDto from './dto/update-product-dto.dto';
import ProductsService from './products.service';
import { Product } from './schemas/products.schema';
export default class ProductsController {
    private readonly productService;
    constructor(productService: ProductsService);
    getAll(): Promise<Product[]>;
    getOne(id: string): Promise<Product>;
    create(createProductsDto: CreateProductsDto): Promise<Product>;
    remove(id: string): Promise<Product>;
    update(updateProductDto: UpdateProductDto, id: string): Promise<Product>;
}
