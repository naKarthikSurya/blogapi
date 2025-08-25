import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class LoginDto {
  @IsEmail()
  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  password: string;
}

export class RegisterDto extends LoginDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  @MaxLength(12)
  username: string;
}

export class UpdateUserDto {
  @IsEmail()
  @IsOptional()
  email: string;

  @IsOptional()
  bio: string;
  
  @IsOptional()
  image: string;
}

export interface AuthPayload {
  username: string;
}
