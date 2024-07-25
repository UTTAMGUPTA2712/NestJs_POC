import { Body, Controller, Param, Put } from '@nestjs/common';
import { UpdateUserByIdService } from './update-user-by-id.service';
import { UpdateUserByIdDto } from './update-user-by-id.dto';

@Controller('users')
export class UpdateUserByIdController {
  constructor(private userService: UpdateUserByIdService) {}

  @Put(':id')
  async updateUserById(
    @Param('id') id: number,
    @Body() payload: UpdateUserByIdDto,
  ): Promise<{ message: string }> {
    await this.userService.updateUserById(id, payload);
    return {
      message: 'User updated successfully',
    };
  }
}
