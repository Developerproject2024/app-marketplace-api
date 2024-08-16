import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './users.dto';
import { ApiTags } from '@nestjs/swagger';
import { UsersUseCase } from '../../../application/users-use-case/users-use-case';

@Controller('users')
@ApiTags('Users')
export class UsersController {
  constructor(private readonly usersUseCase: UsersUseCase) {}
  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return await this.usersUseCase.create(createUserDto);
  }
}
