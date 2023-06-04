import { Stage } from "./Stage";


interface Props {
  stages: string[];
}

export function Board({ stages }: Props) {
  return (
    <div className=''>
      <div className=''>
        <h2>Board</h2>
      </div>
      <div className=''>
        {stages.map((stage) => (
          <div key={stage} className=''>
            <div className=''>
              <header>{stage}</header>
            </div>
            <Stage key={stage} name={stage} />
          </div>
        ))}
      </div>
    </div>
  );
}
