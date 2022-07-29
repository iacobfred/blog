import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";
import { ActCreateNestedOneWithoutIdentityRelationsInput } from "../inputs/ActCreateNestedOneWithoutIdentityRelationsInput";

@TypeGraphQL.InputType("IdentityActRelationCreateInput", {
  isAbstract: true,
})
export class IdentityActRelationCreateInput {
  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  archivedAt?: Date | undefined;

  @TypeGraphQL.Field(() => ActCreateNestedOneWithoutIdentityRelationsInput, {
    nullable: false,
  })
  action!: ActCreateNestedOneWithoutIdentityRelationsInput;
}
