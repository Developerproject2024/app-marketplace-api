import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsEmail } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    description: 'email to register',
    example: 'prueba@prueba.com',
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    description: 'New password',
    example: 'ABC123',
  })
  @IsString()
  @IsNotEmpty()
  password_new: string;

  @ApiProperty({
    description: 'Password confirm',
    example: 'ABC123',
  })
  @IsString()
  @IsNotEmpty()
  password_confirmation: string;
}
