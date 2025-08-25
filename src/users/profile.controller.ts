import {
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './users.service';
import { User } from 'src/auth/user.decorator';
import { UserEntity } from 'src/entity/user.entity';
import { AuthGuard } from '@nestjs/passport';

@Controller('profile')
export class ProfileController {
  constructor(private userService: UserService) {}

  @Get(':username')
  async findProfile(@Param('username') username: string) {
    const profile = await this.userService.findByUsername(username);
    if (!profile) {
      throw new NotFoundException('User not Found');
    }
    return { profile };
  }

  @Post('/:username/follow')
  @UseGuards(AuthGuard())
  async followUser(
    @User() user: UserEntity,
    @Param('username') username: string,
  ) {
    const profile = await this.userService.followUser(user, username);
    return { profile };
  }

  @Delete('/:username/follow')
  async unfollowUser(
    @User() user: UserEntity,
    @Param('username') username: string,
  ) {
    const profile = await this.userService.unfollowUser(user, username);
    return { profile };
  }
}
