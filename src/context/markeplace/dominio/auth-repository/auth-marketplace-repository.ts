import { IAuth } from '../../application/auth-use-case/auth.dto';

export abstract class AuthMarketPlaceRepository {
  abstract findAll(loginCredentialsDto: IAuth): Promise<[]>;
}
