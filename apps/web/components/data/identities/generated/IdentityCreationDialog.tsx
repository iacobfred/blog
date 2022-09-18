import CreationDialog from "@web/components/data/CreationDialog";
import { useCreateIdentity, useIdentityReducer } from "@web/generated/hooks/identity.hooks";
import fields from "@web/graphql/generated/fields/identity.fields";
import { IdentityFragment } from "@web/graphql/generated/fragments/identity.fragment";
import { IdentityCreationInput } from "@web/graphql/generated/inputs/identity.inputs";
import Identity from "@web/graphql/generated/types/Identity";
import { bindPopover } from "material-ui-popup-state/hooks";

export type IdentityCreationDialogProps = ReturnType<typeof bindPopover>;

export default function IdentityCreationDialog(props: IdentityCreationDialogProps) {
  const [create] = useCreateIdentity();
  const dataTuple = useIdentityReducer();
  return CreationDialog<Identity, IdentityCreationInput, { createIdentity: IdentityFragment }>({
    typeName: "identity",
    dataTuple,
    create,
    fields,
    // produceInitialData,
    ...props,
  });
}
