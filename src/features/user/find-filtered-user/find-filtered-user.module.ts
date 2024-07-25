import { Module } from '@nestjs/common';
import { FindFilteredUserController } from './find-filtered-user.controller';
import { FindFilteredUserService } from './find-filtered-user.service';
import { UserRepository } from 'src/infrastructure/repositories/user/user.repository';
import { DatabaseModule } from 'src/infrastructure/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [FindFilteredUserController],
  providers: [FindFilteredUserService, UserRepository],
  exports: [],
})
export class FindFilteredUserModule {
  constructor() {}
}
