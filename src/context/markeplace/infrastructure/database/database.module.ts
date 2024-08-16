import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseConfig } from '../../../shared/config/database.config';
import { UserEntity } from './entities/user.entity';
import { RoleEntity } from './entities/role.entity';
import { ProductEntity } from './entities/product.entity';

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forRootAsync({
      useFactory: async (config: ConfigService) => {
        const database = config.get<DatabaseConfig>('database');
        return {
          type: 'postgres',
          host: database.host,
          port: +database.port,
          username: database.user,
          password: database.password,
          database: database.name,
          entities: [UserEntity, RoleEntity, ProductEntity],
          synchronize: database.environment !== 'prod',
          logging:
            database.environment !== 'prod' && process.env.NODE_ENV !== 'test',
          ssl: {
            rejectUnauthorized: false,
          },
        };
      },
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}
