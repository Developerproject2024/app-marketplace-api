import { Test, TestingModule } from '@nestjs/testing';
import { APP_GUARD } from '@nestjs/core';
import { AuthUseCase } from '../../../application/auth-use-case/auth-use-case';
import { AuthController } from './auth.controller';
import { AuthRepository } from '../../repositories/auth-repository';
import { AuthMarketPlaceRepository } from '../../../dominio/auth-repository/auth-marketplace-repository';
import { SharedModule } from '../../../../shared/shared.module';
import { DatabaseModule } from '../../database/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { UserEntity } from '../../database/entities/user.entity';
import { RoleEntity } from '../../database/entities/role.entity';
import { ProductEntity } from '../../database/entities/product.entity';
import { AuthGuard } from '../../../../guards/auth.guard';
import { MarkeplaceModule } from '../../markeplace.module';

describe('AuthController', () => {
  let controller: AuthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        SharedModule,
        DatabaseModule,
        TypeOrmModule.forFeature([UserEntity, RoleEntity, ProductEntity]),
        JwtModule.register({
          secret: process.env.JWT_SECRET,
          signOptions: { expiresIn: '60m' },
        }),
        MarkeplaceModule,
      ],
      controllers: [AuthController],
      providers: [
        AuthUseCase,
        AuthRepository,
        {
          provide: AuthMarketPlaceRepository,
          useExisting: AuthRepository,
        },
        {
          provide: APP_GUARD,
          useClass: AuthGuard,
        },
      ],
      exports: [AuthUseCase],
    }).compile();

    controller = module.get<AuthController>(AuthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
