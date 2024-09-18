import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Post } from 'src/domain/post/post.entity';
import { User } from 'src/domain/user/user.entity';

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

  async findPostById(id: number, getLikesCount?: boolean): Promise<Post> {
    if (getLikesCount) {
      const data = await this.createQueryBuilder('post')
        .leftJoin('post.likes', 'like')
        .select('post')
        .addSelect('COUNT(like.id)', 'likeCount')
        .where('post.id = :id', { id })
        .groupBy('post.id')
        .getRawOne();
      console.log('data: ', data);
      return data;
    } else {
      const response = await this.createQueryBuilder('post')
        .leftJoinAndSelect('post.likes', 'like')
        .where('post.id = :id', { id })
        .getOne();
      console.log('response: ', response);
      return response;
    }
  }

  async findOnePostByUUID(uuid: string): Promise<Post | null> {
    return this.findOne({ where: { uuid } });
  }
}
