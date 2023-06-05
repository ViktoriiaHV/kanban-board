import { Stage } from "./Stage";

interface Props {
  stages: string[];
}

export function Board({ stages }: Props) {
  return (
    <div className="board">
      <div className="board__columns">
        {stages.map((stage) => (
          <div key={stage} className="board__stages">
              <h3>{stage}</h3>
            <Stage key={stage} name={stage} />
          </div>
        ))}
      </div>
    </div>
  );
}
