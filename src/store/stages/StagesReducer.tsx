import { StagesAction } from "./StagesAction"

export const StagesReducer = (state: string[], action: StagesAction): string[] => {
    const isExisting = state.includes(action.payload);
    switch (action.type){
        case 'ADD_STAGE': return isExisting ? state : state.concat(action.payload)
        case 'REMOVE_STAGE': return isExisting ? 
        state.filter(stage => stage === action.payload)
        : state
        default: return state
    }
}