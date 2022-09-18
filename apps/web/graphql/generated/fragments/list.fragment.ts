/* Do not edit this file. It was generated programmatically. */

import { gql } from "@apollo/client";
import List from "@web/graphql/generated/types/List";

export const listFragment = gql`
  fragment ListFragment on List {
    __typename
    id
    userId
    name
    description
    fields
    createdAt
    updatedAt
    archivedAt
  }
`;

export type ListFragment = Pick<
  List,
  | "__typename"
  | "id"
  | "createdAt"
  | "updatedAt"
  | "archivedAt"
  | "userId"
  | "name"
  | "description"
  | "fields"
>;
