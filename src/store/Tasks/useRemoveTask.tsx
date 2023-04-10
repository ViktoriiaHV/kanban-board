import { useCallback, useContext } from "react";
import { TasksContext } from "./TasksContext";

export function useRemoveTask() {
    const { dispatch } = useContext(TasksContext);
    return useCallback((taskId: string) => {
        dispatch({type: "REMOVE_TASK", payload: taskId})
    }, [dispatch])
}
