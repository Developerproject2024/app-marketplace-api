import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './users.dto';
import {
  ApiOperation,
  ApiProduces,
  ApiResponse,
  ApiSecurity,
  ApiTags,
} from '@nestjs/swagger';
import { UsersUseCase } from '../../../application/users-use-case/users-use-case';
import { Public } from '../../../../guards/auth.guard';

@ApiTags('Users')
@ApiSecurity('api-key')
@Controller('users')
export class UsersController {
  constructor(private readonly usersUseCase: UsersUseCase) {}

  @Public()
  @Post()
  @ApiProduces('application/json')
  @ApiOperation({
    summary: 'user authentication',
  })
  @ApiProduces('application/json')
  @ApiResponse({
    status: 200,
    description: 'user create',
  })
  @ApiResponse({
    status: 401,
    description: 'Error: Unauthorized.',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal server error.',
  })
  async create(@Body() createUserDto: CreateUserDto) {
    return await this.usersUseCase.create(createUserDto);
  }
}
