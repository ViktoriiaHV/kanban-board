import { Task } from "./Task";

import classes from "./Stage.module.css";
import { useStageTasks } from "../store/Tasks/useStageTasks";
import { useCallback, useEffect, useState } from "react";
import { useUpdateTaskStage } from "../store/Tasks/useUpdateTaskStage";

interface StageProps {
  name: string;
}

export function Stage({ name }: StageProps) {
  const tasks = useStageTasks(name);
  const updateStage = useUpdateTaskStage();
  const [isHoveredOver, setIsHoveredOver] = useState(false);

  const isHoveredStyle = isHoveredOver ? classes.onHoveredOver : "";

  const onDragLeave = useCallback((e: React.DragEvent<Element>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsHoveredOver(false);
  }, []);

  const onDragOver = useCallback((e: React.DragEvent<Element>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsHoveredOver(true);
  }, []);

  const onDrop = useCallback(
    (e: React.DragEvent<Element>) => {
      setIsHoveredOver(false);
      const taskId = e.dataTransfer.getData("task");
      updateStage(taskId, name);
    },
    [name, updateStage]
  );

  return (
    <div
      className={`${classes.stage} ${isHoveredStyle}`}
      onDragLeave={onDragLeave}
      onDragOver={onDragOver}
      onDrop={onDrop}
    >
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
}
