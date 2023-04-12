import { useCallback, useState } from "react";
import { Task as TaskModel } from "../store/Tasks/Task";
import { useRemoveTask } from "../store/Tasks/useRemoveTask";
import { useUpdateTaskStage } from "../store/Tasks/useUpdateTaskStage";
import { ReactComponent as DeleteIcon } from "../icons/icons8-delete.svg";
import classes from "./Task.module.css";

interface TaskProps {
  task: TaskModel;
}

export function Task({ task }: TaskProps) {
  const removeTask = useRemoveTask();
  const updateStage = useUpdateTaskStage();

  const [isDragged, setIsDragged] = useState(false);

  const isDraggedStyle = isDragged ? classes.dragged : "";

  const onDeleteTask = useCallback(() => {
    removeTask(task.id);
  }, [task.id, removeTask]);

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

  const onStageChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const stage = e.target.value;
    updateStage(task.id, stage);
  };

  const isDoneStyle = task.stage === 'DONE' ? classes.striked : '';

  return (
    <div
      draggable
      className={`${classes.task} ${isDraggedStyle}`}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <div>
        <div className={`${classes.title} ${isDoneStyle}`}>{task.title}</div>
        <div className={classes.description}>{task.description}</div>
      </div>
      {
        <div className={classes.stages}>
          <label>Stage</label>
          <select onChange={onStageChangeHandler} value={task.stage}>
            <option value="TO DO">TO DO</option>
            <option value="IN PROGRESS">IN PROGRESS</option>
            <option value="IN REVIEW">IN REVIEW</option>
            <option value="DONE">DONE</option>
          </select>
        </div>
      }
      <div className={classes.buttons}>
        <DeleteIcon onClick={onDeleteTask} />
      </div>
    </div>
  );
}
