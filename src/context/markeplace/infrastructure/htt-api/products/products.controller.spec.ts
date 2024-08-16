import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsController } from './products.controller';
import { ProductUseCase } from '../../../application/product-use-case/product-use-case';
import { ProductMarketPlaceRepository } from '../../../dominio/products-repository/product-marketplace-repository';
import { ProductRepository } from '../../repositories/product-repository';
import { UserEntity } from '../../database/entities/user.entity';
import { RoleEntity } from '../../database/entities/role.entity';
import { ProductEntity } from '../../database/entities/product.entity';
import { SharedModule } from '../../../../shared/shared.module';
import { DatabaseModule } from '../../database/database.module';

describe('ProductsController', () => {
  let controller: ProductsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        SharedModule,
        DatabaseModule,
        TypeOrmModule.forFeature([UserEntity, RoleEntity, ProductEntity]),
      ],
      controllers: [ProductsController],
      providers: [
        ProductUseCase,
        ProductRepository,
        {
          provide: ProductMarketPlaceRepository,
          useExisting: ProductRepository,
        },
      ],
    }).compile();

    controller = module.get<ProductsController>(ProductsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
