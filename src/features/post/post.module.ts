import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/infrastructure/database/database.module';
import { CreatePostModule } from './create-post/create-post.module';
import { FindFilteredPostModule } from './find-filtered-post/find-filtered-post.module';
import { LikePostModule } from './like-post/like-post.module';
import { FindPostByIdModule } from './find-post-by-id/find-post-by-id.module';
import { DislikePostModule } from './dislike-post/dislike-post.module';

@Module({
  imports: [
    DatabaseModule,
    CreatePostModule,
    FindFilteredPostModule,
    FindPostByIdModule,
    LikePostModule,
    DislikePostModule,
  ],
  providers: [],
  exports: [],
})
export class PostModule {}
