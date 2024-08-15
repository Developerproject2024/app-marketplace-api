import { Controller, Get } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Get()
  async run() {
    console.log('***********INFRASTRUCTURE****************');
    return 'Fabio arango';
  }
}
