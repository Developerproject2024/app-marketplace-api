import { Module } from '@nestjs/common';
import { MarkeplaceModule } from './context/markeplace/infrastructure/markeplace.module';
import { APP_FILTER } from '@nestjs/core';
import { HttpExceptionFilter } from './context/shared/interceptor/errors.interceptor';

@Module({
  imports: [MarkeplaceModule],
  controllers: [],
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
})
export class AppModule {}
