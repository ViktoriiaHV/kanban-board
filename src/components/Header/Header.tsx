import { useContext } from "react";
import { Button } from "../../layout/Button";
import boardIcon from "../../icons/pending-tasks.png";
import { ModalContext } from "../../store/modal/ModalContext";
import { AddTaskForm } from "../AddTaskForm";
import { NewStageForm } from "../NewStageForm";

export function Header() {
  const { setIsOpen, setContent } = useContext(ModalContext);

  const onAddNewTask = () => {
    setIsOpen(true);
    setContent(<AddTaskForm />);
  };

  const onAddNewStage = () => {
    setIsOpen(true);
    setContent(<NewStageForm />);
  };

  return (
    <div className="header">
      <div className="header__logo">
        <img src={boardIcon} alt="board_icon" className="header__icon" />
        <h1>Kanban Board</h1>
      </div>
      <div className="header__action-buttons">
        <Button size="medium" onClick={onAddNewStage}>
          Add New Stage
        </Button>
        <Button size="medium" onClick={onAddNewTask}>
          Add New Task
        </Button>
      </div>
    </div>
  );
}
