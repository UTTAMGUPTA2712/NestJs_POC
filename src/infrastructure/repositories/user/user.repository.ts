import { Injectable } from '@nestjs/common';
import { User } from 'src/domain/user/user.entity';
import { DataSource, Repository } from 'typeorm';
import { UpdateUserByIdDto } from 'src/features/user/update-user-by-id/update-user-by-id.dto';
import { CreateUserDto } from 'src/features/user/create-user/create-user.dto';

@Injectable()
export class UserRepository extends Repository<User> {
  constructor(private dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }

  async findAllUsers(): Promise<User[]> {
    return this.find({ relations: ['posts'] });
  }

  async initializeUser(payload: CreateUserDto): Promise<User> {
    return this.save(this.create(payload));
  }

  async updateUserById(id: number, payload: UpdateUserByIdDto): Promise<void> {
    await this.update({ id }, payload);
  }

  async findUserById(id: number): Promise<User | null> {
    return this.findOne({ where: { id }, relations: ['posts'] });
  }

  async findUserByUUID(uuid: string): Promise<User | null> {
    return this.findOne({ where: { uuid } });
  }
}
