import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EventListRelationFilter } from "../event/EventListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserTeamListRelationFilter } from "../userTeam/UserTeamListRelationFilter";

export type TeamWhereInput = {
  createdBy?: StringNullableFilter;
  description?: StringNullableFilter;
  events?: EventListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  userTeams?: UserTeamListRelationFilter;
};
