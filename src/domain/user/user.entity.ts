import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Generated,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';
import { Status } from './value-objects/status.enum';

@Entity()
export class User {
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
}
