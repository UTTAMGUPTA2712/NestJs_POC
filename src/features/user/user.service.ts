import { Injectable } from '@nestjs/common';
import { User } from 'src/domain/user/user.entity';
import { UsersRepository } from './user.repository';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(private usersRepository: UsersRepository) {}

  async findAllUsers(): Promise<User[]> {
    return this.usersRepository.findAllUsers();
  }

  async createUser(user: CreateUserDto): Promise<User> {
    return this.usersRepository.initializeUser(user);
  }

  async findOneUserById(id: number): Promise<User | null> {
    return this.usersRepository.findOneUserById(id);
  }

  async deleteUserById(id: number): Promise<void> {
    await this.usersRepository.deleteUserById(id);
  }
}
