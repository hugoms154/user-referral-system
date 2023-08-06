import { Arg, Mutation, Resolver } from "type-graphql";
import { Service } from "typedi";
import {
  AuthenticateInput,
  AuthenticateResponse,
} from "./authentication.graphql";
import { AuthenticateModel, AuthenticationModel } from "./authentication.model";
import { AuthenticateUseCase } from "./authenticate.use-case";

@Resolver()
@Service()
export class AuthenticationResolver {
  constructor(private readonly authenticateUseCase: AuthenticateUseCase) {}

  @Mutation(() => AuthenticateResponse)
  authenticate(
    @Arg("data", () => AuthenticateInput)
    params: AuthenticateModel
  ): Promise<AuthenticationModel> {
    return this.authenticateUseCase.exec(params);
  }
}
