/* Do not edit this file. It was generated programmatically. */

import { MutationHookOptions } from "@apollo/client";
import { useUser } from "@web/components/contexts/UserContext";
import {
  DashboardData,
  dashboardReducer,
  dashboardsReducer,
  initializeDashboardData,
} from "@web/generated/reducers/dashboard.reducer";
import {
  DashboardCreationArgs,
  DashboardUpdateArgs,
} from "@web/graphql/generated/args/dashboard.args";
import { DashboardFragment } from "@web/graphql/generated/fragments/dashboard.fragment";
import {
  CREATE_DASHBOARD,
  getOptimisticResponseForDashboardCreation,
  updateCacheAfterCreatingDashboard,
  UPDATE_DASHBOARD,
} from "@web/graphql/generated/mutations/dashboard.mutations";
import {
  dashboardCreationInputSchema,
  dashboardUpdateInputSchema,
} from "@web/graphql/generated/schemas/dashboard.schemas";
import { useHandleMutation } from "@web/utils/data/mutation";
import { ArrayAction, Payload } from "@web/utils/data/reduction";
import { Dispatch, useEffect, useReducer } from "react";

type DashboardCreationMutationHookOptions = MutationHookOptions<
  { createDashboard: DashboardFragment },
  DashboardCreationArgs
>;

export const useCreateDashboard = (options?: DashboardCreationMutationHookOptions) => {
  return useHandleMutation<{ createDashboard: DashboardFragment }, DashboardCreationArgs>(
    CREATE_DASHBOARD,
    { ...updateCacheAfterCreatingDashboard, ...(options ?? {}) },
    dashboardCreationInputSchema,
    getOptimisticResponseForDashboardCreation
  );
};

type DashboardUpdateMutationHookOptions = MutationHookOptions<
  { updateDashboard: DashboardFragment },
  DashboardUpdateArgs
>;

export const useUpdateDashboard = (options?: DashboardUpdateMutationHookOptions) => {
  return useHandleMutation<{ updateDashboard: DashboardFragment }, DashboardUpdateArgs>(
    UPDATE_DASHBOARD,
    { refetchQueries: ["GetUser"], ...(options ?? {}) },
    dashboardUpdateInputSchema
  );
};

export const useDashboardReducer = (
  data?: DashboardData
): [DashboardData, Dispatch<Payload<DashboardData>>] => {
  const { user } = useUser();
  const [dashboardData, dispatchDashboardData] = useReducer(
    dashboardReducer,
    data ?? {},
    initializeDashboardData
  );
  useEffect(() => {
    if (!user) return;
    if (!dashboardData?.userId) {
      dispatchDashboardData({
        field: "init",
        value: initializeDashboardData(dashboardData, user),
      });
    }
  }, [user, dashboardData]);
  return [dashboardData, dispatchDashboardData];
};

export const useDashboardsReducer = (
  data: DashboardFragment[]
): [DashboardFragment[], Dispatch<ArrayAction<DashboardFragment>>] => {
  return useReducer(dashboardsReducer, data);
};
