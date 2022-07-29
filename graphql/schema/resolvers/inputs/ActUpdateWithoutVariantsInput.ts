import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActionScheduleTemplateUpdateManyWithoutActInput } from "../inputs/ActionScheduleTemplateUpdateManyWithoutActInput";
import { ActUpdateOneWithoutVariantsInput } from "../inputs/ActUpdateOneWithoutVariantsInput";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { CategorizationUpdateManyWithoutActInput } from "../inputs/CategorizationUpdateManyWithoutActInput";
import { HabitUpdateManyWithoutActInput } from "../inputs/HabitUpdateManyWithoutActInput";
import { IdentityActRelationUpdateManyWithoutActionInput } from "../inputs/IdentityActRelationUpdateManyWithoutActionInput";
import { MetricApplicationUpdateManyWithoutActInput } from "../inputs/MetricApplicationUpdateManyWithoutActInput";

@TypeGraphQL.InputType("ActUpdateWithoutVariantsInput", {
  isAbstract: true,
})
export class ActUpdateWithoutVariantsInput {
  @TypeGraphQL.Field({ nullable: true })
  name?: string | null | undefined;

  @TypeGraphQL.Field({ nullable: true })
  slug?: string | null | undefined;

  @TypeGraphQL.Field({ nullable: true })
  description?: string | null | undefined;

  @TypeGraphQL.Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  isPublic?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field({ nullable: true })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  archivedAt?: Date | null | undefined;

  @TypeGraphQL.Field(() => ActUpdateOneWithoutVariantsInput, { nullable: true })
  parent?: ActUpdateOneWithoutVariantsInput | undefined;

  @TypeGraphQL.Field(() => HabitUpdateManyWithoutActInput, { nullable: true })
  habits?: HabitUpdateManyWithoutActInput | undefined;

  @TypeGraphQL.Field(() => MetricApplicationUpdateManyWithoutActInput, { nullable: true })
  metricApplications?: MetricApplicationUpdateManyWithoutActInput | undefined;

  @TypeGraphQL.Field(() => IdentityActRelationUpdateManyWithoutActionInput, { nullable: true })
  identityRelations?: IdentityActRelationUpdateManyWithoutActionInput | undefined;

  @TypeGraphQL.Field(() => ActionScheduleTemplateUpdateManyWithoutActInput, { nullable: true })
  scheduleTemplates?: ActionScheduleTemplateUpdateManyWithoutActInput | undefined;

  @TypeGraphQL.Field(() => CategorizationUpdateManyWithoutActInput, { nullable: true })
  categorizations?: CategorizationUpdateManyWithoutActInput | undefined;
}
