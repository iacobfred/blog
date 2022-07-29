import * as TypeGraphQL from "type-graphql-v2-fork";
import { HabitCreateOrConnectWithoutRoutinesInput } from "../inputs/HabitCreateOrConnectWithoutRoutinesInput";
import { HabitCreateWithoutRoutinesInput } from "../inputs/HabitCreateWithoutRoutinesInput";
import { HabitWhereUniqueInput } from "../inputs/HabitWhereUniqueInput";

@TypeGraphQL.InputType("HabitCreateNestedOneWithoutRoutinesInput", {
  isAbstract: true,
})
export class HabitCreateNestedOneWithoutRoutinesInput {
  @TypeGraphQL.Field(() => HabitCreateWithoutRoutinesInput, { nullable: true })
  create?: HabitCreateWithoutRoutinesInput | undefined;

  @TypeGraphQL.Field(() => HabitCreateOrConnectWithoutRoutinesInput, { nullable: true })
  connectOrCreate?: HabitCreateOrConnectWithoutRoutinesInput | undefined;

  @TypeGraphQL.Field(() => HabitWhereUniqueInput, { nullable: true })
  connect?: HabitWhereUniqueInput | undefined;
}
