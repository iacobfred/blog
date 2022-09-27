/* Do not edit this file. It was generated programmatically. */

import { gql, MutationHookOptions } from "@apollo/client";
import { ValueCreationArgs } from "@web/generated/graphql/args/value.args";
import { valueFragment, ValueFragment } from "@web/generated/graphql/fragments/value.fragment";
import { ValueCreationInput, ValueUpdateInput } from "@web/generated/graphql/inputs/value.inputs";
import { ObjectID } from "bson";

export const CREATE_VALUE = gql`
  mutation CreateValue($data: ValueCreationInput!) {
    createValue(data: $data) {
      ...ValueFragment
    }
  }
  ${valueFragment}
`;

export const getOptimisticResponseForValueCreation = (
  data: ValueCreationInput
): { createValue: ValueFragment } => {
  const now = new Date();
  return {
    createValue: {
      __typename: "Value",
      id: new ObjectID().toHexString(),
      description: null,
      archivedAt: null,
      ...data,
      createdAt: now,
      updatedAt: now,
    },
  };
};

export const updateCacheAfterCreatingValue: MutationHookOptions<
  { createValue: ValueFragment },
  ValueCreationArgs
> = {
  refetchQueries: ["GetUser"],
  update(cache, { data }) {
    const { createValue } = data || {};
    if (createValue) {
      const newValueRef = cache.writeFragment({
        data: createValue,
        fragment: gql`
          fragment NewValue on Value {
            ...ValueFragment
          }
          ${valueFragment}
        `,
        fragmentName: "NewValue",
      });
      cache.modify({
        id: `User:${createValue.userId}`,
        fields: {
          values(existingValueRefs = []) {
            return [...existingValueRefs, newValueRef];
          },
        },
      });
      cache.modify({
        fields: {
          values(existingValues = []) {
            return [...existingValues, newValueRef];
          },
        },
      });
    }
  },
};

export const UPDATE_VALUE = gql`
  mutation UpdateValue($where: ValueWhereUniqueInput!, $data: ValueUpdateInput!) {
    updateValue(where: $where, data: $data) {
      ...ValueFragment
    }
  }
  ${valueFragment}
`;

export const getOptimisticResponseForValueUpdate = (
  fragment: ValueFragment,
  data: ValueUpdateInput
) => {
  const now = new Date();
  return {
    updateValue: {
      __typename: "Value",
      ...fragment,
      ...data,
      updatedAt: now,
    },
  };
};

export const UPSERT_VALUE = gql`
  mutation UpdateValue($where: ValueWhereUniqueInput!, $data: ValueCreationInput!) {
    upsertValue(where: $where, data: $data) {
      ...ValueFragment
    }
  }
  ${valueFragment}
`;

export const UPDATE_VALUES = gql`
  mutation UpdateValues($where: ValueWhereInput!, $data: ValueUpdateInput!) {
    updateValues(where: $where, data: $data) {
      ...ValueFragment
    }
  }
  ${valueFragment}
`;

export const UPDATE_VALUES_DISTINCTLY = gql`
  mutation UpdateValuesDistinctly($data: [ValueUpdateInput!]!) {
    updateValuesDistinctly(data: $data) {
      ...ValueFragment
    }
  }
  ${valueFragment}
`;
