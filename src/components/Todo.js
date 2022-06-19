import React, { useState } from "react";
import { TodoForm } from "./TodoForm";
import { AiFillCloseCircle, AiFillEdit } from "react-icons/ai";

export const Todo = (props) => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    props.updateTodo(edit.id, value);
    console.log(props.todos);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return props.todos.map((todo, index) => (
    <div
      className={todo.isCompleted ? "todorow completed" : "todorow"}
      key={index}
    >
      <div key={todo.id} onClick={() => props.completeTodo(todo.id)}>
        {todo.text}
      </div>

      <div className="icons">
        <AiFillCloseCircle
          onClick={() => {
            props.removeTodo(todo.id);
          }}
          className="deleteicon"
        />
        <AiFillEdit
          onClick={() => {
            setEdit({ id: todo.id, value: todo.text });
          }}
          className="editicon"
        />
      </div>
      
    </div>
  ));
};
