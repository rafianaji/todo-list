import { SET_TODO_LIST } from "../Constant";

const todoListState = {
  todoList: [],
};

export default function todoListReducer(state = todoListState, action) {
  switch (action.type) {
    case SET_TODO_LIST:
      return {
        ...state,
        todoList: action.payload,
      };
    default:
      return state;
  }
}
