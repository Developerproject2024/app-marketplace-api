import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsEmail } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    description: 'The SKU (Stock Keeping Unit) of the product',
    example: 'ABC123',
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    description: 'The SKU (Stock Keeping Unit) of the product',
    example: 'ABC123',
  })
  @IsString()
  @IsNotEmpty()
  password_new: string;

  @ApiProperty({
    description: 'The SKU (Stock Keeping Unit) of the product',
    example: 'ABC123',
  })
  @IsString()
  @IsNotEmpty()
  password_confirmation: string;
}
