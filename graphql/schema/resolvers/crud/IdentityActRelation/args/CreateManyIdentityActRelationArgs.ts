import * as TypeGraphQL from "type-graphql-v2-fork";
import { IdentityActRelationCreateManyInput } from "../../../inputs/IdentityActRelationCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyIdentityActRelationArgs {
  @TypeGraphQL.Field(() => [IdentityActRelationCreateManyInput], { nullable: false })
  data!: IdentityActRelationCreateManyInput[];

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}
