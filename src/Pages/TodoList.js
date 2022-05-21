import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editTodo, setTodoList } from "../Store/TodoList/TodoListAction";
import Form from "./Components/Form";
import FloatingPlus from "../Shared/Components/FloatingPlus";
import Button from "../Shared/Components/Button";
import List from "../Shared/Components/List";
import Modal from "../Shared/Components/Modal";

export default function TodoList() {
  const disptach = useDispatch();

  const [modalActionType, setModalActionType] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState({});

  const { todoList } = useSelector((state) => {
    return state.todoListReducer;
  });

  const buttonModalAction = [
    {
      title: "Update",
      onClick: () => {
        setShowModal(false);
        disptach(editTodo("UPDATE", selectedTodo));
      },
      show: modalActionType === "detail" && true,
    },
    {
      title: "Delete",
      onClick: () => {
        setShowModal(false);
        disptach(editTodo("DELETE", selectedTodo));
      },
      show: modalActionType === "detail" && !selectedTodo.status && true,
      danger: true,
    },
    {
      title: "Create",
      onClick: () => {
        setShowModal(false);
        selectedTodo.createdAt = new Date();
        selectedTodo.status = 0;
        disptach(editTodo("CREATE", selectedTodo));
      },
      show: modalActionType === "create" && true,
    },
  ];

  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    fetch("https://virtserver.swaggerhub.com/hanabyan/todo/1.0.0/to-do-list")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        disptach(setTodoList(response));
      })
      .catch((err) => {
        console.log(err, "<<< err");
      });
  };

  return (
    <>
      <div className="p-4">
        <h1>Todo List</h1>
        <FloatingPlus
          onClick={() => {
            setShowModal(true);
            setSelectedTodo({});
            setModalActionType("create");
          }}
        />
        {showModal && (
          <Modal
            onClickAway={() => {
              setShowModal(false);
            }}
          >
            <Form selectedTodo={selectedTodo} actionType={modalActionType} />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-end",
                width: "100%",
              }}
            >
              {buttonModalAction.map((el, i) => {
                return (
                  el.show && (
                    <Button key={i} onClick={el.onClick} {...el}>
                      {el.title}
                    </Button>
                  )
                );
              })}
            </div>
          </Modal>
        )}
        {todoList &&
          todoList.map((element, i) => {
            return (
              <div key={i} style={{ padding: "2em 0em" }}>
                <h3>{element.name}</h3>
                <div>
                  {element.list.map((todo, j) => {
                    return (
                      <List
                        key={j}
                        onClick={() => {
                          setShowModal(true);
                          setSelectedTodo(todo);
                          setModalActionType("detail");
                        }}
                      >
                        {todo.title}
                      </List>
                    );
                  })}
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}
