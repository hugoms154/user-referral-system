import { Field, ID, InputType, ObjectType } from "type-graphql";
import { CreateUserModel, GetUserModel, UserModelWithOutPassword } from "./user.model";

@ObjectType()
export class UserResponse implements UserModelWithOutPassword {
  @Field(() => ID)
  id!: number;

  @Field()
  name!: string;

  @Field()
  email!: string;

  @Field({ nullable: true })
  indicatedBy?: string;

  @Field()
  referralCode!: string;
}

@InputType()
export class CreateUserInput implements CreateUserModel {
  @Field()
  name!: string;

  @Field()
  email!: string;

  @Field()
  password!: string;
  
  @Field({ nullable: true })
  indicatedBy?: string;
}

@InputType()
export class GetUserInput implements GetUserModel {
  @Field(() => ID)
  id!: number;
}