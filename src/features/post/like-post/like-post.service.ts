import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { LikeRepository } from 'src/infrastructure/repositories/like/like.repository';
import { PostRepository } from 'src/infrastructure/repositories/post/post.repository';
import { UserRepository } from 'src/infrastructure/repositories/user/user.repository';
import { LikePostDto } from './like-post.dto';

@Injectable()
export class LikePostService {
  constructor(
    @Inject(PostRepository)
    @Inject(UserRepository)
    @Inject(LikeRepository)
    private postsRepository: PostRepository,
    private usersRepository: UserRepository,
    private likeRepository: LikeRepository,
  ) {}

  async likePost(id: string, body: LikePostDto): Promise<void> {
    const { user_uuid, reaction } = body;
    const post = await this.postsRepository.findOnePostByUUID(id);
    if (!post) {
      throw new NotFoundException('Post not found');
    }
    const user = await this.usersRepository.findUserByUUID(user_uuid);
    if (!user) {
      throw new NotFoundException('User not found');
    }

    const likePayload = {
      liked: true,
      reaction,
      post,
      user,
    };

    await this.likeRepository.createOrUpdateLike(likePayload);
  }
}
