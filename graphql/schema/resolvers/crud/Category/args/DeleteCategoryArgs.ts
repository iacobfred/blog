import * as TypeGraphQL from "type-graphql-v2-fork";
import { CategoryWhereUniqueInput } from "../../../inputs/CategoryWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteCategoryArgs {
  @TypeGraphQL.Field(() => CategoryWhereUniqueInput, { nullable: false })
  where!: CategoryWhereUniqueInput;
}
