import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";
import { ActCreateNestedOneWithoutHabitsInput } from "../inputs/ActCreateNestedOneWithoutHabitsInput";
import { ActionCreateNestedManyWithoutHabitInput } from "../inputs/ActionCreateNestedManyWithoutHabitInput";
import { CalendarEventCreateNestedManyWithoutHabitInput } from "../inputs/CalendarEventCreateNestedManyWithoutHabitInput";
import { GoalCreateNestedManyWithoutHabitInput } from "../inputs/GoalCreateNestedManyWithoutHabitInput";
import { MetricUsageCreateNestedManyWithoutHabitInput } from "../inputs/MetricUsageCreateNestedManyWithoutHabitInput";
import { RoutineHabitCreateNestedManyWithoutHabitInput } from "../inputs/RoutineHabitCreateNestedManyWithoutHabitInput";
import { TaskCreateNestedManyWithoutHabitInput } from "../inputs/TaskCreateNestedManyWithoutHabitInput";
import { UserCreateNestedOneWithoutHabitsInput } from "../inputs/UserCreateNestedOneWithoutHabitsInput";

@TypeGraphQL.InputType("HabitCreateWithoutSchedulesInput", {
  isAbstract: true,
})
export class HabitCreateWithoutSchedulesInput {
  @TypeGraphQL.Field(() => String, { nullable: false })
  name!: string;

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  isPublic?: boolean | undefined;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  defaultDurationInMinutes?: number | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  archivedAt?: Date | null | undefined;

  @TypeGraphQL.Field(() => ActCreateNestedOneWithoutHabitsInput, { nullable: false })
  act!: ActCreateNestedOneWithoutHabitsInput;

  @TypeGraphQL.Field(() => UserCreateNestedOneWithoutHabitsInput, { nullable: false })
  user!: UserCreateNestedOneWithoutHabitsInput;

  @TypeGraphQL.Field(() => TaskCreateNestedManyWithoutHabitInput, { nullable: true })
  tasks?: TaskCreateNestedManyWithoutHabitInput | undefined;

  @TypeGraphQL.Field(() => CalendarEventCreateNestedManyWithoutHabitInput, { nullable: true })
  calendarEvents?: CalendarEventCreateNestedManyWithoutHabitInput | undefined;

  @TypeGraphQL.Field(() => MetricUsageCreateNestedManyWithoutHabitInput, { nullable: true })
  metricUsages?: MetricUsageCreateNestedManyWithoutHabitInput | undefined;

  @TypeGraphQL.Field(() => GoalCreateNestedManyWithoutHabitInput, { nullable: true })
  goals?: GoalCreateNestedManyWithoutHabitInput | undefined;

  @TypeGraphQL.Field(() => RoutineHabitCreateNestedManyWithoutHabitInput, { nullable: true })
  routines?: RoutineHabitCreateNestedManyWithoutHabitInput | undefined;

  @TypeGraphQL.Field(() => ActionCreateNestedManyWithoutHabitInput, { nullable: true })
  actions?: ActionCreateNestedManyWithoutHabitInput | undefined;
}
