import { useCallback, useContext } from "react"
import { StagesContext } from "./StagesContext"

export const useAddNewStage = () => {
    const { dispatch } = useContext(StagesContext)
    return useCallback((stage: string) => {
        dispatch({type: 'ADD_STAGE', payload: stage})
    }, [dispatch])
}