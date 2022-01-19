import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import { FC } from "react";

interface DragHandleProps {
  className?: string;
}

const DragHandle: FC<DragHandleProps> = (props: DragHandleProps) => {
  return <DragIndicatorIcon {...props} sx={{ "&:hover": { cursor: "grab" } }} />;
};

export default DragHandle;
