import { Inject, Injectable } from '@nestjs/common';
import { Post } from 'src/domain/post/post.entity';
import { PostRepository } from 'src/infrastructure/repositories/post/post.repository';

@Injectable()
export class FindPostByIdService {
  constructor(
    @Inject(PostRepository)
    private postsRepository: PostRepository,
  ) {}

  async findPostById(id: number): Promise<Post> {
    return this.postsRepository.findPostById(id, true);
  }
}
