import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UserTeamService } from "./userTeam.service";
import { UserTeamControllerBase } from "./base/userTeam.controller.base";

@swagger.ApiTags("userTeams")
@common.Controller("userTeams")
export class UserTeamController extends UserTeamControllerBase {
  constructor(protected readonly service: UserTeamService) {
    super(service);
  }
}
