import { useCallback, useContext } from "react";
import { TasksContext } from "./TasksContext";

export function useUpdateTaskStage() {
    const { dispatch } = useContext(TasksContext);
    return useCallback((taskId: string, stage: string) => {
        dispatch({type: "UPDATE_STAGE", payload: {taskId, stage}})
    }, [dispatch])
}
