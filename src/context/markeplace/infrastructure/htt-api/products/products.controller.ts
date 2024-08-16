import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductUseCase } from '../../../application/product-use-case/product-use-case';
import { CreateProductDto } from './create-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productUseCase: ProductUseCase) {}
  @Post('create')
  async create(@Body() createProductDto: CreateProductDto) {
    console.log(createProductDto);
    return this.productUseCase.execute(createProductDto);
  }

  @Get()
  async findAll() {
    return this.productUseCase.findAll();
  }
}
