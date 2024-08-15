import { Module } from '@nestjs/common';
import { AuthController } from './htt-api/auth/auth.controller';
import { AuthUseCase } from '../application/auth-use-case/auth-use-case';

@Module({
  imports: [AuthUseCase],
  controllers: [AuthController],
  providers: [AuthUseCase],
  exports: [AuthUseCase],
})
export class MarkeplaceModule {}
