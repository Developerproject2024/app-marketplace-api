import { Module } from '@nestjs/common';
import { AuthController } from './htt-api/auth/auth.controller';
import { AuthUseCase } from '../application/auth-use-case/auth-use-case';
import { AuthMarketPlaceRepository } from '../dominio/auth-repository/auth-marketplace-repository';
import { AuthRepository } from './repositories/auth-repository';
import { SharedModule } from 'src/context/shared/shared.module';
import { DatabaseModule } from './database/database.module';
import { ProductsController } from './htt-api/products/products.controller';

@Module({
  imports: [SharedModule, DatabaseModule],
  controllers: [AuthController, ProductsController],
  providers: [
    AuthUseCase,
    AuthRepository,
    {
      provide: AuthMarketPlaceRepository,
      useExisting: AuthRepository,
    },
  ],
  exports: [AuthUseCase],
})
export class MarkeplaceModule {}
