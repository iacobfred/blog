import CreationDialog from "@web/components/data/CreationDialog";
import { useCreateHabit, useHabitReducer } from "@web/generated/hooks/habit.hooks";
import fields from "@web/graphql/generated/fields/habit.fields";
import { HabitFragment } from "@web/graphql/generated/fragments/habit.fragment";
import { HabitCreationInput } from "@web/graphql/generated/inputs/habit.inputs";
import Habit from "@web/graphql/generated/types/Habit";
import { bindPopover } from "material-ui-popup-state/hooks";

export type HabitCreationDialogProps = ReturnType<typeof bindPopover>;

export default function HabitCreationDialog(props: HabitCreationDialogProps) {
  const [create] = useCreateHabit();
  const dataTuple = useHabitReducer();
  return CreationDialog<Habit, HabitCreationInput, { createHabit: HabitFragment }>({
    typeName: "habit",
    dataTuple,
    create,
    fields,
    // produceInitialData,
    ...props,
  });
}
