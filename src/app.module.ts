import { Module } from '@nestjs/common';
import { MarkeplaceModule } from './context/markeplace/infrastructure/markeplace.module';
import { APP_FILTER, APP_GUARD } from '@nestjs/core';
import { HttpExceptionFilter } from './context/shared/interceptor/errors.interceptor';
import { ApiKeyGuard } from './context/guards/api-key.guard';

@Module({
  imports: [MarkeplaceModule],
  controllers: [],
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
    {
      provide: APP_GUARD,
      useClass: ApiKeyGuard,
    },
  ],
})
export class AppModule {}
