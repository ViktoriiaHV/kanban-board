import { useContext } from "react"
import { Task } from "./Task";
import { TasksContext } from "./TasksContext"

export function useTasks(): Task[] {
    const {tasks} = useContext(TasksContext);

    return tasks;
}