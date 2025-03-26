import { UserTeam as TUserTeam } from "../api/userTeam/UserTeam";

export const USERTEAM_TITLE_FIELD = "id";

export const UserTeamTitle = (record: TUserTeam): string => {
  return record.id?.toString() || String(record.id);
};
