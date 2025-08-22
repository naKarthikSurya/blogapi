import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto, RegisterDto } from 'src/models/user.model';

@Controller('users')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post()
  @UsePipes(ValidationPipe)
  register(@Body(ValidationPipe) credentials: RegisterDto) {
    return this.authService.register(credentials);
  }

  @Post('login')
  @UsePipes(ValidationPipe)
  login(@Body(ValidationPipe) credentials: LoginDto) {
    return this.authService.login(credentials);
  }
}
