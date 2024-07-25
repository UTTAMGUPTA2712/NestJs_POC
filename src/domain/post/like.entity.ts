import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Index,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Reaction } from './value-objects/reactions.enum';
import { Post } from './post.entity';
import { User } from '../user/user.entity';

@Entity()
@Index(['post_id', 'user_id'], { unique: true })
export class Like {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'int',
    nullable: false,
  })
  post_id: number;

  @Column({
    type: 'int',
    nullable: false,
  })
  user_id: number;

  @Column({
    type: 'boolean',
    nullable: false,
    default: false,
  })
  liked: boolean;

  @Column({
    type: 'enum',
    nullable: false,
    default: Reaction.LIKE,
    enum: Reaction,
  })
  reaction: Reaction;

  @ManyToOne(() => Post, (post) => post.likes, { nullable: false })
  @JoinColumn({ name: 'post_id', referencedColumnName: 'id' })
  post: Post;

  @ManyToOne(() => User, (user) => user.likes, { nullable: false })
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  user: User;
}
