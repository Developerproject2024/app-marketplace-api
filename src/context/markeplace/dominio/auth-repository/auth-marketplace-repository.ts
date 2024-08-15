export abstract class AuthMarketPlaceRepository {
  abstract findAll(): Promise<[]>;
}
