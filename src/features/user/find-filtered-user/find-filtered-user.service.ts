import { Inject, Injectable } from '@nestjs/common';
import { User } from 'src/domain/user/user.entity';
import { UserRepository } from 'src/infrastructure/repositories/user/user.repository';

@Injectable()
export class FindFilteredUserService {
  constructor(
    @Inject(UserRepository)
    private usersRepository: UserRepository,
  ) {}

  async findAllUsers(): Promise<User[]> {
    return this.usersRepository.findAllUsers();
  }
}
