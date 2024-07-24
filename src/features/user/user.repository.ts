import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/domain/user/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersRepository {
  constructor(
    @InjectRepository(User)
    private repository: Repository<User>,
  ) {}

  async findAllUsers(): Promise<User[]> {
    return this.repository.find();
  }

  async initializeUser(payload: CreateUserDto): Promise<User> {
    return this.repository.create(payload);
  }

  async UpdateUserById(id: number, payload: User): Promise<void> {
    await this.repository.update({ id }, payload);
  }

  async findOneUserById(id: number): Promise<User | null> {
    return this.repository.findOne({ where: { id } });
  }

  async deleteUserById(id: number): Promise<void> {
    await this.repository.softDelete({ id });
  }
}
