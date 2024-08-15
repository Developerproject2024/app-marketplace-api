import { Module } from '@nestjs/common';
import { MarkeplaceModule } from './context/markeplace/infrastructure/markeplace.module';

@Module({
  imports: [MarkeplaceModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
