import React from "react";
import { Task } from "./Task";
import { TaskAction } from "./TaskAction";

export const TasksContext = React.createContext<{
  tasks: Task[];
  dispatch: React.Dispatch<TaskAction>;
}>({ tasks: [], dispatch: () => void 0 });
