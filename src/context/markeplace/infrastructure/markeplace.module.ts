import { Module } from '@nestjs/common';
import { AuthController } from './htt-api/auth/auth.controller';

@Module({
  controllers: [AuthController],
})
export class MarkeplaceModule {}
