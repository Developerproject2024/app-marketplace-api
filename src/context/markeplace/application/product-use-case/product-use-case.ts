import { Injectable } from '../../../shared/dependency-injection/injectable';
import { ICProducts } from '../../dominio/products-repository/product';
import { ProductMarketPlaceRepository } from '../../dominio/products-repository/product-marketplace-repository';
import { IProduct } from './product.dto';

@Injectable()
export class ProductUseCase {
  constructor(
    private readonly productMarketPlaceRepository: ProductMarketPlaceRepository,
  ) {}
  async execute(createProductDto: IProduct): Promise<ICProducts> {
    try {
      return await this.productMarketPlaceRepository.create(createProductDto);
    } catch (error) {
      console.log(error);
    }
  }

  async findAll(): Promise<ICProducts[] | []> {
    return await this.productMarketPlaceRepository.findAll();
  }
}
