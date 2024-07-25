import { Module } from '@nestjs/common';
import { CreatePostController } from './create-post.controller';
import { CreatePostService } from './create-post.service';
import { PostRepository } from 'src/infrastructure/repositories/post/post.repository';
import { DatabaseModule } from 'src/infrastructure/database/database.module';
import { UserRepository } from 'src/infrastructure/repositories/user/user.repository';

@Module({
  imports: [DatabaseModule],
  controllers: [CreatePostController],
  providers: [CreatePostService, PostRepository, UserRepository],
  exports: [],
})
export class CreatePostModule {}
