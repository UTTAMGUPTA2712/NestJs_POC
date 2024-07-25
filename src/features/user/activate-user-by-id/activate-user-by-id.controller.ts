import { Controller, Param, Patch } from '@nestjs/common';
import { ActivateUserByIdService } from './activate-user-by-id.service';

@Controller('users')
export class ActivateUserByIdController {
  constructor(private userService: ActivateUserByIdService) {}

  @Patch(':id/activate')
  async activateUserById(
    @Param('id') id: number,
  ): Promise<{ message: string }> {
    await this.userService.activateUserById(id);
    return {
      message: 'User activated successfully',
    };
  }
}
