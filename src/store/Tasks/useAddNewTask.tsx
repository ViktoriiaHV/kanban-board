import { useCallback, useContext } from "react";
import { Task } from "./Task";
import { TasksContext } from "./TasksContext";

export function useAddNewTask() {
  const { dispatch } = useContext(TasksContext);
  return useCallback(
    (task: Task) => {
      dispatch({ type: "ADD_TASK", payload: task });
    },
    [dispatch]
  );
}
