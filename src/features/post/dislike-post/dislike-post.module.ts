import { Module } from '@nestjs/common';
import { PostRepository } from 'src/infrastructure/repositories/post/post.repository';
import { DatabaseModule } from 'src/infrastructure/database/database.module';
import { DislikePostController } from './dislike-post.controller';
import { UserRepository } from 'src/infrastructure/repositories/user/user.repository';
import { DislikePostService } from './dislike-post.service';
import { LikeRepository } from 'src/infrastructure/repositories/like/like.repository';

@Module({
  imports: [DatabaseModule],
  controllers: [DislikePostController],
  providers: [
    DislikePostService,
    PostRepository,
    UserRepository,
    LikeRepository,
  ],
  exports: [],
})
export class DislikePostModule {}
