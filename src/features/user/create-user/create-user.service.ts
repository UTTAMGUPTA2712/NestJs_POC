import { Inject, Injectable } from '@nestjs/common';
import { User } from 'src/domain/user/user.entity';
import { UserRepository } from 'src/infrastructure/repositories/user/user.repository';
import { CreateUserDto } from './create-user.dto';

@Injectable()
export class CreateUserService {
  constructor(
    @Inject(UserRepository)
    private usersRepository: UserRepository,
  ) {}

  async createUser(user: CreateUserDto): Promise<User> {
    return this.usersRepository.initializeUser(user);
  }
}
