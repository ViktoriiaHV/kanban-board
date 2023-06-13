import { Board } from "./components/Board";
import { Layout } from "./layout/Layout";
import { Modal } from "./layout/Modal";
import { ModalState } from "./store/modal/ModalState";
import { TasksState } from "./store/Tasks/TasksState";
import { StagesState } from "./store/stages/StagesState";

function App() {
  return (
    <div className="App">
      <ModalState>
        <StagesState>
          <TasksState>
            <Modal />
            <Layout>
              <Board />
            </Layout>
          </TasksState>
        </StagesState>
      </ModalState>
    </div>
  );
}

export default App;
