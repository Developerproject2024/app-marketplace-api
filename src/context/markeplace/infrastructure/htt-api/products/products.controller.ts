import { Controller, Post } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Post('create')
  async create() {
    return 'llego';
  }
}
