import { Module } from '@nestjs/common';
import { PostRepository } from 'src/infrastructure/repositories/post/post.repository';
import { DatabaseModule } from 'src/infrastructure/database/database.module';
import { LikePostController } from './like-post.controller';
import { UserRepository } from 'src/infrastructure/repositories/user/user.repository';
import { LikePostService } from './like-post.service';
import { LikeRepository } from 'src/infrastructure/repositories/like/like.repository';

@Module({
  imports: [DatabaseModule],
  controllers: [LikePostController],
  providers: [LikePostService, PostRepository, UserRepository, LikeRepository],
  exports: [],
})
export class LikePostModule {}
