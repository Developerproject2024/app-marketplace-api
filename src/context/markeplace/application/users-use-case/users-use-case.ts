import { Injectable } from 'src/context/shared/dependency-injection/injectable';
import { UsersMarketPlaceRepository } from '../../dominio/users-repositor/users-marketplace-repository';

@Injectable()
export class UsersUseCase {
  constructor(
    private readonly usersMarketPlaceRepository: UsersMarketPlaceRepository,
  ) {}
  async create(createUserDto: any) {
    return await this.usersMarketPlaceRepository.create(createUserDto);
  }
}
