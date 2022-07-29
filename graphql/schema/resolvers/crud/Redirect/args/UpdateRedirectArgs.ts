import * as TypeGraphQL from "type-graphql-v2-fork";
import { RedirectUpdateInput } from "../../../inputs/RedirectUpdateInput";
import { RedirectWhereUniqueInput } from "../../../inputs/RedirectWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateRedirectArgs {
  @TypeGraphQL.Field(() => RedirectUpdateInput, { nullable: false })
  data!: RedirectUpdateInput;

  @TypeGraphQL.Field(() => RedirectWhereUniqueInput, { nullable: false })
  where!: RedirectWhereUniqueInput;
}
