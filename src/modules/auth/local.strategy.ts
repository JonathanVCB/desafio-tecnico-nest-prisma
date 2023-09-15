/* eslint-disable prettier/prettier */
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      usernameField: 'email',
      passwordField: 'name',
    });
  }

  async validate(email: string, name: string) {
    const user = await this.authService.validateUser(email, name);
    if (!user) {
      throw new UnauthorizedException('email or password is invalid');
    }
    return user;
  }
}
