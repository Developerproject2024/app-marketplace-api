import { Body, Controller, Post } from '@nestjs/common';
import { AuthUseCase } from '../../../application/auth-use-case/auth-use-case';
import {
  ApiOperation,
  ApiProduces,
  ApiResponse,
  ApiSecurity,
  ApiTags,
} from '@nestjs/swagger';
import { LoginCredentialsDto } from './LoginCredentials.dto';
import { Public } from '../../../../guards/auth.guard';

@ApiTags('Auth')
@ApiSecurity('api-key')
@Controller('auth')
export class AuthController {
  constructor(private authUseCase: AuthUseCase) {}
  @Public()
  @Post('authentication')
  @ApiProduces('application/json')
  @ApiOperation({
    summary: 'user authentication',
  })
  @ApiProduces('application/json')
  @ApiResponse({
    status: 200,
    description: 'create product',
  })
  @ApiResponse({
    status: 401,
    description: 'Error: Unauthorized.',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal server error.',
  })
  async authentication(@Body() loginCredentialsDto: LoginCredentialsDto) {
    return this.authUseCase.authentication(loginCredentialsDto);
  }
}
