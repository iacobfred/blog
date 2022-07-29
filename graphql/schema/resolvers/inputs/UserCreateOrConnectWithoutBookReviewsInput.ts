import * as TypeGraphQL from "type-graphql-v2-fork";
import { UserCreateWithoutBookReviewsInput } from "../inputs/UserCreateWithoutBookReviewsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutBookReviewsInput", {
  isAbstract: true,
})
export class UserCreateOrConnectWithoutBookReviewsInput {
  @TypeGraphQL.Field(() => UserWhereUniqueInput, { nullable: false })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(() => UserCreateWithoutBookReviewsInput, { nullable: false })
  create!: UserCreateWithoutBookReviewsInput;
}
