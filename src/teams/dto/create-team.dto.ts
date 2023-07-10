import {
  IsEmail,
  IsNumber,
  IsOptional,
  IsString,
  IsPositive,
  IsDate,
} from 'class-validator';

export class CreateTeamDto {
  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsString()
  @IsOptional()
  @IsEmail()
  email: string;

  @IsNumber()
  @IsPositive()
  price: number;

  @IsNumber()
  @IsPositive()
  member_size: number;

  @IsDate()
  signup_deadline: Date;

  @IsString()
  associationId: string;
}
