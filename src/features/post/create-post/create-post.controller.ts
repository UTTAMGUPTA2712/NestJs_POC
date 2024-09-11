import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreatePostService } from './create-post.service';
import { Post as PostScehma } from 'src/domain/post/post.entity';
import { CreatePostDto } from './create-post.dto';
// import { Content } from 'src/domain/post/value-objects/content';
// import { CreatePostInterface } from './create-post.interface';

@Controller('posts')
export class CreatePostController {
  constructor(private postService: CreatePostService) { }

  @Post()
  @UsePipes(new ValidationPipe())
  async createPost(@Body() payload: CreatePostDto): Promise<PostScehma> {
    // const createPostPayload = new CreatePostInterface(payload);
    return this.postService.createPost(payload);
  }
}
