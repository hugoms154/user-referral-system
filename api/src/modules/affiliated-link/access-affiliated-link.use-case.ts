import { Service } from "typedi";
import { AffiliatedLinkRepository } from "./affiliated-link.repository";
import { AffiliatedLinkModel, GetAffiliatedLinkModel } from "./affiliated-link.model";


@Service()
export class AccessAffiliatedLinkUseCase {
  constructor(private readonly affiliatedLinkRepository: AffiliatedLinkRepository) {}
  
  async exec(params: GetAffiliatedLinkModel): Promise<AffiliatedLinkModel> {
    const isAffiliatedCodeValid = await this.affiliatedLinkRepository.findByCode(params.code);

    if(!isAffiliatedCodeValid) {
      throw new Error("invalid affiliated code.");
    }

    await this.affiliatedLinkRepository.increaseViewCount(isAffiliatedCodeValid.id);
    
    return isAffiliatedCodeValid;
  }
}