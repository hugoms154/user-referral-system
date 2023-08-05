import { Ctx, Query, Resolver } from "type-graphql";
import { Service } from "typedi";
import { ServerContext } from "../../infra/graphql/graphql-server";


@Resolver()
@Service()
export class AffiliatedLinkResolver {
  @Query(() => String)
  test(@Ctx() ctx: ServerContext) {
    console.log(ctx.res)
    return ctx.res.redirect(301, "http://google.com/")
  }
}