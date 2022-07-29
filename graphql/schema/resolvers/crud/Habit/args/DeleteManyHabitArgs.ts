import * as TypeGraphQL from "type-graphql-v2-fork";
import { HabitWhereInput } from "../../../inputs/HabitWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyHabitArgs {
  @TypeGraphQL.Field(() => HabitWhereInput, { nullable: true })
  where?: HabitWhereInput | undefined;
}
