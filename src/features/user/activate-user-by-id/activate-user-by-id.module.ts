import { Module } from '@nestjs/common';
import { ActivateUserByIdController } from './activate-user-by-id.controller';
import { ActivateUserByIdService } from './activate-user-by-id.service';
import { UserRepository } from 'src/infrastructure/repositories/user/user.repository';
import { DatabaseModule } from 'src/infrastructure/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [ActivateUserByIdController],
  providers: [ActivateUserByIdService, UserRepository],
  exports: [],
})
export class ActivateUserByIdModule {
  constructor() {}
}
