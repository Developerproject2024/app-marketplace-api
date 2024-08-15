import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { UserEntity } from './user.entity';

@Entity('roles')
export class RoleEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @OneToMany(() => UserEntity, (user) => user.role)
  users: UserEntity[];
}
