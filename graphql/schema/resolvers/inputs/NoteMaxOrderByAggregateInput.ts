import * as TypeGraphQL from "type-graphql-v2-fork";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("NoteMaxOrderByAggregateInput", {
  isAbstract: true,
})
export class NoteMaxOrderByAggregateInput {
  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  notebookId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  title?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  body?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  isPublic?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  archivedAt?: "asc" | "desc" | undefined;
}
