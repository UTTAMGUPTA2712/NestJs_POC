import { Controller, Get } from '@nestjs/common';
import { FindFilteredUserService } from './find-filtered-user.service';
import { User } from 'src/domain/user/user.entity';

@Controller('users')
export class FindFilteredUserController {
  constructor(private userService: FindFilteredUserService) {}

  @Get()
  findAllUsers(): Promise<User[]> {
    return this.userService.findAllUsers();
  }
}
