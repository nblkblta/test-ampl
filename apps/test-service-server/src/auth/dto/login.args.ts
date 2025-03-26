import { ArgsType, Field } from "@nestjs/graphql";
import { Credentials } from "./credentials";

@ArgsType()
export class LoginArgs {
  @Field(() => Credentials)
  credentials!: Credentials;
}
