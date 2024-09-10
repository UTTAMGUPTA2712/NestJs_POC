import { Inject, Injectable } from '@nestjs/common';
import { UserRepository } from 'src/infrastructure/repositories/user/user.repository';
import { User } from 'src/domain/user/user.entity';

@Injectable()
export class UpdateUserByIdService {
  constructor(
    @Inject(UserRepository)
    private usersRepository: UserRepository,
  ) {}

  async updateUserById(id: number, payload: User): Promise<void> {
    this.usersRepository.updateUserById(id, payload);
  }
}
