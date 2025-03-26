import { Event } from "../event/Event";
import { UserTeam } from "../userTeam/UserTeam";

export type Team = {
  createdAt: Date;
  createdBy: string | null;
  description: string | null;
  events?: Array<Event>;
  id: string;
  name: string | null;
  updatedAt: Date;
  userTeams?: Array<UserTeam>;
};
