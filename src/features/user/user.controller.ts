import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UsersService } from './user.service';
import { User } from 'src/domain/user/user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UserController {
  constructor(private userService: UsersService) {}

  @Get()
  findAllUsers() {
    return this.userService.findAllUsers();
  }

  @Post()
  async createUser(@Body() payload: CreateUserDto): Promise<User> {
    console.log('payload: ', payload);
    const response = await this.userService.createUser(payload);
    if (!response) {
      throw new Error('User creation failed');
    }
    return response;
  }

  @Get(':id')
  findOneUserById(@Param() params: any) {
    return this.userService.findOneUserById(params.id);
  }

  @Delete(':id')
  deleteUserById(@Param() params: any) {
    return this.userService.deleteUserById(params.id);
  }

  @Patch(':id')
  restore(): string {
    return 'hit';
  }
}
