import { Stage } from "./Stage";

import classes from "./Board.module.css";

interface Props {
  stages: string[];
}

export function Board({ stages }: Props) {
  return (
    <div className={classes.board}>
      <div className={classes.boardHeader}>
        <h2>Board</h2>
      </div>
      <div className={classes.stagesWrap}>
        {stages.map((stage) => (
          <div key={stage} className={classes.stageColumn}>
            <div className={classes.header}>
              <header>{stage}</header>
            </div>
            <Stage key={stage} name={stage} />
          </div>
        ))}
      </div>
    </div>
  );
}
