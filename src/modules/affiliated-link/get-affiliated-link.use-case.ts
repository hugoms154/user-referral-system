import { Service } from "typedi";
import { AffiliatedLinkRepository } from "./affiliated-link.repository";
import { AffiliatedLinkModel, GetAffiliatedLinkModel } from "./affiliated-link.model";


@Service()
export class GetAffiliatedLinkUseCase {
  constructor(private readonly userRepository: AffiliatedLinkRepository) {}
  
  async exec(params: GetAffiliatedLinkModel): Promise<AffiliatedLinkModel> {
    const isAffiliatedCodeValid = await this.userRepository.findByCode(params.code);

    if(!isAffiliatedCodeValid) {
      throw new Error("invalid affiliated code.");
    }
    
    return isAffiliatedCodeValid;
  }
}