import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserTeamCreateInput = {
  role?: "Option1" | null;
  team?: TeamWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
