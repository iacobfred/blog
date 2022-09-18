/* Do not edit this file. It was generated programmatically. */

import {
  DashboardCreationInput,
  DashboardUpdateInput,
} from "@web/graphql/generated/inputs/dashboard.inputs";
import { bool, date, InferType, object, Schema, string } from "yup";

export const dashboardCreationInputSchema: Schema<DashboardCreationInput> = object({
  userId: string().required(),
  name: string().required(),
  description: string().nullable().optional(),
  isDefault: bool().nonNullable().optional(),
  public: bool().nonNullable().optional(),
  archivedAt: date().nullable().optional(),
});

export const dashboardUpdateInputSchema: Schema<DashboardUpdateInput> = object({
  userId: string().nonNullable().optional(),
  name: string().nonNullable().optional(),
  description: string().nullable().optional(),
  isDefault: bool().nonNullable().optional(),
  public: bool().nonNullable().optional(),
  archivedAt: date().nullable().optional(),
});

export type DashboardCreationInputSchemaType = InferType<typeof dashboardCreationInputSchema>;
export type DashboardUpdateInputSchemaType = InferType<typeof dashboardUpdateInputSchema>;
