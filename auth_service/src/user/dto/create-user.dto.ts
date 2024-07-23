import { IsEmail, IsNotEmpty, IsEnum } from 'class-validator';
import { UserRole } from '../../user/utils';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  nickname: string;

  @IsNotEmpty()
  bio: string;

  @IsNotEmpty()
  photoAvatar: string;

  @IsNotEmpty()
  photoBackground: string;

  @IsEnum(UserRole, { each: true })
  roles: UserRole[];

}