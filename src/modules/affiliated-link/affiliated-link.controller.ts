import { Service } from "typedi";
import { GetAffiliatedLinkUseCase } from "./get-affiliated-link.use-case";
import { ControllerHandler } from "../../infra/rest/controller.handler";

@Service()
export class AffiliatedLinkController {
  constructor(private readonly getAffiliatedLink: GetAffiliatedLinkUseCase) {}

  async redirectToAffiliatedLinkHandler({ req, res }: ControllerHandler): Promise<void> {
    const { affiliatedCode } = req.params
    const affiliatedLink = await this.getAffiliatedLink.exec({ code: affiliatedCode });
    res.redirect(301, affiliatedLink.sourceLink)
  }
}