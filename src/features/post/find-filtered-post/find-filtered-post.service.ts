import { Inject, Injectable } from '@nestjs/common';
import { Post } from 'src/domain/post/post.entity';
import { PostRepository } from 'src/infrastructure/repositories/post/post.repository';

@Injectable()
export class FindFilteredPostService {
  constructor(
    @Inject(PostRepository)
    private postsRepository: PostRepository,
  ) {}

  async findFilteredPost(): Promise<Post[]> {
    return this.postsRepository.findAllPosts();
  }
}
