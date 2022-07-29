import * as TypeGraphQL from "type-graphql-v2-fork";
import { TaskCreateManyHabitInputEnvelope } from "../inputs/TaskCreateManyHabitInputEnvelope";
import { TaskCreateOrConnectWithoutHabitInput } from "../inputs/TaskCreateOrConnectWithoutHabitInput";
import { TaskCreateWithoutHabitInput } from "../inputs/TaskCreateWithoutHabitInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@TypeGraphQL.InputType("TaskCreateNestedManyWithoutHabitInput", {
  isAbstract: true,
})
export class TaskCreateNestedManyWithoutHabitInput {
  @TypeGraphQL.Field(() => [TaskCreateWithoutHabitInput], { nullable: true })
  create?: TaskCreateWithoutHabitInput[] | undefined;

  @TypeGraphQL.Field(() => [TaskCreateOrConnectWithoutHabitInput], { nullable: true })
  connectOrCreate?: TaskCreateOrConnectWithoutHabitInput[] | undefined;

  @TypeGraphQL.Field(() => TaskCreateManyHabitInputEnvelope, { nullable: true })
  createMany?: TaskCreateManyHabitInputEnvelope | undefined;

  @TypeGraphQL.Field(() => [TaskWhereUniqueInput], { nullable: true })
  connect?: TaskWhereUniqueInput[] | undefined;
}
