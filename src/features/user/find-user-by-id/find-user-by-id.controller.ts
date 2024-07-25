import { Controller, Get, Param } from '@nestjs/common';
import { FindUserByIdService } from './find-user-by-id.service';
import { User } from 'src/domain/user/user.entity';

@Controller('users')
export class FindUserByIdController {
  constructor(private userService: FindUserByIdService) {}

  @Get(':id')
  findUserById(@Param('id') id: number): Promise<User> {
    return this.userService.findUserById(id);
  }
}
