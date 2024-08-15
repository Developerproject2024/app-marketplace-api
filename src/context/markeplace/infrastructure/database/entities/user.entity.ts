import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { RoleEntity } from './role.entity';
import { ProductEntity } from './product.entity';

@Entity({ name: 'users' })
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  password: string;

  @ManyToOne(() => RoleEntity, (role) => role.users)
  role: RoleEntity;

  @OneToMany(() => ProductEntity, (product) => product.user)
  product: ProductEntity[];
}
