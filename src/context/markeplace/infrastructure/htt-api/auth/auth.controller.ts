import { Controller, Get } from '@nestjs/common';
import { AuthUseCase } from '../../../application/auth-use-case/auth-use-case';

@Controller('auth')
export class AuthController {
  constructor(private authUseCase: AuthUseCase) {}

  @Get()
  async run() {
    console.log('***********INFRASTRUCTURE****************');
    return this.authUseCase.execute();
  }
}
