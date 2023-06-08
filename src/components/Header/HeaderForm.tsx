import { useState } from "react";
import { useAddNewTask } from "../../store/Tasks/useAddNewTask";
import { Button } from "../../Layout/Button";

export function HeaderForm() {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");


  const addNewTask = useAddNewTask();

  const onAddNewTask = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (taskTitle.trim() === "") {
      return;
    }
    addNewTask({
      id: Date.now().toString(),
      title: taskTitle,
      description: taskDescription,
      stage: "TO DO",
    });
    setTaskTitle("");
    setTaskDescription("");
  };

  return (
    <div className="header-form__wrapper">
      <h3>Add a new task</h3>
      <form>
        <input
          className="header-form__input"
          type="text"
          placeholder="Task Name"
          onChange={(e) => setTaskTitle(e.target.value)}
          value={taskTitle}
        />
        <input
          className="header-form__input"
          type="text"
          placeholder="Task Description"
          onChange={(e) => setTaskDescription(e.target.value)}
          value={taskDescription}
        />
        <Button type="submit" size="medium" color="secondary" onClick={onAddNewTask}>
          Add
        </Button>
      </form>
    </div>
  );
}
