import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Post } from 'src/domain/post/post.entity';
import { User } from 'src/domain/user/user.entity';
import { Reaction } from 'src/domain/post/value-objects/reactions.enum';
import { Like } from 'src/domain/post/like.entity';

class CreateOrUpdateLike {
  liked: boolean;
  reaction?: Reaction;
  post: Post;
  user: User;
}

@Injectable()
export class LikeRepository extends Repository<Like> {
  constructor(private dataSource: DataSource) {
    super(Like, dataSource.createEntityManager());
  }

  async createOrUpdateLike(payload: CreateOrUpdateLike): Promise<void> {
    await this.upsert(payload, ['post_id', 'user_id']);
  }
}
