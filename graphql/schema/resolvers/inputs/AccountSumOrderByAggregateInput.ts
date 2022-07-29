import * as TypeGraphQL from "type-graphql-v2-fork";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("AccountSumOrderByAggregateInput", {
  isAbstract: true,
})
export class AccountSumOrderByAggregateInput {
  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  userId?: "asc" | "desc" | undefined;
}
