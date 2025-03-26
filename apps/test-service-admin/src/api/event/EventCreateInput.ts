import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";

export type EventCreateInput = {
  date?: Date | null;
  location?: string | null;
  name?: string | null;
  team?: TeamWhereUniqueInput | null;
};
