import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';


export const TodoForm = (props) => {
  const [input, SetInput] = useState(props.edit ? props.edit.value : '');

  const contentHandler = (event) => {
    SetInput(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    props.onSubmit({
        id: uuidv4(),
        text: input
    })
    SetInput("");
    
  };

  return (
    <form className="todoform" onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Write a task"
        value={input}
        name="text"
        className="todoinput"
        onChange={contentHandler}
      />
      <button className="todobtn">Add</button>
    </form>
  );
};
