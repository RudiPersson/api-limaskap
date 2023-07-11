import { IsOptional, IsString, IsEmail } from 'class-validator';
export class CreateMemberDto {
  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  guardian?: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  @IsOptional()
  phonenumber?: string;

  @IsString()
  teamId: string;
}
