import CreationDialog from "@web/components/data/CreationDialog";
import { useCreateListItem, useListItemReducer } from "@web/generated/hooks/listItem.hooks";
import fields from "@web/graphql/generated/fields/listItem.fields";
import { ListItemFragment } from "@web/graphql/generated/fragments/listItem.fragment";
import { ListItemCreationInput } from "@web/graphql/generated/inputs/listItem.inputs";
import ListItem from "@web/graphql/generated/types/ListItem";
import { bindPopover } from "material-ui-popup-state/hooks";

export type ListItemCreationDialogProps = ReturnType<typeof bindPopover>;

export default function ListItemCreationDialog(props: ListItemCreationDialogProps) {
  const [create] = useCreateListItem();
  const dataTuple = useListItemReducer();
  return CreationDialog<ListItem, ListItemCreationInput, { createListItem: ListItemFragment }>({
    typeName: "listItem",
    dataTuple,
    create,
    fields,
    // produceInitialData,
    ...props,
  });
}
