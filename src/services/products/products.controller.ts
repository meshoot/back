import { Controller, Get, Param, Post, Delete, Body, Put, HttpCode, HttpStatus } from '@nestjs/common';

import CreateProductsDto from './dto/create-products.dto';
import UpdateProductDto from './dto/update-product-dto.dto';
import ProductsService from './products.service';
import { Product } from './schemas/products.schema';

@Controller('products')
export default class ProductsController {
  constructor(private readonly productService: ProductsService) {
  }


  @Get()
  getAll(): Promise<Product[]> {
    return this.productService.getAll()
  }

  @Get(':id')
  getOne(@Param('id') id: string): Promise<Product> {
    return this.productService.getById(id)
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createProductsDto: CreateProductsDto): Promise<Product> {
    return this.productService.create(createProductsDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Product> {
    return this.productService.remove(id);
  }

  @Put(':id')
  update(@Body() updateProductDto: UpdateProductDto, @Param('id') id: string): Promise<Product> {
    return this.productService.update(id, updateProductDto);
  }
}
