import * as TypeGraphQL from "type-graphql-v2-fork";
import { CategorizationCreateWithoutCategoryInput } from "../inputs/CategorizationCreateWithoutCategoryInput";
import { CategorizationWhereUniqueInput } from "../inputs/CategorizationWhereUniqueInput";

@TypeGraphQL.InputType("CategorizationCreateOrConnectWithoutCategoryInput", {
  isAbstract: true,
})
export class CategorizationCreateOrConnectWithoutCategoryInput {
  @TypeGraphQL.Field(() => CategorizationWhereUniqueInput, { nullable: false })
  where!: CategorizationWhereUniqueInput;

  @TypeGraphQL.Field(() => CategorizationCreateWithoutCategoryInput, { nullable: false })
  create!: CategorizationCreateWithoutCategoryInput;
}
