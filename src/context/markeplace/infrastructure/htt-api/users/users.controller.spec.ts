import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users.controller';
import { UsersUseCase } from '../../../application/users-use-case/users-use-case';
import { UsersMarketPlaceRepository } from '../../../dominio/users-repositor/users-marketplace-repository';
import { UsersRepository } from '../../repositories/users-repository';
import { SharedModule } from '../../../../shared/shared.module';
import { DatabaseModule } from '../../database/database.module';
import { UserEntity } from '../../database/entities/user.entity';
import { RoleEntity } from '../../database/entities/role.entity';
import { ProductEntity } from '../../database/entities/product.entity';

describe('UsersController', () => {
  let controller: UsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        SharedModule,
        DatabaseModule,
        TypeOrmModule.forFeature([UserEntity, RoleEntity, ProductEntity]),
      ],
      providers: [
        UsersUseCase,
        UsersRepository,
        {
          provide: UsersMarketPlaceRepository,
          useExisting: UsersRepository,
        },
      ],
      controllers: [UsersController],
      exports: [UsersUseCase],
    }).compile();

    controller = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
