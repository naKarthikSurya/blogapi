import {
  Controller,
  Get,
  UseGuards,
  Put,
  Body,
  ValidationPipe,
} from '@nestjs/common';
import { User } from 'src/auth/user.decorator';
import { AuthGuard } from '@nestjs/passport';
import { UserEntity } from 'src/entity/user.entity';
import { UpdateUserDto } from 'src/models/user.model';
import { UserService } from './users.service';

// Routes that require authentication for current user profile
@Controller('user')
export class UsersController {
  constructor(private userService: UserService) {}

  // Returns the currently authenticated user's profile
  @Get()
  @UseGuards(AuthGuard())
  findCurrentUser(@User() { username }: UserEntity) {
    return this.userService.findByUsername(username);
  }

  // Updates the currently authenticated user's profile
  @Put()
  @UseGuards(AuthGuard())
  update(
    @User() { username }: UserEntity,
    @Body(new ValidationPipe({ transform: true, whitelist: true }))
    data: UpdateUserDto,
  ) {
    return this.userService.updateUser(username, data);
  }
}
