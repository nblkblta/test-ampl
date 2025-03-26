import * as graphql from "@nestjs/graphql";
import { UserTeamResolverBase } from "./base/userTeam.resolver.base";
import { UserTeam } from "./base/UserTeam";
import { UserTeamService } from "./userTeam.service";

@graphql.Resolver(() => UserTeam)
export class UserTeamResolver extends UserTeamResolverBase {
  constructor(protected readonly service: UserTeamService) {
    super(service);
  }
}
