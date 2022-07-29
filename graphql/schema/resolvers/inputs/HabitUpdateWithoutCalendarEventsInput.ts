import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActionScheduleUpdateManyWithoutHabitInput } from "../inputs/ActionScheduleUpdateManyWithoutHabitInput";
import { ActionUpdateManyWithoutHabitInput } from "../inputs/ActionUpdateManyWithoutHabitInput";
import { ActUpdateOneRequiredWithoutHabitsInput } from "../inputs/ActUpdateOneRequiredWithoutHabitsInput";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { GoalUpdateManyWithoutHabitInput } from "../inputs/GoalUpdateManyWithoutHabitInput";
import { MetricUsageUpdateManyWithoutHabitInput } from "../inputs/MetricUsageUpdateManyWithoutHabitInput";
import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";
import { RoutineHabitUpdateManyWithoutHabitInput } from "../inputs/RoutineHabitUpdateManyWithoutHabitInput";
import { TaskUpdateManyWithoutHabitInput } from "../inputs/TaskUpdateManyWithoutHabitInput";
import { UserUpdateOneRequiredWithoutHabitsInput } from "../inputs/UserUpdateOneRequiredWithoutHabitsInput";

@TypeGraphQL.InputType("HabitUpdateWithoutCalendarEventsInput", {
  isAbstract: true,
})
export class HabitUpdateWithoutCalendarEventsInput {
  @TypeGraphQL.Field({ nullable: true })
  name?: string | null | undefined;

  @TypeGraphQL.Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  isPublic?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(() => NullableIntFieldUpdateOperationsInput, { nullable: true })
  defaultDurationInMinutes?: NullableIntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field({ nullable: true })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  archivedAt?: Date | null | undefined;

  @TypeGraphQL.Field(() => ActUpdateOneRequiredWithoutHabitsInput, { nullable: true })
  act?: ActUpdateOneRequiredWithoutHabitsInput | undefined;

  @TypeGraphQL.Field(() => UserUpdateOneRequiredWithoutHabitsInput, { nullable: true })
  user?: UserUpdateOneRequiredWithoutHabitsInput | undefined;

  @TypeGraphQL.Field(() => ActionScheduleUpdateManyWithoutHabitInput, { nullable: true })
  schedules?: ActionScheduleUpdateManyWithoutHabitInput | undefined;

  @TypeGraphQL.Field(() => TaskUpdateManyWithoutHabitInput, { nullable: true })
  tasks?: TaskUpdateManyWithoutHabitInput | undefined;

  @TypeGraphQL.Field(() => MetricUsageUpdateManyWithoutHabitInput, { nullable: true })
  metricUsages?: MetricUsageUpdateManyWithoutHabitInput | undefined;

  @TypeGraphQL.Field(() => GoalUpdateManyWithoutHabitInput, { nullable: true })
  goals?: GoalUpdateManyWithoutHabitInput | undefined;

  @TypeGraphQL.Field(() => RoutineHabitUpdateManyWithoutHabitInput, { nullable: true })
  routines?: RoutineHabitUpdateManyWithoutHabitInput | undefined;

  @TypeGraphQL.Field(() => ActionUpdateManyWithoutHabitInput, { nullable: true })
  actions?: ActionUpdateManyWithoutHabitInput | undefined;
}
