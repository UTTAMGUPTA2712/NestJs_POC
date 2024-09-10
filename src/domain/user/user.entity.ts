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
import { Email } from './value-objects/email';
import { Password } from './value-objects/password';
import { Name } from './value-objects/name';

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
    transformer: {
      to: (value: Name) => {
        return value.getValue();
      },
      from: (value: string) => {
        return value;
      },
    },
  })
  name: Name;

  @Column({
    type: 'varchar',
    length: 50,
    unique: true,
    update: false,
    transformer: {
      to: (value: Email) => {
        return value.getValue();
      },
      from: (value: string) => {
        return value;
      },
    },
  })
  email: Email;

  @Column({
    type: 'varchar',
    length: 50,
    select: false,
    transformer: {
      to: (value: Password) => {
        return value.getValue();
      },
      from: (value: string) => {
        return value;
      },
    },
  })
  password: Password;

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
