import { Injectable } from '../../../shared/dependency-injection/injectable';
import { AuthMarketPlaceRepository } from '../../dominio/auth-repository/auth-marketplace-repository';

@Injectable()
export class AuthUseCase {
  constructor(
    private readonly authMarketPlaceRepository: AuthMarketPlaceRepository,
  ) {}
  async execute(): Promise<[]> {
    try {
      console.log('***********APPLICATION****************');

      await this.authMarketPlaceRepository.findAll();
      return [];
    } catch (error) {
      console.log(error);
    }
  }
}
