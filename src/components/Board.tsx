import { useStages } from "../store/stages/useStages";
import { Stage } from "./Stage";
import { StageHeading } from "./StageHeading";

export function Board() {
  const stages = useStages();
  
  return (
    <div className="board">
      <div className="board__columns">
        {stages.map((stage) => (
          <div key={stage} className="board__stages" draggable>
            <StageHeading name={stage} />
            <Stage key={stage} name={stage} />
          </div>
        ))}
      </div>
    </div>
  );
}
