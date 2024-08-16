import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { MarkeplaceModule } from './context/markeplace/infrastructure/markeplace.module';
import { APP_FILTER } from '@nestjs/core';
import { HttpExceptionFilter } from './context/shared/interceptor/errors.interceptor';

@Module({
  imports: [
    MarkeplaceModule,
    JwtModule.register({
      secret: 'your-secret-key', // Mejor guardarlo en una variable de entorno
      signOptions: { expiresIn: '60m' }, // Configura el tiempo de expiración del token
    }),
  ],
  controllers: [],
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
})
export class AppModule {}
