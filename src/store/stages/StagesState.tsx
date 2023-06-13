import { useMemo, useReducer } from "react"
import { StagesContext } from "./StagesContext"
import React from "react";
import { StagesReducer } from "./StagesReducer";

interface StagesStateProps {
    children: React.ReactNode
}

const defaultStages = ["TO DO", "IN PROGRESS", "IN REVIEW", "DONE"];

export const StagesState = ({children}: StagesStateProps) => {
    const [stages, dispatch] = useReducer(StagesReducer, defaultStages);
    const stagesState = useMemo(() => ({stages, dispatch}), [stages])
    
    return <StagesContext.Provider value={stagesState}>{children}</StagesContext.Provider> 
}