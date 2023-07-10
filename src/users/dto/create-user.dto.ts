import { IsOptional, IsString, IsEmail, Length } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  @Length(4, 12)
  password: string;
}
