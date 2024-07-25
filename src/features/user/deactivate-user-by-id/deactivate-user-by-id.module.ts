import { Module } from '@nestjs/common';
import { DeactivateUserByIdController } from './deactivate-user-by-id.controller';
import { DeactivateUserByIdService } from './deactivate-user-by-id.service';
import { UserRepository } from 'src/infrastructure/repositories/user/user.repository';
import { DatabaseModule } from 'src/infrastructure/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [DeactivateUserByIdController],
  providers: [DeactivateUserByIdService, UserRepository],
  exports: [],
})
export class DeactivateUserByIdModule {
  constructor() {}
}
