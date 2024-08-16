import { Test, TestingModule } from '@nestjs/testing';
import { APP_GUARD } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MarkeplaceModule } from '../../markeplace.module';
import { SharedModule } from '../../../../shared/shared.module';
import { DatabaseModule } from '../../database/database.module';
import { ProductsController } from './products.controller';
import { ProductUseCase } from '../../../application/product-use-case/product-use-case';
import { ProductMarketPlaceRepository } from '../../../dominio/products-repository/product-marketplace-repository';
import { ProductRepository } from '../../repositories/product-repository';
import { UserEntity } from '../../database/entities/user.entity';
import { RoleEntity } from '../../database/entities/role.entity';
import { ProductEntity } from '../../database/entities/product.entity';
import { AuthGuard } from '../../../../guards/auth.guard';
import { JwtService } from '@nestjs/jwt';

describe('ProductsController', () => {
  let controller: ProductsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        MarkeplaceModule,
        SharedModule,
        DatabaseModule,
        TypeOrmModule.forFeature([UserEntity, RoleEntity, ProductEntity]),
      ],
      controllers: [ProductsController],
      providers: [
        JwtService,
        ProductUseCase,
        ProductRepository,
        {
          provide: ProductMarketPlaceRepository,
          useExisting: ProductRepository,
        },
        {
          provide: APP_GUARD,
          useClass: AuthGuard,
        },
      ],
    }).compile();

    controller = module.get<ProductsController>(ProductsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
