import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/infrastructure/database/database.module';
import { CreatePostModule } from './create-post/create-post.module';
import { FindFilteredPostModule } from './find-filtered-post/find-filtered-post.module';
import { LikePostModule } from './like-post/like-post.module';

@Module({
  imports: [
    DatabaseModule,
    CreatePostModule,
    FindFilteredPostModule,
    LikePostModule,
  ],
  providers: [],
  exports: [],
})
export class PostModule {}
