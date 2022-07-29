import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActionScheduleWhereInput } from "../inputs/ActionScheduleWhereInput";

@TypeGraphQL.InputType("ActionScheduleRelationFilter", {
  isAbstract: true,
})
export class ActionScheduleRelationFilter {
  @TypeGraphQL.Field(() => ActionScheduleWhereInput, { nullable: true })
  is?: ActionScheduleWhereInput | undefined;

  @TypeGraphQL.Field(() => ActionScheduleWhereInput, { nullable: true })
  isNot?: ActionScheduleWhereInput | undefined;
}
