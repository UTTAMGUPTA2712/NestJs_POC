import { Body, Controller, Param, Patch } from '@nestjs/common';
import { DislikePostService } from './dislike-post.service';
import { DislikePostDto, DislikePostParamsDto } from './dislike-post.dto';

@Controller('posts')
export class DislikePostController {
  constructor(private postService: DislikePostService) {}

  @Patch(':id/dislike')
  async dislikePost(
    @Param() param: DislikePostParamsDto,
    @Body() body: DislikePostDto,
  ): Promise<{ message: 'Post disliked Successfully' }> {
    const { id } = param;
    await this.postService.dislikePost(id, body);
    return { message: 'Post disliked Successfully' };
  }
}
