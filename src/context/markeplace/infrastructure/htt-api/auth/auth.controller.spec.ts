import { Test, TestingModule } from '@nestjs/testing';
import { AuthUseCase } from '../../../application/auth-use-case/auth-use-case';
import { AuthController } from './auth.controller';
import { AuthRepository } from '../../repositories/auth-repository';
import { AuthMarketPlaceRepository } from '../../../dominio/auth-repository/auth-marketplace-repository';

describe('AuthController', () => {
  let controller: AuthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [AuthController],
      providers: [
        AuthUseCase,
        AuthRepository,
        {
          provide: AuthMarketPlaceRepository,
          useExisting: AuthRepository,
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
