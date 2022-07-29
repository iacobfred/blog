import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.InputType("BeliefWhereUniqueInput", {
  isAbstract: true,
})
export class BeliefWhereUniqueInput {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id?: string | undefined;

  @TypeGraphQL.Field(() => String, { nullable: true })
  slug?: string | undefined;
}
