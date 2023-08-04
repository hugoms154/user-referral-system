import Container, { Service } from "typedi";
import { DbConfiguration } from "../../infra/database/database.configuration";
import { UserEntity } from "./user.entity";
import { CreateUserModel, UserModel } from "./user.model";

@Service()
export class UserRepository {

  private repository = Container.get(DbConfiguration).getConnection().getRepository(UserEntity)

  create(params: CreateUserModel): Promise<UserModel> {
    return this.repository.save(params)
  }

  async referralCodeExists(referralCode: string): Promise<boolean> {
    const count = await this.repository.count({ where: { referralCode }})
    return count > 0;
  }
}