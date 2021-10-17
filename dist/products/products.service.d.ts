import { Model } from 'mongoose';
import CreateProductsDto from './dto/create-products.dto';
import { Product, ProductDocument } from './schemas/products.schema';
import UpdateProductDto from './dto/update-product-dto.dto';
export default class ProductsService {
    private productModel;
    constructor(productModel: Model<ProductDocument>);
    getAll(): Promise<Product[]>;
    getById(id: string): Promise<Product>;
    create(productDto: CreateProductsDto): Promise<Product>;
    remove(id: string): Promise<Product>;
    update(id: string, productDto: UpdateProductDto): Promise<Product>;
}
