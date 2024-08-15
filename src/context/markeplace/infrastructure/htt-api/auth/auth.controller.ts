import { Controller, Post } from '@nestjs/common';
import { AuthUseCase } from '../../../application/auth-use-case/auth-use-case';
import {
  ApiOperation,
  ApiProduces,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@Controller('auth')
@ApiTags('Auth')
export class AuthController {
  constructor(private authUseCase: AuthUseCase) {}

  @Post('authentication')
  @ApiProduces('application/json')
  @ApiOperation({
    summary: 'user authentication',
  })
  @ApiProduces('application/json')
  @ApiResponse({
    status: 200,
    description: 'user authentication',
  })
  @ApiResponse({
    status: 401,
    description: 'Error: Unauthorized.',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal server error.',
  })
  async run() {
    console.log('***********INFRASTRUCTURE****************');
    return this.authUseCase.execute();
  }
}
