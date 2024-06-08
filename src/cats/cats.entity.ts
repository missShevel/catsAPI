import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';

// export interface Cat {
//   id: string;
//   name: string;
//   color: string;
//   birthDate: Date;
//   createdAt: Date;
//   updatedAt: Date;
// }

@Entity()
export class Cat {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column()
  @Index({ unique: true })
  name: string;

  @Column()
  color: string;

  @Column()
  birthDate: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
