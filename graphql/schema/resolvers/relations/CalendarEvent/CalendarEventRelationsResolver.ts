import { ApolloContext } from "@/graphql/context";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { getPrismaFromContext } from "../../../helpers";
import { ActionSchedule } from "../../../models/ActionSchedule";
import { Calendar } from "../../../models/Calendar";
import { CalendarEvent } from "../../../models/CalendarEvent";
import { Habit } from "../../../models/Habit";
import { Task } from "../../../models/Task";

@TypeGraphQL.Resolver((_of) => CalendarEvent)
export class CalendarEventRelationsResolver {
  @TypeGraphQL.FieldResolver(() => Calendar, { nullable: false })
  async calendar(
    @TypeGraphQL.Root() calendarEvent: CalendarEvent,
    @TypeGraphQL.Ctx() ctx: ApolloContext
  ): Promise<Calendar> {
    return getPrismaFromContext(ctx)
      .calendarEvent.findUnique({
        where: {
          id: calendarEvent.id,
        },
      })
      .calendar({});
  }

  @TypeGraphQL.FieldResolver(() => ActionSchedule, { nullable: true })
  async schedule(
    @TypeGraphQL.Root() calendarEvent: CalendarEvent,
    @TypeGraphQL.Ctx() ctx: ApolloContext
  ): Promise<ActionSchedule | null> {
    return getPrismaFromContext(ctx)
      .calendarEvent.findUnique({
        where: {
          id: calendarEvent.id,
        },
      })
      .schedule({});
  }

  @TypeGraphQL.FieldResolver(() => Habit, { nullable: true })
  async habit(
    @TypeGraphQL.Root() calendarEvent: CalendarEvent,
    @TypeGraphQL.Ctx() ctx: ApolloContext
  ): Promise<Habit | null> {
    return getPrismaFromContext(ctx)
      .calendarEvent.findUnique({
        where: {
          id: calendarEvent.id,
        },
      })
      .habit({});
  }

  @TypeGraphQL.FieldResolver(() => Task, { nullable: true })
  async task(
    @TypeGraphQL.Root() calendarEvent: CalendarEvent,
    @TypeGraphQL.Ctx() ctx: ApolloContext
  ): Promise<Task | null> {
    throw new Error("Not implemented");
    // return CalendarEventCrudResolver.prototype.calendar(ctx, info, args);
  }
}
