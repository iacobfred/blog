/* Do not edit this file. It was generated programmatically. */
// import List from "@web/graphql/generated/types/List";
import { ListFragment } from "@web/graphql/generated/fragments/list.fragment";
import { UserFragment } from "@web/graphql/generated/fragments/user.fragment";
import { ListCreationInput } from "@web/graphql/generated/inputs/list.inputs";
import { ID } from "@web/graphql/schema/types";
import { ArrayAction, arrayReducer, Payload } from "@web/utils/data/reduction";

export interface ListData extends Partial<ListCreationInput> {
  id?: ID;
}
// export type ListData = InputData<List>;
// export type InitialListData = InitialData<List, "rank" | "userId">;

export function initializeListData(
  data: Partial<ListData>,
  user?: UserFragment | null | undefined
): Partial<ListData> {
  const userId = user?.id;
  if (!userId) return data;
  return {
    userId,
    name: "",
    ...Object.fromEntries(Object.entries(data).filter(([, value]) => value !== undefined)), // TODO: make this unnecessary
  };
}

export function listReducer(state: ListData, payload: Payload<ListData>) {
  if (payload.field === "init") return initializeListData(payload.value as Partial<ListData>);
  return { ...state, [payload.field]: payload.value };
}

export function listsReducer(state: ListFragment[], action: ArrayAction<ListFragment>) {
  return arrayReducer<ListFragment>(state, action);
}
