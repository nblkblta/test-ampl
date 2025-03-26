import { SortOrder } from "../../util/SortOrder";

export type EventOrderByInput = {
  createdAt?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  location?: SortOrder;
  name?: SortOrder;
  teamId?: SortOrder;
  updatedAt?: SortOrder;
};
