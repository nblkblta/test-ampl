import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { AuthService } from "./auth.service";
import { LoginArgs } from "./dto/login.args";
import { UserInfo } from "./UserInfo";
import { Public } from "./public.decorator";

@Resolver(() => UserInfo)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Mutation(() => UserInfo)
  async login(@Args() args: LoginArgs): Promise<UserInfo> {
    return this.authService.login(args.credentials.username, args.credentials.password);
  }
}
