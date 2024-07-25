import { Inject, Injectable } from '@nestjs/common';
import { UserRepository } from 'src/infrastructure/repositories/user/user.repository';

@Injectable()
export class DeactivateUserByIdService {
  constructor(
    @Inject(UserRepository)
    private usersRepository: UserRepository,
  ) {}

  async deactivateUserById(id: number): Promise<void> {
    const user = await this.usersRepository.findUserById(id);
    if (!user) {
      throw new Error('User not found');
    }
    user.deactivate();
    this.usersRepository.updateUserById(id, user);
  }
}
