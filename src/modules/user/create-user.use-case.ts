import { Service } from "typedi";
import { CreateUserModel, UserModel } from "./user.model";
import { UserRepository } from "./user.repository";

@Service()
export class CreateUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}
  
  exec(params: CreateUserModel): Promise<UserModel> {
    return this.userRepository.create(params)
  }
}