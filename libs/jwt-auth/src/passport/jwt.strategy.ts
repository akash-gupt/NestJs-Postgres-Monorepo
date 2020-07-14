import { Injectable, UnauthorizedException, Inject } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@gypsy/config';
import { JWT_AUTH_SERVICE_TOKEN } from '../jwt-auth.token';
import { IJwtAuthService } from '../jwt-auth.interface';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    public readonly configService: ConfigService,
    @Inject(JWT_AUTH_SERVICE_TOKEN)
    public readonly authService: IJwtAuthService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: configService.get('jwt.secret'),
    });
  }

  async validate({ iat, exp, id }) {
    const timeDiff = exp - iat;
    if (timeDiff <= 0) {
      throw new UnauthorizedException();
    }
    const user = await this.authService.findOne(id);

    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
