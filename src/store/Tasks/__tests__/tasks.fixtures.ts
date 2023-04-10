import { Task } from "../Task";

export function createTask({
  id = "12345",
  title = "TaskTitle",
  description = "Task Description",
  stage = "TO_DO",
}: Partial<Task> = {}): Task {
  return {
    id,
    title,
    description,
    stage,
  };
}
