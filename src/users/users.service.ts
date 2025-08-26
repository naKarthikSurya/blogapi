import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/entity/user.entity';
import { Repository } from 'typeorm';
import { UpdateUserDto } from 'src/models/user.model';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  async findByUsername(username: string): Promise<UserEntity> {
    return this.userRepository.findOne({ where: { username } });
  }

  async updateUser(username: string, data: UpdateUserDto) {
    await this.userRepository.update({ username }, data);
    return this.findByUsername(username);
  }

  async followUser(currentUser: UserEntity, username: string) {
    const user = await this.userRepository.findOne({
      where: { username },
      relations: ['followers'],
    });
    if (!user) {
      return null;
    }
    const alreadyFollowing = user.followers.some(
      (follower) => follower.id === currentUser.id,
    );
    if (!alreadyFollowing) {
      user.followers.push(currentUser);
    }
    await user.save();
    return user.toProfile(currentUser);
  }

  async unfollowUser(currentUser: UserEntity, username: string) {
    const user = await this.userRepository.findOne({
      where: { username },
      relations: ['followers'],
    });
    if (!user) {
      return null;
    }
    user.followers = user.followers.filter(
      (follower) => follower.id !== currentUser.id,
    );
    await user.save();
    return user.toProfile(currentUser);
  }
}
