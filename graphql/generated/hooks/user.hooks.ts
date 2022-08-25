/* Do not edit this file. It was generated programmatically. */

import { UserCreationArgs, UserUpdateArgs } from "@/graphql/generated/args/user.args";
import { UserFragment } from "@/graphql/generated/fragments/user.fragment";
import {
  CREATE_USER,
  getOptimisticResponseForUserCreation,
  updateCacheAfterCreatingUser,
  UPDATE_USER,
} from "@/graphql/generated/mutations/user.mutations";
import {
  initializeUserData,
  UserData,
  userDataReducer,
} from "@/graphql/generated/reducers/user.reducer";
import {
  userCreationInputSchema,
  userUpdateInputSchema,
} from "@/graphql/generated/schemas/user.schemas";
import { Payload, useHandleMutation } from "@/utils/data";
import { MutationHookOptions } from "@apollo/client";
import { Dispatch, useReducer } from "react";

type UserCreationMutationHookOptions = MutationHookOptions<
  { createUser: UserFragment },
  UserCreationArgs
>;

export const useCreateUser = (options?: UserCreationMutationHookOptions) => {
  return useHandleMutation<{ createUser: UserFragment }, UserCreationArgs>(
    CREATE_USER,
    { ...updateCacheAfterCreatingUser, ...(options ?? {}) },
    userCreationInputSchema,
    getOptimisticResponseForUserCreation
  );
};

type UserUpdateMutationHookOptions = MutationHookOptions<
  { updateUser: UserFragment },
  UserUpdateArgs
>;

export const useUpdateUser = (options?: UserUpdateMutationHookOptions) => {
  return useHandleMutation<{ updateUser: UserFragment }, UserUpdateArgs>(
    UPDATE_USER,
    options,
    userUpdateInputSchema
  );
};

export const useUserDataReducer = (data?: UserData): [UserData, Dispatch<Payload<UserData>>] => {
  const starterData = data ?? {};
  const initializedData = initializeUserData(starterData);
  const [userData, dispatchUserData] = useReducer(
    userDataReducer,
    initializedData,
    initializeUserData
  );
  return [userData, dispatchUserData];
};
