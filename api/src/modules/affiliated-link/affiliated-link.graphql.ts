import { Field, ID, InputType, Int, ObjectType } from "type-graphql";
import { AffiliatedLinkModel, CreateAffiliatedLinkModel } from "./affiliated-link.model";

@ObjectType()
export class AffiliatedLinkResponse implements AffiliatedLinkModel {
  @Field(() => ID)
  id!: string;

  @Field()
  sourceLink!: string;
  
  @Field(() => Int)
  viewsCount!: number;
}

@InputType()
export class CreateAffiliatedLinkInput implements CreateAffiliatedLinkModel {
  @Field(() => Int)
  userId!: number;

  @Field()
  sourceLink!: string;
}