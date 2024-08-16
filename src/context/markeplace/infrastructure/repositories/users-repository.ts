import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsersMarketPlaceRepository } from '../../dominio/users-repositor/users-marketplace-repository';
import { UserEntity } from '../database/entities/user.entity';
import * as bcrypt from 'bcrypt';
import { RoleEntity } from '../database/entities/role.entity';
import { IUser } from '../../application/users-use-case/users.dto';

export class UsersRepository extends UsersMarketPlaceRepository {
  private readonly saltRounds = 10;
  constructor(
    @InjectRepository(UserEntity)
    private readonly repository: Repository<UserEntity>,
    @InjectRepository(RoleEntity)
    private readonly roleRepository: Repository<RoleEntity>,
  ) {
    super();
  }

  async create(user: IUser): Promise<[] | any> {
    const { email, password_new, password_confirmation } = user;
    if (password_new !== password_confirmation) {
      return {
        message: 'passwords are not the same',
      };
    }

    const userExist = await this.repository.findOne({ where: { email } });
    if (!userExist) {
      const hashedPassword = await bcrypt.hash(password_new, this.saltRounds);
      const role = await this.roleRepository.findOne({ where: { id: 1 } });

      const userEntity = this.repository.create({
        email,
        password: hashedPassword,
        role,
      });
      return await this.repository.save(userEntity);
    }

    return userExist;
  }
}
