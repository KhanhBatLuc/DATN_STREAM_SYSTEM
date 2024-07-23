import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User, OAuth, AccessToken, PasswordReset } from './entities';

@Module({
  imports:[
    TypeOrmModule.forFeature([User, OAuth,PasswordReset, AccessToken]),
  ],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService]
})
export class UserModule {}
