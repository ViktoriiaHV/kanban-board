import React from "react";
import { Board } from "./components/Board";
import { Layout } from "./layout/Layout";
import { Modal } from "./layout/Modal";
import { ModalState } from "./store/Tasks/modal/ModalState";
import { TasksState } from "./store/Tasks/TasksState";

function App() {
  const stages = ["TO DO", "IN PROGRESS", "IN REVIEW", "DONE"];
  return (
    <div className="App">
      <ModalState>
        <TasksState>
          <Modal />
          <Layout>
            <Board stages={stages} />
          </Layout>
        </TasksState>
      </ModalState>
    </div>
  );
}

export default App;
