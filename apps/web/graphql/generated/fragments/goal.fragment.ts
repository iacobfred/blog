/* Do not edit this file. It was generated programmatically. */

import { gql } from "@apollo/client";
import Goal from "@web/graphql/generated/types/Goal";

export const goalFragment = gql`
  fragment GoalFragment on Goal {
    __typename
    id
    userId
    habitId
    parentId
    description
    createdAt
    updatedAt
    archivedAt
  }
`;

export type GoalFragment = Pick<
  Goal,
  | "__typename"
  | "id"
  | "createdAt"
  | "updatedAt"
  | "archivedAt"
  | "userId"
  | "habitId"
  | "parentId"
  | "description"
>;
