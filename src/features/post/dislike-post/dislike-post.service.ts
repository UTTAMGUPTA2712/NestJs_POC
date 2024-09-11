import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { LikeRepository } from 'src/infrastructure/repositories/like/like.repository';
import { PostRepository } from 'src/infrastructure/repositories/post/post.repository';
import { UserRepository } from 'src/infrastructure/repositories/user/user.repository';
import { DislikePostDto } from './dislike-post.dto';

@Injectable()
export class DislikePostService {
  constructor(
    @Inject(PostRepository)
    @Inject(UserRepository)
    @Inject(LikeRepository)
    private postsRepository: PostRepository,
    private usersRepository: UserRepository,
    private dislikeRepository: LikeRepository,
  ) {}

  async dislikePost(id: string, body: DislikePostDto): Promise<void> {
    const { user_uuid } = body;
    const post = await this.postsRepository.findOnePostByUUID(id);
    if (!post) {
      throw new NotFoundException('Post not found');
    }
    const user = await this.usersRepository.findUserByUUID(user_uuid);
    if (!user) {
      throw new NotFoundException('User not found');
    }

    const dislikePayload = {
      liked: false,
      post,
      user,
    };

    await this.dislikeRepository.createOrUpdateLike(dislikePayload);
  }
}
