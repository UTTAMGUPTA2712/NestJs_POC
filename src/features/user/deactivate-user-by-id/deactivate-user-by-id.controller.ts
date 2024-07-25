import { Controller, Param, Patch } from '@nestjs/common';
import { DeactivateUserByIdService } from './deactivate-user-by-id.service';

@Controller('users')
export class DeactivateUserByIdController {
  constructor(private userService: DeactivateUserByIdService) {}

  @Patch(':id/deactivate')
  async deactivateUserById(
    @Param('id') id: number,
  ): Promise<{ message: string }> {
    await this.userService.deactivateUserById(id);
    return {
      message: 'User deactivated successfully',
    };
  }
}
