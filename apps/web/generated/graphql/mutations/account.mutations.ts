/* Do not edit this file. It was generated programmatically. */

import { gql, MutationHookOptions } from "@apollo/client";
import { AccountCreationArgs } from "@web/generated/graphql/args/account.args";
import {
  accountFragment,
  AccountFragment,
} from "@web/generated/graphql/fragments/account.fragment";
import {
  AccountCreationInput,
  AccountUpdateInput,
} from "@web/generated/graphql/inputs/account.inputs";
import { ObjectID } from "bson";

export const CREATE_ACCOUNT = gql`
  mutation CreateAccount($data: AccountCreationInput!) {
    createAccount(data: $data) {
      ...AccountFragment
    }
  }
  ${accountFragment}
`;

export const getOptimisticResponseForAccountCreation = (
  data: AccountCreationInput
): { createAccount: AccountFragment } => {
  const now = new Date();
  return {
    createAccount: {
      __typename: "Account",
      id: new ObjectID().toHexString(),
      accessToken: null,
      refreshToken: null,
      accessTokenExpiry: null,
      syncToken: null,
      archivedAt: null,
      ...data,
      createdAt: now,
      updatedAt: now,
    },
  };
};

export const updateCacheAfterCreatingAccount: MutationHookOptions<
  { createAccount: AccountFragment },
  AccountCreationArgs
> = {
  refetchQueries: ["GetUser"],
  update(cache, { data }) {
    const { createAccount } = data || {};
    if (createAccount) {
      const newAccountRef = cache.writeFragment({
        data: createAccount,
        fragment: gql`
          fragment NewAccount on Account {
            ...AccountFragment
          }
          ${accountFragment}
        `,
        fragmentName: "NewAccount",
      });
      cache.modify({
        id: `User:${createAccount.userId}`,
        fields: {
          accounts(existingAccountRefs = []) {
            return [...existingAccountRefs, newAccountRef];
          },
        },
      });
      cache.modify({
        fields: {
          accounts(existingAccounts = []) {
            return [...existingAccounts, newAccountRef];
          },
        },
      });
    }
  },
};

export const UPDATE_ACCOUNT = gql`
  mutation UpdateAccount($where: AccountWhereUniqueInput!, $data: AccountUpdateInput!) {
    updateAccount(where: $where, data: $data) {
      ...AccountFragment
    }
  }
  ${accountFragment}
`;

export const getOptimisticResponseForAccountUpdate = (
  fragment: AccountFragment,
  data: AccountUpdateInput
) => {
  const now = new Date();
  return {
    updateAccount: {
      __typename: "Account",
      ...fragment,
      ...data,
      updatedAt: now,
    },
  };
};

export const UPSERT_ACCOUNT = gql`
  mutation UpdateAccount($where: AccountWhereUniqueInput!, $data: AccountCreationInput!) {
    upsertAccount(where: $where, data: $data) {
      ...AccountFragment
    }
  }
  ${accountFragment}
`;

export const UPDATE_ACCOUNTS = gql`
  mutation UpdateAccounts($where: AccountWhereInput!, $data: AccountUpdateInput!) {
    updateAccounts(where: $where, data: $data) {
      ...AccountFragment
    }
  }
  ${accountFragment}
`;

export const UPDATE_ACCOUNTS_DISTINCTLY = gql`
  mutation UpdateAccountsDistinctly($data: [AccountUpdateInput!]!) {
    updateAccountsDistinctly(data: $data) {
      ...AccountFragment
    }
  }
  ${accountFragment}
`;
