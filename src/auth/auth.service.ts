/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/entity/user.entity';
import { LoginDto, RegisterDto } from 'src/models/user.dto';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserEntity) private userRepo: Repository<UserEntity>,
  ) {}

  async register(credentials: RegisterDto) {
    try {
      const user = this.userRepo.create(credentials);
      await user.save();
      return user;
    } catch (error) {
      if (error.code === '23505') {
        throw new ConflictException('Username has already been taken');
      }
      throw new InternalServerErrorException();
    }
  }

  async login({ email, password }: LoginDto) {
    try {
      const user = await this.userRepo.findOne({ where: { email } });
      const isValid = await user.comparePassword(password);
      if (!isValid) {
        throw new UnauthorizedException('Login credentials are invalid');
      }
      return user;
    } catch (err) {
      throw new UnauthorizedException('Login credentials are invalid');
    }
  }
}
