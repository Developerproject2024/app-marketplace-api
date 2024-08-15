import { Test, TestingModule } from '@nestjs/testing';
import { AuthUseCase } from '../../../application/auth-use-case/auth-use-case';
import { AuthController } from './auth.controller';

describe('AuthController', () => {
  let controller: AuthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AuthUseCase],
      controllers: [AuthController],
      providers: [AuthUseCase],
      exports: [AuthUseCase],
    }).compile();

    controller = module.get<AuthController>(AuthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
