import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ProductUseCase } from '../../../application/product-use-case/product-use-case';
import { CreateProductDto } from './create-product.dto';
import {
  ApiOperation,
  ApiProduces,
  ApiResponse,
  ApiSecurity,
  ApiTags,
} from '@nestjs/swagger';
import { AuthGuard } from '../../../../guards/auth.guard';
import { RolesGuard } from '../../../../guards/roles.guard';
import { Roles } from '../../../../decorators/roles.decorator';

@ApiTags('Products')
@ApiSecurity('api-key')
@UseGuards(AuthGuard, RolesGuard)
@Controller('products')
export class ProductsController {
  constructor(private readonly productUseCase: ProductUseCase) {}
  @Roles('vendedor')
  @Post()
  @ApiOperation({
    summary: 'Create product',
  })
  @ApiProduces('application/json')
  @ApiResponse({
    status: 200,
    description: 'create product',
  })
  @ApiResponse({
    status: 401,
    description: 'Error: Unauthorized.',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal server error.',
  })
  async create(@Body() createProductDto: CreateProductDto) {
    console.log(createProductDto);
    return this.productUseCase.execute(createProductDto);
  }

  @Roles('administrador')
  @Get()
  @ApiOperation({
    summary: 'Consult product',
  })
  @ApiProduces('application/json')
  @ApiResponse({
    status: 200,
    description: 'consult product',
  })
  @ApiResponse({
    status: 401,
    description: 'Error: Unauthorized.',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal server error.',
  })
  async findAll() {
    return this.productUseCase.findAll();
  }
}
