    import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
    import { User } from './user.entity';

    @Entity()
    export class OAuth {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, user => user.oauth) // Liên kết với bảng User
    user: User;

    @Column()
    provider: string; // Google, Facebook

    @Column()
    providerUserId: string; // ID người dùng từ provider

    @Column()
    accessToken: string;

    @Column({ type: 'timestamp' })
    expiresAt: Date;
    }
