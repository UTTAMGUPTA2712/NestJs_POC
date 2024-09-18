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

  async dislikePost(id: number, body: DislikePostDto): Promise<void> {
    const { user_uuid } = body;
    const post = await this.postsRepository.findPostById(id);
    if (!post) {
      throw new NotFoundException('Post not found');
    }
    const user = await this.usersRepository.findUserByUUID(user_uuid);
    if (!user) {
      throw new NotFoundException('User not found');
    }

    if (
      post.likes.length === 0 ||
      !post.likes.find((like) => like.user_id === user.id && like.liked)
    ) {
      throw new NotFoundException('User has not liked this post');
    }

    const dislikePayload = {
      liked: false,
      post,
      user,
    };

    await this.dislikeRepository.createOrUpdateLike(dislikePayload);
  }
}
