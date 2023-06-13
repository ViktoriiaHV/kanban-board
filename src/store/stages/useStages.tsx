import { useContext } from "react"
import { StagesContext } from "./StagesContext"

export const useStages = (): string[] => {
    const { stages } = useContext(StagesContext);

    return stages
}