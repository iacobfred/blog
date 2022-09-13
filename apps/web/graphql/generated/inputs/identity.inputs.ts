/* Do not edit this file. It was generated programmatically. */

import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar, ObjectIdScalar } from "@web/graphql/schema/scalars";
import { ID, WhereInput, WhereUniqueInput } from "@web/graphql/schema/types";

@TypeGraphQL.InputType()
export class IdentityCreationInput {
  // Note: `nullable` in TypeGraphQL actually refers to whether the input is optional.
  // https://typegraphql.com/docs/0.17.2/types-and-fields.html
  @TypeGraphQL.Field(() => ObjectIdScalar, { nullable: false })
  userId!: string;

  // Note: `nullable` in TypeGraphQL actually refers to whether the input is optional.
  // https://typegraphql.com/docs/0.17.2/types-and-fields.html
  @TypeGraphQL.Field(() => String, { nullable: false })
  name!: string;

  // Note: `nullable` in TypeGraphQL actually refers to whether the input is optional.
  // https://typegraphql.com/docs/0.17.2/types-and-fields.html
  @TypeGraphQL.Field(() => String, { nullable: true })
  description?: string | null | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  archivedAt?: Date | null | undefined;
}

@TypeGraphQL.InputType()
export class IdentityUpdateInput {
  @TypeGraphQL.Field(() => ObjectIdScalar, { nullable: true })
  userId?: string | undefined;

  @TypeGraphQL.Field(() => String, { nullable: true })
  name?: string | undefined;

  @TypeGraphQL.Field(() => String, { nullable: true })
  description?: string | null | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  archivedAt?: Date | null | undefined;
}

@TypeGraphQL.InputType()
export class IdentityWhereInput extends WhereInput {
  @TypeGraphQL.Field(() => ObjectIdScalar, { nullable: true })
  id?: ID | undefined;

  @TypeGraphQL.Field(() => ObjectIdScalar, { nullable: true })
  userId?: string | null | undefined;

  @TypeGraphQL.Field(() => String, { nullable: true })
  name?: string | null | undefined;

  @TypeGraphQL.Field(() => String, { nullable: true })
  description?: string | undefined;
}

@TypeGraphQL.InputType()
export class IdentityWhereUniqueInput extends WhereUniqueInput {
  // @TypeGraphQL.Field(() => ObjectIdScalar, { nullable: false })
  // id!: ID;
}
