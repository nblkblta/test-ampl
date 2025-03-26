import { UserTeamWhereInput } from "./UserTeamWhereInput";
import { UserTeamOrderByInput } from "./UserTeamOrderByInput";

export type UserTeamFindManyArgs = {
  where?: UserTeamWhereInput;
  orderBy?: Array<UserTeamOrderByInput>;
  skip?: number;
  take?: number;
};
