import { Module } from '@nestjs/common';
import { UserService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../entity/user.entity';
import { AuthModule } from 'src/auth/auth.module';
import { ProfileController } from './profile.controller';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity]), AuthModule],
  controllers: [UsersController, ProfileController],
  providers: [UserService],
})
export class UsersModule {}
