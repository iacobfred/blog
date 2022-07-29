import * as TypeGraphQL from "type-graphql-v2-fork";
import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("NoteScalarWhereInput", {
  isAbstract: true,
})
export class NoteScalarWhereInput {
  @TypeGraphQL.Field(() => [NoteScalarWhereInput], { nullable: true })
  AND?: NoteScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(() => [NoteScalarWhereInput], { nullable: true })
  OR?: NoteScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(() => [NoteScalarWhereInput], { nullable: true })
  NOT?: NoteScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  notebookId?: StringFilter | undefined;

  @TypeGraphQL.Field(() => StringNullableFilter, { nullable: true })
  title?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(() => StringNullableFilter, { nullable: true })
  body?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(() => BoolFilter, { nullable: true })
  isPublic?: BoolFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeNullableFilter, { nullable: true })
  archivedAt?: DateTimeNullableFilter | undefined;
}
