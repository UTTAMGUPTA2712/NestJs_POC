import { Entity, PrimaryGeneratedColumn, Column, Generated } from 'typeorm';

@Entity()
export class PersonalDetails {
  @PrimaryGeneratedColumn()
  id: number;

  @Generated('uuid')
  uuid: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;
}
