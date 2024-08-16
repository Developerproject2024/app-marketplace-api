import { Injectable } from '../../../shared/dependency-injection/injectable';
import { UsersMarketPlaceRepository } from '../../dominio/users-repositor/users-marketplace-repository';
import { IUser } from './users.dto';

@Injectable()
export class UsersUseCase {
  constructor(
    private readonly usersMarketPlaceRepository: UsersMarketPlaceRepository,
  ) {}
  async create(createUserDto: IUser) {
    return await this.usersMarketPlaceRepository.create(createUserDto);
  }
}
