import { SET_TODO_LIST } from "../Constant";
import Store from "../Store";

function filterTodoList(data) {
  const result = [];

  data.forEach((element) => {
    if (result[element.status]) {
      result[element.status].list.push(element);
    } else {
      result[element.status] = {
        name: Number(element.status) === 0 ? "Open" : "Completed",
        list: [element],
      };
    }
  });

  return result;
}

export function setTodoList(data) {
  const result = filterTodoList(data);
  return {
    type: SET_TODO_LIST,
    payload: result,
  };
}

export function editTodo(actionType, data) {
  const todoListState = Store.getState().todoListReducer?.todoList;
  let todoList = [];

  todoListState.forEach((el) => {
    el?.list?.forEach((todo) => {
      todoList.push(todo);
    });
  });

  if (actionType === "DELETE") {
    todoList = todoList.filter((el) => {
      return Number(el.id) !== Number(data.id);
    });
  } else if (actionType === "UPDATE") {
    const indexOfTodo = todoList.findIndex((el) => {
      return el.id === data.id;
    });
    todoList[indexOfTodo] = data;
  } else if (actionType === "CREATE") {
    data.id = todoList[todoList.length - 1].id + 1;
    todoList.push(data);
  }

  const result = filterTodoList(todoList);

  return {
    type: SET_TODO_LIST,
    payload: result,
  };
}
