import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { UserRepository } from 'src/infrastructure/repositories/user/user.repository';

@Injectable()
export class ActivateUserByIdService {
  constructor(
    @Inject(UserRepository)
    private usersRepository: UserRepository,
  ) {}

  async activateUserById(id: number): Promise<void> {
    const user = await this.usersRepository.findUserById(id);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    user.activate();
    this.usersRepository.updateUserById(id, user);
  }
}
