/* Do not edit this file. It was generated programmatically. */

import { useUser } from "@/components/contexts/UserContext";
import { ListCreationArgs, ListUpdateArgs } from "@/graphql/generated/args/list.args";
import { ListFragment } from "@/graphql/generated/fragments/list.fragment";
import {
  CREATE_LIST,
  getOptimisticResponseForListCreation,
  updateCacheAfterCreatingList,
  UPDATE_LIST,
} from "@/graphql/generated/mutations/list.mutations";
import {
  initializeListData,
  ListData,
  listDataReducer,
} from "@/graphql/generated/reducers/list.reducer";
import {
  listCreationInputSchema,
  listUpdateInputSchema,
} from "@/graphql/generated/schemas/list.schemas";
import { Payload, useHandleMutation } from "@/utils/data";
import { MutationHookOptions } from "@apollo/client";
import { Dispatch, useEffect, useReducer } from "react";

type ListCreationMutationHookOptions = MutationHookOptions<
  { createList: ListFragment },
  ListCreationArgs
>;

export const useCreateList = (options?: ListCreationMutationHookOptions) => {
  return useHandleMutation<{ createList: ListFragment }, ListCreationArgs>(
    CREATE_LIST,
    { ...updateCacheAfterCreatingList, ...(options ?? {}) },
    listCreationInputSchema,
    getOptimisticResponseForListCreation
  );
};

type ListUpdateMutationHookOptions = MutationHookOptions<
  { updateList: ListFragment },
  ListUpdateArgs
>;

export const useUpdateList = (options?: ListUpdateMutationHookOptions) => {
  return useHandleMutation<{ updateList: ListFragment }, ListUpdateArgs>(
    UPDATE_LIST,
    options,
    listUpdateInputSchema
  );
};

export const useListDataReducer = (data?: ListData): [ListData, Dispatch<Payload<ListData>>] => {
  const { user } = useUser();
  const starterData = data ?? {};
  const initializedData = initializeListData(starterData, user);
  const [listData, dispatchListData] = useReducer(
    listDataReducer,
    initializedData,
    initializeListData
  );
  useEffect(() => {
    if (user?.id && !listData?.userId) {
      dispatchListData({
        field: "init",
        value: initializeListData(listData, user),
      });
    }
  }, [user, listData]);
  return [listData, dispatchListData];
};
