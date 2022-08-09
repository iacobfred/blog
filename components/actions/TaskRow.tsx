import CompletionCheckbox from "@/components/actions/CompletionCheckbox";
import TaskDialog from "@/components/actions/TaskDialog";
import { useUser } from "@/components/contexts/UserContext";
import { useTaskDataReducer, useUpdateTask } from "@/graphql/generated/hooks/task.hooks";
import { Task } from "@/graphql/generated/models/task.model";
import { getOptimisticResponseForTaskUpdate } from "@/graphql/generated/mutations/task.mutations";
import { ID } from "@/graphql/schema/types";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import RepeatIcon from "@mui/icons-material/Repeat";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { format, isPast, isSameDay, isSameYear, isToday } from "date-fns";
import { XYCoord } from "dnd-core";
import { bindPopover, bindTrigger, usePopupState } from "material-ui-popup-state/hooks";
import { FC, RefObject, useMemo, useRef, useState } from "react";
import { DropTargetMonitor, useDrag, useDrop } from "react-dnd";

export interface TaskRowProps extends Pick<TaskRowContentProps, "task" | "collapsed"> {
  subtasks: Task[];
  asSubtask?: boolean;
  index: number;
  move?: (draggedTask: DraggedTask, hoveredTask: Task) => Partial<DraggedTask> | null;
  onDrop?: (dropIndex: number) => void;
}

interface TaskRowContentProps {
  task: Task;
  asSubtask?: boolean;
  subtasks: Task[];
  collapsed?: boolean;
  dndRef: RefObject<HTMLTableRowElement>;
  isDragging: boolean;
  onLoading: (isLoading: boolean) => void;
  onEditing: (isEditing: boolean) => void;
}

export type DraggedTask = { type: "task" } & Pick<Task, "id" | "rank" | "title" | "completedAt"> & {
    index: number;
    calendarId?: ID;
    scheduleId?: ID | null;
  };

const TaskRowContent: FC<TaskRowContentProps> = (props) => {
  const user = useUser();
  const { task, asSubtask, subtasks, collapsed: _collapsed, dndRef, isDragging, onLoading } = props;
  const completed = !!task.completedAt;
  const collapsed = _collapsed ?? false;
  const isMobile = useMediaQuery("(max-width: 600px)");
  const [subtasksExpanded, setSubtasksExpanded] = useState(isMobile ? false : false);

  const dialogState = usePopupState({ variant: "popover", popupId: `task-${task.id}-dialog` });

  // const habit = task.habit; // TODO
  const habit = task.habitId ? user?.habits?.find((habit) => habit.id === task.habitId) : null;

  const [taskData, dispatchTaskData] = useTaskDataReducer(task);

  const [updateTask, { loading }] = useUpdateTask();

  onLoading(loading);

  const toggleCompletion = (complete: boolean) => {
    const completedAt = complete ? new Date() : null;
    const data = { completedAt };
    const optimisticResponse = getOptimisticResponseForTaskUpdate(task, data);
    updateTask.current?.({
      variables: {
        where: { id: task.id },
        data,
      },
      optimisticResponse,
    });
  };

  const isHabit = Boolean(task.habitId);

  const dueDate = task.dueDate ?? null;
  const scheduledDate = task.plannedStartDate ?? null;

  const dueDateTextElement = getDateTextElement(dueDate);
  const scheduledDateTextElement = getDateTextElement(scheduledDate);

  const dialogTriggerProps = bindTrigger(dialogState);

  return (
    <>
      <TableRow
        hover={!isDragging}
        ref={dndRef}
        sx={{
          opacity: isDragging ? 0 : 1,
          cursor: isDragging ? "grabbing" : "pointer",
          // TODO: A CSS transition would be nice here...
          display: collapsed ? "none" : "table-row",
          backgroundColor: (theme) =>
            asSubtask
              ? theme.palette.mode === "light"
                ? "rgba(0,0,0,0.05)"
                : "rgba(255,255,255,0.05)"
              : "transparent",
          "& .drag-handle": { visibility: "hidden" },
          "& .actions-menu-icon": { visibility: "hidden" },
          "&:hover": {
            "& .drag-handle": {
              visibility: "visible",
              color: "#666666",
            },
            "& .actions-menu-icon": { visibility: "visible" },
          },
          "& td, th": {
            padding: 0,
            "& svg": {
              fontSize: "1.33rem",
              color: "#808080",
              "&:hover": {
                color: (theme) => (theme.palette.mode === "light" ? "#666666" : "#ffffff"),
              },
            },
            "& button:hover svg": {
              color: (theme) => (theme.palette.mode === "light" ? "#666666" : "#ffffff"),
            },
          },
          "&:last-child td, &:last-child th": { border: 0 },
        }}
      >
        <TableCell>
          <CompletionCheckbox
            checked={completed}
            disabled={loading}
            onClick={(event) => {
              event.preventDefault();
              toggleCompletion(!completed);
            }}
          />
        </TableCell>
        <TableCell
          sx={{
            ...(completed && {
              textDecoration: "line-through",
            }),
          }}
          onClick={(e) => {
            dialogTriggerProps.onClick(e);
          }}
        >
          <Box
            sx={{
              position: "relative",
              margin: "0.25rem",
              paddingX: 0,
              minHeight: "2.2rem",
              minWidth: 0,
              height: "auto",
              maxHeight: "auto",
              borderRadius: "3px",
              border: isHabit ? "1px solid rgba(0, 0, 0, 0.05)" : "none",
              // backgroundColor: (theme) =>
              //   isHabit
              //     ? `${
              //         theme.palette.mode === "light"
              //           ? "rgba(0, 0, 0, 0.08)"
              //           : "rgba(255, 255, 255, 0.08)"
              //       }`
              //     : "transparent",
              color: (theme) => (theme.palette.mode === "light" ? "black" : "white"),
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box p={1}>
              <Typography
                sx={{
                  fontSize: asSubtask ? "0.7rem" : "0.8rem",
                  textTransform: "none",
                }}
              >
                {task.title}
              </Typography>
              {subtasks?.length ? (
                <IconButton
                  title={`${subtasksExpanded ? "Collapse" : "Expand"}`}
                  sx={{
                    backgroundColor: "transparent",
                    backgroundOrigin: "content-box",
                  }}
                  onClick={(event) => {
                    event.preventDefault();
                    setSubtasksExpanded(!subtasksExpanded);
                  }}
                >
                  {subtasksExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </IconButton>
              ) : null}
            </Box>
            {task.habitId && (
              <IconButton
                // title={`every ${task.habit.schedules[0].frequency.toLowerCase()}`}
                onClick={(event) => {
                  event.preventDefault();
                  console.info("You clicked the schedule icon.");
                }}
              >
                <RepeatIcon sx={{ color: "gray" }} />
              </IconButton>
            )}
          </Box>
        </TableCell>
        <TableCell>
          <Box px="0.25rem" display="flex" justifyContent={"center"} width={"100%"}>
            {scheduledDate && (
              <Typography
                component="span"
                fontSize="0.8rem"
                textAlign={"center"}
                sx={{
                  ...(isToday(scheduledDate) && { color: (theme) => theme.palette.warning.main }),
                  ...(isPast(scheduledDate) && { color: (theme) => theme.palette.error.main }),
                }}
              >
                {scheduledDateTextElement}
              </Typography>
            )}
          </Box>
        </TableCell>
        <TableCell>
          <Box px="0.25rem" display="flex" justifyContent={"center"} width={"100%"}>
            {dueDate ? (
              <Typography
                component="span"
                fontSize="0.8rem"
                textAlign={"center"}
                sx={{
                  ...(isToday(dueDate) && { color: (theme) => theme.palette.warning.main }),
                  ...(isPast(dueDate) && { color: (theme) => theme.palette.error.main }),
                }}
              >
                {dueDateTextElement}
              </Typography>
            ) : habit?.chronString ? (
              <IconButton
                // title={`every ${task.habit.schedules[0].frequency.toLowerCase()}`}
                onClick={(event) => {
                  event.preventDefault();
                  console.info("You clicked the schedule icon.");
                }}
              >
                <RepeatIcon sx={{ color: "gray" }} />
              </IconButton>
            ) : null}
          </Box>
        </TableCell>
        <TableCell sx={{ "&:hover": { cursor: "grab" } }} className={`${isMobile ? "hidden" : ""}`}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              height: "100%",
              "&:hover": { cursor: "grab" },
            }}
          >
            <DragIndicatorIcon
              className="drag-handle"
              sx={{
                color: "gray",
                "&:hover": { cursor: "grab" },
              }}
            />
          </Box>
        </TableCell>
      </TableRow>
      {!collapsed &&
        subtasks?.map((subtask, index) => (
          <TaskRow
            key={subtask.id}
            task={subtask}
            asSubtask={true}
            subtasks={[]}
            collapsed={!subtasksExpanded || isDragging}
            index={index}
          />
        ))}
      <TaskDialog
        task={taskData}
        dispatchTaskData={dispatchTaskData}
        {...bindPopover(dialogState)}
      />
    </>
  );
};

const TaskRow: FC<TaskRowProps> = (props: TaskRowProps) => {
  const { task, index, onDrop, move } = props;
  const dndRef = useRef<HTMLTableRowElement>(null);
  const loadingRef = useRef(false);
  const editingRef = useRef(false);

  const [{ isDragging }, dragRef] = useDrag<DraggedTask, unknown, { isDragging: boolean }>(
    () => ({
      type: "task",
      item: {
        type: "task",
        id: task.id,
        rank: task.rank,
        title: task.title,
        completedAt: task.completedAt,
        index,
        // TODO: add calendarId and scheduleId.
      },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
      canDrag: () => !(editingRef.current || loadingRef.current || task.parentId != null),
    }),
    [task, index]
  );

  const [, dropRef] = useDrop(
    () => ({
      accept: ["task"],
      canDrop: (draggedTask: DraggedTask) =>
        // prevent moving between complete/incomplete
        !loadingRef.current && !(draggedTask.completedAt ? !task.completedAt : task.completedAt),
      drop: (draggedTask: DraggedTask) => {
        onDrop?.(draggedTask.index);
      },
      hover(draggedItem, monitor: DropTargetMonitor) {
        if (draggedItem.type !== "task") return;
        const draggedTask = draggedItem as DraggedTask;
        if (!dndRef.current || !move || !monitor.canDrop()) {
          return;
        }
        const dragIndex = draggedTask.index;
        const hoverIndex = index;

        // Don't replace items with themselves.
        if (dragIndex === hoverIndex) return;

        // Determine rectangle on screen
        const hoverBoundingRect = dndRef.current?.getBoundingClientRect();

        // Get vertical middle
        const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

        // Determine mouse position
        const clientOffset = monitor.getClientOffset();

        // Get pixels to the top
        const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;

        // Only perform the move when the mouse has crossed half of the items height.
        // When dragging downwards, only move when the cursor is below 50%.
        // When dragging upwards, only move when the cursor is above 50%.

        // Dragging downwards
        if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) return;

        // Dragging upwards
        if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) return;

        // Time to actually perform the action.
        const updatedTaskFields = move(draggedTask, task);

        if (updatedTaskFields != null) {
          // Note: we're mutating the monitor item here!
          // Generally it's better to avoid mutations,
          // but it's good here for the sake of performance
          // to avoid expensive index searches.
          Object.assign(draggedTask, updatedTaskFields);
          draggedTask.index = index;
        }
      },
    }),
    [move, task, index]
  );

  dragRef(dropRef(dndRef));

  return useMemo(() => {
    return (
      <TaskRowContent
        {...props}
        dndRef={dndRef}
        isDragging={isDragging}
        onLoading={(isLoading) => {
          loadingRef.current = isLoading;
        }}
        onEditing={(isEditing) => {
          editingRef.current = isEditing;
        }}
      />
    );
  }, [props, isDragging, dndRef, editingRef, loadingRef]);
};

export default TaskRow;

function getDateTextElement(date: Date | null) {
  if (!date) return null;
  const today = new Date();
  const dateString = date
    ? isSameDay(date, today)
      ? "Today"
      : isSameYear(date, today)
      ? format(date, "M/d")
      : date.toLocaleDateString()
    : "";
  const timeString = date?.getTime() ? format(date, "h:mm a") : "";
  return dateString ? (
    <span>
      {dateString}
      {!!timeString && (
        <>
          {", "}
          <Typography component="small" variant="inherit" sx={{ display: "inline-block" }}>
            {timeString}
          </Typography>
        </>
      )}
    </span>
  ) : null;
}
