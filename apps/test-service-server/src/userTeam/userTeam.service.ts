import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserTeamServiceBase } from "./base/userTeam.service.base";

@Injectable()
export class UserTeamService extends UserTeamServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
