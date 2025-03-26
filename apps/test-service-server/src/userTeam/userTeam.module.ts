import { Module } from "@nestjs/common";
import { UserTeamModuleBase } from "./base/userTeam.module.base";
import { UserTeamService } from "./userTeam.service";
import { UserTeamController } from "./userTeam.controller";
import { UserTeamResolver } from "./userTeam.resolver";

@Module({
  imports: [UserTeamModuleBase],
  controllers: [UserTeamController],
  providers: [UserTeamService, UserTeamResolver],
  exports: [UserTeamService],
})
export class UserTeamModule {}
