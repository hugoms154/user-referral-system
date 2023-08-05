import Container, { Service } from "typedi";
import { Repository } from "typeorm";
import { DbConfiguration } from "../../infra/database/database.configuration";
import { AffiliatedLinkEntity } from "./affiliated-link.entity";
import { AffiliatedLinkModel, CreateAffiliatedLinkModel } from "./affiliated-link.model";

@Service()
export class AffiliatedLinkRepository {

  private repository: Repository<AffiliatedLinkEntity> = Container.get(DbConfiguration).getConnection().getRepository(AffiliatedLinkEntity);

  create({userId, ...params}: CreateAffiliatedLinkModel): Promise<AffiliatedLinkModel> {
    return this.repository.save({ user: { id: userId }, ...params })
  }

  findByCode(code: string): Promise<AffiliatedLinkModel> {
    return this.repository.findOneOrFail({
      where: {
        id: code
      },
      relations: ["user"]
    })
  }
}