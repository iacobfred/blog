/* Do not edit this file. It was generated programmatically. */

import { DateTimeScalar, ObjectIdScalar } from "@web/graphql/schema/scalars";
import { ID, WhereInput, WhereUniqueInput } from "@web/graphql/schema/types";
import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.InputType()
export class NotebookCreationInput {
  // Note: `nullable` in TypeGraphQL actually refers to whether the input is optional.
  // https://typegraphql.com/docs/0.17.2/types-and-fields.html
  @TypeGraphQL.Field(() => ObjectIdScalar, { nullable: false })
  userId!: string;

  // Note: `nullable` in TypeGraphQL actually refers to whether the input is optional.
  // https://typegraphql.com/docs/0.17.2/types-and-fields.html
  @TypeGraphQL.Field(() => String, { nullable: false })
  title!: string;

  // Note: `nullable` in TypeGraphQL actually refers to whether the input is optional.
  // https://typegraphql.com/docs/0.17.2/types-and-fields.html
  @TypeGraphQL.Field(() => String, { nullable: true })
  description?: string | null | undefined;

  // Note: `nullable` in TypeGraphQL actually refers to whether the input is optional.
  // https://typegraphql.com/docs/0.17.2/types-and-fields.html
  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  public?: boolean | null | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  archivedAt?: Date | null | undefined;
}

@TypeGraphQL.InputType()
export class NotebookUpdateInput {
  @TypeGraphQL.Field(() => ObjectIdScalar, { nullable: true })
  userId?: string | undefined;

  @TypeGraphQL.Field(() => String, { nullable: true })
  title?: string | undefined;

  @TypeGraphQL.Field(() => String, { nullable: true })
  description?: string | null | undefined;

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  public?: boolean | null | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  archivedAt?: Date | null | undefined;
}

@TypeGraphQL.InputType()
export class NotebookWhereInput extends WhereInput {
  @TypeGraphQL.Field(() => ObjectIdScalar, { nullable: true })
  id?: ID | undefined;

  @TypeGraphQL.Field(() => ObjectIdScalar, { nullable: true })
  userId?: string | null | undefined;

  @TypeGraphQL.Field(() => String, { nullable: true })
  title?: string | null | undefined;

  @TypeGraphQL.Field(() => String, { nullable: true })
  description?: string | undefined;

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  public?: boolean | undefined;
}

@TypeGraphQL.InputType()
export class NotebookWhereUniqueInput extends WhereUniqueInput {
  // @TypeGraphQL.Field(() => ObjectIdScalar, { nullable: false })
  // id!: ID;
}
