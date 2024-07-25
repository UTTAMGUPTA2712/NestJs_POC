import { Inject, Injectable } from '@nestjs/common';
import { UserRepository } from 'src/infrastructure/repositories/user/user.repository';
import { UpdateUserByIdDto } from './update-user-by-id.dto';

@Injectable()
export class UpdateUserByIdService {
  constructor(
    @Inject(UserRepository)
    private usersRepository: UserRepository,
  ) {}

  async updateUserById(id: number, payload: UpdateUserByIdDto): Promise<void> {
    this.usersRepository.updateUserById(id, payload);
  }
}
