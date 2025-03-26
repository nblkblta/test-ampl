/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { UserTeamWhereUniqueInput } from "../../userTeam/base/UserTeamWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class UserTeamUpdateManyWithoutUsersInput {
  @Field(() => [UserTeamWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [UserTeamWhereUniqueInput],
  })
  connect?: Array<UserTeamWhereUniqueInput>;

  @Field(() => [UserTeamWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [UserTeamWhereUniqueInput],
  })
  disconnect?: Array<UserTeamWhereUniqueInput>;

  @Field(() => [UserTeamWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [UserTeamWhereUniqueInput],
  })
  set?: Array<UserTeamWhereUniqueInput>;
}

export { UserTeamUpdateManyWithoutUsersInput as UserTeamUpdateManyWithoutUsersInput };
