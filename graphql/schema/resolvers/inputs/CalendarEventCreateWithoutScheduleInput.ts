import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";

@TypeGraphQL.InputType("CalendarEventCreateWithoutScheduleInput", {
  isAbstract: true,
})
export class CalendarEventCreateWithoutScheduleInput {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id?: string | undefined;

  @TypeGraphQL.Field(() => String, { nullable: true })
  remoteId?: string | null | undefined;

  @TypeGraphQL.Field(() => String, { nullable: false })
  title!: string;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: false })
  start!: Date;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  end?: Date | null | undefined;

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  allDay?: boolean | undefined;

  @TypeGraphQL.Field(() => String, { nullable: true })
  notes?: string | null | undefined;

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  canceled?: boolean | null | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  archivedAt?: Date | null | undefined;

  @TypeGraphQL.Field({ nullable: false })
  calendarId!: string;

  @TypeGraphQL.Field({ nullable: true })
  habitId?: string | null | undefined;

  @TypeGraphQL.Field({ nullable: true })
  taskId?: string | null | undefined;
}
