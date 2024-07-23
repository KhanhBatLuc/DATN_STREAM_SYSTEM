import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn,OneToMany } from 'typeorm';
import { OAuth } from './oAuth.entity';
import { UserRole } from '../utils';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  nickname: string;

  @Column()
  password: string;

  @Column({default: false})
  isBlock: boolean;

  @Column({ type: 'text' })
  bio: string;

  @Column({ nullable: true })
  photoAvatar: string;

  @Column({ nullable: true })
  photoBackground: string;

  @CreateDateColumn()
  createdAt: Date;

  @Column({ nullable: true })
  googleId: string; // ID từ Google

  @Column({ nullable: true })
  facebookId: string; // ID từ Facebook

  @OneToMany(() => OAuth, oauth => oauth.user)
  oauth: OAuth[];

  @Column({ type: 'enum', enum: UserRole, default: [UserRole.USER] })
  role: UserRole[];
}
