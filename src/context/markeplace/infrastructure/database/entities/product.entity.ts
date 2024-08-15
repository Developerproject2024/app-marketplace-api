import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { UserEntity } from './user.entity';

@Entity('productos')
export class ProductEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  sku: string;

  @Column('int')
  amount: number;

  @Column('decimal')
  price: number;

  @ManyToOne(() => UserEntity, (user) => user.product)
  user: UserEntity;
}
