import { Controller, Get } from '@nestjs/common';
import { FindFilteredPostService } from './find-filtered-post.service';
import { Post as PostScehma } from 'src/domain/post/post.entity';

@Controller('posts')
export class FindFilteredPostController {
  constructor(private postService: FindFilteredPostService) {}

  @Get()
  async findFilteredPost(): Promise<PostScehma[]> {
    return this.postService.findFilteredPost();
  }
}
