import { StringFilter } from "../../util/StringFilter";
import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserTeamWhereInput = {
  id?: StringFilter;
  role?: "Option1";
  team?: TeamWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
