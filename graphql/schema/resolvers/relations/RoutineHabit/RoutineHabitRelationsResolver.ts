import { ApolloContext } from "@/graphql/context";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { getPrismaFromContext } from "../../../helpers";
import { Habit } from "../../../models/Habit";
import { Routine } from "../../../models/Routine";
import { RoutineHabit } from "../../../models/RoutineHabit";

@TypeGraphQL.Resolver((_of) => RoutineHabit)
export class RoutineHabitRelationsResolver {
  @TypeGraphQL.FieldResolver(() => Routine, { nullable: false })
  async routine(
    @TypeGraphQL.Root() routineHabit: RoutineHabit,
    @TypeGraphQL.Ctx() ctx: ApolloContext
  ): Promise<Routine> {
    throw new Error("Not implemented");
    return getPrismaFromContext(ctx)
      .routineHabit.findUnique({
        where: {
          id: routineHabit.id,
        },
      })
      .routine({});
  }

  @TypeGraphQL.FieldResolver(() => Habit, { nullable: false })
  async habit(
    @TypeGraphQL.Root() routineHabit: RoutineHabit,
    @TypeGraphQL.Ctx() ctx: ApolloContext
  ): Promise<Habit> {
    throw new Error("Not implemented");
  }
}
