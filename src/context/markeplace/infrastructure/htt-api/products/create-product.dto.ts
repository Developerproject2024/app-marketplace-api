import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsNotEmpty } from 'class-validator';

export class CreateProductDto {
  @ApiProperty({
    description: 'The SKU (Stock Keeping Unit) of the product',
    example: 'ABC123',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'The SKU (Stock Keeping Unit) of the product',
    example: 'ABC123',
  })
  @IsString()
  @IsNotEmpty()
  sku: string;

  @ApiProperty({
    description: 'The SKU (Stock Keeping Unit) of the product',
    example: 'ABC123',
  })
  @IsNumber()
  @IsNotEmpty()
  price: number;

  @ApiProperty({
    description: 'The SKU (Stock Keeping Unit) of the product',
    example: 'ABC123',
  })
  @IsNumber()
  @IsNotEmpty()
  amount: number;

  @ApiProperty({
    description: 'The SKU (Stock Keeping Unit) of the product',
    example: 'ABC123',
  })
  @IsNumber()
  @IsNotEmpty()
  userId: number;
}
