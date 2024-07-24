import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/domain/user/user.entity';
import { UserController } from './user.controller';
import { UsersService } from './user.service';
import { UsersRepository } from './user.repository';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [UsersService, UsersRepository],
  exports: [],
})
export class UserModule {
  constructor() {}
}
