import { Module } from '@nestjs/common';
import { FindPostByIdController } from './find-post-by-id.controller';
import { FindPostByIdService } from './find-post-by-id.service';
import { PostRepository } from 'src/infrastructure/repositories/post/post.repository';
import { DatabaseModule } from 'src/infrastructure/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [FindPostByIdController],
  providers: [FindPostByIdService, PostRepository],
  exports: [],
})
export class FindPostByIdModule {
  constructor() {}
}
