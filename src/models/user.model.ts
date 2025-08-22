import {
  IsEmail,
  IsNotEmpty,
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

export interface AuthPayload {
  username: string;
}
