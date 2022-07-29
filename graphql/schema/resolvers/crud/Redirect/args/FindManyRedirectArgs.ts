import * as TypeGraphQL from "type-graphql-v2-fork";
import { RedirectScalarFieldEnum } from "../../../../enums/RedirectScalarFieldEnum";
import { RedirectOrderByWithRelationInput } from "../../../inputs/RedirectOrderByWithRelationInput";
import { RedirectWhereInput } from "../../../inputs/RedirectWhereInput";
import { RedirectWhereUniqueInput } from "../../../inputs/RedirectWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindManyRedirectArgs {
  @TypeGraphQL.Field(() => RedirectWhereInput, { nullable: true })
  where?: RedirectWhereInput | undefined;

  @TypeGraphQL.Field(() => [RedirectOrderByWithRelationInput], { nullable: true })
  orderBy?: RedirectOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(() => RedirectWhereUniqueInput, { nullable: true })
  cursor?: RedirectWhereUniqueInput | undefined;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  skip?: number | undefined;

  @TypeGraphQL.Field(() => [RedirectScalarFieldEnum], { nullable: true })
  distinct?: Array<"id" | "old_path" | "new_path"> | undefined;
}
