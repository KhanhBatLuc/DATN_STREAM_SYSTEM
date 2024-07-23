import * as bcrypt from 'bcrypt';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>
    ){

    }
    async create(createUserDto: CreateUserDto): Promise<User> {
        const { password, ...rest } = createUserDto;
    
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = this.userRepository.create({
            ...rest, password: hashedPassword
        });
        return await this.userRepository.save(newUser);
      }
    async findOne(email: string): Promise<User|undefined> {
        const existingUser = await this.userRepository.findOne({
            where: { email: email },
          });
          return existingUser;
    }
}
