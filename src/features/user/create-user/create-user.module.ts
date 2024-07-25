import { Module } from '@nestjs/common';
import { CreateUserController } from './create-user.controller';
import { CreateUserService } from './create-user.service';
import { UserRepository } from 'src/infrastructure/repositories/user/user.repository';
import { DatabaseModule } from 'src/infrastructure/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [CreateUserController],
  providers: [CreateUserService, UserRepository],
  exports: [],
})
export class CreateUserModule {}
