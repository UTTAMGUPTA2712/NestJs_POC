import { Module } from '@nestjs/common';
import { FindFilteredPostController } from './find-filtered-post.controller';
import { FindFilteredPostService } from './find-filtered-post.service';
import { PostRepository } from 'src/infrastructure/repositories/post/post.repository';
import { DatabaseModule } from 'src/infrastructure/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [FindFilteredPostController],
  providers: [FindFilteredPostService, PostRepository],
  exports: [],
})
export class FindFilteredPostModule {}
