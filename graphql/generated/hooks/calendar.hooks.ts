/* Do not edit this file. It was generated programmatically. */

import { useUser } from "@/components/contexts/UserContext";
import { CalendarCreationArgs, CalendarUpdateArgs } from "@/graphql/generated/args/calendar.args";
import { CalendarFragment } from "@/graphql/generated/fragments/calendar.fragment";
import {
  CREATE_CALENDAR,
  getOptimisticResponseForCalendarCreation,
  updateCacheAfterCreatingCalendar,
  UPDATE_CALENDAR,
} from "@/graphql/generated/mutations/calendar.mutations";
import {
  CalendarData,
  calendarDataReducer,
  initializeCalendarData,
} from "@/graphql/generated/reducers/calendar.reducer";
import {
  calendarCreationInputSchema,
  calendarUpdateInputSchema,
} from "@/graphql/generated/schemas/calendar.schemas";
import { Payload, useHandleMutation } from "@/utils/data";
import { MutationHookOptions } from "@apollo/client";
import { Dispatch, useEffect, useReducer } from "react";

type CalendarCreationMutationHookOptions = MutationHookOptions<
  { createCalendar: CalendarFragment },
  CalendarCreationArgs
>;

export const useCreateCalendar = (options?: CalendarCreationMutationHookOptions) => {
  return useHandleMutation<{ createCalendar: CalendarFragment }, CalendarCreationArgs>(
    CREATE_CALENDAR,
    { ...updateCacheAfterCreatingCalendar, ...(options ?? {}) },
    calendarCreationInputSchema,
    getOptimisticResponseForCalendarCreation
  );
};

type CalendarUpdateMutationHookOptions = MutationHookOptions<
  { updateCalendar: CalendarFragment },
  CalendarUpdateArgs
>;

export const useUpdateCalendar = (options?: CalendarUpdateMutationHookOptions) => {
  return useHandleMutation<{ updateCalendar: CalendarFragment }, CalendarUpdateArgs>(
    UPDATE_CALENDAR,
    options,
    calendarUpdateInputSchema
  );
};

export const useCalendarDataReducer = (
  data?: CalendarData
): [CalendarData, Dispatch<Payload<CalendarData>>] => {
  const { user } = useUser();
  const starterData = data ?? {};
  const initializedData = initializeCalendarData(starterData, user);
  const [calendarData, dispatchCalendarData] = useReducer(
    calendarDataReducer,
    initializedData,
    initializeCalendarData
  );
  useEffect(() => {
    if (user?.id && !calendarData?.userId) {
      dispatchCalendarData({
        field: "init",
        value: initializeCalendarData(calendarData, user),
      });
    }
  }, [user, calendarData]);
  return [calendarData, dispatchCalendarData];
};
