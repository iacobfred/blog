import * as TypeGraphQL from "type-graphql-v2-fork";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("IdentityCountOrderByAggregateInput", {
  isAbstract: true,
})
export class IdentityCountOrderByAggregateInput {
  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  slug?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  description?: "asc" | "desc" | undefined;
}
