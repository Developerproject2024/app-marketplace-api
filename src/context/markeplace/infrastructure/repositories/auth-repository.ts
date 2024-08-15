import { AuthMarketPlaceRepository } from '../../dominio/auth-repository/auth-marketplace-repository';

export class AuthRepository extends AuthMarketPlaceRepository {
  constructor() {
    super();
  }

  async findAll(): Promise<[]> {
    console.log('********************DOMINIO*******************');
    return [];
  }
}
