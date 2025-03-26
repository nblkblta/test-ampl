import { EventUpdateManyWithoutTeamsInput } from "./EventUpdateManyWithoutTeamsInput";
import { UserTeamUpdateManyWithoutTeamsInput } from "./UserTeamUpdateManyWithoutTeamsInput";

export type TeamUpdateInput = {
  createdBy?: string | null;
  description?: string | null;
  events?: EventUpdateManyWithoutTeamsInput;
  name?: string | null;
  userTeams?: UserTeamUpdateManyWithoutTeamsInput;
};
