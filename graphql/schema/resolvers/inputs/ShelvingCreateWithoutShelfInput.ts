import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";
import { BookCreateNestedOneWithoutShelvingsInput } from "../inputs/BookCreateNestedOneWithoutShelvingsInput";

@TypeGraphQL.InputType("ShelvingCreateWithoutShelfInput", {
  isAbstract: true,
})
export class ShelvingCreateWithoutShelfInput {
  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  position?: number | undefined;

  @TypeGraphQL.Field(() => String, { nullable: true })
  rationale?: string | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  archivedAt?: Date | null | undefined;

  @TypeGraphQL.Field(() => BookCreateNestedOneWithoutShelvingsInput, { nullable: false })
  book!: BookCreateNestedOneWithoutShelvingsInput;
}
