import { Service } from "typedi";
import { GetUserModel, UserModel } from "./user.model";
import { UserRepository } from "./user.repository";

@Service()
export class GetUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}
  
  exec(params: GetUserModel): Promise<UserModel> {
    return this.userRepository.findById(params.id)
  }
}