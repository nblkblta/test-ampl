import { Team } from "../team/Team";
import { User } from "../user/User";

export type UserTeam = {
  createdAt: Date;
  id: string;
  role?: "Option1" | null;
  team?: Team | null;
  updatedAt: Date;
  user?: User | null;
};
