import { IUser } from '../../application/users-use-case/users.dto';

export abstract class UsersMarketPlaceRepository {
  abstract create(user: IUser);
}
