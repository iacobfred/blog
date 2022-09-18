/* Do not edit this file. It was generated programmatically. */

import {
  AccountCreationInput,
  AccountUpdateInput,
  AccountWhereInput,
  AccountWhereUniqueInput,
} from "@web/graphql/generated/inputs/account.inputs";
import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ArgsType()
export class AccountCreationArgs {
  @TypeGraphQL.Field(() => AccountCreationInput, { nullable: false })
  data!: AccountCreationInput;
}

@TypeGraphQL.ArgsType()
export class AccountsCreationArgs {
  @TypeGraphQL.Field(() => AccountCreationInput, { nullable: false })
  data!: AccountCreationInput;
}

@TypeGraphQL.ArgsType()
export class DeleteAccountArgs {
  @TypeGraphQL.Field(() => AccountWhereUniqueInput, { nullable: false })
  where!: AccountWhereUniqueInput;
}

@TypeGraphQL.ArgsType()
export class DeleteManyAccountArgs {
  @TypeGraphQL.Field(() => AccountWhereInput, { nullable: false })
  where!: AccountWhereInput;
}

@TypeGraphQL.ArgsType()
export class FindUniqueAccountArgs {
  @TypeGraphQL.Field(() => AccountWhereUniqueInput, { nullable: false })
  where!: AccountWhereUniqueInput;
}

@TypeGraphQL.ArgsType()
export class FindManyAccountArgs {
  @TypeGraphQL.Field(() => AccountWhereInput, { nullable: true })
  where?: AccountWhereInput;
}

@TypeGraphQL.ArgsType()
export class AccountUpdateArgs {
  @TypeGraphQL.Field(() => AccountWhereUniqueInput, { nullable: false })
  where!: AccountWhereUniqueInput;

  @TypeGraphQL.Field(() => AccountUpdateInput, { nullable: false })
  data!: AccountUpdateInput;
}

@TypeGraphQL.ArgsType()
export class ArgsForUpdatingManyAccounts {
  @TypeGraphQL.Field(() => AccountWhereInput, { nullable: false })
  where!: AccountWhereUniqueInput;

  @TypeGraphQL.Field(() => AccountUpdateInput, { nullable: false })
  data!: AccountUpdateInput;
}

@TypeGraphQL.ArgsType()
export class DistinctAccountsUpdateArgs {
  @TypeGraphQL.Field(() => [AccountUpdateArgs], { nullable: false })
  data!: AccountUpdateArgs[];
}

@TypeGraphQL.ArgsType()
export class AccountUpsertionArgs {
  @TypeGraphQL.Field(() => AccountWhereUniqueInput, { nullable: false })
  where!: AccountWhereUniqueInput;

  @TypeGraphQL.Field(() => AccountCreationInput, { nullable: false })
  data!: AccountCreationInput;

  // @TypeGraphQL.Field(() => AccountUpdateInput, { nullable: false })
  // update!: AccountUpdateInput;
}
