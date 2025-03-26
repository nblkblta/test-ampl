import { Team } from "../team/Team";

export type Event = {
  createdAt: Date;
  date: Date | null;
  id: string;
  location: string | null;
  name: string | null;
  team?: Team | null;
  updatedAt: Date;
};
