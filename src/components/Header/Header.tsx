import { useContext } from "react";
import { Button } from "../../Layout/Button";
import boardIcon from "../../icons/pending-tasks.png";
import { ModalContext } from "../../store/Tasks/modal/ModalContext";
import { HeaderForm } from "./HeaderForm";

export function Header() {
  const {setIsOpen, setContent} = useContext(ModalContext);

  const onAddNewTask = () => {
    setIsOpen(true);
    setContent(<HeaderForm />)
  }


  return (
    <div className="header">
      <div className="header__logo">
        <img src={boardIcon} alt="board_icon" className="header__icon"/>
        <h1>Kanban Board</h1>
      </div>
      <Button size="medium" onClick={onAddNewTask}>Add New Task</Button>
    </div>
  );
}
