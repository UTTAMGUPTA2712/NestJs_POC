import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  Generated,
} from 'typeorm';

@Entity()
export class Post {
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
  title: string;

  @Column({
    type: 'text',
  })
  content: string;

  @CreateDateColumn({
    update: false,
  })
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;
}
