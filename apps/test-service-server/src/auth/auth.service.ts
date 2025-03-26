import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UserService } from "../user/user.service";
import * as bcrypt from "bcrypt";

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userService.user({
      where: { username },
    });
    
    if (!user) {
      throw new UnauthorizedException("Invalid username");
    }
    
    const passwordValid = await bcrypt.compare(password, user.password);
    
    if (!passwordValid) {
      throw new UnauthorizedException("Invalid password");
    }
    
    return user;
  }

  async login(username: string, password: string) {
    const user = await this.validateUser(username, password);
    
    const payload = { 
      username: user.username,
      sub: user.id,
      roles: user.roles
    };
    
    return {
      username: user.username,
      accessToken: this.jwtService.sign(payload),
    };
  }
}
