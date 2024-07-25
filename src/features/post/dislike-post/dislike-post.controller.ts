import { Body, Controller, Param, Patch } from '@nestjs/common';
import { DislikePostService } from './dislike-post.service';
import { DislikePostDto } from './dislike-post.dto';

@Controller('posts')
export class DislikePostController {
  constructor(private postService: DislikePostService) {}

  @Patch(':id/dislike')
  async dislikePost(
    @Param() param: { id: string },
    @Body() body: DislikePostDto,
  ): Promise<{ message: 'Post disliked Successfully' }> {
    const { id } = param;
    await this.postService.dislikePost(id, body);
    return { message: 'Post disliked Successfully' };
  }
}
