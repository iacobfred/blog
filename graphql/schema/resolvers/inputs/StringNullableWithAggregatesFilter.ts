import * as TypeGraphQL from "type-graphql-v2-fork";
import { QueryMode } from "../../enums/QueryMode";
import { NestedIntNullableFilter } from "../inputs/NestedIntNullableFilter";
import { NestedStringNullableFilter } from "../inputs/NestedStringNullableFilter";
import { NestedStringNullableWithAggregatesFilter } from "../inputs/NestedStringNullableWithAggregatesFilter";

@TypeGraphQL.InputType("StringNullableWithAggregatesFilter", {
  isAbstract: true,
})
export class StringNullableWithAggregatesFilter {
  @TypeGraphQL.Field(() => String, { nullable: true })
  equals?: string | undefined;

  @TypeGraphQL.Field(() => [String], { nullable: true })
  in?: string[] | undefined;

  @TypeGraphQL.Field(() => [String], { nullable: true })
  notIn?: string[] | undefined;

  @TypeGraphQL.Field(() => String, { nullable: true })
  lt?: string | undefined;

  @TypeGraphQL.Field(() => String, { nullable: true })
  lte?: string | undefined;

  @TypeGraphQL.Field(() => String, { nullable: true })
  gt?: string | undefined;

  @TypeGraphQL.Field(() => String, { nullable: true })
  gte?: string | undefined;

  @TypeGraphQL.Field(() => String, { nullable: true })
  contains?: string | undefined;

  @TypeGraphQL.Field(() => String, { nullable: true })
  startsWith?: string | undefined;

  @TypeGraphQL.Field(() => String, { nullable: true })
  endsWith?: string | undefined;

  @TypeGraphQL.Field(() => QueryMode, { nullable: true })
  mode?: "default" | "insensitive" | undefined;

  @TypeGraphQL.Field(() => NestedStringNullableWithAggregatesFilter, { nullable: true })
  not?: NestedStringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => NestedIntNullableFilter, { nullable: true })
  _count?: NestedIntNullableFilter | undefined;

  @TypeGraphQL.Field(() => NestedStringNullableFilter, { nullable: true })
  _min?: NestedStringNullableFilter | undefined;

  @TypeGraphQL.Field(() => NestedStringNullableFilter, { nullable: true })
  _max?: NestedStringNullableFilter | undefined;
}
