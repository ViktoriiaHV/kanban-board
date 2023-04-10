import { useMemo } from "react";
import { Task } from "./Task";
import { useTasks } from "./useTasks";

export function useStageTasks(stageName: string): Task[] {
  const tasks = useTasks();

  return useMemo(
    () => tasks.filter((task) => task.stage === stageName),
    [stageName, tasks]
  );
}
