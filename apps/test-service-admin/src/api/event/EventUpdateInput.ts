import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";

export type EventUpdateInput = {
  date?: Date | null;
  location?: string | null;
  name?: string | null;
  team?: TeamWhereUniqueInput | null;
};
