import { Module } from '@nestjs/common';
import { UpdateUserByIdController } from './update-user-by-id.controller';
import { UpdateUserByIdService } from './update-user-by-id.service';
import { UserRepository } from 'src/infrastructure/repositories/user/user.repository';
import { DatabaseModule } from 'src/infrastructure/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [UpdateUserByIdController],
  providers: [UpdateUserByIdService, UserRepository],
  exports: [],
})
export class UpdateUserByIdModule {
  constructor() {}
}
