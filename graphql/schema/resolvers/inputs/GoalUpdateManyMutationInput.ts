import * as TypeGraphQL from "type-graphql-v2-fork";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";

@TypeGraphQL.InputType("GoalUpdateManyMutationInput", {
  isAbstract: true,
})
export class GoalUpdateManyMutationInput {
  @TypeGraphQL.Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  quantity?: IntFieldUpdateOperationsInput | undefined;
}
