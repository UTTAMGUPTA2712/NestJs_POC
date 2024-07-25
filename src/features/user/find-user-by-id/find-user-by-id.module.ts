import { Module } from '@nestjs/common';
import { FindUserByIdController } from './find-user-by-id.controller';
import { FindUserByIdService } from './find-user-by-id.service';
import { UserRepository } from 'src/infrastructure/repositories/user/user.repository';
import { DatabaseModule } from 'src/infrastructure/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [FindUserByIdController],
  providers: [FindUserByIdService, UserRepository],
  exports: [],
})
export class FindUserByIdModule {
  constructor() {}
}
