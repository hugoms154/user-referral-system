import { Field, InputType, ObjectType } from "type-graphql";
import { UserResponse } from "../user/user.graphql";
import { UserModel } from "../user/user.model";
import { AuthenticateModel, AuthenticationModel } from "./authentication.model";

@ObjectType()
export class AuthenticateResponse implements AuthenticationModel {
  @Field()
  token!: string;

  @Field(() => UserResponse)
  user!: UserModel;
}

@InputType()
export class AuthenticateInput implements AuthenticateModel {
  @Field()
  email!: string;

  @Field()
  password!: string;
}
