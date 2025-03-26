import { InputJsonValue } from "../../types";
import { UserTeamUpdateManyWithoutUsersInput } from "./UserTeamUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  userTeams?: UserTeamUpdateManyWithoutUsersInput;
  username?: string;
};
