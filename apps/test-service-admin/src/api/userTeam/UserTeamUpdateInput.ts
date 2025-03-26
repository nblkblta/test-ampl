import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserTeamUpdateInput = {
  role?: "Option1" | null;
  team?: TeamWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
