import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Post } from 'src/domain/post/post.entity';
import { PostRepository } from 'src/infrastructure/repositories/post/post.repository';
import { CreatePostDto } from './create-post.dto';
import { UserRepository } from 'src/infrastructure/repositories/user/user.repository';

@Injectable()
export class CreatePostService {
  constructor(
    @Inject(PostRepository)
    @Inject(UserRepository)
    private postsRepository: PostRepository,
    private usersRepository: UserRepository,
  ) {}

  async createPost(post: CreatePostDto): Promise<Post> {
    const { user_uuid, title, content } = post;
    const user = await this.usersRepository.findUserByUUID(user_uuid);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    const postPayload = { title, content: content, user: user };
    return this.postsRepository.initializePost(postPayload);
  }
}
