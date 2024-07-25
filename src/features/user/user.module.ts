import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/infrastructure/database/database.module';
import { CreateUserModule } from './create-user/create-user.module';
import { FindFilteredUserModule } from './find-filtered-user/find-filtered-user.module';
import { FindUserByIdModule } from './find-user-by-id/find-user-by-id.module';
import { UpdateUserByIdModule } from './update-user-by-id/update-user-by-id.module';
import { ActivateUserByIdModule } from './activate-user-by-id/activate-user-by-id.module';
import { DeactivateUserByIdModule } from './deactivate-user-by-id/deactivate-user-by-id.module';

@Module({
  imports: [
    DatabaseModule,
    CreateUserModule,
    FindFilteredUserModule,
    FindUserByIdModule,
    UpdateUserByIdModule,
    ActivateUserByIdModule,
    DeactivateUserByIdModule,
  ],
  providers: [],
  exports: [],
})
export class UserModule {}
