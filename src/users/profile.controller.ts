import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { UserService } from './users.service';

@Controller('profile')
export class ProfileController {
  constructor(private userService: UserService) {}

  @Get(':username')
  async findProfile(@Param('username') username: string) {
    const user = await this.userService.findByUsername(username);
    if (!user) {
      throw new NotFoundException('User not Found');
    }
    return { profile: user };
  }
}
