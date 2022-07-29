import * as TypeGraphQL from "type-graphql-v2-fork";
import { ItemScalarFieldEnum } from "../../../../enums/ItemScalarFieldEnum";
import { ItemOrderByWithRelationInput } from "../../../inputs/ItemOrderByWithRelationInput";
import { ItemWhereInput } from "../../../inputs/ItemWhereInput";
import { ItemWhereUniqueInput } from "../../../inputs/ItemWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindManyItemArgs {
  @TypeGraphQL.Field(() => ItemWhereInput, { nullable: true })
  where?: ItemWhereInput | undefined;

  @TypeGraphQL.Field(() => [ItemOrderByWithRelationInput], { nullable: true })
  orderBy?: ItemOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(() => ItemWhereUniqueInput, { nullable: true })
  cursor?: ItemWhereUniqueInput | undefined;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  skip?: number | undefined;

  @TypeGraphQL.Field(() => [ItemScalarFieldEnum], { nullable: true })
  distinct?: Array<"id" | "listId" | "data" | "createdAt" | "updatedAt" | "archivedAt"> | undefined;
}
