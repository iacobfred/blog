import CreationDialog from "@web/components/data/CreationDialog";
import { useCreateValue, useValueReducer } from "@web/graphql/generated/hooks/value.hooks";
import { bindPopover } from "material-ui-popup-state/hooks";
import { ValueCreationInput } from "@web/graphql/generated/inputs/value.inputs";
import Value from "@web/graphql/generated/types/Value";
import { ValueFragment } from "@web/graphql/generated/fragments/value.fragment";
import fields from "@web/graphql/generated/fields/value.fields";

export type ValueCreationDialogProps = ReturnType<typeof bindPopover>;

export default function ValueCreationDialog(props: ValueCreationDialogProps) {
  const [create] = useCreateValue();
  const dataTuple = useValueReducer();
  return CreationDialog<Value, ValueCreationInput, { createValue: ValueFragment }>({
    typeName: "value",
    dataTuple,
    create,
    fields,
    // produceInitialData,
    ...props,
  });
}
