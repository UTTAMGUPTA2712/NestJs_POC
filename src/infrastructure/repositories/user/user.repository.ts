import { Injectable } from '@nestjs/common';
import { User } from 'src/domain/user/user.entity';
import { DataSource, Repository } from 'typeorm';
import { CreateUserDto } from 'src/features/user/create-user/create-user.dto';
import { Name } from 'src/domain/user/value-objects/name';
import { Email } from 'src/domain/user/value-objects/email';
import { Password } from 'src/domain/user/value-objects/password';

@Injectable()
export class UserRepository extends Repository<User> {
  constructor(private dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }

  async findAllUsers(): Promise<User[]> {
    return this.find({ relations: ['posts'] });
  }

  async initializeUser(payload: CreateUserDto): Promise<User> {
    const data = {
      name: new Name(payload.name),
      email: new Email(payload.email),
      password: new Password(payload.password),
      parent_information: payload.parent_information,
    };
    return this.save(this.create(data));
  }

  async updateUserById(id: number, payload: User): Promise<void> {
    await this.update({ id }, payload);
  }

  async findUserById(id: number): Promise<User | null> {
    return this.findOne({ where: { id }, relations: ['posts'] });
  }

  async findUserByUUID(uuid: string): Promise<User | null> {
    return this.findOne({ where: { uuid } });
  }
}
