import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsEmail } from 'class-validator';

export class LoginCredentialsDto {
  @ApiProperty({
    description: 'registered user platform',
    example: 'user@prueba.com',
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    description: 'password and registered username platform',
    example: 'ABC123',
  })
  @IsString()
  @IsNotEmpty()
  password: string;
}
