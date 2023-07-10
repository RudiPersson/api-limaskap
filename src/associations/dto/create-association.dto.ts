import { IsOptional, IsString, IsEmail } from 'class-validator';

export class CreateAssociationDto {
  @IsString()
  name: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  @IsOptional()
  logo?: string;

  @IsString()
  userId: string;
}
