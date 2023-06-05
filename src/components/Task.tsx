import { useCallback, useState } from "react";
import { Task as TaskModel } from "../store/Tasks/Task";
import { useRemoveTask } from "../store/Tasks/useRemoveTask";
import { useUpdateTaskStage } from "../store/Tasks/useUpdateTaskStage";
import { ReactComponent as DeleteIcon } from "../icons/icons8-delete.svg";

interface TaskProps {
  task: TaskModel;
}

export function Task({ task }: TaskProps) {
  const removeTask = useRemoveTask();
  const updateStage = useUpdateTaskStage();

  const [isDragged, setIsDragged] = useState(false);

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

  return (
    <div
      draggable
      className={`stage-task ${isDragged ? "stage-task--dragged" : ""}`}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <h4
        className={`stage-task__title ${
          task.stage === "DONE" ? "stage-task__title--striked" : ""
        }`}
      >
        {task.title}
      </h4>
      <span>
        <label className="stage-task__label">Stage</label>
        <select onChange={onStageChangeHandler} value={task.stage}>
          <option value="TO DO">TO DO</option>
          <option value="IN PROGRESS">IN PROGRESS</option>
          <option value="IN REVIEW">IN REVIEW</option>
          <option value="DONE">DONE</option>
        </select>
      </span>
      <div className="stage-task__action-buttons">
        <DeleteIcon onClick={onDeleteTask} />
      </div>
    </div>
  );
}
