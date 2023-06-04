import { Board } from "./components/Board";
import { Layout } from "./Layout/Layout";
import { TasksState } from "./store/Tasks/TasksState";

function App() {
  const stages = ["TO DO", "IN PROGRESS", "IN REVIEW", "DONE"];

  return (
    <div className="App">
      <TasksState>
        <Layout>
          <Board stages={stages} />
        </Layout>
      </TasksState>
    </div>
  );
}

export default App;
