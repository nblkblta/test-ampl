import { Module, Global } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { UserModule } from "../user/user.module";
import { AuthService } from "./auth.service";
import { JwtStrategy } from "./jwt.strategy";
import { AuthController } from "./auth.controller";
import { AuthResolver } from "./auth.resolver";
import { APP_GUARD } from "@nestjs/core";
import { GqlAuthGuard } from "./gql-auth.guard";

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET || "secretKey",
      signOptions: { expiresIn: "2d" },
    }),
  ],
  providers: [
    AuthService, 
    JwtStrategy, 
    AuthResolver,
    {
      provide: APP_GUARD,
      useClass: GqlAuthGuard,
    }
  ],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
