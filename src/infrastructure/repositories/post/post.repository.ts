import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Post } from 'src/domain/post/post.entity';
import { User } from 'src/domain/user/user.entity';
import { Content } from 'src/domain/post/value-objects/content';

class CreatePost {
  content: string;
  title: string;
  user: User;
}

@Injectable()
export class PostRepository extends Repository<Post> {
  constructor(private dataSource: DataSource) {
    super(Post, dataSource.createEntityManager());
  }

  async findAllPosts(): Promise<Post[]> {
    return this.find();
  }

  async initializePost(payload: CreatePost): Promise<Post> {
    // const data = {
    //   content: new Content(payload.content),
    //   title: payload.title,
    //   user: payload.user,
    // };
    return this.save(this.create(payload));
  }

  async updatePostById(id: number, payload: Post): Promise<void> {
    await this.update({ id }, payload);
  }

  async findOnePostById(id: number): Promise<Post | null> {
    return this.findOne({ where: { id } });
  }

  async findOnePostByUUID(uuid: string): Promise<Post | null> {
    return this.findOne({ where: { uuid } });
  }
}
