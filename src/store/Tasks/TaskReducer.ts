import { Task } from "./Task";
import { TaskAction } from "./TaskAction";

export const tasksReducer = (state: Task[], action: TaskAction): Task[] => {
  switch (action.type) {
    case "ADD_TASK": {
      return state.concat(action.payload);
    }
    case "REMOVE_TASK": {
      return state.filter((task) => task.id !== action.payload);
    }
    case "UPDATE_STAGE": {
      return state.map((task) => {
        if (task.id === action.payload.taskId) {
          return { ...task, stage: action.payload.stage };
        }

        return task;
      });
    }
    default:
      return state;
  }
};
