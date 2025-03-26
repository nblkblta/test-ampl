import { JsonValue } from "type-fest";
import { UserTeam } from "../userTeam/UserTeam";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  userTeams?: Array<UserTeam>;
  username: string;
};
