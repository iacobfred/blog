import * as TypeGraphQL from "type-graphql-v2-fork";
import { BookCreateInput } from "../../../inputs/BookCreateInput";

@TypeGraphQL.ArgsType()
export class CreateBookArgs {
  @TypeGraphQL.Field(() => BookCreateInput, { nullable: false })
  data!: BookCreateInput;
}
