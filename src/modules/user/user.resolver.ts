import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { CreateUserModel, UserModel } from "./user.model";
import { CreateUserUseCase } from "./create-user.use-case";
import { CreateUserInput, UserResponse } from "./user.graphql";
import { Service } from "typedi";

@Resolver()
@Service()
export class UserResolver {
  constructor(private readonly createUseCase: CreateUserUseCase) {}

  @Mutation(() => UserResponse)
  createUser(
    @Arg("data", () => CreateUserInput) 
    params: CreateUserModel
  ): Promise<UserModel> {
    return this.createUseCase.exec(params)
  }
}
