import CreationDialog from "@web/components/data/CreationDialog";
import { useCreateDashboard, useDashboardReducer } from "@web/generated/hooks/dashboard.hooks";
import fields from "@web/graphql/generated/fields/dashboard.fields";
import { DashboardFragment } from "@web/graphql/generated/fragments/dashboard.fragment";
import { DashboardCreationInput } from "@web/graphql/generated/inputs/dashboard.inputs";
import Dashboard from "@web/graphql/generated/types/Dashboard";
import { bindPopover } from "material-ui-popup-state/hooks";

export type DashboardCreationDialogProps = ReturnType<typeof bindPopover>;

export default function DashboardCreationDialog(props: DashboardCreationDialogProps) {
  const [create] = useCreateDashboard();
  const dataTuple = useDashboardReducer();
  return CreationDialog<Dashboard, DashboardCreationInput, { createDashboard: DashboardFragment }>({
    typeName: "dashboard",
    dataTuple,
    create,
    fields,
    // produceInitialData,
    ...props,
  });
}
