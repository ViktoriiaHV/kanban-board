import { useMemo, useReducer } from "react";
import { Task } from "./Task";
import { tasksReducer } from "./TaskReducer";
import { TasksContext } from "./TasksContext";

interface TasksStateProps {
    children: React.ReactNode    
}

const DUMMY_TASKS = [
    {
      id: '1',
      title: "Test1",
      description: "Test description",
      stage: "TO DO"
    },
    {
      id: '2',
      title: "Test2",
      description: "Test description",
      stage: "TO DO"
    },
    {
      id: '3',
      title: "Test3",
      description: "Test description",
      stage: "TO DO"
    },
    {
      id: '5',
      title: "Test5",
      description: "Test description 5",
      stage: "TO DO"
    },
    {
      id: '6',
      title: "Test5",
      description: "Test description 5",
      stage: "TO DO"
    },
    {
      id: '7',
      title: "Test5",
      description: "Test description 5",
      stage: "TO DO"
    },
    {
      id: '8',
      title: "Test5",
      description: "Test description 5",
      stage: "TO DO"
    },
    {
      id: '4',
      title: "Test4",
      description: "Test description",
      stage: "IN PROGRESS"
    },
  ]

export function TasksState({children}: TasksStateProps) {
    const [tasks, dispatch] = useReducer(tasksReducer, DUMMY_TASKS);
    const state = useMemo(() => ({tasks, dispatch}), [tasks])
    
    return <TasksContext.Provider value={state}>{children}</TasksContext.Provider>
}