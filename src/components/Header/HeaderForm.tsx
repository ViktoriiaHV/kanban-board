import { useState } from "react";
import { useAddNewTask } from "../../store/Tasks/useAddNewTask";
import { Button } from "../../Layout/Button";


export function HeaderForm() {
  const [taskTitle, setTaskTitle] = useState("");
  const addNewTask = useAddNewTask();

  const onInputNewTask = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskTitle(e.target.value);
  };

  const onAddNewTask = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (taskTitle.trim() === "") {
      return;
    }
    addNewTask({
      id: Date.now().toString(),
      title: taskTitle,
      stage: "TO DO",
    });
    setTaskTitle("");
  };

  return (
    <form>
      <input
        className='header-form__input'
        type="text"
        placeholder="Add a new task"
        onChange={onInputNewTask}
        value={taskTitle}
      />
      <Button type="submit" onClick={onAddNewTask}>
        Add
      </Button>
    </form>
  );
}
