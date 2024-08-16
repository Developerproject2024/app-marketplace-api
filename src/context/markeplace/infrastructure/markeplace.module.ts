import { Module } from '@nestjs/common';
import { AuthController } from './htt-api/auth/auth.controller';
import { AuthUseCase } from '../application/auth-use-case/auth-use-case';
import { AuthMarketPlaceRepository } from '../dominio/auth-repository/auth-marketplace-repository';
import { AuthRepository } from './repositories/auth-repository';
import { SharedModule } from 'src/context/shared/shared.module';
import { DatabaseModule } from './database/database.module';
import { ProductsController } from './htt-api/products/products.controller';
import { ProductUseCase } from '../application/product-use-case/product-use-case';
import { ProductMarketPlaceRepository } from '../dominio/products-repository/product-marketplace-repository';
import { ProductRepository } from './repositories/product-repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './database/entities/user.entity';
import { RoleEntity } from './database/entities/role.entity';
import { ProductEntity } from './database/entities/product.entity';
import { APP_FILTER } from '@nestjs/core';
import { HttpExceptionFilter } from 'src/context/shared/interceptor/errors.interceptor';
import { UsersController } from './htt-api/users/users.controller';
import { UsersUseCase } from '../application/users-use-case/users-use-case';
import { UsersMarketPlaceRepository } from '../dominio/users-repositor/users-marketplace-repository';
import { UsersRepository } from './repositories/users-repository';

@Module({
  imports: [
    SharedModule,
    DatabaseModule,
    TypeOrmModule.forFeature([UserEntity, RoleEntity, ProductEntity]),
  ],
  controllers: [AuthController, ProductsController, UsersController],
  providers: [
    AuthUseCase,
    ProductUseCase,
    UsersUseCase,
    AuthRepository,
    ProductRepository,
    UsersRepository,
    {
      provide: AuthMarketPlaceRepository,
      useExisting: AuthRepository,
    },
    {
      provide: ProductMarketPlaceRepository,
      useExisting: ProductRepository,
    },
    {
      provide: UsersMarketPlaceRepository,
      useExisting: UsersRepository,
    },
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
  exports: [AuthUseCase, ProductUseCase, UsersUseCase],
})
export class MarkeplaceModule {}
