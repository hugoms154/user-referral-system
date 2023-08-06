import { randomUUID } from "crypto";
import { Service } from "typedi";
import { UserRepository } from "../user/user.repository";
import { AuthenticateModel, AuthenticationModel } from "./authentication.model";

@Service()
export class AuthenticateUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async exec(params: AuthenticateModel): Promise<AuthenticationModel> {
    const user = await this.userRepository.findByEmail(params.email);

    const isPasswordEqual = user.password === params.password;

    if (!isPasswordEqual) {
      throw new Error("login not match");
    }

    return {
      token: randomUUID(),
      user,
    };
  }
}
