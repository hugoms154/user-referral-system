import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Service } from "typedi";
import { CreateUserUseCase } from "./create-user.use-case";
import { GetUserUseCase } from "./get-user.use-case";
import { CreateUserInput, GetUserInput, UserResponse } from "./user.graphql";
import { CreateUserModel, GetUserModel, UserModel } from "./user.model";

@Resolver()
@Service()
export class UserResolver {
  constructor(
    private readonly createUseCase: CreateUserUseCase,
    private readonly getUseCase: GetUserUseCase
  ) {}

  @Query(() => UserResponse)
  user(
    @Arg("data", () => GetUserInput) 
    params: GetUserModel
  ): Promise<UserModel> {
    return this.getUseCase.exec(params)
  }

  @Mutation(() => UserResponse)
  createUser(
    @Arg("data", () => CreateUserInput) 
    params: CreateUserModel
  ): Promise<UserModel> {
    return this.createUseCase.exec(params)
  }
}
