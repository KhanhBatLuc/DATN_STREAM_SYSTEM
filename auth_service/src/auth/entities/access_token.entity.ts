import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class AccessToken {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => User)
  @JoinColumn()
  accessToken: User;

  @Column()
  token: string;

  @Column({ type: 'timestamp' })
  expiresAt: Date;
}
