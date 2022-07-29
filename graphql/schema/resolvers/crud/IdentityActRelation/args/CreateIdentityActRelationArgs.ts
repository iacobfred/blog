import * as TypeGraphQL from "type-graphql-v2-fork";
import { IdentityActRelationCreateInput } from "../../../inputs/IdentityActRelationCreateInput";

@TypeGraphQL.ArgsType()
export class CreateIdentityActRelationArgs {
  @TypeGraphQL.Field(() => IdentityActRelationCreateInput, { nullable: false })
  data!: IdentityActRelationCreateInput;
}
