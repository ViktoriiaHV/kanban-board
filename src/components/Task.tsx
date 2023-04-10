import { useCallback, useState } from "react";
import { Task as TaskModel } from "../store/Tasks/Task";
import { useRemoveTask } from "../store/Tasks/useRemoveTask";
import classes from "./Task.module.css";

interface TaskProps {
  task: TaskModel;
}

export function Task({ task }: TaskProps) {
  const removeTask = useRemoveTask();

  const [isDragged, setIsDragged] = useState(false);

  const isDraggedStyle = isDragged ? classes.dragged : "";

  const onTaskClick = useCallback(() => {
    removeTask(task.id);
  }, [removeTask, task.id]);

  const handleDragStart = useCallback(
    (event: React.DragEvent<Element>) => {
      setIsDragged(true);
      event.dataTransfer.setData("task", task.id);
    },
    [task.id]
  );

  const handleDragEnd = useCallback((event: React.DragEvent<Element>) => {
    setIsDragged(false);
    event.dataTransfer.clearData();
  }, []);

  return (
    <div
      draggable
      className={`${classes.task} ${isDraggedStyle}`}
      onClick={onTaskClick}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      {task.title}
    </div>
  );
}
