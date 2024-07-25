import { Inject, Injectable } from '@nestjs/common';
import { User } from 'src/domain/user/user.entity';
import { UserRepository } from 'src/infrastructure/repositories/user/user.repository';

@Injectable()
export class FindUserByIdService {
  constructor(
    @Inject(UserRepository)
    private usersRepository: UserRepository,
  ) {}

  async findUserById(id: number): Promise<User> {
    return this.usersRepository.findUserById(id);
  }
}
