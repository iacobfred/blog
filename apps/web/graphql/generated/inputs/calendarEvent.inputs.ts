/* Do not edit this file. It was generated programmatically. */

import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar, ObjectIdScalar } from "@web/graphql/schema/scalars";
import { ID, WhereInput, WhereUniqueInput } from "@web/graphql/schema/types";

@TypeGraphQL.InputType()
export class CalendarEventCreationInput {
  // Note: `nullable` in TypeGraphQL actually refers to whether the input is optional.
  // https://typegraphql.com/docs/0.17.2/types-and-fields.html
  @TypeGraphQL.Field(() => ObjectIdScalar, { nullable: false })
  userId!: string;

  // Note: `nullable` in TypeGraphQL actually refers to whether the input is optional.
  // https://typegraphql.com/docs/0.17.2/types-and-fields.html
  @TypeGraphQL.Field(() => ObjectIdScalar, { nullable: false })
  calendarId!: string;

  // Note: `nullable` in TypeGraphQL actually refers to whether the input is optional.
  // https://typegraphql.com/docs/0.17.2/types-and-fields.html
  @TypeGraphQL.Field(() => String, { nullable: true })
  remoteId?: string | null | undefined;

  // Note: `nullable` in TypeGraphQL actually refers to whether the input is optional.
  // https://typegraphql.com/docs/0.17.2/types-and-fields.html
  @TypeGraphQL.Field(() => ObjectIdScalar, { nullable: true })
  scheduleId?: string | null | undefined;

  // Note: `nullable` in TypeGraphQL actually refers to whether the input is optional.
  // https://typegraphql.com/docs/0.17.2/types-and-fields.html
  @TypeGraphQL.Field(() => ObjectIdScalar, { nullable: true })
  habitId?: string | null | undefined;

  // Note: `nullable` in TypeGraphQL actually refers to whether the input is optional.
  // https://typegraphql.com/docs/0.17.2/types-and-fields.html
  @TypeGraphQL.Field(() => ObjectIdScalar, { nullable: true })
  taskId?: string | null | undefined;

  // Note: `nullable` in TypeGraphQL actually refers to whether the input is optional.
  // https://typegraphql.com/docs/0.17.2/types-and-fields.html
  @TypeGraphQL.Field(() => String, { nullable: false })
  title!: string;

  // Note: `nullable` in TypeGraphQL actually refers to whether the input is optional.
  // https://typegraphql.com/docs/0.17.2/types-and-fields.html
  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: false })
  start!: Date;

  // Note: `nullable` in TypeGraphQL actually refers to whether the input is optional.
  // https://typegraphql.com/docs/0.17.2/types-and-fields.html
  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  end?: Date | null | undefined;

  // Note: `nullable` in TypeGraphQL actually refers to whether the input is optional.
  // https://typegraphql.com/docs/0.17.2/types-and-fields.html
  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  allDay?: boolean | undefined;

  // Note: `nullable` in TypeGraphQL actually refers to whether the input is optional.
  // https://typegraphql.com/docs/0.17.2/types-and-fields.html
  @TypeGraphQL.Field(() => String, { nullable: true })
  notes?: string | null | undefined;

  // Note: `nullable` in TypeGraphQL actually refers to whether the input is optional.
  // https://typegraphql.com/docs/0.17.2/types-and-fields.html
  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  canceled?: boolean | null | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  archivedAt?: Date | null | undefined;
}

@TypeGraphQL.InputType()
export class CalendarEventUpdateInput {
  @TypeGraphQL.Field(() => ObjectIdScalar, { nullable: true })
  userId?: string | undefined;

  @TypeGraphQL.Field(() => ObjectIdScalar, { nullable: true })
  calendarId?: string | undefined;

  @TypeGraphQL.Field(() => String, { nullable: true })
  remoteId?: string | null | undefined;

  @TypeGraphQL.Field(() => ObjectIdScalar, { nullable: true })
  scheduleId?: string | null | undefined;

  @TypeGraphQL.Field(() => ObjectIdScalar, { nullable: true })
  habitId?: string | null | undefined;

  @TypeGraphQL.Field(() => ObjectIdScalar, { nullable: true })
  taskId?: string | null | undefined;

  @TypeGraphQL.Field(() => String, { nullable: true })
  title?: string | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  start?: Date | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  end?: Date | null | undefined;

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  allDay?: boolean | undefined;

  @TypeGraphQL.Field(() => String, { nullable: true })
  notes?: string | null | undefined;

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  canceled?: boolean | null | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  archivedAt?: Date | null | undefined;
}

@TypeGraphQL.InputType()
export class CalendarEventWhereInput extends WhereInput {
  @TypeGraphQL.Field(() => ObjectIdScalar, { nullable: true })
  id?: ID | undefined;

  @TypeGraphQL.Field(() => ObjectIdScalar, { nullable: true })
  userId?: string | null | undefined;

  @TypeGraphQL.Field(() => ObjectIdScalar, { nullable: true })
  calendarId?: string | null | undefined;

  @TypeGraphQL.Field(() => String, { nullable: true })
  remoteId?: string | undefined;

  @TypeGraphQL.Field(() => ObjectIdScalar, { nullable: true })
  scheduleId?: string | undefined;

  @TypeGraphQL.Field(() => ObjectIdScalar, { nullable: true })
  habitId?: string | undefined;

  @TypeGraphQL.Field(() => ObjectIdScalar, { nullable: true })
  taskId?: string | undefined;

  @TypeGraphQL.Field(() => String, { nullable: true })
  title?: string | null | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  start?: Date | null | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  end?: Date | undefined;

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  allDay?: boolean | undefined;

  @TypeGraphQL.Field(() => String, { nullable: true })
  notes?: string | undefined;

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  canceled?: boolean | undefined;
}

@TypeGraphQL.InputType()
export class CalendarEventWhereUniqueInput extends WhereUniqueInput {
  // @TypeGraphQL.Field(() => ObjectIdScalar, { nullable: false })
  // id!: ID;
}
