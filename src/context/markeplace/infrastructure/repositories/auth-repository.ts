import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';
import { UnauthorizedException } from '@nestjs/common';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { AuthMarketPlaceRepository } from '../../dominio/auth-repository/auth-marketplace-repository';
import { UserEntity } from '../database/entities/user.entity';
import { IAuth } from '../../application/auth-use-case/auth.dto';

export class AuthRepository extends AuthMarketPlaceRepository {
  constructor(
    @InjectRepository(UserEntity)
    private readonly repository: Repository<UserEntity>,
    private jwtService: JwtService,
  ) {
    super();
  }

  async findAll(loginCredentialsDto: any): Promise<any> {
    return await this.validateUser(loginCredentialsDto);
  }
  async validateUser(user: IAuth): Promise<any> {
    const { email, password } = user;
    const userExist = await this.repository.findOne({
      where: { email },
      relations: ['role'],
    });
    if (userExist && (await bcrypt.compare(password, userExist.password))) {
      return await this.generateAccessToken(userExist.id, userExist.role.name);
    }

    throw new UnauthorizedException();
  }

  async generateAccessToken(userId: number, role: string) {
    const payload = { userId, role };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
