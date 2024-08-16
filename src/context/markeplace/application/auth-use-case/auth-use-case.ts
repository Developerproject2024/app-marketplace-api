import { Injectable } from '../../../shared/dependency-injection/injectable';
import { AuthMarketPlaceRepository } from '../../dominio/auth-repository/auth-marketplace-repository';
import { IAuth } from './auth.dto';

@Injectable()
export class AuthUseCase {
  constructor(
    private readonly authMarketPlaceRepository: AuthMarketPlaceRepository,
  ) {}
  async authentication(loginCredentialsDto: IAuth): Promise<any> {
    return await this.authMarketPlaceRepository.findAll(loginCredentialsDto);
  }
}
