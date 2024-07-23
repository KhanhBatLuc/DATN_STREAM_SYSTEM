import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  CreateDateColumn,
} from 'typeorm';
import { User } from './user.entity';

@Entity()
export class EmailVerification {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => User)
  @JoinColumn()
  emailVerification: User;

  @Column()
  token: string;

  @Column({ type: 'timestamp' })
  expiresAt: Date;

  //   @CreateDateColumn()
  //   createdAt: Date;
}
