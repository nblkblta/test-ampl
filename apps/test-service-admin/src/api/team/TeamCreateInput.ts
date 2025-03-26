import { EventCreateNestedManyWithoutTeamsInput } from "./EventCreateNestedManyWithoutTeamsInput";
import { UserTeamCreateNestedManyWithoutTeamsInput } from "./UserTeamCreateNestedManyWithoutTeamsInput";

export type TeamCreateInput = {
  createdBy?: string | null;
  description?: string | null;
  events?: EventCreateNestedManyWithoutTeamsInput;
  name?: string | null;
  userTeams?: UserTeamCreateNestedManyWithoutTeamsInput;
};
