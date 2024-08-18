import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductMarketPlaceRepository } from '../../dominio/products-repository/product-marketplace-repository';
import { ProductEntity } from '../database/entities/product.entity';
import {
  ICProducts,
  IProducts,
} from '../../dominio/products-repository/product';
import { UserEntity } from '../database/entities/user.entity';

export class ProductRepository extends ProductMarketPlaceRepository {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly repository: Repository<ProductEntity>,
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {
    super();
  }

  async create(product: IProducts): Promise<ICProducts | any> {
    const { userId, ...data } = product;
    const user = await this.userRepository.findOne({ where: { id: userId } });

    if (!user) {
      return { message: 'user no existe' };
    }

    const productEntity = this.repository.create({ ...data, user });
    await this.repository.save(productEntity);
    return await this.findAllByUser(userId);
  }
  async findAll(): Promise<ICProducts[] | any[]> {
    return await this.repository.find({
      relations: ['user'],
      order: {
        id: 'DESC',
      },
    });
  }

  async findAllByUser(userId: number): Promise<ICProducts[] | any> {
    return await this.repository.find({
      where: { user: { id: userId } },
      relations: ['user'],
      order: {
        id: 'DESC',
      },
    });
  }
}
