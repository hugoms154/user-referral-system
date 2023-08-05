import { Service } from "typedi";
import { AffiliatedLinkModel, CreateAffiliatedLinkModel } from "./affiliated-link.model";
import { AffiliatedLinkRepository } from "./affiliated-link.repository";

@Service()
export class CreateAffiliatedLinkUseCase {
  constructor(private readonly affiliatedLinkRepository: AffiliatedLinkRepository) {}
  
  exec(params: CreateAffiliatedLinkModel): Promise<AffiliatedLinkModel> {
    return this.affiliatedLinkRepository.create(params)
  }
}