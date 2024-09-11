import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { UserRepository } from 'src/infrastructure/repositories/user/user.repository';

@Injectable()
export class DeactivateUserByIdService {
  constructor(
    @Inject(UserRepository)
    private usersRepository: UserRepository,
  ) {}

  async deactivateUserById(id: number): Promise<void> {
    const user = await this.usersRepository.findUserById(id);
    console.log('user: ', user);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    user.deactivate();
    console.log('user: ', user);
    this.usersRepository.updateUserById(id, user);
  }
}
