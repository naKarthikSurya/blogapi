import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { LoginDto, RegisterDto } from 'src/models/user.dto';

@Injectable()
export class AuthService {
  private users = {
    email: 'n.a.karthiksurya@gmail.com',
    token: 'jwt.token.here',
    username: 'karthiksurya',
    bio: 'i work as a software engineer',
    image: null,
  };

  register(credentials: RegisterDto) {
    return this.users;
  }

  login(credentials: LoginDto) {
    if (credentials.email === this.users.email) {
      return this.users;
    }
    throw new InternalServerErrorException('Invalid credentials');
  }
}
