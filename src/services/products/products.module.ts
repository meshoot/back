import { Module } from '@nestjs/common';
import ProductsService from './products.service';
import ProductController from './products.controller'
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from './schemas/products.schema';

@Module({
  providers: [ProductsService],
  controllers: [ProductController],
  imports: [MongooseModule.forFeature([{
    name: Product.name, schema: ProductSchema
  }])]
})

export class ProductsModule {

}