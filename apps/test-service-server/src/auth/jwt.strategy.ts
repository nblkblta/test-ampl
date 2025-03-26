import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { UserService } from "../user/user.service";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET || "secretKey",
    });
  }

  async validate(payload: any) {
    const user = await this.userService.user({
      where: { username: payload.username },
    });
    
    if (!user) {
      throw new UnauthorizedException();
    }
    
    return {
      id: payload.sub,
      username: payload.username,
      roles: payload.roles,
    };
  }
}
