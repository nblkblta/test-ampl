import { SortOrder } from "../../util/SortOrder";

export type UserTeamOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  role?: SortOrder;
  teamId?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
