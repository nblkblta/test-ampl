import { InputJsonValue } from "../../types";
import { UserTeamCreateNestedManyWithoutUsersInput } from "./UserTeamCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  userTeams?: UserTeamCreateNestedManyWithoutUsersInput;
  username: string;
};
