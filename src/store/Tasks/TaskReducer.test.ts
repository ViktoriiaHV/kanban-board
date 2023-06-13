import { tasksReducer } from "./TaskReducer";
import { createTask } from "./__tests__/tasks.fixtures";

describe("TaskReducer", () => {
  it("should add new item", () => {
    //given
    const state = [createTask({ id: "1" }), createTask({ id: "2" })];
    const newTask = createTask({ id: "3" });
    //when
    const result = tasksReducer(state, { type: "ADD_TASK", payload: newTask });
    //then
    expect(result).toEqual([...state, newTask]);
  });

  it("should remove existing item", () => {
    //given
    const state = [createTask({ id: "1" }), createTask({ id: "2" })];
    //when
    const result = tasksReducer(state, { type: "REMOVE_TASK", payload: '1' });
    //then
    expect(result).toEqual([state[1]]);
  });

  it("should return state if element doesn't exist", () => {
    //given
    const state = [createTask({ id: "1" }), createTask({ id: "2" })];
    //when
    const result = tasksReducer(state, { type: "REMOVE_TASK", payload: '3' });
    //then
    expect(result).toEqual(state);
  });

  it("should return state if unknown type", () => {
    //given
    const state = [createTask({ id: "1" }), createTask({ id: "2" })];
    //when
    const result = tasksReducer(state, { type: "UNKNOWN_ACTION", payload: '3' } as any);
    //then
    expect(result).toEqual(state);
  });
});
