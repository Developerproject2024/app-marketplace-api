import { ICProducts, IProducts } from './product';

export abstract class ProductMarketPlaceRepository {
  abstract create(product: IProducts): Promise<ICProducts>;
  abstract findAll(): Promise<ICProducts[]>;
}
