import * as TypeGraphQL from "type-graphql-v2-fork";
import { GoalCreateInput } from "../../../inputs/GoalCreateInput";

@TypeGraphQL.ArgsType()
export class CreateGoalArgs {
  @TypeGraphQL.Field(() => GoalCreateInput, { nullable: false })
  data!: GoalCreateInput;
}
