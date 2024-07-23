import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
// import { User } from './entities';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../user/dto/create-user.dto';

@Injectable()
export class AuthService {
    // constructor(
    //     @InjectRepository(User)
    //     private readonly userRepository: Repository<User>
    // ){

    // }

    // async create(createUserDto: CreateUserDto): Promise<User> {
    //     const newUser = this.userRepository.create(createUserDto);
    //     return await this.userRepository.save(newUser);
    //   }
}
