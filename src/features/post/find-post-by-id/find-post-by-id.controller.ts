import { Controller, Get, Param } from '@nestjs/common';
import { FindPostByIdService } from './find-post-by-id.service';
import { Post } from 'src/domain/post/post.entity';

@Controller('posts')
export class FindPostByIdController {
  constructor(private postService: FindPostByIdService) {}

  @Get(':id')
  findPostById(@Param('id') id: number): Promise<Post> {
    return this.postService.findPostById(id);
  }
}
