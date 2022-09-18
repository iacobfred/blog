/* Do not edit this file. It was generated programmatically. */

import HabitModel from "@web/generated/models/Habit";
import UserModel from "@web/generated/models/User";
import {
  createHabit as _createHabit,
  findHabit as _findHabit,
  updateHabit as _updateHabit,
  upsertHabit as _upsertHabit,
} from "@web/generated/shortcuts/habit.shortcuts";
import type { GqlContext } from "@web/graphql/context";
import {
  FindManyHabitArgs,
  FindUniqueHabitArgs,
  HabitCreationArgs,
  HabitUpdateArgs,
  HabitUpsertionArgs,
} from "@web/graphql/generated/args/habit.args";
import Habit from "@web/graphql/generated/types/Habit";
import { convertFilterForMongo } from "@web/graphql/schema/helpers";
import { ObjectIdScalar } from "@web/graphql/schema/scalars";
import type { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.Resolver(() => Habit)
export class HabitResolver {
  @TypeGraphQL.FieldResolver(() => ObjectIdScalar)
  id(@TypeGraphQL.Root() habit: Habit) {
    return habit._id;
  }

  @TypeGraphQL.Query(() => Habit, { nullable: true })
  async habit(
    @TypeGraphQL.Ctx() _ctx: GqlContext,
    @TypeGraphQL.Info() _info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueHabitArgs
  ) {
    return await _findHabit(args);
  }

  @TypeGraphQL.Query(() => [Habit], { nullable: false })
  async habits(
    @TypeGraphQL.Ctx() _ctx: GqlContext,
    @TypeGraphQL.Info() _info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyHabitArgs
  ) {
    const filter = convertFilterForMongo(args.where);
    return await HabitModel.find(filter ?? {});
  }

  @TypeGraphQL.Mutation(() => Habit)
  async createHabit(
    @TypeGraphQL.Ctx() _ctx: GqlContext,
    @TypeGraphQL.Info() _info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: HabitCreationArgs
  ) {
    const habit = await _createHabit(args);
    if (habit) {
      // NOTE: This update fails if it's not awaited.
      await UserModel.findOneAndUpdate({ _id: habit.userId }, { $push: { habits: { ...habit } } });
    }
    return habit;
  }

  /*
  @TypeGraphQL.Mutation(() => [Habit], { nullable: false })
  async createManyHabit(
    @TypeGraphQL.Ctx() _ctx: GqlContext,
    @TypeGraphQL.Info() _info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: HabitsCreationArgs
  ): Promise<Habit[]> {
    throw new Error("Not implemented");
  }
  */

  @TypeGraphQL.Mutation(() => Habit)
  async updateHabit(
    @TypeGraphQL.Ctx() _ctx: GqlContext,
    @TypeGraphQL.Info() _info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: HabitUpdateArgs
  ) {
    return await _updateHabit(args);
  }

  @TypeGraphQL.Mutation(() => Habit)
  async upsertHabit(
    @TypeGraphQL.Ctx() _ctx: GqlContext,
    @TypeGraphQL.Info() _info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: HabitUpsertionArgs
  ) {
    return await _upsertHabit(args);
  }

  /*
  @TypeGraphQL.Mutation(() => [Habit], { nullable: false })
  async updateHabits(
    @TypeGraphQL.Ctx() _ctx: GqlContext,
    @TypeGraphQL.Info() _info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: ArgsForUpdatingManyHabits
  ) {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation(() => [Habit], { nullable: false })
  async updateHabitsDistinctly(
    @TypeGraphQL.Ctx() _ctx: GqlContext,
    @TypeGraphQL.Info() _info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: ArgsForUpdatingManyHabits
  ) {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation(() => Habit, { nullable: true })
  async deleteHabit(
    @TypeGraphQL.Ctx() _ctx: GqlContext,
    @TypeGraphQL.Info() _info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteHabitArgs
  ) {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation(() => [Habit], { nullable: false })
  async deleteManyHabit(
    @TypeGraphQL.Ctx() _ctx: GqlContext,
    @TypeGraphQL.Info() _info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyHabitArgs
  ) {
    throw new Error("Not implemented");
  }
  */
}
