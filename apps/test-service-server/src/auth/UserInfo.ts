import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class UserInfo {
  @Field()
  username!: string;

  @Field()
  accessToken!: string;
}
