import * as graphql from "@nestjs/graphql";
import { UserTeamResolverBase } from "./base/userTeam.resolver.base";
import { UserTeam } from "./base/UserTeam";
import { UserTeamService } from "./userTeam.service";
import { Public } from "../auth/public.decorator";
import { UserTeamFindManyArgs } from "./base/UserTeamFindManyArgs";
import { UserTeamFindUniqueArgs } from "./base/UserTeamFindUniqueArgs";
import { UserTeamCountArgs } from "./base/UserTeamCountArgs";
import { MetaQueryPayload } from "../util/MetaQueryPayload";

@graphql.Resolver(() => UserTeam)
export class UserTeamResolver extends UserTeamResolverBase {
  constructor(protected readonly service: UserTeamService) {
    super(service);
  }

  @Public()
  @graphql.Query(() => [UserTeam])
  async userTeams(@graphql.Args() args: UserTeamFindManyArgs): Promise<UserTeam[]> {
    return super.userTeams(args);
  }

  @Public()
  @graphql.Query(() => UserTeam, { nullable: true })
  async userTeam(@graphql.Args() args: UserTeamFindUniqueArgs): Promise<UserTeam | null> {
    return super.userTeam(args);
  }

  @Public()
  @graphql.Query(() => MetaQueryPayload, { name: "_userTeamsMeta" })
  async _userTeamsMeta(@graphql.Args() args: UserTeamCountArgs): Promise<MetaQueryPayload> {
    return super._userTeamsMeta(args);
  }
}
