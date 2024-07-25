import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Generated,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Status } from './value-objects/status.enum';
import { Post } from 'src/domain/post/post.entity';
import { Like } from '../post/like.entity';

@Entity()
export class User {
  activate() {
    if (this.status === Status.ACTIVE) {
      throw new Error('User already activated');
    }
    this.status = Status.ACTIVE;
  }

  deactivate() {
    if (this.status === Status.INACTIVE) {
      throw new Error('User already deactivated');
    }
    this.status = Status.INACTIVE;
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
  })
  @Generated('uuid')
  uuid: string;

  @Column({
    type: 'varchar',
    length: 50,
  })
  first_name: string;

  @Column({
    type: 'varchar',
    length: 50,
  })
  last_name: string;

  @Column({
    type: 'varchar',
    length: 50,
    unique: true,
    update: false,
  })
  email: string;

  @Column({
    type: 'varchar',
    length: 50,
    select: false,
  })
  password: string;

  @Column({
    type: 'enum',
    enum: Status,
    default: Status.ACTIVE,
  })
  status: Status;

  @Column({
    type: 'simple-json',
  })
  parent_information: {
    mother: string;
    father: string;
    mother_contact: string;
    father_contact: string;
  };

  @CreateDateColumn({
    update: false,
  })
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;

  @OneToMany(() => Post, (post) => post.user)
  @JoinColumn({ name: 'id', referencedColumnName: 'user_id' })
  posts: Post[];

  @OneToMany(() => Like, (like) => like.user)
  @JoinColumn({ name: 'id', referencedColumnName: 'user_id' })
  likes: Like[];
}
