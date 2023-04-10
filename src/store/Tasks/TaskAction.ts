import { Task } from "./Task";

type TaskActionTypes = "ADD_TASK" | "REMOVE_TASK" | "UPDATE_STAGE"

type Action<T extends TaskActionTypes, P> = {
  readonly type: T;
  readonly payload: P;
};

export type TaskAction =
  | Action<"ADD_TASK", Task>
  | Action<"REMOVE_TASK", string>
  | Action<"UPDATE_STAGE", {taskId: string, stage: string}>;

