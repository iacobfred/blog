import { CalendarEventData } from "@/graphql/generated/reducers/calendarEvent.reducer";
import { Payload } from "@/utils/data";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { Dispatch, FC } from "react";

interface EventFormFieldsProps {
  data: CalendarEventData;
  dispatch: Dispatch<Payload<CalendarEventData>>;
}

const EventFormFields: FC<EventFormFieldsProps> = ({
  data: formData,
  dispatch,
}: EventFormFieldsProps) => {
  return (
    <div>
      <TextField
        id="title"
        label="Title"
        variant="standard"
        value={formData.title}
        onChange={(event) => dispatch({ field: "title", value: event.target.value })}
        fullWidth
        autoFocus
      />
      <FormGroup sx={{ marginY: "1rem" }}>
        <DateTimePicker
          label="Start"
          openTo="minutes"
          value={formData.start}
          // TODO: remove these type annotations after mui lab types are updated
          onChange={(value: Date | null) => value && dispatch({ field: "start", value })}
          renderInput={(params: TextFieldProps) => (
            <TextField {...params} sx={{ marginY: "1rem" }} required />
          )}
        />
        <DateTimePicker
          label="End"
          openTo="minutes"
          minDateTime={formData.start}
          value={formData.end}
          // inputFormat="yyyy/MM/dd hh:mm a"
          onChange={(value: Date | null) => value && dispatch({ field: "end", value })}
          renderInput={(params: TextFieldProps) => (
            <TextField {...params} sx={{ marginY: "1rem" }} />
          )}
        />
      </FormGroup>
      <FormGroup>
        <FormControlLabel control={<Checkbox />} label="All day" />
        <FormControlLabel control={<Checkbox />} label="Repeat" />
      </FormGroup>
      <TextField
        fullWidth
        multiline
        id="notes"
        label="Notes"
        variant="outlined"
        margin="dense"
        value={formData.notes}
        onChange={(event) => dispatch({ field: "notes", value: event.target.value })}
      />
    </div>
  );
};

export default EventFormFields;
