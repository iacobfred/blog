/* Do not edit this file. It was generated programmatically. */

import { gql, MutationHookOptions } from "@apollo/client";
import { BookCreationArgs } from "@web/graphql/generated/args/book.args";
import { bookFragment, BookFragment } from "@web/graphql/generated/fragments/book.fragment";
import { BookCreationInput, BookUpdateInput } from "@web/graphql/generated/inputs/book.inputs";
import { ObjectID } from "bson";

export const CREATE_BOOK = gql`
  mutation CreateBook($data: BookCreationInput!) {
    createBook(data: $data) {
      ...BookFragment
    }
  }
  ${bookFragment}
`;

export const getOptimisticResponseForBookCreation = (
  data: BookCreationInput
): { createBook: BookFragment } => {
  const now = new Date();
  return {
    createBook: {
      __typename: "Book",
      id: new ObjectID().toHexString(),
      isbn: null,
      isbn13: null,
      description: null,
      publicationYear: null,
      originalPublicationYear: null,
      archivedAt: null,
      ...data,
      createdAt: now,
      updatedAt: now,
    },
  };
};

export const updateCacheAfterCreatingBook: MutationHookOptions<
  { createBook: BookFragment },
  BookCreationArgs
> = {
  update(cache, { data }) {
    const { createBook } = data || {};
    if (createBook) {
      const newBookRef = cache.writeFragment({
        data: createBook,
        fragment: gql`
          fragment NewBook on Book {
            ...BookFragment
          }
          ${bookFragment}
        `,
        fragmentName: "NewBook",
      });
      cache.modify({
        fields: {
          books(existingBooks = []) {
            return [...existingBooks, newBookRef];
          },
        },
      });
    }
  },
};

export const UPDATE_BOOK = gql`
  mutation UpdateBook($where: BookWhereUniqueInput!, $data: BookUpdateInput!) {
    updateBook(where: $where, data: $data) {
      ...BookFragment
    }
  }
  ${bookFragment}
`;

export const getOptimisticResponseForBookUpdate = (
  fragment: BookFragment,
  data: BookUpdateInput
) => {
  const now = new Date();
  return {
    updateBook: {
      __typename: "Book",
      ...fragment,
      ...data,
      updatedAt: now,
    },
  };
};

export const UPSERT_BOOK = gql`
  mutation UpdateBook($where: BookWhereUniqueInput!, $data: BookCreationInput!) {
    upsertBook(where: $where, data: $data) {
      ...BookFragment
    }
  }
  ${bookFragment}
`;

export const UPDATE_BOOKS = gql`
  mutation UpdateBooks($where: BookWhereInput!, $data: BookUpdateInput!) {
    updateBooks(where: $where, data: $data) {
      ...BookFragment
    }
  }
  ${bookFragment}
`;

export const UPDATE_BOOKS_DISTINCTLY = gql`
  mutation UpdateBooksDistinctly($data: [BookUpdateInput!]!) {
    updateBooksDistinctly(data: $data) {
      ...BookFragment
    }
  }
  ${bookFragment}
`;
