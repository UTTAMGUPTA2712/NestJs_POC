import { Body, Controller, Param, Patch } from '@nestjs/common';
import { LikePostService } from './like-post.service';
import { LikePostDto, LikePostParamsDto } from './like-post.dto';

@Controller('posts')
export class LikePostController {
  constructor(private postService: LikePostService) {}

  @Patch(':id/like')
  async likePost(
    @Param() param: LikePostParamsDto,
    @Body() body: LikePostDto,
  ): Promise<{ message: 'Post liked Successfully' }> {
    const { id } = param;
    await this.postService.likePost(id, body);
    return { message: 'Post liked Successfully' };
  }
}
