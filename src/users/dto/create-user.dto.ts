import { IsOptional, IsString, IsEmail } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  password: string;
}
