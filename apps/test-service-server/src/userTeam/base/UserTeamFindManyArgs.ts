/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { UserTeamWhereInput } from "./UserTeamWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { UserTeamOrderByInput } from "./UserTeamOrderByInput";

@ArgsType()
class UserTeamFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => UserTeamWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => UserTeamWhereInput, { nullable: true })
  @Type(() => UserTeamWhereInput)
  where?: UserTeamWhereInput;

  @ApiProperty({
    required: false,
    type: [UserTeamOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [UserTeamOrderByInput], { nullable: true })
  @Type(() => UserTeamOrderByInput)
  orderBy?: Array<UserTeamOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { UserTeamFindManyArgs as UserTeamFindManyArgs };
