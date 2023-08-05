import { Service } from "typedi";
import { CreateUserModel, UserModel } from "./user.model";
import { UserRepository } from "./user.repository";

@Service()
export class CreateUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}
  
  async exec(params: CreateUserModel): Promise<UserModel> {
    if(params.indicatedBy) {
      const isReferralCodeValid = await this.userRepository.referralCodeExists(params?.indicatedBy)

      if(!isReferralCodeValid) {
        throw new Error("invalid referral code.")
      }
    }
    return this.userRepository.create(params)
  }
}