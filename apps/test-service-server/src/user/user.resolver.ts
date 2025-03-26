import * as graphql from "@nestjs/graphql";
import { UserResolverBase } from "./base/user.resolver.base";
import { User } from "./base/User";
import { UserService } from "./user.service";
import { Public } from "../auth/public.decorator";
import { UserFindManyArgs } from "./base/UserFindManyArgs";
import { UserFindUniqueArgs } from "./base/UserFindUniqueArgs";
import { UserCountArgs } from "./base/UserCountArgs";
import { MetaQueryPayload } from "../util/MetaQueryPayload";

@graphql.Resolver(() => User)
export class UserResolver extends UserResolverBase {
  constructor(protected readonly service: UserService) {
    super(service);
  }

  @Public()
  @graphql.Query(() => [User])
  async users(@graphql.Args() args: UserFindManyArgs): Promise<User[]> {
    return super.users(args);
  }

  @Public()
  @graphql.Query(() => User, { nullable: true })
  async user(@graphql.Args() args: UserFindUniqueArgs): Promise<User | null> {
    return super.user(args);
  }

  @Public()
  @graphql.Query(() => MetaQueryPayload, { name: "_usersMeta" })
  async _usersMeta(@graphql.Args() args: UserCountArgs): Promise<MetaQueryPayload> {
    return super._usersMeta(args);
  }
}
