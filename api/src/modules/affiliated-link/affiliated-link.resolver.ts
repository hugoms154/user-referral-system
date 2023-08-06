import { Arg, Mutation, Resolver } from "type-graphql";
import { Service } from "typedi";
import {
  AffiliatedLinkResponse,
  CreateAffiliatedLinkInput,
} from "./affiliated-link.graphql";
import {
  AffiliatedLinkModel,
  CreateAffiliatedLinkModel,
} from "./affiliated-link.model";
import { CreateAffiliatedLinkUseCase } from "./create-affiliated-link.use-case";

@Resolver()
@Service()
export class AffiliatedLinkResolver {
  constructor(private readonly createUseCase: CreateAffiliatedLinkUseCase) {}

  @Mutation(() => AffiliatedLinkResponse)
  createAffiliatedLink(
    @Arg("data", () => CreateAffiliatedLinkInput)
    params: CreateAffiliatedLinkModel
  ): Promise<AffiliatedLinkModel> {
    return this.createUseCase.exec(params);
  }
}
