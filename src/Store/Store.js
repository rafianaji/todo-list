// import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import todoListReducer from "./TodoList/TodoListReducer";

const middlewares = applyMiddleware(thunk);

const reducer = combineReducers({
  todoListReducer,
});

const Store = createStore(reducer, middlewares);

export default Store;
