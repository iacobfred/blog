/* Do not edit this file. It was generated programmatically. */

import {
  CalendarCreationInput,
  CalendarUpdateInput,
} from "@web/graphql/generated/inputs/calendar.inputs";
import { bool, date, InferType, object, Schema, string } from "yup";

export const calendarCreationInputSchema: Schema<CalendarCreationInput> = object({
  userId: string().required(),
  name: string().required(),
  color: string().nullable().optional(),
  provider: string().nullable().optional(),
  remoteId: string().nullable().optional(),
  syncToken: string().nullable().optional(),
  accountId: string().nullable().optional(),
  primary: bool().nonNullable().optional(),
  public: bool().nonNullable().optional(),
  enabled: bool()
    .nonNullable()
    .optional()
    .default(() => {
      return true;
    }),
  archivedAt: date().nullable().optional(),
});

export const calendarUpdateInputSchema: Schema<CalendarUpdateInput> = object({
  userId: string().nonNullable().optional(),
  name: string().nonNullable().optional(),
  color: string().nullable().optional(),
  provider: string().nullable().optional(),
  remoteId: string().nullable().optional(),
  syncToken: string().nullable().optional(),
  accountId: string().nullable().optional(),
  primary: bool().nonNullable().optional(),
  public: bool().nonNullable().optional(),
  enabled: bool().nonNullable().optional(),
  archivedAt: date().nullable().optional(),
});

export type CalendarCreationInputSchemaType = InferType<typeof calendarCreationInputSchema>;
export type CalendarUpdateInputSchemaType = InferType<typeof calendarUpdateInputSchema>;
