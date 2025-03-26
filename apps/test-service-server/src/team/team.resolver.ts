import * as graphql from "@nestjs/graphql";
import { TeamResolverBase } from "./base/team.resolver.base";
import { Team } from "./base/Team";
import { TeamService } from "./team.service";
import { Public } from "../auth/public.decorator";
import { TeamFindManyArgs } from "./base/TeamFindManyArgs";
import { TeamFindUniqueArgs } from "./base/TeamFindUniqueArgs";
import { TeamCountArgs } from "./base/TeamCountArgs";
import { MetaQueryPayload } from "../util/MetaQueryPayload";

@graphql.Resolver(() => Team)
export class TeamResolver extends TeamResolverBase {
  constructor(protected readonly service: TeamService) {
    super(service);
  }

  @Public()
  @graphql.Query(() => [Team])
  async teams(@graphql.Args() args: TeamFindManyArgs): Promise<Team[]> {
    return super.teams(args);
  }

  @Public()
  @graphql.Query(() => Team, { nullable: true })
  async team(@graphql.Args() args: TeamFindUniqueArgs): Promise<Team | null> {
    return super.team(args);
  }

  @Public()
  @graphql.Query(() => MetaQueryPayload, { name: "_teamsMeta" })
  async _teamsMeta(@graphql.Args() args: TeamCountArgs): Promise<MetaQueryPayload> {
    return super._teamsMeta(args);
  }
}
