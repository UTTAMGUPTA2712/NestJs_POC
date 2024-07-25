import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserService } from './create-user.service';
import { User } from 'src/domain/user/user.entity';
import { CreateUserDto } from './create-user.dto';

@Controller('users')
export class CreateUserController {
  constructor(private userService: CreateUserService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  async createUser(@Body() payload: CreateUserDto): Promise<User> {
    return this.userService.createUser(payload);
  }
}
